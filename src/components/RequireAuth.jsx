import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function RequireAuth() {
  const {userToken} = useSelector(state=>state.auth)
  let location = useLocation();

  if (!userToken) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to={`/${process.env.REACT_APP_VERSION}/login`} state={{ from: location }} replace></Navigate>;
  }

  return (
    <>
      <Outlet/>
    </>
    );
}