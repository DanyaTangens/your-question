import {useAuth} from "../Auth/Hook/useAuth";

export const LoginPage = () => {
    const { login } = useAuth();

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        login({
            email: data.get("email"),
            password: data.get("password")
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                login:
                <input type="text" id="email" name="email"/>
            </label>
            <label>
                password:
                <input type="password" id="password" name="password"/>
            </label>
            <input type="submit" value="Отправить" />
        </form>
    );
};
