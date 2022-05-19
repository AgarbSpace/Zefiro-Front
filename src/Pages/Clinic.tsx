import { Button, FormControl, InputLabel, Select, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system"
import { useNavigate } from "react-router-dom";
import DatePickers from "../components/DatePicker/DatePicker";
import Form from "../components/Form";
import * as style from "../MUI-SX/index"
import useMediaQuery from '@mui/material/useMediaQuery';


export default function Clinic(){
    const clinic = {id: 1 , name: "Clínica/Hospital0",specialty: "Psicologia", distance: "1km", assessment: 4, image: "https://www.psicologosberrini.com.br/wp-content/uploads/cropped-consultorio-psicologa-1-1024x576.jpg"};
    const navigate = useNavigate();
    const matches = useMediaQuery('(min-width:700px)');
    const matchesContentWidth = useMediaQuery('(min-width:1400px)');
    let titleFont = {};
    let specialtyFont = {};
    let adreessFont = {};
    let imgWidth = "260px";
    let contentWidth = "55%"

    if(matches === false){
        titleFont = {
            fontSize: "20px", 
            fontStyle: "bold"
        }
        specialtyFont = {
            fontSize: "15px"
        }
        adreessFont = {
            fontSize: "13px"
        }
        
        imgWidth = "50%"
    }

    if(matchesContentWidth === false){
        contentWidth="85%";
    }
    
    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
    }

    return (
        <Box sx={style.mainPageBodyStyle}>
            <Box sx={{...style.contentBoxStyle, width: contentWidth,border: "1px solid #00000030", height:"520px", paddingLeft:"15px", paddingTop:"15px", paddingRight:"15px"}}>
                <Box sx={{width:"100%", height:"150px", display: "flex"}}>
                    <img src={clinic.image} width={imgWidth} height="100%"/>
                    <Box>
                        <Typography variant="h4" sx={{color: "#0F445D", marginLeft:"40px", ...titleFont}}>{clinic.name}</Typography>
                        <Typography variant="h6" sx={{marginLeft:"40px", ...specialtyFont}}>Especialidade(s): {clinic.specialty}</Typography>
                        <Typography sx={{marginLeft:"40px", ...adreessFont}}>Endereço: Algum lugar</Typography>
                    </Box>
                </Box>
                <Box sx={style.horizontalLine}></Box>
                <Box sx={style.contentBoxStyle}>
                    <Typography variant= "h5">Informações:</Typography>
                    <Form onSubmit={handleSubmit}>
                        <Typography >Agenda: </Typography>
                        <DatePickers/>
                        <Typography sx={{marginTop: "20px"}}>Horários Disponíveis: </Typography>
                        <FormControl>
                            <InputLabel>Horários</InputLabel>
                            <Select
                                name="hours"
                                type="text"
                                variant="outlined"
                                sx={{width: "40%"}}
                            >
                            </Select>
                        </FormControl>
                        <Typography sx={{marginTop: "10px"}}>Valor: R$150,00</Typography>
                        <Button
                            onClick={() => navigate("/app/payment")}
                            sx={{...style.signInButtonStyle, width: "117%"}}
                            variant="contained"
                            type="submit">
                            Confirmar Consulta
                        </Button>
                    </Form>
                </Box>
            </Box>
        </Box>
    )
    
}