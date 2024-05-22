export default function StatsTable({callsRecieved, peopleServed, reversals}) {   

    return (
        <div className="statistics text-center p-5">
            <p className="text-center"> Toll-free national overdose prevention, detection, life-saving crisis response and medical intervention services for people who use drugs while alone. Never Use Alone’s peer operators are available 24-hours a day, 7 days a week, 365 days a year. No stigma. No judgment. Just love!  </p>

            <div className="text-center p-1 fs-2">
                <div className="stat">
                    <div>
                        <h3>{callsRecieved}+</h3>
                    </div>
                    <div>
                        <p> Calls Recieved </p>
                    </div>
                </div>
                <div className="stat">
                    <div>
                        <h3>{peopleServed}+</h3>
                    </div>
                    <div>
                        <p> People Served </p>
                    </div>
                </div>
                <div className="stat">
                    <div>
                        <h3>{reversals}+</h3>
                    </div>
                    <div>
                        <p> Reversals </p>
                    </div>
                </div>
            </div>
        </div>
    )
}