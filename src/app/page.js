"use client";

import { useEffect, useState } from "react";
import { motion, useAnimate } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from 'next/image';
import Link from 'next/link';
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import { SiJavascript} from "react-icons/si";
import { CommandLineIcon } from "@heroicons/react/24/solid";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaGithub, FaTwitter, FaTiktok, FaYoutube, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Home() {
  const [scope, animate] = useAnimate();
  const [timelineOpen, setTimelineOpen] = useState(false);
  const [timelineAnimated, setTimelineAnimated] = useState(false);

  const skills = [
    // A few examples of tech stacks you can include. Heroicons and Simpleicons have a massive library of icons to use.
    //{ name: "React", icon: SiReact }
    //{ name: "TypeScript", icon: SiTypescript }
    //{ name: "Electron", icon: SiElectron }
    //{ name: "HTML", icon: SiHtml5 }
    //{ name: "CSS", icon: SiCss3 }
    //{ name: "Node.js", icon: SiNodedotjs }
    //{ name: "Next.js", icon: SiNextdotjs }
    //{ name: "Python", icon: SiPython }
    //{ name: "Tailwind CSS", icon: SiTailwindcss }
    //{ name: "Framer Motion", icon: SiFramer }
    //{ name: "UI/UX Design", icon: PaintBrushIcon }
    //{ name: "Front-End Development", icon: CodeBracketIcon }
    //{ name: "Back-End Development", icon: ServerIcon }
    { name: "Full-Stack Development", icon: CommandLineIcon },
    { name: "JavaScript", icon: SiJavascript }
  ];
  const projects = [
    { 
      title: "This is a highlighted project", 
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 
      tech: ["This", "is", "where", "the", "tech", "stack", "goes"],
      highlight: true
    },
    { 
      title: "This is not a highlighted project", 
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 
      tech: ["This", "is", "where", "the", "tech", "stack", "goes"],
      highlight: false
    }
  ];

  const teamMembers = [
    {
      name: "John Doe",
      role: "Software Engineer",
      // add pictures to the "public" directory
      avatar: "/johndoe.jpg",
      bio: "Experienced software engineer with a passion for machine learning and artificial intelligence.",
      // only usernames for platforms
      github: "johndoe",
      twitter: "johndoe_dev",
      tiktok: "johndoe_coder",
      youtube: "johndoe_channel",
      mailto: "johndoe@example.com",
      linkedin: "johndoe"
    },
    {
      name: "Jane Smith",
      role: "Data Scientist",
      avatar: "janesmith.jpg",
      bio: "Data scientist with expertise in data visualization and statistical modeling.",
      github: "janesmith",
      twitter: "janesmith_ds",
      // empty values will not render an icon
      tiktok: "",
      youtube: "janesmith_tutorials",
      mailto: "janesmith@example.com",
      linkedin: ""
    }
    // add more team members here
  ];

  useEffect(() => {
    const animateElements = async () => {
      await animate(scope.current, { opacity: 1 }, { duration: 0.5 });
      await animate("header > nav > div", { x: 0, opacity: 1 }, { delay: 0.2, duration: 0.5 });
      await animate("main > section", { y: 0, opacity: 1 }, { delay: 0.3, duration: 0.5, stagger: 0.1 });
      await animate("footer", { y: 0, opacity: 1 }, { delay: 0.9, duration: 0.5 });
    };

    animateElements();
  }, [animate, scope]);

  return (
    <div ref={scope} className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-200 opacity-0">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="py-6">
          <nav className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex flex-col items-center sm:items-start opacity-0" style={{ transform: "translateX(-50px)" }}>
              <div className="flex items-center">
                <Image
                  src="/icon.svg"
                  alt="Logo"
                  width={32}
                  height={32}
                  className="mr-2"
                />
                <h1 className="text-3xl font-bold bg-clip-text">Lumina</h1>
              </div>
              <span className="text-xs text-gray-400 mt-1 ml-16">a website template</span>
            </div>
            <div className="flex items-center space-x-4 opacity-0" style={{ transform: "translateX(50px)" }}>
              <Link href="/" passHref>
                <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-gray-700">Home</Button>
              </Link>
              <a href="/" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-gray-700">Header 2</Button>
              </a>
              <a href="/">
                <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-gray-700">Header 3</Button>
              </a>
              <Link href="/join" target="_blank" rel="noopener noreferrer">
                <ShimmerButton className="transition-transform duration-200 ease-in-out hover:scale-105 active:translate-y-0.5">
                  Fill a Form
                </ShimmerButton>
              </Link>
            </div>
          </nav>
        </header>

        <main className="space-y-16 py-12">
          <section className="text-center space-y-6 opacity-0" style={{ transform: "translateY(50px)" }}>
            <h2 className="text-4xl sm:text-5xl font-bold">
              Passionate about{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-purple-400">
                Something Pretty Cool
              </span>
            </h2>
            <p className="text-lg sm:text-xl max-w-2xl mx-auto text-gray-300">
              This is probably where your description would go for what kinda things you do
            </p>
          </section>

          <SectionSeparator />

          <section className="opacity-0" style={{ transform: "translateY(50px)" }}>
            <h3 className="text-2xl sm:text-3xl font-semibold mb-6">Your Projects</h3>
            <div className="grid grid-cols-1 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, duration: 0.3 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Card 
                    className={`h-full bg-gray-800 border ${project.highlight ? 'border-purple-500' : 'border-gray-700'} p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300`}
                  >
                    <ProjectCardContent project={project} />
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>

          <SectionSeparator />

          <section className="opacity-0" style={{ transform: "translateY(50px)" }}>
            <h3 className="text-2xl sm:text-3xl font-semibold mb-4">Before the about me</h3>
            <p className="text-base text-gray-300 mb-4">
             This is an optional about me, if you want to include something else or talk about something else
            </p>
          </section>

          <section className="opacity-0" style={{ transform: "translateY(50px)" }}>
            <h3 className="text-2xl sm:text-3xl font-semibold mb-4">About Me</h3>
            <p className="text-base text-gray-300 mb-4">
            This is some text to explain something and something else, then below this is a timeline dropdown.
            </p>
            <Button
              variant="outline"
              className="mb-6 flex items-center justify-center w-full sm:w-auto px-4 py-2 bg-gray-700 text-purple-300 hover:bg-gray-600 hover:text-purple-200 transition-colors duration-200"
              onClick={() => {
                setTimelineOpen(!timelineOpen);
                if (!timelineAnimated) {
                  setTimelineAnimated(true);
                }
              }}
            >
              {timelineOpen ? "Hide" : "View"} My Journey
              {timelineOpen ? (
                <ChevronUpIcon className="w-5 h-5 ml-2" />
              ) : (
                <ChevronDownIcon className="w-5 h-5 ml-2" />
              )}
            </Button>
            {timelineOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mb-6"
              >
                <Timeline animated={timelineAnimated} />
              </motion.div>
            )}
            <p className="text-base text-gray-300 mb-4">
            And then this is some more text below the timeline drowndown.
            </p>
          </section>
          <SectionSeparator />

          <section className="opacity-0" style={{ transform: "translateY(50px)" }}>
            <h3 className="text-2xl sm:text-3xl font-semibold mb-4">Our Focuses</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, duration: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Badge 
                    variant="secondary" 
                    className="text-sm sm:text-base py-1 px-3 bg-gray-700 text-purple-300 hover:bg-gray-600 transition-colors duration-200 flex items-center"
                  >
                    <skill.icon className="w-4 h-4 mr-2" />
                    {skill.name}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </section>

          <SectionSeparator />

          <section className="opacity-0" style={{ transform: "translateY(50px)" }}>
            <h3 className="text-2xl sm:text-3xl font-semibold mb-4">The Team</h3>
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-gray-800 border border-gray-700 p-4 rounded-lg shadow-lg mb-4">
                <div className="flex items-center space-x-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="text-lg font-semibold text-purple-300">{member.name}</h4>
                    <p className="text-sm text-gray-300">{member.role}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-400 mt-4">{member.bio}</p>
                <div className="mt-4 flex space-x-3">
                  {member.mailto && (
                    <a href={`mailto:${member.mailto}`}>
                      <FaEnvelope className="text-gray-400 hover:text-white transition-colors" />
                    </a>
                  )}
                  {member.github && (
                    <a href={`https://github.com/${member.github}`} target="_blank" rel="noopener noreferrer">
                      <FaGithub className="text-gray-400 hover:text-white transition-colors" />
                    </a>
                  )}
                  {member.twitter && (
                    <a href={`https://twitter.com/${member.twitter}`} target="_blank" rel="noopener noreferrer">
                      <FaTwitter className="text-gray-400 hover:text-white transition-colors" />
                    </a>
                  )}
                  {member.tiktok && (
                    <a href={`https://tiktok.com/@${member.tiktok}`} target="_blank" rel="noopener noreferrer">
                      <FaTiktok className="text-gray-400 hover:text-white transition-colors" />
                    </a>
                  )}
                  {member.youtube && (
                    <a href={`https://youtube.com/${member.youtube}`} target="_blank" rel="noopener noreferrer">
                      <FaYoutube className="text-gray-400 hover:text-white transition-colors" />
                    </a>
                  )}
                  {member.linkedin && (
                    <a href={`https://linkedin.com/in/${member.linkedin}`} target="_blank" rel="noopener noreferrer">
                      <FaLinkedin className="text-gray-400 hover:text-white transition-colors" />
                    </a>
                  )}
                </div>
              </Card>
            ))}
          </section>
        </main>


        <footer className="py-8 opacity-0" style={{ transform: "translateY(50px)" }}>
          <Separator className="mb-6 bg-gray-700" />
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-sm text-gray-400">Copyright stuff.</p>
            <div className="flex space-x-3">
              <a href="/" target="_blank" rel="noopener noreferrer">
                <Badge variant="secondary" className="cursor-pointer bg-gray-700 hover:bg-gray-600 text-purple-300 text-xs">Link 1</Badge>
              </a>
              <a href="/" target="_blank" rel="noopener noreferrer">
                <Badge variant="secondary" className="cursor-pointer bg-gray-700 hover:bg-gray-600 text-purple-300 text-xs">Link 2</Badge>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

function ProjectCardContent({ project }) {
  return (
    <div className="flex flex-col h-full">
      <h4 className={`text-xl font-semibold mb-3 ${project.highlight ? 'text-purple-300' : 'text-gray-200'}`}>{project.title}</h4>
      <p className="text-sm text-gray-300 mb-4 flex-grow">{project.description}</p>
      <div className="mt-auto">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech) => (
            <Badge 
              key={tech} 
              variant="outline" 
              className={`text-xs ${project.highlight ? 'bg-purple-900/30 text-purple-300 border-purple-500' : 'bg-gray-700 text-gray-300 border-gray-600'}`}
            >
              {tech}
            </Badge>
          ))}
        </div>
        <Link target="_blank" rel="noopener noreferrer" href={`/projects/${project.title.toLowerCase()}`}>
          <Button 
            variant={project.highlight ? "outline" : "ghost"}
            className={`w-full ${
              project.highlight 
                ? "bg-purple-600 hover:bg-purple-700 text-white border-none" 
                : "text-purple-300 hover:text-purple-200 hover:bg-gray-700"
            }`}
          >
            Learn More
          </Button>
        </Link>
      </div>
    </div>
  );
}

function SectionSeparator() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex items-center justify-center my-8">
      <motion.div
        className="w-1/4"
        initial={{ width: 0 }}
        animate={animate ? { width: "25%" } : {}}
        transition={{ duration: 0.5 }}
      >
        <Separator className="bg-gradient-to-r from-transparent via-purple-500 to-transparent h-px" />
      </motion.div>
      <motion.div
        className="mx-4"
        initial={{ scale: 0 }}
        animate={animate ? { scale: 1 } : {}}
        transition={{ delay: 0.25, duration: 0.3 }}
      >
        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
      </motion.div>
      <motion.div
        className="w-1/4"
        initial={{ width: 0 }}
        animate={animate ? { width: "25%" } : {}}
        transition={{ duration: 0.5 }}
      >
        <Separator className="bg-gradient-to-r from-transparent via-purple-500 to-transparent h-px" />
      </motion.div>
    </div>
  );
}

function Timeline({ animated }) {
  const timelineItems = [
    // automatically organizes from lowest to highest year
    { year: "2000", title: "Dummy Title 1", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex." },
    { year: "2002", title: "Dummy Title 2", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex." },
    { year: "2005", title: "Dummy Title 3", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex." },
    { year: "2010", title: "Dummy Title 4", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex." },
    { year: "2015", title: "Dummy Title 5", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex." },
    { year: "2020", title: "Dummy Title 6", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex." },  ];

  return (
    <div className="relative">
      <motion.div
        className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-purple-500"
        initial={{ height: 0 }}
        animate={{ height: "100%" }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
      {timelineItems.map((item, index) => (
        <TimelineItem
          key={item.year}
          year={item.year}
          title={item.title}
          description={item.description}
          index={index}
          animated={animated}
        />
      ))}
    </div>
  );
}

function TimelineItem({ year, title, description, index, animated }) {
  const isEven = index % 2 === 0;
  const containerVariants = {
    hidden: { opacity: 0, x: isEven ? -50 : 50 },
    visible: { opacity: 1, x: 0 },
  };

  const circleVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1 },
  };

  return (
    <motion.div
      className={`mb-12 flex items-center ${isEven ? 'flex-row' : 'flex-row-reverse'}`}
      variants={containerVariants}
      initial="hidden"
      animate={animated ? "visible" : "hidden"}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <motion.div
        className="w-1/2 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
      >
        <div className={`bg-gray-800 p-4 rounded-lg shadow-lg ${isEven ? 'text-right' : 'text-left'}`}>
          <h4 className="text-lg font-semibold text-purple-300">{title}</h4>
          <p className="text-sm text-gray-300 mt-1">{description}</p>
        </div>
      </motion.div>
      <motion.div
        className="relative flex items-center justify-center w-8 h-8 bg-purple-500 rounded-full z-10"
        variants={circleVariants}
        transition={{ duration: 0.3, delay: index * 0.2 + 0.1 }}
      >
        <span className="text-[10px] font-bold text-white">{year}</span>
      </motion.div>
      <div className="w-1/2"></div>
    </motion.div>
  );
}
