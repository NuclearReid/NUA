const { User, Complaint } = require('../models');
const {signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async () => {
            return User.find();
        },
        me: async (parent, args, context) => {
            if (context.user) {
                const foundUser = await User.findOne({
                    _id: context.user._id,
                }); 
                return foundUser
            }
            throw AuthenticationError;
        },
        admin: async () => {
            return User.findOne({email:'Admin'});
        },
        complaints: async () => {
            return Complaint.find();
        }
    },
    
    Mutation: {
        addUser: async (parent, {email, password }) => {
            const user = await User.create({
                email,
                password,
            });
            const token = signToken(user);
            return {token, user}
        },
        
        login: async (parent, {email, password }) => {
            const user = await User.findOne({ email });

            if(!user) {
                throw AuthenticationError;
            }
            const correctPw = await user.isCorrectPassword(password);
            if(!correctPw){
                throw AuthenticationError;
            }
            const token = signToken(user);
            return {token, user};
        },

        setStats: async (parent, {callsRecieved, peopleServed, reversals}, context) => {         
            if (context.user) {
                // This is here to check if something is put in the stat input form and if there isn't anything, it won't update that stat as null
                const update = Object.fromEntries(
                    Object.entries({callsRecieved, peopleServed, reversals}).filter(([key, value]) => value !== null)
                );
                const updatedUser = await User.findByIdAndUpdate(
                    context.user._id,
                    {$set: update },
                    {new: true}
                );
                return updatedUser;
            }
            throw AuthenticationError;
        },

        addComplaint: async (parent, args) => {
            const complaint = await Complaint.create({ ...args });
            return(complaint);
        },

        deleteComplaint: async (parent, {_id} ) => {
            const complaint = await Complaint.findByIdAndDelete(_id);
            if(!complaint) {
                throw new Error("can't find a complaint with that id")
            }
            return (complaint);
        }
    }
}

module.exports = resolvers;