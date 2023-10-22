import React, { useState } from 'react';
import { Box, Container, Dialog } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import DetailRaces from './detailRaces'

interface RaceProps {
  name: string;
  image: string;
}

export default function Races({ name, image }: RaceProps): JSX.Element {
  const [hovered, setHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Box sx={{ display: 'flex'}}>
      <Box
        component="img"
        src={image}
        sx={{
          width: '100%',
          filter: `grayscale(${hovered ? '0%' : '100%'})`,
          '&:hover': {
            cursor: 'pointer',
          },
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}>
      </Box>
      <Dialog open={isExpanded} onClose={() => setIsExpanded(false)} maxWidth="md" fullWidth>
        <DetailRaces arthur={image}/>
      </Dialog>
    </Box>
  );
}