export default function StatsTable() {
    return ( 
    <div className="statistics text-center p-5">
        <p className="text-center"> Toll-free national overdose prevention, detection, life-saving crisis response and medical intervention services for people who use drugs while alone. Never Use Alone’s peer operators are available 24-hours a day, 7 days a week, 365 days a year. No stigma. No judgment. Just love!  </p>
        <table className="table p-3 mx-auto">
            <thead>
                <tr>
                    <th scope="col">Calls Received</th>
                    <th scope="col">People Served</th>
                    <th scope="col">Reversals</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>33,000+</td>
                    <td>11,500+</td>
                    <td>110+</td>
                </tr>
            </tbody>
        </table>
    </div>
    )
}