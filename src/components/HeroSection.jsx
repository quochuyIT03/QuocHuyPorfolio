import { ArrowDown } from 'lucide-react'
import React from 'react'

export const HeroSection = () => {
  return (
    <section id='hero' className='relative min-h-screen flex flex-col items-center justify-center px-4'>
        <div className='container max-w-4xl mx-auto text-center z-10'>
            <div className='space-y-6'>
                <h1 className='text-4xl md:text-6xl font-bold tracking-tight'>
                    <span className='opacity-0 animate-fade-in'>Hi, I'm</span> {" "}
                    <span className='text-primary opacity-0 animate-fade-in-delay-1'>Quốc</span> {" "}
                    <span className=' ml-2 opacity-0 animate-fade-in-delay-2'>Huy</span> {" "}
                </h1>
                <p className='text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3'>
                    Hello, I am a Fresher Fullstack Developer with a strong passion for building modern and user-friendly web applications. I have foundational knowledge in both frontend and backend development, working with technologies such as HTML, CSS, JavaScript, and popular frameworks. I am proactive in learning, open to challenges, and eager to grow into a professional developer who creates practical and impactful products.
                </p>

                <div className='opacity-0 animate-fade-in-delay-4'>
                    <a href="#projects" className='cosmic-button'> View My Work</a>
                </div>
            </div>
        </div>

        <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce'>
            <span className='text-sm text-muted-foreground mb-2'> Scroll </span>
            <ArrowDown className='h-5 w-5 text-primary' />
        </div>

    </section>
  )
}
