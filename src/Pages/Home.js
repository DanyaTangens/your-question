import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Copyright from "../Components/Copyright";
import Link from "@mui/material/Link";

export default function Home() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
                backgroundImage: 'url(https://source.unsplash.com/random)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm" align="center">
                <Typography variant="h2" component="h1" gutterBottom color="white">
                   YourQuestion
                </Typography>
                <Typography variant="h5" component="h2" gutterBottom color="white">
                    {'Спроси. Поболтай.'}
                </Typography>
                <Typography variant="h5" component="h2" gutterBottom color="white">
                    {'Повтори. Анонимно!'}
                </Typography>
                <Typography variant="body1" color="white">
                    <Link href={"/login"} variant="body2">
                        {"Войдите"}
                    </Link>
                    {' или '}
                    <Link href={"/signup"} variant="body2">
                        {"зарегестрируйтесь"}
                    </Link>
                </Typography>
            </Container>
            <Box
                component="footer"
                sx={{
                    py: 3,
                    px: 2,
                    mt: 'auto',
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'light'
                            ? theme.palette.grey[200]
                            : theme.palette.grey[800],
                }}
            >
                <Container maxWidth="sm">
                    <Typography variant="body1" align="center">
                        My sticky footer can be found here.
                    </Typography>
                    <Copyright />
                </Container>
            </Box>
        </Box>
    );
}