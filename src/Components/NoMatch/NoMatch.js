import {useLocation} from "react-router-dom";

function NoMatch() {
    let location = useLocation();

    return (
        <div>
            <h3>
                Такой странички нет <code>{location.pathname}</code>
            </h3>
        </div>
    )
}

export default NoMatch;