import React, { useState } from 'react';
import { Container, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './styles/theme';
import { clubs } from './data/clubs';
import ScheduleGrid from './components/Schedule/ScheduleGrid';
import FilterBar from './components/Navigation/FilterBar';
import { FilterOptions } from './types';

function App() {
  const [filters, setFilters] = useState<FilterOptions>({
    day: 'Все',
    difficulty: 'Все',
    searchTerm: ''
  });

  const filteredClubs = clubs.filter(club => {
    const matchesDay = filters.day === 'Все' || club.schedule.some(s => s.day === filters.day);
    const matchesDifficulty = filters.difficulty === 'Все' || club.difficulty === filters.difficulty;
    const matchesSearch = filters.searchTerm === '' || 
      club.name.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
      club.description.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
      club.tags.some(tag => tag.toLowerCase().includes(filters.searchTerm.toLowerCase()));
    
    return matchesDay && matchesDifficulty && matchesSearch;
  });

  const handleViewDetails = (club: any) => {
    console.log('Viewing details for:', club.name);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom align="center" color="primary">
          NlogN Camp 2025 Club Schedule
        </Typography>
        
        <FilterBar filters={filters} onFilterChange={setFilters} />
        
        <ScheduleGrid clubs={filteredClubs} onViewDetails={handleViewDetails} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
