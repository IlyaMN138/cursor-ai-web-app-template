import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Chip,
  Box,
  LinearProgress,
  Button,
  Grid,
} from '@mui/material';
import { Club } from '../../types';

interface ClubCardProps {
  club: Club;
  onViewDetails: (club: Club) => void;
}

const ClubCard: React.FC<ClubCardProps> = ({ club, onViewDetails }) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return 'success';
      case 'intermediate':
        return 'warning';
      case 'advanced':
        return 'error';
      default:
        return 'default';
    }
  };

  const getDifficultyLabel = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return 'Новичок';
      case 'intermediate':
        return 'Средний';
      case 'advanced':
        return 'Продвинутый';
      default:
        return difficulty;
    }
  };

  const availabilityPercentage = (club.currentParticipants / club.maxParticipants) * 100;

  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ flexGrow: 1 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
          <Typography variant="h6" component="h3" sx={{ fontWeight: 600 }}>
            {club.name}
          </Typography>
          <Chip
            label={getDifficultyLabel(club.difficulty)}
            color={getDifficultyColor(club.difficulty) as any}
            size="small"
          />
        </Box>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {club.description}
        </Typography>

        <Box sx={{ mb: 2 }}>
          <Typography variant="body2" sx={{ fontWeight: 600, mb: 1 }}>
            Расписание:
          </Typography>
          {club.schedule.map((slot, index) => (
            <Typography key={index} variant="body2" color="text.secondary">
              {slot.day}: {slot.time}
            </Typography>
          ))}
        </Box>

        <Box sx={{ mb: 2 }}>
          <Typography variant="body2" sx={{ fontWeight: 600 }}>
            Преподаватель: {club.instructor}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Локация: {club.location}
          </Typography>
        </Box>

        <Box sx={{ mb: 2 }}>
          <Typography variant="body2" sx={{ fontWeight: 600, mb: 1 }}>
            Доступность: {club.currentParticipants}/{club.maxParticipants}
          </Typography>
          <LinearProgress
            variant="determinate"
            value={availabilityPercentage}
            color={availabilityPercentage >= 90 ? 'error' : 'primary'}
            sx={{ height: 6, borderRadius: 3 }}
          />
        </Box>

        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }}>
          {club.tags.map((tag) => (
            <Chip
              key={tag}
              label={tag}
              size="small"
              variant="outlined"
              sx={{ fontSize: '0.75rem' }}
            />
          ))}
        </Box>
      </CardContent>

      <Box sx={{ p: 2, pt: 0 }}>
        <Button
          variant="contained"
          fullWidth
          onClick={() => onViewDetails(club)}
          disabled={club.currentParticipants >= club.maxParticipants}
        >
          {club.currentParticipants >= club.maxParticipants ? 'Заполнено' : 'Подробнее'}
        </Button>
      </Box>
    </Card>
  );
};

export default ClubCard;
