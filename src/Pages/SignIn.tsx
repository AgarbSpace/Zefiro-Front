import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import logo from "../assets/logo/logo_size.jpg";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import * as style from "../MUI-SX/index"
import Copyright from '../components/Copyright/Copyright';
import Form from '../components/Form';
import useAuth from '../hooks/useAuth';
import useAlert from '../hooks/useAlert';

interface FormData {
    email: String
    password: String
}

export default function SignIn() {
    const navigate = useNavigate()
    const [formData, setFormData] = React.useState<FormData>({
        email:"",
        password: ""
    });
    const { signIn } = useAuth();
    const { setMessage } = useAlert()

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    function handleSubmit(e: React.FormEvent){
        e.preventDefault();

        if(!formData?.email || !formData?.password){
            setMessage({type: "error", text: "Todos os campos são obrigatórios"});
            return;
        }

        signIn("123");
        navigate("/app/main");
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography 
                    sx= {{
                            fontFamily: "Zen Loop",
                            fontSize: "50px"
                        }}
                    component="span">
                    Zéfiro
                </Typography>
                <img src={logo} alt = "logo"/>
                <Typography component="h1" variant="h6">
                    Entrar
                </Typography>
                <Form  onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="email"
                                label="Email"
                                name="email"
                                autoComplete="email"
                                onChange={handleInputChange}
                                value={formData.email}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="password"
                                label="Senha"
                                type="password"
                                id="password"
                                autoComplete="new-password"
                                onChange={handleInputChange}
                                value={formData.password}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={style.signInButtonStyle}
                        onClick={handleSubmit}
                    >
                        Entrar
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link sx={{color: "#0F445D"}} component={RouterLink} to="/signUp">
                                Não tem uma conta? Cadastre-se!
                            </Link>
                        </Grid>
                        <Grid item sx={{ marginBottom: "50px"}}>
                            <Link sx={{color: "#0F445D"}} component={RouterLink} to="/clinicSignIn">
                                Entre como empresa
                            </Link>
                        </Grid>
                    </Grid>
                </Form>
            </Box>
            <Copyright />
        </Container>
    );
}
