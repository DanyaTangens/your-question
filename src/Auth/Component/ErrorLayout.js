import {useOutlet} from "react-router-dom";

export const ErrorLayout = () => {
    const outlet = useOutlet();

    return (
        <div>
            {outlet}
        </div>
    );
};
