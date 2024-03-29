import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Review from '../components/Review/Review';
import * as style from "../MUI-SX/index"
import { useNavigate } from 'react-router-dom';
import Copyright from '../components/Copyright/Copyright';

const steps = ['Revisão da solicitação'];

//function getStepContent(step: number) {
  //switch (step) {
    //case 0:
     // return <Review />;
    //default:
    //  throw new Error('Unknown step');
  //}
//}

const theme = createTheme();

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Obrigado por confirmar sua solicitação.
                </Typography>
                <Typography variant="subtitle1">
                  Seu número de solicitação é #2001539. Enviamos um email com todos os dados
                </Typography>
                <Button id="backToHome" variant="contained" onClick={() => navigate("/app/main")} sx={{...style.signInButtonStyle, color: "#FFFFFF"}}>Voltar para o início</Button>
              </React.Fragment>
            ) : (
              <React.Fragment>
                  <Review/>
                <Box sx={style.flexEnd}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Back
                    </Button>
                  )}
                  <Button
                    id="submitButton"
                    variant="contained"
                    onClick={handleNext}
                    sx={style.signInButtonStyle}
                  >
                    {activeStep === steps.length - 1 ? 'Confirmar' : 'Próximo'}
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
        <Copyright/>
      </Container>
    </ThemeProvider>
  );
}