export interface Club {
  id: string;
  name: string;
  description: string;
  instructor: string;
  schedule: Schedule[];
  location: string;
  maxParticipants: number;
  currentParticipants: number;
  tags: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

export interface Schedule {
  day: string;
  time: string;
  duration: string;
}

export interface FilterOptions {
  day: string;
  difficulty: string;
  searchTerm: string;
}
