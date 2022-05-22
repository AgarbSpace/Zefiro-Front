import { AppBar, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { ReactComponent as SignOutIcon} from '../../assets/signout.svg'
import logo from '../../assets/logo/logo_size.jpg'
import { Outlet, useNavigate, Navigate } from 'react-router-dom';
import TemporaryDrawer from '../LateralMenu/LateralMenu';
import useAuth from '../../hooks/useAuth'

export default function MainPage(){
    const navigate = useNavigate()
    const {token, signOut} = useAuth()

    if(!token){
        return <Navigate to = "/" replace/>
    }

    function handleSignOut(){
        navigate("/");
        signOut();
    }

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
                <TemporaryDrawer />
                <Box component="div" sx={{display: "flex", alignItems: "center", '&:hover': {cursor: "pointer",}}} 
                    onClick={() => navigate("/app/main")}>
                    <img src={logo} alt="logo" width="50px" height="50px"/>
                    <Typography sx={{fontFamily: "Zen Loop", fontSize: "50px", marginLeft: "20px"}} variant="h6" color="inherit" noWrap>
                        Zéfiro
                    </Typography>
                </Box>
            <SignOutIcon id="signOutButton" onClick={handleSignOut} style={{cursor: "pointer"}}/>
            </Toolbar>
        </AppBar>
        <Outlet />
    </Box>
    );
}