import { Tab, Tabs, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Boy, Psychology, TagFaces, ContentPasteSearch, MenuBook, Favorite} from '@mui/icons-material';

export default function Main() {
    const clinics = [{name: "Clínica/Hospital0",specialty: "Psicologia", distance: "1km", assessment: 4},
    {name: "Clínica/Hospital1", specialty: "Cardiologia/Nutrição", distance: "2km", assessment: 3}, 
    {name: "Clínica/Hospital2", specialty: "Fisioterapia", distance: "3km", assessment: 5},
    {name: "Clínica/Hospital3", specialty: "Odontologia", distance: "4km", assessment: 4},
    {name: "Clínica/Hospital4", specialty: "Clínica Geral", distance: "5km", assessment: 2},
    {name: "Clínica/Hospital5", specialty: "Psicologia/Fisioterapia", distance: "6km", assessment: 4}];

    return (
        <Box sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"}}>
            <Tabs value={0}
            sx={{width: "85%"}}
            scrollButtons="auto"
            variant="scrollable">
                <Tab icon={<ContentPasteSearch />} label="Clínica Geral" />
                <Tab icon={<TagFaces />} label="Odontologia" />
                <Tab icon={<Psychology />} label="Psicologia" />
                <Tab icon={<Boy />} label="Fisioterapia" />
                <Tab icon={<MenuBook />} label="Nutrição" />
                <Tab icon={<Favorite />} label="Cardiologia" />
                <Tab icon={<Favorite />} label="Cardiologia" />
            </Tabs>
            <Box sx={{width: "100%", height: "1px", backgroundColor:"#00000030"}}></Box>
            <Box sx= {{width: "85%", marginTop: "30px", display: "flex", flexDirection: "column", gap: "10px"}}>
                {clinics.map(infos => 
                    <Box >
                        <Box sx= {{width: "100%", height: "80px", display: "flex", alignItems: "center", justifyContent: "space-between", paddingLeft: "15px", paddingRight: "15px"}}>
                            <Box sx={{display: "flex", flexDirection: "column"}}>
                                <Typography sx={{fontSize: "20px", fontStyle: "bold", marginBottom: "5px"}}>{infos.name}</Typography>
                                <Typography sx={{fontSize:"13px"}}>Especialidade(s): {infos.specialty}</Typography>
                            </Box>
                            <Box>
                                <Typography>Distância: {infos.distance}</Typography>
                                <Typography>Avaliação: {infos.assessment}/5</Typography>
                            </Box>
                        </Box>
                            <Box sx={{width: "100%", height: "1px", backgroundColor:"#00000030"}}></Box>
                    </Box>
                )}
            </Box>
        </Box>
    )
}