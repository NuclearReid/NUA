import GrievanceCardDisplay from "../../components/adminComponents/GrievanceCardDisplay";
import AdminNav from "../../components/adminComponents/AdminNav";
import Auth from '../../../src/utils/auth'

export default function AdminGrievance() {
  const isLoggedIn = Auth.loggedIn()
  
  return (
    <>
      { isLoggedIn ? (
        <>
          <AdminNav />
          <GrievanceCardDisplay />
        </>
      ): (
        window.location.assign('/')
      ) }
    </>
  );
}
