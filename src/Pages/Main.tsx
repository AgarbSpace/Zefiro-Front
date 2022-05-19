import { Tab, Tabs, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Boy, Psychology, TagFaces, ContentPasteSearch, MenuBook, Favorite, AllInclusive} from '@mui/icons-material';
import * as style from "../MUI-SX/index"
import { useNavigate } from "react-router-dom";

export default function Main() {
    const clinics = [{id: 1 , name: "Clínica/Hospital0",specialty: "Psicologia", distance: "1km", assessment: 4},
    {id: 2 ,name: "Clínica/Hospital1", specialty: "Cardiologia/Nutrição", distance: "2km", assessment: 3}, 
    {id: 3 ,name: "Clínica/Hospital2", specialty: "Fisioterapia", distance: "3km", assessment: 5},
    {id: 4 ,name: "Clínica/Hospital3", specialty: "Odontologia", distance: "4km", assessment: 4},
    {id: 5 ,name: "Clínica/Hospital4", specialty: "Clínica Geral", distance: "5km", assessment: 2},
    {id: 6 ,name: "Clínica/Hospital5", specialty: "Psicologia/Fisioterapia", distance: "6km", assessment: 4}];
    const navigate = useNavigate()

    return (
        <Box sx={style.mainPageBodyStyle}>
            <Tabs value={0}
            sx={{width: "85%"}}
            scrollButtons="auto"
            variant="scrollable">
                <Tab icon={<AllInclusive />} label="Todos" />
                <Tab icon={<ContentPasteSearch />} label="Clínica Geral" />
                <Tab icon={<TagFaces />} label="Odontologia" />
                <Tab icon={<Psychology />} label="Psicologia" />
                <Tab icon={<Boy />} label="Fisioterapia" />
                <Tab icon={<MenuBook />} label="Nutrição" />
                <Tab icon={<Favorite />} label="Cardiologia" />
            </Tabs>
            <Box sx={style.horizontalLine}></Box>
            <Box sx= {style.contentBoxStyle}>
                {clinics.map(infos => 
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
            </Box>
        </Box>
    )
}