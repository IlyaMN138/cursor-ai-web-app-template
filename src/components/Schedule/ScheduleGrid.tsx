import React from 'react';
import {
  Grid,
  Typography,
  Box,
  Fade,
} from '@mui/material';
import { Club } from '../../types';
import ClubCard from './ClubCard';

interface ScheduleGridProps {
  clubs: Club[];
  onViewDetails: (club: Club) => void;
}

const ScheduleGrid: React.FC<ScheduleGridProps> = ({ clubs, onViewDetails }) => {
  if (clubs.length === 0) {
    return (
      <Box sx={{ textAlign: 'center', py: 8 }}>
        <Typography variant="h6" color="text.secondary">
          Клубы не найдены
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Попробуйте изменить фильтры поиска
        </Typography>
      </Box>
    );
  }

  return (
    <Fade in={true} timeout={600}>
      <Grid container spacing={3}>
        {clubs.map((club) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={club.id}>
            <ClubCard club={club} onViewDetails={onViewDetails} />
          </Grid>
        ))}
      </Grid>
    </Fade>
  );
};

export default ScheduleGrid;
