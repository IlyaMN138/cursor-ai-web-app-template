import React from 'react';
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Chip,
} from '@mui/material';
import { FilterOptions } from '../../types';

interface FilterBarProps {
  filters: FilterOptions;
  onFilterChange: (filters: FilterOptions) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ filters, onFilterChange }) => {
  const days = ['Все', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const difficulties = ['Все', 'beginner', 'intermediate', 'advanced'];

  const handleFilterChange = (key: keyof FilterOptions, value: string) => {
    onFilterChange({ ...filters, [key]: value });
  };

  return (
    <Box sx={{ mb: 4, p: 2, bgcolor: 'background.paper', borderRadius: 2 }}>
      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'center' }}>
        <FormControl sx={{ minWidth: 120 }}>
          <InputLabel>День</InputLabel>
          <Select
            value={filters.day}
            onChange={(e) => handleFilterChange('day', e.target.value)}
            label="День"
            size="small"
          >
            {days.map((day) => (
              <MenuItem key={day} value={day}>
                {day === 'Все' ? 'Все дни' : day}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl sx={{ minWidth: 120 }}>
          <InputLabel>Сложность</InputLabel>
          <Select
            value={filters.difficulty}
            onChange={(e) => handleFilterChange('difficulty', e.target.value)}
            label="Сложность"
            size="small"
          >
            {difficulties.map((diff) => (
              <MenuItem key={diff} value={diff}>
                {diff === 'Все' ? 'Все уровни' : 
                 diff === 'beginner' ? 'Новичок' :
                 diff === 'intermediate' ? 'Средний' : 'Продвинутый'}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextField
          label="Поиск клубов"
          variant="outlined"
          size="small"
          value={filters.searchTerm}
          onChange={(e) => handleFilterChange('searchTerm', e.target.value)}
          sx={{ minWidth: 200 }}
        />

        <Chip
          label="Очистить фильтры"
          onClick={() => onFilterChange({ day: 'Все', difficulty: 'Все', searchTerm: '' })}
          color="secondary"
          size="small"
        />
      </Box>
    </Box>
  );
};

export default FilterBar;
