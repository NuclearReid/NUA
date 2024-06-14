import ApplicationCardDisplay from '../../components/adminComponents/ApplicationCardDisplay';
import volunteerOperatorPic from '../../assets/volunteerOperator.png'
export default function AdminApplication() {

    return (
        <>
        <img src={volunteerOperatorPic} alt='volunteer operator image'/>
            <ApplicationCardDisplay />
        </>
    )
}