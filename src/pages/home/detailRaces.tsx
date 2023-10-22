import React from "react";
import { Button, Box, Container } from '@mui/material';

interface DetailRacesProps {
    arthur: string;
}

export default function detailRaces({arthur}: DetailRacesProps) : JSX.Element {


return <Container sx={{display:'flex',width:'55vw', height:'70vh', backgroundImage: 'url(BGspace.jpg)', backgroundSize: 'cover'}}>
<Box component="img" src={arthur} sx={{width:"150px", height:"150px"}}/>
</Container>
}