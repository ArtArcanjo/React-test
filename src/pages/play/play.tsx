import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { Button, Box, Container } from '@mui/material';


export default function Play() {
    const navigate = useNavigate();

    const handleStartClick = () => {
        
    }
    const handleProfileClick = () => {
        
    }
    const handleExitClick = () => {
        navigate('/');
    }


    return <Box sx={{backgroundColor:'black', position:'fixed', width:'100%', height:'100%', border:"0px", display:'flex', justifyContent: 'center', flexDirection:'column', alignItems:"center"}}>
    <Box component='img' src="title.png" sx={{display:'flex', width:'25vw', height:'40vh'}}>
    </Box>
    <Button variant="outlined" sx={{height:"40px", width:"200px", margin:"30px", color:"gray", borderColor:"gray"}}>Inicio</Button>
    <Button variant="outlined" sx={{height:"40px", width:"200px", margin:"30px", color:"gray", borderColor:"gray"}}>Perfil</Button>
    <Button onClick={handleExitClick} variant="outlined" sx={{height:"40px", width:"200px", margin:"30px", color:"darkred", borderColor:"gray"}}>Sair</Button>
    </Box>

}