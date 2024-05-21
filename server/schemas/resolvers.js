const { User } = require('../models');
const {signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {

        users: async () => {
            return User.find()//.populate('foo');
        },

        me: async (parent, args, context) => {
            if (context.user) {
                const foundUser = await User.findOne({
                    _id: context.user._id,
                }); // if i have more models attached to the user
                //.populate({
                    //path: 'foo',
                // });
                return foundUser
            }
            throw AuthenticationError;
        }

    },
    Mutation: {
        addUser: async (parent, {email, password }) => {
            // const foo = await Foo.create({
            //     boo: '',
            // });
            const user = await User.create({
                email,
                password,
                // foo: foo._id,
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
        addStats: async (parent, {callsRecieved, peopleServed, reversals}, context) => {         
            if (context.user) {
                const updatedUser = await User.findByIdAndUpdate(
                    context.user._id,
                    {
                        $set: {
                            callsRecieved: callsRecieved,
                            peopleServed: peopleServed,
                            reversals: reversals,
                        }
                    },
                    {new: true}
                );
                return updatedUser;
            }
            throw AuthenticationError;
        },
    }
}

module.exports = resolvers;