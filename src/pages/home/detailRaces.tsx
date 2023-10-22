import React from "react";
import { Button, Box, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface DetailRacesProps {
    arthur: string;
}

export default function detailRaces({arthur}: DetailRacesProps) : JSX.Element {
    const navigate = useNavigate();

    const handleButtonClick = () => {
      
      navigate('/play');
    }

return <Container sx={{display:'flex',width:'55vw', height:'70vh', backgroundImage: 'url(BGspace.jpg)', backgroundSize: 'cover'}}>
<Box component="img" src={arthur} sx={{width:"150px", height:"150px"}}/>
<Button onClick={handleButtonClick} startIcon={<img src="play.png" alt="Play" width="35" height="35" />} sx={{position: 'absolute', bottom: '20px', right: '20px',}}/>
</Container>
}