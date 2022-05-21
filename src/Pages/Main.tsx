import { Tab, Tabs, Typography, useIsFocusVisible } from "@mui/material";
import Box from '@mui/material/Box'
import { Boy, Psychology, TagFaces, ContentPasteSearch, MenuBook, Favorite, AllInclusive} from '@mui/icons-material';
import * as style from "../MUI-SX/index"
import { useNavigate } from "react-router-dom";
import Copyright from "../components/Copyright/Copyright";
import { useState } from "react";

export default function Main() {
    const clinics = [{id: 1 , name: "Clínica/Hospital0",specialty: "Psicologia", distance: "1km", assessment: 4},
    {id: 2 ,name: "Clínica/Hospital1", specialty: "Cardiologia/Nutrição", distance: "2km", assessment: 3}, 
    {id: 3 ,name: "Clínica/Hospital2", specialty: "Fisioterapia", distance: "3km", assessment: 5},
    {id: 4 ,name: "Clínica/Hospital3", specialty: "Odontologia", distance: "4km", assessment: 4},
    {id: 5 ,name: "Clínica/Hospital4", specialty: "Clínica Geral", distance: "5km", assessment: 2},
    {id: 6 ,name: "Clínica/Hospital5", specialty: "Psicologia/Fisioterapia", distance: "6km", assessment: 4}];
    const navigate = useNavigate()
    const [clinic, setClinic] = useState(clinics);
    const [value, setValue] = useState(0)

    function handleClick(e:any){
        const specialty = e.target.textContent;
        if(specialty === "Todos"){
            setClinic(clinics);
            return;
        }
        const filteredClinics = clinics.filter((clinic) => {return clinic.specialty.indexOf(specialty) > -1});
        console.log(filteredClinics);
        setClinic(filteredClinics);
    }

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={style.mainPageBodyStyle}>
            <Tabs value={value}
            onChange={handleChange}
            sx={{width: "85%"}}
            scrollButtons="auto"
            variant="scrollable">
                <Tab icon={<AllInclusive />} label="Todos" onClick={handleClick}/>
                <Tab icon={<ContentPasteSearch />} label="Clínica Geral" onClick={handleClick}/>
                <Tab icon={<TagFaces />} label="Odontologia" onClick={handleClick}/>
                <Tab icon={<Psychology />} label="Psicologia" onClick={handleClick}/>
                <Tab icon={<Boy />} label="Fisioterapia" onClick={handleClick}/>
                <Tab icon={<MenuBook />} label="Nutrição" onClick={handleClick}/>
                <Tab icon={<Favorite />} label="Cardiologia" onClick={handleClick}/>
                <Tab icon={<Favorite />} label="Cardiologiadsdasdsa" onClick={handleClick}/>
            </Tabs>
            <Box sx={style.horizontalLine}></Box>
            {clinic.length > 0 ? <Box sx= {{...style.contentBoxStyle, marginBottom: "50px"}}>
                {clinic.map(infos => 
                    <Box key = {infos.id}>
                        <Box sx= {style.contentStyle}>
                            <Box sx={{...style.flexColumn, width: "100px"}}>
                                <Typography sx={style.titleContent} onClick={() => navigate("/app/clinic")}>{infos.name}</Typography>
                                <Typography sx={{fontSize:"13px"}}>Especialidade(s): {infos.specialty}</Typography>
                            </Box>
                            <Box>
                                <Typography>Distância: {infos.distance}</Typography>
                                <Typography>Avaliação: {infos.assessment}/5</Typography>
                            </Box>
                        </Box>
                            <Box sx={style.horizontalLine}></Box>
                    </Box>
                )}
            </Box>: <Box sx={style.mainPageBodyStyle}>
                <Typography sx={{marginTop: "50px", marginBottom:"50px"}}>Ainda não há clínicas registradas nesta especialidade!</Typography>
                <Copyright />
            </Box>}
            <Copyright />
        </Box>
    )
}