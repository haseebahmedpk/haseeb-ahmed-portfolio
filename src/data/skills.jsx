import React from 'react'
import { 
  SiPython, SiJavascript, SiCplusplus, SiReact, SiFastapi, SiNodedotjs, 
  SiPostgresql, SiSpringboot, SiAngular, SiLangchain, SiTensorflow, 
  SiPytorch, SiHuggingface, SiN8N, SiDocker, SiGithub, SiLinux, SiRasa 
} from 'react-icons/si'
import { FaBrain, FaEye } from 'react-icons/fa'
import { TbGraph } from 'react-icons/tb'

const SKILLS = [
  // Programming & Web
  { name: 'Python',           icon: <SiPython />, color: '#3776ab' },
  { name: 'JavaScript',       icon: <SiJavascript />, color: '#f7df1e' },
  { name: 'C / C++',          icon: <SiCplusplus />, color: '#00599c' },
  { name: 'React & Next.js',  icon: <SiReact />, color: '#61dafb' },
  { name: 'FastAPI',          icon: <SiFastapi />, color: '#009688' },
  { name: 'Node.js',          icon: <SiNodedotjs />, color: '#339933' },
  { name: 'SQL (PostgreSQL)', icon: <SiPostgresql />, color: '#336791' },
  { name: 'Java (Spring)',    icon: <SiSpringboot />, color: '#6db33f' },
  { name: 'Angular',          icon: <SiAngular />, color: '#dd0031' },
  
  // AI & Data Science
  { name: 'LangChain',        icon: <SiLangchain style={{ transform: 'scale(1.3)' }}/>, color: '#10b981' },
  { name: 'LangGraph',        icon: <TbGraph />, color: '#f56565' },
  { name: 'Rasa',             icon: <SiRasa />, color: '#5a17ee' },
  { name: 'Machine Learning', icon: <FaBrain />, color: '#ff6f00' },
  { name: 'Computer Vision',  icon: <FaEye />, color: '#4a90e2' },
  { name: 'TensorFlow',       icon: <SiTensorflow />, color: '#ff6f00' },
  { name: 'PyTorch',          icon: <SiPytorch />, color: '#ee4c2c' },
  { name: 'Hugging Face',     icon: <SiHuggingface />, color: '#ffd21e' },

  // DevOps & Automation
  { name: 'n8n & Zapier',     icon: <SiN8N />, color: '#ea4335' },
  { name: 'Docker & Kubernetes', icon: <SiDocker />, color: '#2496ed' },
  { name: 'Git & GitHub',     icon: <SiGithub />, color: '#f05032' },
  { name: 'Linux',            icon: <SiLinux />, color: '#fcc624' },
]

export default SKILLS