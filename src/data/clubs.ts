import { Club } from '../types';

export const clubs: Club[] = [
  {
    id: "algo-masters",
    name: "Algorithm Masters",
    description: "Advanced algorithms and competitive programming techniques. Perfect for students preparing for ICPC and other programming competitions.",
    instructor: "Dr. Alex Chen",
    schedule: [
      { day: "Monday", time: "14:00-16:00", duration: "2 hours" },
      { day: "Wednesday", time: "14:00-16:00", duration: "2 hours" }
    ],
    location: "Lab 101",
    maxParticipants: 20,
    currentParticipants: 15,
    tags: ["algorithms", "competitive", "advanced"],
    difficulty: "advanced"
  },
  {
    id: "web-dev-basics",
    name: "Web Development Basics",
    description: "Learn modern web development with React, TypeScript, and Node.js. Build real-world applications from scratch.",
    instructor: "Sarah Johnson",
    schedule: [
      { day: "Tuesday", time: "10:00-12:00", duration: "2 hours" },
      { day: "Thursday", time: "10:00-12:00", duration: "2 hours" }
    ],
    location: "Lab 203",
    maxParticipants: 25,
    currentParticipants: 22,
    tags: ["web", "frontend", "backend"],
    difficulty: "intermediate"
  },
  {
    id: "ml-fundamentals",
    name: "Machine Learning Fundamentals",
    description: "Introduction to machine learning concepts, algorithms, and practical applications using Python and TensorFlow.",
    instructor: "Dr. Michael Zhang",
    schedule: [
      { day: "Monday", time: "09:00-11:00", duration: "2 hours" },
      { day: "Friday", time: "09:00-11:00", duration: "2 hours" }
    ],
    location: "Lab 301",
    maxParticipants: 18,
    currentParticipants: 16,
    tags: ["machine-learning", "python", "data-science"],
    difficulty: "intermediate"
  },
  {
    id: "cyber-security",
    name: "Cyber Security Club",
    description: "Learn about network security, ethical hacking, and cybersecurity best practices through hands-on exercises.",
    instructor: "Prof. Lisa Wang",
    schedule: [
      { day: "Wednesday", time: "16:00-18:00", duration: "2 hours" },
      { day: "Friday", time: "16:00-18:00", duration: "2 hours" }
    ],
    location: "Lab 105",
    maxParticipants: 15,
    currentParticipants: 12,
    tags: ["security", "networking", "ethical-hacking"],
    difficulty: "intermediate"
  },
  {
    id: "game-dev",
    name: "Game Development Workshop",
    description: "Create games using Unity and C#. Learn game design principles, 3D modeling, and interactive storytelling.",
    instructor: "James Rodriguez",
    schedule: [
      { day: "Tuesday", time: "14:00-17:00", duration: "3 hours" },
      { day: "Saturday", time: "10:00-13:00", duration: "3 hours" }
    ],
    location: "Lab 205",
    maxParticipants: 20,
    currentParticipants: 18,
    tags: ["game-dev", "unity", "3d-modeling"],
    difficulty: "intermediate"
  },
  {
    id: "python-basics",
    name: "Python Programming Basics",
    description: "Start your programming journey with Python. Learn fundamentals, data structures, and build your first applications.",
    instructor: "Emma Davis",
    schedule: [
      { day: "Monday", time: "16:00-18:00", duration: "2 hours" },
      { day: "Thursday", time: "16:00-18:00", duration: "2 hours" }
    ],
    location: "Lab 102",
    maxParticipants: 30,
    currentParticipants: 28,
    tags: ["python", "beginner", "fundamentals"],
    difficulty: "beginner"
  },
  {
    id: "mobile-dev",
    name: "Mobile App Development",
    description: "Build cross-platform mobile apps with React Native. Create apps for both iOS and Android from a single codebase.",
    instructor: "David Kim",
    schedule: [
      { day: "Wednesday", time: "10:00-12:00", duration: "2 hours" },
      { day: "Friday", time: "10:00-12:00", duration: "2 hours" }
    ],
    location: "Lab 202",
    maxParticipants: 22,
    currentParticipants: 19,
    tags: ["mobile", "react-native", "cross-platform"],
    difficulty: "intermediate"
  },
  {
    id: "data-structures",
    name: "Data Structures Deep Dive",
    description: "Master essential data structures and algorithms. Perfect foundation for technical interviews and competitive programming.",
    instructor: "Prof. Robert Lee",
    schedule: [
      { day: "Thursday", time: "14:00-16:00", duration: "2 hours" },
      { day: "Saturday", time: "14:00-16:00", duration: "2 hours" }
    ],
    location: "Lab 103",
    maxParticipants: 25,
    currentParticipants: 20,
    tags: ["data-structures", "algorithms", "interview-prep"],
    difficulty: "intermediate"
  },
  {
    id: "blockchain-basics",
    name: "Blockchain Fundamentals",
    description: "Introduction to blockchain technology, cryptocurrencies, and smart contracts. Build your first decentralized application.",
    instructor: "Maria Santos",
    schedule: [
      { day: "Tuesday", time: "18:00-20:00", duration: "2 hours" },
      { day: "Thursday", time: "18:00-20:00", duration: "2 hours" }
    ],
    location: "Lab 304",
    maxParticipants: 16,
    currentParticipants: 14,
    tags: ["blockchain", "cryptocurrency", "smart-contracts"],
    difficulty: "beginner"
  },
  {
    id: "ai-workshop",
    name: "AI & Deep Learning Workshop",
    description: "Explore cutting-edge AI techniques including neural networks, computer vision, and natural language processing.",
    instructor: "Dr. Alan Turing Jr.",
    schedule: [
      { day: "Wednesday", time: "19:00-21:00", duration: "2 hours" },
      { day: "Saturday", time: "15:00-17:00", duration: "2 hours" }
    ],
    location: "Lab 302",
    maxParticipants: 12,
    currentParticipants: 10,
    tags: ["ai", "deep-learning", "neural-networks"],
    difficulty: "advanced"
  }
];
