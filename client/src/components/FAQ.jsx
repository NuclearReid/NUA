import FAQItem from './FAQItem';

export default function FAQ() {
    const faqs = [
        {
            question: 'What information do you ask for when someone calls?',
            answer: 'When you call, you will be asked for your first name (can be a fake name is you prefer. We just want to know what to call you while we\'re talking to you), phone number, EXACT location, county you are in, and what substance you\'re using.'
        },
        {
            question: 'How does this work?',
            answer: 'When you call, we ask for the information above. After we’ve received the info, you can go ahead and use the substance. We then stay on the phone with you while you use your substance. We ask you to let us know when you’re done, so that we can start watching the clock. We will then continue talking with you for a few minutes (usually about 10 min minimum) to be sure you’re going to be okay. If you stop responding for more than 30 – 45 seconds, we then contact EMS.'
        },
        {
            question: 'Can you guarantee my safety?',
            answer: 'No, unfortunately, we cannot. We will do everything we can to get you help as quickly as possible , but we cannot guarantee that that help will get to you in time. This is still a very dangerous situation.'
        },
        {
            question: 'Is my personal information shared with anyone?',
            answer: 'No, we never share your information with anyone other than EMS if we have to call 911. We DO NOT store any of your information.'
        },
        {
            question: 'How can you guarantee that the police will not respond, and I end up in trouble?',
            answer: 'All operators are harm reductionists. <b>Our goal is to reduce harm, not increase it, by getting you arrested.</b> Our hope is that only EMS responds, but the truth is, we cannot guarantee that. To reduce the chances of the police showing up with EMS, when we call EMS, we report it as an “unresponsive person”, rather than an “overdose”. When you call 911 and report an “overdose”, a lot of times, police will automatically respond to those calls. So, by reporting it as an “unresponsive person” it reduces the chances of police responding.'
        },
        {
            question: 'If you have to contact EMS, how do you do that?',
            answer: 'When we get a call, we ask for the info listed above. After we’ve got that info, we start googling the EMS number in your area, so that we have that ready just in case. If we do have to call EMS, we tell them that the person called our “crisis line”, and then became “unresponsive”. EMS is, often times, faster to respond to an “unresponsive person” than they are an “overdose”.'
        },
        {
            question: 'Is this a peer run service?',
            answer: 'Yes, all of our volunteers are people who have personal experience with substance use disorder. They are either people who use/used drugs, or parents of a child that lost their battle with addiction. We’ve all been where you are.'
        },
        {
            question: 'Is this a marketing tool for a rehab?',
            answer: 'No, we DO NOT accept volunteers who are employed by any treatment facility. We will not allow our service to become a fishing lure for any treatment center.'
        },
        {
            question: 'Will you try to push me into going to rehab?',
            answer: ' No. We realize that you will only quit when you’re ready, not when we’re ready. We will <b>NEVER</b> try to push you to seek treatment. If you are interested in seeking help though, we have a list of free/low cost, and state funded programs / facilities throughout the country. We will help you find whatever type of treatment you think you need, if/when you’re ready. If you would like to see our treatment resources file, you can download the entire zip file by clicking here. If you want assistance in locating a harm reduction program in your state, to help reduce the dangers of drug use, we’ll assist you with that as well. If we aren’t aware of any HR programs in your state, we usually refer callers to the Free Narcan and Harm Reduction Services page on FaceBook. They have a list of harm reduction organizations throughout the US.'
        },
        {
            question: 'Is this available 24/7?',
            answer: 'While we do not have any set hours, we cannot guarantee that operators will be available in the middle of the night. We’ve brought on a few operators that take the night shift, to try and be available 24/7.'
        },
        {
            question: 'Are you affiliated with any law enforcement agencies?',
            answer: 'No, we are not affiliated with any LEA in any way. We are all harm reductionists. Our goal is to reduce harm, not induce harm, by getting you hemmed up with new charges!'
        },
        {
            question: 'Do you have any business cards, or flyers that we can hand out?',
            answer: 'Yes, we have a business card sized graphic, and a flyer. If you go to our resources page, you’ll find a file that will print 8 cards on one sheet of paper, as well as a flyer. If you have any trouble with them, let us know.'
        },
        {
            question: 'How can I volunteer to be an operator?',
            answer: 'If you’d like to volunteer to answer calls, please fill out our volunteer application form. When/if we’re in need of new volunteers, we go through those applications, and contact people that we think might be a good fit for our service.'
        },
        {
            question: `I would like to interview someone from NUA, or have a presentation done. Who do I contact for that?`,
            answer: `I would like to interview someone from NUA, or have a presentation done. Who do I contact for that?',
            answer: 'If you’d like to have someone from NUA do a presentation, speak at an event, do a virtual interview, or you'd just like more info about our service, contact our President, and Founder of NUA, Mike Brown. You can contact Mike at Mike@neverusealone.com to schedule an appointment. We're always happy to do any type of interview to help spread the word about our service.`
        },
        {
            question: 'How & When did NUA start?',
            answer: `In August of 2019, someone posted in a private FB group that I help run. They said that they're friend had died the night before, and they offered their number, with instructions to call him if anyone were going to use when they were alone. It got me wondering, what it would take to do that on a large scale. NUA was born that day. A week later, NUA was up and running!`
        }
    ]
    const numberOfRows = Math.ceil(faqs.length / 3);

    return (
        <>
            {Array.from({ length: numberOfRows }).map((_, rowIndex) => (
                <div className="row" key={rowIndex}>
                    {faqs.slice(rowIndex * 3, (rowIndex + 1) * 3).map((faq, index) => (
                        <div className='col-md-4 pb-3 accordion accordion-flush ' key={index}>
                            <FAQItem id={rowIndex * 3 + index} question={faq.question} answer={faq.answer} />
                        </div>
                    ))}
                </div>
            ))}
        </>
    )
}