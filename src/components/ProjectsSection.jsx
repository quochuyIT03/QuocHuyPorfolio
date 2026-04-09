import { ArrowRight, ExternalLink, Github } from 'lucide-react'
import React from 'react'

const projects = [
    {
        id: 1, 
        title: "My Porfolio",
        description: "A responsive developer portfolio built with ReactJS to present technical skills, featured projects, and professional background.", 
        image: "./projectImages/project1.png", 
        tags: ["Reactjs", "Tailwindcss"], 
        demoUrl:"https://quoc-huy-porfolio-3102.vercel.app/", 
        githubUrl: "https://github.com/quochuyIT03/QuocHuyPorfolio", 
    },
    {
        id: 2, 
        title: "Oasis Vegetable Website",
        description: "A full-stack MERN e-commerce platform with authentication, role-based authorization, product CRUD operations, image uploads, and dynamic product filtering.", 
        image: "./projectImages/project2.jpg", 
        tags: ["Reactjs","Nodejs","MongoDB"], 
        demoUrl:"#", 
        githubUrl: "https://github.com/quochuyIT03/vegetableApp", 
    },
    {
        id: 3, 
        title: "Clothing Boutique",
        description: "A ReactJS e-commerce frontend integrated with RESTful APIs using Axios, featuring dynamic product rendering and client-side routing.", 
        image: "./projectImages/project3.png", 
        tags: ["Reactjs","Nodejs","MongoDB", "Tailwindcss"], 
        demoUrl:"https://clothing-boutique.vercel.app/", 
        githubUrl: "https://github.com/quochuyIT03/ClothingBoutique", 
    },
    {
        id: 4,
        title: "Villa Booking Website",
        description: "A ReactJS-based villa booking application with structured component architecture, React Router navigation, and integrated Weather API for dynamic location-based data.", 
        image: "./projectImages/project4.jpg", 
        tags: ["Reactjs","Nodejs"], 
        demoUrl:"https://villa-booking-frontend-five.vercel.app/", 
        githubUrl: "https://github.com/quochuyIT03/Villa-booking-frontend", 
    },
    {
        id: 5,
        title: "To do app",
        description: "A full-stack Todo application built with the MERN stack that allows users to create, update, complete, and delete tasks. The app supports task filtering, pagination, and date-based queries. It features a modern UI built with Tailwind CSS and Shadcn UI, while the backend is powered by Node.js and MongoDB for efficient task management.", 
        image: "./projectImages/project5.png", 
        tags: ["React" , "Node" , "MongoDB" , "Tailwind 4" , "Shadcn"], 
        demoUrl:"https://todoapp-99vd.onrender.com/", 
        githubUrl: "https://github.com/quochuyIT03/todoApp", 
    },
    {
        id: 6,
        title: "Hotel Booking App",
        description: "A comprehensive full-stack booking platform developed using the MERN stack. The application features a robust role-based access control (RBAC) system for Users and Admins, secure JWT authentication, and seamless media management integrated with Cloudinary. Users can search and book hotels, while the Admin dashboard provides full CRUD capabilities for hotel listings and room management.", 
        image: "./projectImages/project6.png", 
        tags: ["React", "Node.js", "MongoDB", "Express", "Tailwind 4", "Shadcn UI"], 
        demoUrl:"https://hotelbookingweb-1.onrender.com/", 
        githubUrl: "https://github.com/quochuyIT03/HotelBookingWeb", 
    },
]

export const ProjectsSection = () => {
  return (
    <section id='project' className='py-24 px-4 relative'>
        <div className='container mx-auto max-w-5xl'>
            <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
                {" "}   Feature <span className='text-primary'> Projects </span>
            </h2>
            <p className='text-center text-muted-ground mb-12 max-w-2xl mx-auto'> 
                Here are some of my featured projects.
Each project was built with dedication, responsibility, and my best effort.
Although I am still growing and gaining experience, I continuously strive to improve and deliver better products every day.
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {projects.map((project, key) => (
                    <div key={key} className='group bg-card rounded-lg overflow-hidden shadow-xs card-hover' >
                        <div className='h-48 overflow-hidden'>
                            <img src={project.image} alt={project.title} className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110' />
                        </div>
                        <div className='p-6'>
                            <div className='flex flex-wrap gap-2 mb-4'>
                                {project.tags.map((tag) => (
                                    <span className='px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground'>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <h3 className='text-xl font-semibold mb-1'>
                                {project.title}
                            </h3>
                            <p className='text-muted-foreground text-sm mb-4'>
                                {project.description}
                            </p>
                            <div className='flex justify-between items-center'>
                                <div className='flex space-x-3'>
                                    <a href={project.demoUrl} target='_blank' className='text-foreground/80 hover:text-primary transition-colors duration-300' >
                                        <ExternalLink size={20} />
                                    </a>
                                    <a href={project.githubUrl} target='_blank' className='text-foreground/80 hover:text-primary transition-colors duration-300'>
                                        <Github size={20}/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className='text-center mt-12'>
                <a className="cosmic-button w-fit flex items-center mx-auto gap-2" target='_blank' href="https://github.com/quochuyIT03">
                    Check My Github <ArrowRight size={16} />
                </a>
            </div>
        </div>
    </section>
  )
}
