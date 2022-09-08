import {Navigate, useOutlet} from "react-router-dom";
import {useAuth} from "../Hook/useAuth";

export const HomeLayout = () => {
    const {user} = useAuth();
    const outlet = useOutlet();

    if (user) {
        return <Navigate to="/account/profile" replace/>;
    }

    return (
        <div>
            {outlet}
        </div>
    );
};
