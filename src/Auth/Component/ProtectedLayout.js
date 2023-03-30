import {Navigate, useOutlet} from "react-router-dom";
import {useAuth} from "../Hook/useAuth";
import Navbar from "../../Navbar";
import Container from "@mui/material/Container";

export const ProtectedLayout = () => {
    const {user} = useAuth();
    const outlet = useOutlet();

    if (!user) {
        return <Navigate to="/"/>;
    }

    return (
        <div>
            <Navbar/>
            <Container
                component="main"
                maxWidth="xm"
                sx={{ width: 2/4 }}
            >
                {outlet}
            </Container>
        </div>);
};
