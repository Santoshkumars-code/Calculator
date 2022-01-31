import { AppBar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Header = () => {
    return(
        <React.Fragment>
            <AppBar position="sticky"  sx={{width:"100%", height:"70px", backgroundColor:"#cfcfcf", color:"black"}}>
                <Box>
                    <Typography variant="h1" color="inherit" sx={{fontSize:"30px",fontFamily:700 , ml:5, mt:2}}>  Calculator</Typography>
                </Box>
            </AppBar>
        </React.Fragment>
    );
}
export default Header;