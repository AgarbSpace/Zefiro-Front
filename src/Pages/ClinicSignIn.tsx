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

export default function ClinicSignIn() {
    const navigate = useNavigate()

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
                <Box component="form" noValidate sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="email"
                                label="Email Coorporativo"
                                name="email"
                                autoComplete="email"
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
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={style.signInButtonStyle}
                        onClick = {() => navigate("/app/main")}
                    >
                        Entrar
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link sx={{color: "#0F445D"}} component={RouterLink} to="/clinicSignUp">
                                Não tem uma conta? Cadastre sua empresa aqui!
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link sx={{color: "#0F445D"}} component={RouterLink} to="/">
                                Voltar para login como pessoa física
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}
