 import Auth from '../../utils/auth'


export default function AdminPortal() {

    const isLoggedIn = Auth.loggedIn();

    return (
        <>
            <>
            {isLoggedIn ? (
                <>
                    <h1>Admin Portal</h1>
                </>
            ) : (
                window.location.assign('/')
            )}
        </>
        </>
    )
}