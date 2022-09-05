import {Navigate, useOutlet} from "react-router-dom";
import {useAuth} from "../Hook/useAuth";

export const HomeLayout = () => {
    const {user} = useAuth();
    const outlet = useOutlet();
    console.log(user)
    if (user) {
        return <Navigate to="/account/profile" replace/>;
    }

    return (
        <div>
            <h1>HOME</h1>
            {outlet}
        </div>
    );
};
