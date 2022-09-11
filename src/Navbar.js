import {Link as LinkRouter} from "react-router-dom"
import {useAuth} from "./Auth/Hook/useAuth";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import GlobalStyles from '@mui/material/GlobalStyles';
import Link from "@mui/material/Link";

export default function Navbar() {
    const {logout} = useAuth()
    return (
        <>
            <GlobalStyles styles={{ul: {margin: 0, padding: 0, listStyle: 'none'}}}/>
            <AppBar
                position="sticky"
                color="default"
                elevation={0}
                sx={{borderBottom: (theme) => `1px solid ${theme.palette.divider}`}}
            >
                <Toolbar sx={{flexWrap: 'wrap'}}>
                    <Typography variant="h4" color="inherit" noWrap sx={{flexGrow: 1}}>
                        <LinkRouter to="/account/wall" className="site-title">YourQuestion</LinkRouter>
                    </Typography>
                    <nav>
                        <CustomLink to="/account/wall">Главная</CustomLink>
                        <CustomLink to="/account/message">Сообщения</CustomLink>
                        <CustomLink to="/account/notice">Уведомления</CustomLink>
                        <CustomLink to="/account/friends">Друзья</CustomLink>
                        <CustomLink to="/account/profile">Профиль</CustomLink>
                        <Button key={"logout"} onClick={logout} variant="outlined" sx={{my: 1, mx: 1.5}}>
                            Logout
                        </Button>
                    </nav>
                </Toolbar>
            </AppBar>
        </>
    )
}

function CustomLink({to, children, ...props}) {
    return (
        <>
            <Link
                variant="button"
                color="text.primary"
                href="#"
                sx={{ my: 1, mx: 1.5 }}
            >
                <LinkRouter to={to} {...props}>
                    {children}
                </LinkRouter>
            </Link>
        </>
    )
}