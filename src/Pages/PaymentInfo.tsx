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

export default function PaymentInfo() {
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
                <Typography component="h1" sx={{marginBottom: "10%"}} variant="h6">
                    Informações do pagamento
                </Typography>
                <Box component="form" noValidate sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="cardNumber"
                                label="Número do Cartão"
                                name="cardNumber"
                                autoComplete="cardNumber"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="name"
                                label="Nome do Titular"
                                type="text"
                                id="name"
                                autoComplete="name"
                            />
                        </Grid>
                        <Box sx={{display: "flex", width: "500px", justifyContent: "space-between", marginTop: "15px", paddingLeft: "15px"}}>
                            <Grid item xs={5}>
                                <TextField
                                    required
                                    fullWidth
                                    name="expiration"
                                    label="Vencimento"
                                    type="text"
                                    id="expiration"
                                />
                            </Grid>
                            <Grid item xs={5}>
                                <TextField
                                    required
                                    fullWidth
                                    name="cvv"
                                    label="CVV"
                                    type="text"
                                    id="cvv"
                                    autoComplete="cvv"
                                />
                            </Grid>
                        </Box>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={style.signInButtonStyle}
                        onClick = {() => navigate("/app/checkout")}
                    >
                        Continuar
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}
