import { AppBar, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { ReactComponent as SignOutIcon} from '../../assets/signout.svg'
import logo from '../../assets/logo/logo_size.jpg'
import { Outlet } from 'react-router-dom';

export default function MainPage(){
    return (
        <Box sx={{display: "flex", flexDirection: "column"}}>
            <AppBar
                position="absolute"
                color="default"
                elevation={0}
                sx={{
                position: 'relative',
                borderBottom: (t) => `1px solid ${t.palette.divider}`,
            }}
        >
            <Toolbar sx={{display: "flex", justifyContent: "space-between"}}>
                <Box component="div" sx={{display: "flex", alignItems: "center"}}>
                <img src={logo} alt="logo" width="50px" height="50px"/>
            <Typography sx={{fontFamily: "Zen Loop", fontSize: "50px", marginLeft: "20px"}} variant="h6" color="inherit" noWrap>
                Zéfiro
            </Typography>
            </Box>
            <SignOutIcon style={{cursor: "pointer"}}/>
            </Toolbar>
        </AppBar>
        <Outlet />
    </Box>
    );
}