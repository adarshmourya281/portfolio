import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  Download,
  CheckCircle2,
  Briefcase,
  GraduationCap,
  Code2,
  ShieldCheck,
  TerminalSquare,
  Building2,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// === DATA (edit here) ===
const PROFILE = {
  name: "Adarsh Mourya",
  role: "Java Backend Developer — Spring Boot, REST APIs, Microservices",
  summary:
    "Backend engineer with 3.2+ years building secure, scalable web apps using Java, Spring Boot, REST APIs, Microservices, Spring Data JPA, and MySQL. Experienced across monoliths & microservices, CI/CD (Jenkins), code quality (SonarQube), and Agile delivery.",
  location: "Bengaluru, India",
  phone: "+91-9506454729",
  email: "adarshmourya2810@gmail.com",
  github: "https://github.com/adarshmourya281",
  linkedin: "https://www.linkedin.com/", // add your LinkedIn profile URL
  resumeUrl: "https://drive.google.com/file/d/1hxWd4m5TQ_yS71CmOR0tDsXFWip_0lVf/view?usp=sharing", // place resume.pdf inside public/
  photo: "/profile.jpeg", // place profile.jpg inside public/
};

const SKILLS = [
  "Java 8", "OOP", "Collections", "Multithreading", "Spring Boot", "Spring MVC",
  "RESTful APIs", "Microservices", "Spring Security (JWT)", "Hibernate/JPA", "MySQL",
  "Oracle", "Maven", "Git", "JIRA (Agile)", "Jenkins CI/CD", "SonarQube", "JUnit/Mockito",
  "Swagger/OpenAPI", "Postman", "Lombok", "Apache Tomcat"
];

const EXPERIENCE = [
  {
    company: "Applitech Solution Pvt. Ltd.",
    title: "Software Engineer (Java Backend)",
    period: "2021 — Present",
    bullets: [
      "Developed and maintained Spring Boot microservices and REST APIs with MySQL/Oracle.",
      "Implemented CI/CD using Jenkins; improved code quality via SonarQube reviews.",
      "Collaborated in Agile teams using JIRA for sprint planning and tracking.",
    ],
  },
];

const PROJECTS = [
  {
    name: "Pizza Ordering Services",
    period: "May 2024 — Present",
    stack: ["Java", "Spring Boot", "Spring Security (JWT)", "REST API", "MySQL", "JUnit", "Mockito", "Swagger"],
    highlights: [
      "Customizable orders, inventory checks, and business rules (veg toppings, crust limits, free toppings).",
      "Layered REST APIs with role-based access control (JWT).",
      "80%+ unit test coverage; API docs with Swagger; shared Postman collection.",
    ],
    link: undefined,
  },
  {
    name: "iTrack — Employee & Resource Management",
    period: "Enterprise Project",
    stack: ["Java", "Spring Boot", "REST", "Spring Data JPA", "MySQL"],
    highlights: [
      "Tracks employee information, skills, and client project allocations.",
      "Modules: PF Account, Admin permissions, Project–Client allocation, Resource management.",
    ],
    link: undefined,
  },
  {
    name: "Hospital Management System",
    period: "May 2023 — June 2023",
    stack: ["Java", "Spring Boot", "Spring Data JPA", "Spring MVC", "Lombok", "JSP/JSTL", "JavaScript", "Bootstrap", "MySQL"],
    highlights: [
      "Patient records, doctor appointments, COVID-19 tracking, admin operations.",
      "Layered backend with MySQL; responsive JSP/JSTL UI; admin dashboards.",
    ],
    link: "https://github.com/adarshmourya281/hospital_management_system.git",
  },
];

const EDUCATION = [
  {
    school: "Dr. Shakuntala Misra National Rehabilitation University (DSMNRU), Lucknow",
    degree: "B.Tech (Computer Science & Engineering)",
    year: "2021",
    meta: "CGPA: 7.24",
  },
];

export default function Portfolio() {
  const [copied, setCopied] = useState(false);
  const mailto = `mailto:${PROFILE.email}`;
  const tel = `tel:${PROFILE.phone.replace(/\s|-/g, "")}`;

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (e) {}
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-800">
      {/* Navbar */}
      <header className="sticky top-0 z-20 bg-white/70 backdrop-blur border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2 font-semibold"><Code2 className="h-5 w-5"/> {PROFILE.name}</div>
          <nav className="hidden md:flex items-center gap-4 text-sm">
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#skills" className="hover:underline">Skills</a>
            <a href="#experience" className="hover:underline">Experience</a>
            <a href="#education" className="hover:underline">Education</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild size="sm" variant="outline">
              <a href={PROFILE.resumeUrl} download><Download className="h-4 w-4 mr-1"/>Resume</a>
            </Button>
            <Button asChild size="sm">
              <a href="#contact">Hire Me</a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 pt-12 pb-10">
        <div className="grid md:grid-cols-5 gap-8 items-center">
          {/* Left text */}
          <div className="md:col-span-3">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight">{PROFILE.name}</h1>
            <p className="mt-2 text-lg md:text-xl text-slate-600">{PROFILE.role}</p>
            <p className="mt-4 text-slate-700 leading-relaxed">{PROFILE.summary}</p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Badge variant="secondary" className="px-3 py-1"><ShieldCheck className="h-4 w-4 mr-1"/>3.2+ yrs experience</Badge>
              <Badge variant="secondary" className="px-3 py-1"><TerminalSquare className="h-4 w-4 mr-1"/>Java • Spring Boot • MySQL</Badge>
              <Badge variant="secondary" className="px-3 py-1"><Briefcase className="h-4 w-4 mr-1"/>Open to Remote</Badge>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild>
                <a href="#projects"><Code2 className="h-4 w-4 mr-2"/>View Projects</a>
              </Button>
              <Button asChild variant="outline" onClick={handleCopyEmail}>
                <a href={mailto}><Mail className="h-4 w-4 mr-2"/>{copied ? "Email Copied" : "Email Me"}</a>
              </Button>
            </div>
          </div>

          {/* Right photo + contact card */}
          <div className="md:col-span-2 flex flex-col items-center gap-6">
            {/* Profile Photo */}
            <img
              src={PROFILE.photo}
              alt={PROFILE.name}
              className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-lg border-4 border-white"
            />

            {/* Contact Info Card */}
            <Card className="rounded-2xl shadow-md w-full">
              <CardContent className="p-5">
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2"><MapPin className="h-4 w-4"/> {PROFILE.location}</div>
                  <a className="flex items-center gap-2 hover:underline" href={tel}><Phone className="h-4 w-4"/> {PROFILE.phone}</a>
                  <a className="flex items-center gap-2 hover:underline" href={mailto}><Mail className="h-4 w-4"/> {PROFILE.email}</a>
                  <a className="flex items-center gap-2 hover:underline" href={PROFILE.github} target="_blank" rel="noreferrer"><Github className="h-4 w-4"/> GitHub</a>
                  <a className="flex items-center gap-2 hover:underline" href={PROFILE.linkedin} target="_blank" rel="noreferrer"><Linkedin className="h-4 w-4"/> LinkedIn</a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl md:text-3xl font-semibold">Projects</h2>
        <p className="text-slate-600 mt-1">Selected work showcasing Spring Boot, REST APIs, security, and testing.</p>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {PROJECTS.map((p, idx) => (
            <Card key={idx} className="rounded-2xl hover:shadow-lg transition">
              <CardContent className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-semibold text-lg">{p.name}</h3>
                    <p className="text-xs text-slate-500 mt-0.5">{p.period}</p>
                  </div>
                  {p.link && (
                    <a className="text-sm flex items-center gap-1 hover:underline" href={p.link} target="_blank" rel="noreferrer">
                      Repo <ExternalLink className="h-4 w-4"/>
                    </a>
                  )}
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.stack.map((s, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">{s}</Badge>
                  ))}
                </div>
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  {p.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0"/> <span>{h}</span></li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl md:text-3xl font-semibold">Skills</h2>
        <p className="text-slate-600 mt-1">Core technologies and tools I work with daily.</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {SKILLS.map((s, i) => (
            <Badge key={i} variant="secondary" className="px-3 py-1">{s}</Badge>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl md:text-3xl font-semibold">Experience</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {EXPERIENCE.map((e, i) => (
            <Card key={i} className="rounded-2xl">
              <CardContent className="p-5">
                <div className="flex items-center gap-2 text-slate-500 text-sm"><Building2 className="h-4 w-4"/> {e.period}</div>
                <h3 className="mt-1 font-semibold text-lg">{e.title}</h3>
                <p className="text-slate-600">{e.company}</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  {e.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0"/> <span>{b}</span></li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Education */}
      <section id="education" className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl md:text-3xl font-semibold">Education</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {EDUCATION.map((ed, i) => (
            <Card key={i} className="rounded-2xl">
              <CardContent className="p-5">
                <div className="flex items-center gap-2 text-slate-500 text-sm"><GraduationCap className="h-4 w-4"/> {ed.year}</div>
                <h3 className="mt-1 font-semibold text-lg">{ed.degree}</h3>
                <p className="text-slate-600">{ed.school}</p>
                {ed.meta && <p className="text-slate-500 text-sm mt-2">{ed.meta}</p>}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl md:text-3xl font-semibold">Contact</h2>
        <p className="text-slate-600 mt-1">Ready to start your project. I usually reply within a few hours.</p>
        <div className="mt-6 grid md:grid-cols-5 gap-6">
          <div className="md:col-span-2">
            <Card className="rounded-2xl">
              <CardContent className="p-5 space-y-3 text-sm">
                <a className="flex items-center gap-2 hover:underline" href={mailto}><Mail className="h-4 w-4"/> {PROFILE.email}</a>
                <a className="flex items-center gap-2 hover:underline" href={tel}><Phone className="h-4 w-4"/> {PROFILE.phone}</a>
                <div className="flex items-center gap-2"><MapPin className="h-4 w-4"/> {PROFILE.location}</div>
                <a className="flex items-center gap-2 hover:underline" href={PROFILE.github} target="_blank" rel="noreferrer"><Github className="h-4 w-4"/> GitHub</a>
                <a className="flex items-center gap-2 hover:underline" href={PROFILE.linkedin} target="_blank" rel="noreferrer"><Linkedin className="h-4 w-4"/> LinkedIn</a>
              </CardContent>
            </Card>
          </div>
          <div className="md:col-span-3">
            <Card className="rounded-2xl">
              <CardContent className="p-5">
                <SimpleContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="border-t">
        <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-slate-500 flex flex-col md:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a className="hover:underline" href={PROFILE.resumeUrl} download>Download Resume</a>
            <a className="hover:underline" href="#">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SimpleContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 2500);
    setName("");
    setEmail("");
    setMessage("");
  };

  
  return (
    <form onSubmit={onSubmit} className="space-y-3">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <Input placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} required />
        <Input type="email" placeholder="Your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <Textarea placeholder="Tell me about your project..." value={message} onChange={(e) => setMessage(e.target.value)} required rows={5} />
      <div className="flex items-center gap-3">
        <Button type="submit"><Mail className="h-4 w-4 mr-2"/> Send Message</Button>
        {sent && <span className="text-green-600 text-sm flex items-center gap-1"><CheckCircle2 className="h-4 w-4"/> Message sent!</span>}
      </div>
    </form>
  );
}
