export interface Question {
  id: string;
  type: "MCQ" | "Open" | "Likert";
  content: string;
  topic: string;
  difficulty: "EASY" | "MEDIUM" | "HARD";
  skills: string[];
  options?: string[];
  correctAnswer?: number | string;
  explanation?: string;
  category: "Aptitude" | "English" | "Psychometric" | "Technical" | "HR";
  status: boolean;
}

export interface StudentRecord {
  id: string;
  name: string;
  email: string;
  avatar: string;
  department: string;
  year: string;
  readinessScore: number;
  status: "Active" | "Pending" | "Suspended";
  aptitudeScore: number;
  englishScore: number;
  psychometricScore: number;
  interviewScore: number;
  atsScore: number;
  certificateStatus: "UNLOCKED" | "PENDING" | "ISSUED";
  joinedDate: string;
}

export interface CertificateRecord {
  id: string;
  recipientName: string;
  program: string;
  issueDate: string;
  status: "VERIFIED" | "PENDING" | "REVOKED";
  qrCodeUrl: string;
  hash: string;
}

export interface Ticket {
  id: string;
  user: string;
  email: string;
  avatar: string;
  subject: string;
  message: string;
  priority: "Urgent" | "Medium" | "Low";
  status: "New" | "In Progress" | "Resolved";
  time: string;
  category: string;
}

export const MOCK_QUESTIONS: Question[] = [
  {
    id: "Q-APT-01",
    type: "MCQ",
    category: "Aptitude",
    topic: "Time & Distance",
    content: "A train 150m long passes a pole in 15 seconds. What is the speed of the train in km/h?",
    options: ["36 km/h", "45 km/h", "54 km/h", "60 km/h"],
    correctAnswer: 0,
    difficulty: "EASY",
    skills: ["Math", "Logic"],
    explanation: "Speed = Distance / Time = 150m / 15s = 10 m/s = 10 * (18/5) = 36 km/h.",
    status: true,
  },
  {
    id: "Q-APT-02",
    type: "MCQ",
    category: "Aptitude",
    topic: "Speed & Distance",
    content: "A train travels 240 km in 4 hours. What is its average speed?",
    options: ["45 km/h", "60 km/h", "55 km/h", "70 km/h"],
    correctAnswer: 1,
    difficulty: "EASY",
    skills: ["Quantitative", "Algebra"],
    explanation: "Speed = 240 / 4 = 60 km/h.",
    status: true,
  },
  {
    id: "Q-ENG-01",
    type: "MCQ",
    category: "English",
    topic: "Grammar",
    content: "Identify the grammatically correct sentence from the options provided below.",
    options: [
      "She don't like coffee",
      "She doesn't likes coffee",
      "She doesn't like coffee",
      "She not likes coffee",
    ],
    correctAnswer: 2,
    difficulty: "EASY",
    skills: ["Verbal", "Grammar"],
    explanation: "Third-person singular 'She' takes 'does not' or 'doesn't' followed by base verb 'like'.",
    status: true,
  },
  {
    id: "Q-PSY-01",
    type: "Likert",
    category: "Psychometric",
    topic: "Leadership",
    content: "I enjoy taking responsibility for leading group discussions and making important decisions.",
    difficulty: "MEDIUM",
    skills: ["Behavioral", "Ownership"],
    status: true,
  },
  {
    id: "Q-TECH-01",
    type: "Open",
    category: "Technical",
    topic: "Data Structures",
    content: "Explain the difference between Stack and Queue and provide one real-world application of each.",
    difficulty: "MEDIUM",
    skills: ["Data Structures", "Algorithms"],
    status: true,
  },
  {
    id: "Q-TECH-02",
    type: "Open",
    category: "Technical",
    topic: "Web Tech",
    content: "Explain the concept of Virtual DOM in React and how reconciliation works.",
    difficulty: "MEDIUM",
    skills: ["React", "Frontend"],
    status: true,
  },
  {
    id: "Q-TECH-03",
    type: "Open",
    category: "Technical",
    topic: "System Design",
    content: "Design a rate-limiting algorithm for an enterprise API gateway.",
    difficulty: "HARD",
    skills: ["Distributed Systems", "Backend"],
    status: true,
  },
];

export const MOCK_STUDENTS: StudentRecord[] = [
  {
    id: "PW-2026-004",
    name: "Rahul Sharma",
    email: "rahul.sharma@kjsieit.edu",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    department: "Computer Engineering",
    year: "Third Year",
    readinessScore: 84,
    status: "Active",
    aptitudeScore: 84,
    englishScore: 82,
    psychometricScore: 90,
    interviewScore: 86,
    atsScore: 88,
    certificateStatus: "UNLOCKED",
    joinedDate: "Oct 12, 2023",
  },
  {
    id: "PW-2026-012",
    name: "Ananya Rai",
    email: "ananya.rai@kjsieit.edu",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
    department: "Electronics & Telecom",
    year: "Fourth Year",
    readinessScore: 92,
    status: "Active",
    aptitudeScore: 92,
    englishScore: 88,
    psychometricScore: 94,
    interviewScore: 91,
    atsScore: 95,
    certificateStatus: "ISSUED",
    joinedDate: "Sep 04, 2023",
  },
  {
    id: "PW-2026-088",
    name: "Vikram Gupta",
    email: "vikram.gupta@kjsieit.edu",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    department: "Mechanical Engineering",
    year: "Third Year",
    readinessScore: 54,
    status: "Active",
    aptitudeScore: 54,
    englishScore: 60,
    psychometricScore: 58,
    interviewScore: 52,
    atsScore: 65,
    certificateStatus: "PENDING",
    joinedDate: "Nov 01, 2023",
  },
  {
    id: "PW-2026-104",
    name: "Jane S. Alexander",
    email: "jane.alexander@kjsieit.edu",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    department: "Information Technology",
    year: "Fourth Year",
    readinessScore: 96,
    status: "Active",
    aptitudeScore: 96,
    englishScore: 94,
    psychometricScore: 98,
    interviewScore: 95,
    atsScore: 92,
    certificateStatus: "ISSUED",
    joinedDate: "Aug 15, 2023",
  },
];

export const MOCK_CERTIFICATES: CertificateRecord[] = [
  {
    id: "PW-2024-99821",
    recipientName: "Jane S. Alexander",
    program: "Full-Stack Engineering FastTrack",
    issueDate: "24 Oct 2024",
    status: "VERIFIED",
    qrCodeUrl: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=PW-2024-99821",
    hash: "0x8f3a92...b41c",
  },
  {
    id: "PW-2024-99819",
    recipientName: "Marcus V. Thorne",
    program: "Cloud Architecture",
    issueDate: "22 Oct 2024",
    status: "VERIFIED",
    qrCodeUrl: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=PW-2024-99819",
    hash: "0x3e1d77...f901",
  },
  {
    id: "PW-2024-99742",
    recipientName: "Lydia Zhang",
    program: "UX Strategy",
    issueDate: "15 Oct 2024",
    status: "REVOKED",
    qrCodeUrl: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=PW-2024-99742",
    hash: "0xaa9845...d102",
  },
  {
    id: "PW-2024-99701",
    recipientName: "Samuel K. Ivey",
    program: "Data Science Mastery",
    issueDate: "12 Oct 2024",
    status: "PENDING",
    qrCodeUrl: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=PW-2024-99701",
    hash: "0x77c42b...e319",
  },
];

export const MOCK_TICKETS: Ticket[] = [
  {
    id: "PW-8402",
    user: "Alex Rivera",
    email: "alex.rivera@kjsieit.edu",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    subject: "Unable to access AI Assessment results",
    message:
      "Hi team, I finished my mock assessment an hour ago but the results page is still showing 'Processing'. I need these for my interview preparation tomorrow morning. Is there something wrong with my submission?",
    priority: "Urgent",
    status: "In Progress",
    time: "12 mins ago",
    category: "Assessments",
  },
  {
    id: "PW-8395",
    user: "Sarah Chen",
    email: "sarah.chen@kjsieit.edu",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&auto=format&fit=crop&q=80",
    subject: "Request for certificate name correction",
    message: "I noticed a typo in my name on the Python certification I downloaded. Can you please update it?",
    priority: "Medium",
    status: "New",
    time: "45 mins ago",
    category: "Certificates",
  },
  {
    id: "PW-8388",
    user: "Jordan Dave",
    email: "jordan.dave@kjsieit.edu",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80",
    subject: "Pricing inquiry for enterprise team",
    message: "I'm looking to onboard my entire placement cell of 200+ students. How can we activate institutional access?",
    priority: "Low",
    status: "Resolved",
    time: "2 hours ago",
    category: "Billing",
  },
];
