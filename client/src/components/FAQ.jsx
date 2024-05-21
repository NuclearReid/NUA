export default function FAQ() {
    return (
        <div className="accordion accordion-flush" id="accordionFlushExample">
            {/* 1 */}
            <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            What information do you ask for when someone calls?
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            When you call, you will be asked for your first name (can be a fake name is you prefer. We just want to know what to call you while we're talking to you), phone number, EXACT location, county you are in, and what substance you're using.
                        </div>
                    </div>
            </div>
            {/* 2 */}
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        How does this work?
                    </button>
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                        When you call, we ask for the information above. After we’ve received the info, you can go ahead and use the substance. We then stay on the phone with you while you use your substance. We ask you to let us know when you’re done, so that we can start watching the clock. We will then continue talking with you for a few minutes (usually about 10 min minimum) to be sure you’re going to be okay. If you stop responding for more than 30 – 45 seconds, we then contact EMS.
                    </div>
                </div>
            </div>
            {/* 3 */}
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        Can you guarantee my safety?
                    </button>
                </h2>
                <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                        No, unfortunately, we cannot. We will do everything we can to get you help as quickly as possible , but we cannot guarantee that that help will get to you in time. This is still a very dangerous situation.
                    </div>
                </div>
            </div>
            {/* 4 */}
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                        Is my personal information shared with anyone?
                    </button>
                </h2>
                <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                        No, we never share your information with anyone other than EMS if we have to call 911. We DO NOT store any of your information.
                    </div>
                </div> 
            </div>
            {/* 5 */}
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                        How can you guarantee that the police will not respond, and I end up in trouble?
                    </button>
                </h2>
                <div id="flush-collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                        All operators are harm reductionists. <b>Our goal is to reduce harm, not increase it, by getting you arrested.</b> Our hope is that only EMS responds, but the truth is, we cannot guarantee that. To reduce the chances of the police showing up with EMS, when we call EMS, we report it as an “unresponsive person”, rather than an “overdose”. When you call 911 and report an “overdose”, a lot of times, police will automatically respond to those calls. So, by reporting it as an “unresponsive person” it reduces the chances of police responding.
                    </div>
                </div>
            </div>
            {/* 6 */}
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                        If you have to contact EMS, how do you do that?
                    </button>
                </h2>
                <div id="flush-collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                        When we get a call, we ask for the info listed above. After we’ve got that info, we start googling the EMS number in your area, so that we have that ready just in case. If we do have to call EMS, we tell them that the person called our “crisis line”, and then became “unresponsive”. EMS is, often times, faster to respond to an “unresponsive person” than they are an “overdose”.

                    </div>
                </div>
            </div>
            {/* 7 */}
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                        Is this a peer run service?
                    </button>
                </h2>
                {/* make sure to make 'our volunteers' to be a <Link> to the volunteer page... make a volunteer page */}
                <div id="flush-collapseSeven" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                        Yes, all of our volunteers are people who have personal experience with substance use disorder. They are either people who use/used drugs, or parents of a child that lost their battle with addiction. We’ve all been where you are.
                    </div>
                </div>
            </div>
            {/* 8 */}
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEight" aria-expanded="false" aria-controls="flush-collapseEight">
                        Is this a marketing tool for a rehab?
                    </button>
                </h2>
                <div id="flush-collapseEight" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                        No, we DO NOT accept volunteers who are employed by any treatment facility. We will not allow our service to become a fishing lure for any treatment center.
                    </div>
                </div>
            </div>
            {/* 9 */}
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseNine" aria-expanded="false" aria-controls="flush-collapseNine">
                        Will you try to push me into going to rehab?
                    </button>
                </h2>
                {/* add the <Link> into here too! */}
                <div id="flush-collapseNine" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                        No. We realize that you will only quit when you’re ready, not when we’re ready. We will <b>NEVER</b> try to push you to seek treatment. If you are interested in seeking help though, we have a list of free/low cost, and state funded programs / facilities throughout the country. We will help you find whatever type of treatment you think you need, if/when you’re ready. If you would like to see our treatment resources file, you can download the entire zip file by clicking here. If you want assistance in locating a harm reduction program in your state, to help reduce the dangers of drug use, we’ll assist you with that as well. If we aren’t aware of any HR programs in your state, we usually refer callers to the Free Narcan and Harm Reduction Services page on FaceBook. They have a list of harm reduction organizations throughout the US.
                    </div>
                </div>
            </div>
            {/* 10 */}
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTen" aria-expanded="false" aria-controls="flush-collapseTen">
                        Is this available 24/7?
                    </button>
                </h2>
                <div id="flush-collapseTen" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                        While we do not have any set hours, we cannot guarantee that operators will be available in the middle of the night. We’ve brought on a few operators that take the night shift, to try and be available 24/7.
                    </div>
                </div>
            </div>
            {/* 11 */}
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEleven" aria-expanded="false" aria-controls="flush-collapseEleven">
                        Are you affiliated with any law enforcement agencies?
                    </button>
                </h2>
                <div id="flush-collapseEleven" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                        No, we are not affiliated with any LEA in any way. We are all harm reductionists. Our goal is to reduce harm, not induce harm, by getting you hemmed up with new charges!
                    </div>
                </div>
            </div>
            {/* 12 */}
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwelve" aria-expanded="false" aria-controls="flush-collapseTwelve">
                        Do you have any business cards, or flyers that we can hand out?
                    </button>
                </h2>
                {/* add a <Link> here */}
                <div id="flush-collapseTwelve" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                        Yes, we have a business card sized graphic, and a flyer. If you go to our resources page, you’ll find a file that will print 8 cards on one sheet of paper, as well as a flyer. If you have any trouble with them, let us know.
                    </div>
                </div>
            </div>
            {/* 13 */}
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThirteen" aria-expanded="false" aria-controls="flush-collapseThirteen">
                        How can I volunteer to be an operator?
                    </button>
                </h2>
                {/* add a <Link> here for the volunteer form */}
                <div id="flush-collapseThirteen" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                        If you’d like to volunteer to answer calls, please fill out our volunteer application form. When/if we’re in need of new volunteers, we go through those applications, and contact people that we think might be a good fit for our service.
                    </div>
                </div>
            </div>
            {/* 14 */}
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFourteen" aria-expanded="false" aria-controls="flush-collapseFourteen">
                        I would like to interview someone from NUA, or have a presentation done. Who do I contact for that?
                    </button>
                </h2>
                {/* add some <Link> here too */}
                <div id="flush-collapseFourteen" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                        If you’d like to have someone from NUA do a presentation, speak at an event, do a virtual interview, or you'd just like more info about our service, contact our President, and Founder of NUA, Mike Brown. You can contact Mike at Mike@neverusealone.com to schedule an appointment. We're always happy to do any type of interview to help spread the word about our service.
                    </div>
                </div>
            </div>
            {/* 15 */}
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFifteen" aria-expanded="false" aria-controls="flush-collapseFifteen">
                        How & When did NUA start?
                    </button>
                </h2>
                <div id="flush-collapseFifteen" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                        In August of 2019, someone posted in a private FB group that I help run. They said that they're friend had died the night before, and they offered their number, with instructions to call him if anyone were going to use when they were alone. It got me wondering, what it would take to do that on a large scale. NUA was born that day. A week later, NUA was up and running!
                    </div>
                </div>
            </div>
        </div>
    )
}