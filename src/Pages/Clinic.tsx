import { Button, FormControl, InputLabel, Select, Typography } from "@mui/material";
import Box from '@mui/material/Box'
import { useNavigate } from "react-router-dom";
import Form from "../components/Form";
import * as style from "../MUI-SX/index"
import useMediaQuery from '@mui/material/useMediaQuery';
import Map from "../components/Map/Map";
import DatePickers from "../components/DatePicker/DatePicker";
import Copyright from "../components/Copyright/Copyright";

export default function Clinic({clinicInfo}:any){
    const navigate = useNavigate();
    const matches = useMediaQuery('(min-width:700px)');
    const mapMatches = useMediaQuery('(min-width:900px)');
    const matchesContentWidth = useMediaQuery('(min-width:1400px)');
    let titleFont = {};
    let specialtyFont = {};
    let adreessFont = {};
    let imgWidth = "260px";
    let contentWidth = "55%"
    let flexDirection = "flex"
    let width = "50%"
    let mapDimensions = {
        width: '360px',
        height: '363px'
    }

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
    
    if(mapMatches === false){
        flexDirection = "column"
        width = "100%"
        mapDimensions.width = "100%"

    }

    if(matchesContentWidth === false){
        contentWidth="85%";
    }
    
    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
    }

    return (
        <Box sx={style.mainPageBodyStyle}>
            <Box sx={{...style.contentBoxStyle, width: contentWidth, border: "1px solid #00000030", paddingLeft:"15px", paddingTop:"15px", paddingRight:"15px", paddingBottom: "15px", marginBottom: "5px"}}>
                <Box sx={{width:"100%", height:"150px", display: "flex"}}>
                    <img src={clinicInfo[0].image} width={imgWidth} height="100%" alt="Clinic"/>
                    <Box>
                        <Typography variant="h4" sx={{color: "#0F445D", marginLeft:"40px", ...titleFont}}>{clinicInfo[0].name}</Typography>
                        <Typography variant="h6" sx={{marginLeft:"40px", ...specialtyFont}}>Especialidade(s): {clinicInfo[0].specialty}</Typography>
                        <Typography sx={{marginLeft:"40px", ...adreessFont}}>Endereço: Algum lugar</Typography>
                    </Box>
                </Box>
                <Box sx={style.horizontalLine}></Box>
                <Box sx={{display: "flex", justifyContent: "space-between", flexDirection}}>
                    <Box sx={{display: "flex", flexDirection: "column", width}}>
                        <Typography variant= "h5">Informações:</Typography>
                        <Form onSubmit={handleSubmit}>
                            <Typography sx={{marginBottom: "15px"}}>Agenda: </Typography>
                            <DatePickers />
                            <Typography sx={{marginTop: "20px"}}>Horários Disponíveis: </Typography>
                            <FormControl>
                                <InputLabel>Horários</InputLabel>
                                <Select
                                    name="hours"
                                    type="text"
                                    variant="outlined"
                                >
                                </Select>
                            </FormControl>
                            <Typography sx={{marginTop: "10px"}}>Valor: R$150,00</Typography>
                            <Button
                                onClick={() => navigate("/app/payment")}
                                sx={{...style.signInButtonStyle, marginBottom: "0px"}}
                                variant="contained"
                                type="submit">
                                Confirmar Consulta
                            </Button>
                        </Form>
                            <Button
                                onClick={() => document.location.reload()}
                                sx={{...style.signInButtonStyle}}
                                variant="contained"
                                type="submit">
                                Voltar
                            </Button>
                    </Box>
                    <Map dimensions = {mapDimensions}/>
                </Box>
            </Box>
            <Copyright/>
        </Box>
    )
    
}