import {Link, useMatch, useResolvedPath} from "react-router-dom"
import {useAuth} from "./Auth/Hook/useAuth";

export default function Navbar() {
    const {logout} = useAuth()
    return (
        <>
            <nav className="nav">
                <Link to="/account/wall" className="site-title">YourQuestion</Link>
                <ul>
                    <CustomLink to="/account/wall" url="/">Главная</CustomLink>
                    <CustomLink to="/account/message">Сообщения</CustomLink>
                    <CustomLink to="/account/notice">Уведомления</CustomLink>
                    <CustomLink to="/account/friends">Друзья</CustomLink>
                    <CustomLink to="/account/profile">Профиль</CustomLink>
                </ul>
                <h1 key={"logout"} onClick={logout}>Logout</h1>
            </nav>
        </>
    )
}

function CustomLink({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch( {path: resolvedPath.pathname, end: true })

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}