import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowRight, Mail, Phone, ExternalLink, Github, Linkedin, Code2, Cpu, Cloud, GraduationCap } from 'lucide-react';
import './styles.css';

const tech = ['Java', 'Python', 'C', 'HTML', 'CSS', 'JavaScript', 'React'];
const interests = ['Software Development', 'Web Development', 'AI/ML Learning', 'Problem Solving'];
const projects = [
  { icon: <Code2 />, title: 'Personal Portfolio Website', desc: 'A responsive dark-theme portfolio website to showcase my education, skills, projects, and contact details.', tags: ['React', 'CSS', 'Responsive'] },
  { icon: <Cpu />, title: 'Student Learning Projects', desc: 'Building beginner-to-intermediate programming projects while strengthening fundamentals in B.Tech first year.', tags: ['Java', 'Python', 'DSA'] },
  { icon: <Cloud />, title: 'Web Development Practice', desc: 'Creating clean UI sections, landing pages, and reusable components to improve frontend development skills.', tags: ['HTML', 'CSS', 'JavaScript'] },
];
const certs = [
  ['Programming Fundamentals', 'Learning core programming concepts, logic building, and problem-solving.'],
  ['Web Development', 'Practicing HTML, CSS, JavaScript, and responsive website design.'],
  ['Computer Science Basics', 'Building a strong base in first-year B.Tech subjects and technical skills.'],
];

function Pill({ children }) { return <span className="pill">{children}</span>; }
function Section({ id, label, title, children }) { return <section id={id} className="section"><p className="eyebrow">{label}</p><h2>{title}</h2>{children}</section>; }

function App() {
  return <main>
    <nav className="nav">
      <a className="brand" href="#top">Vivek<span>.</span></a>
      <div>
        <a href="#about">About</a><a href="#education">Education</a><a href="#projects">Projects</a><a href="#certs">Certs</a><a className="navBtn" href="#contact">Let's Talk</a>
      </div>
    </nav>

    <header id="top" className="hero">
      <div className="glow one" /><div className="glow two" />
      <div className="heroText">
        <p className="badge">B.Tech CSE Student & Web Developer</p>
        <h1>Hi, I'm Vivek Kumar.<br />Building my tech journey.</h1>
        <p className="lead">A motivated B.Tech first-year student at KL University, Vijayawada, focused on programming, web development, and creating clean digital experiences.</p>
        <div className="actions"><a href="#projects">Explore My Work <ArrowRight size={18}/></a><a className="ghost" href="#contact">Get In Touch</a></div>
      </div>
      <div className="profileCard"><div className="avatar">VK</div><h3>Vivek Kumar</h3><p>B.Tech Student · KL University</p></div>
    </header>

    <Section id="about" label="About" title="About Me.">
      <div className="aboutGrid"><div className="glass"><p>I'm Vivek Kumar, currently pursuing B.Tech at KL University, Vijayawada. I am in my first year and building my foundation in computer science, programming, and modern web development.</p><p>I enjoy learning new technologies, improving my coding skills, and creating projects that look good and work smoothly. My goal is to keep growing as a developer and build useful real-world applications.</p></div><div className="glass"><h3>Core Tech Stack</h3><div className="pills">{tech.map(t => <Pill key={t}>{t}</Pill>)}</div><h3>Languages</h3><div className="pills"><Pill>Hindi</Pill><Pill>English</Pill></div></div></div>
      <div className="interestGrid">{interests.map(x => <div className="interest" key={x}>{x}</div>)}</div>
    </Section>

    <Section id="education" label="Timeline" title="Education.">
      <div className="stats">
        <div className="stat"><GraduationCap /><strong>8.93</strong><span>B.Tech 1st Year CGPA</span></div>
        <div className="stat"><GraduationCap /><strong>73.6%</strong><span>Class XII Percentage</span></div>
      </div>
      <div className="timeline">
        <article><span>2025 - Present</span><h3>KL University, Vijayawada</h3><p>B.Tech · 1st Year CGPA: 8.93</p></article>
        <article><span>Class XII</span><h3>Senior Secondary Education</h3><p>12th Percentage: 73.6%</p></article>
      </div>
    </Section>

    <Section id="projects" label="Builds" title="Featured Projects.">
      <div className="cards">{projects.map(p => <article className="card" key={p.title}><div className="icon">{p.icon}</div><h3>{p.title}</h3><p>{p.desc}</p><div className="pills">{p.tags.map(t => <Pill key={t}>{t}</Pill>)}</div></article>)}</div>
    </Section>

    <Section id="certs" label="Learning" title="Certifications & Learning.">
      <div className="certs">{certs.map(c => <article className="cert" key={c[0]}><h3>{c[0]}</h3><p>{c[1]}</p><a href="#">View <ExternalLink size={14}/></a></article>)}</div>
    </Section>

    <Section id="contact" label="Get in Touch" title="Let's collaborate">
      <div className="contact glass"><p>I am open to learning opportunities, student projects, and collaborations. I am open to learning opportunities, student projects, and collaborations. Feel free to contact me by email, phone, or LinkedIn.</p><a href="mailto:vk636379@gmail.com"><Mail size={18}/> vk636379@gmail.com</a><a href="tel:+919955340734"><Phone size={18}/> +91 99553 40734</a><div className="socials"><a aria-label="LinkedIn" href="https://in.linkedin.com/in/vivek-kumar-431904414" target="_blank" rel="noreferrer"><Linkedin/></a><Github className="mutedIcon"/></div><button>Send Message</button></div>
    </Section>
    <footer>© 2026 Vivek Kumar. All rights reserved. Made with ❤ in India</footer>
  </main>
}

createRoot(document.getElementById('root')).render(<App />);
