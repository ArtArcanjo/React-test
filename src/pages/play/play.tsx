import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { Button, Box, Modal, Container } from '@mui/material';


export default function Play() {
    const navigate = useNavigate();
    const [isStarted ,setIsStarted] = useState(false);

    const handleStartClick = () => {
        setIsStarted(true);
    }
    const closeGame = () => {
        setIsStarted(false);
    }
    const handleProfileClick = () => {
        
    }
    const handleExitClick = () => {
        navigate('/');
    }


    return <Box sx={{backgroundColor:'black', position:'fixed', width:'100%', height:'100%', border:"0px", display:'flex', justifyContent: 'center', flexDirection:'column', alignItems:"center"}}>
    <Box component='img' src="title.png" sx={{display:'flex', width:'25vw', height:'40vh'}}>
    </Box>
    <Button onClick={handleStartClick} variant="outlined" sx={{height:"40px", width:"200px", margin:"30px", color:"gray", borderColor:"gray"}}>Inicio</Button>
    <Button onClick={handleProfileClick} variant="outlined" sx={{height:"40px", width:"200px", margin:"30px", color:"gray", borderColor:"gray"}}>Perfil</Button>
    <Button onClick={handleExitClick} variant="outlined" sx={{height:"40px", width:"200px", margin:"30px", color:"darkred", borderColor:"gray"}}>Sair</Button>
    <Modal
        open={isStarted}
        onClose={closeGame}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description" >
        <Box sx={{backgroundColor:"blue", position:'fixed', width:'100%', height:'100%'}}>
            <Button onClick={closeGame}>Fechar</Button>
        </Box>
    </Modal>
    </Box>

}