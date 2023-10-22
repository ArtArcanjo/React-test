import React from 'react';
import { Box, Container } from '@mui/material';
import Races from './Races';

interface RaceProps {
    name: string;
    image: string;
}

const races: RaceProps[] = [
    {
        name: 'Luminaris',
        image: 'azul.jpg',
    },
    {
        name: 'Mecanex',
        image: 'vermelho.jpg',
    },
    {
        name: 'Humanos',
        image: 'verde.jpg',
    }
]

export default function Home(): JSX.Element {
    return (
        <Box sx={{ backgroundColor: 'black', display: 'flex', height: '100vh', flexDirection: 'row', textAlign: 'center' }}>
            {races.map((race) => (
                <Races key={race.name} name={race.name} image={race.image} />
            ))}
        </Box>
    )
}