import {Link, useMatch, useResolvedPath} from "react-router-dom"

export default function Navbar() {
    return (
        <nav className="nav">
            <Link to="/" className="site-title">YourQuestion</Link>
            <ul>
                <CustomLink to="/" url="/">Главная</CustomLink>
                <CustomLink to="/message">Сообщения</CustomLink>
                <CustomLink to="/notice">Уведомления</CustomLink>
                <CustomLink to="/friends">Друзья</CustomLink>
                <CustomLink to="/profile">Профиль</CustomLink>
            </ul>
        </nav>
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