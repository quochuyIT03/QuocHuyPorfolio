import { Briefcase, Code, Globe, User } from "lucide-react";
import React from "react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Passionate Web Developer</h3>
            <p className="text-muted-foreground">
              I am a fresh graduate with a strong passion for Web Development. I
              have built several personal projects using ReactJS and modern
              frontend technologies. I am eager to learn, improve my skills, and
              contribute value to real-world projects.
            </p>
            <p className="text-muted-foreground">
              As a new developer, I may not have years of experience yet, but I
              make up for it with persistence, strong self-learning ability, and
              a never-give-up mindset. I am patient in solving problems, open to
              feedback, and always committed to improving myself every single
              day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>
              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary"></Code>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Frontend Development</h4>
                  <p className="text-muted-foreground">Building responsive and interactive web applications using modern technologies like HTML, CSS, JavaScript, and ReactJS. Focused on clean code structure, performance optimization, and user-friendly interfaces.</p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary"></User>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Backend Development</h4>
                  <p className="text-muted-foreground">Developing RESTful APIs and server-side applications using NodeJS and ExpressJS. Understanding database integration, authentication, and building scalable backend architecture.</p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary"></Briefcase>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Database Management</h4>
                  <p className="text-muted-foreground">Working with MongoDB and MySQL to design structured data models, perform CRUD operations, and ensure efficient data handling for web applications.</p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Globe className="h-6 w-6 text-primary"></Globe>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Continuous Learning
                  </h4>
                  <p className="text-muted-foreground">Continuously improving technical skills through personal projects, documentation research, and problem-solving practice. Committed to growth, discipline, and long-term development in the IT industry.</p>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
};
