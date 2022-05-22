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
import useAlert from '../hooks/useAlert';
import Form from '../components/Form';

interface FormData{
    name: string
    cpf: string
    email: string
    password: string
    confirmPassword: string
}

export default function SignUp() {
    const navigate = useNavigate()
    const [formData, setFormData] = React.useState<FormData>({
        name: "",
        cpf: "",
        email:"",
        password: "",
        confirmPassword: ""
    });
    const { setMessage } = useAlert()

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    function handleSubmit(e: React.FormEvent){
        e.preventDefault();

        if(formData.password !== formData.confirmPassword){
            setMessage({type: "error", text: "As senhas não conferem"});
            return;
        }

        if(!formData?.email || !formData?.password || !formData?.cpf || !formData?.name || !formData?.confirmPassword){
            setMessage({type: "error", text: "Todos os campos são obrigatórios"});
            return;
        }

        navigate("/");
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
                    Cadastro
                </Typography>
                <Form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                id= "name"
                                autoComplete="given-name"
                                name="name"
                                required
                                fullWidth
                                label="Name"
                                autoFocus
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="cpf"
                                required
                                fullWidth
                                label="CPF"
                                name="cpf"
                                autoComplete="cpf"
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="email"
                                required
                                fullWidth
                                label="Email"
                                name="email"
                                autoComplete="email"
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="password"
                                required
                                fullWidth
                                name="password"
                                label="Senha"
                                type="password"
                                autoComplete="new-password"
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="confirmPassword"
                                required
                                fullWidth
                                name="confirmPassword"
                                label="Confirmar Senha"
                                type="password"
                                onChange={handleInputChange}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        id="submitButton"
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={style.signInButtonStyle}
                        onClick={handleSubmit}
                    >
                        Cadastrar
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item sx={{marginBottom: "50px"}}>
                            <Link sx={{color: "#0F445D"}} component={RouterLink} to="/">
                                Já tem uma conta? Entre!
                            </Link>
                        </Grid>
                    </Grid>
                </Form>
            </Box>
            <Copyright />
        </Container>
    );
}
