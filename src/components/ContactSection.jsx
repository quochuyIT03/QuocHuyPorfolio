import { Github, Instagram, Linkedin, Mail, Phone, Send } from 'lucide-react'
import React, { useState } from 'react'
import { useToast } from "@/hooks/use-toast";
import { cn } from '../lib/utils';

export const ContactSection = () => {
    const {toast} = useToast()
    const [isSubmiting, setIsSubmiting] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsSubmiting(true)
        setTimeout(() => {
            toast({
                title: "Message Sent!", 
                description:" Thank you for message. I'll get back to you soon."
            })
            setIsSubmiting(false)
        }, 1500)
    }

  return (
    <section id='contact' className='py-24 px-24 relative'>
        <div className='container mx-auto max-w-5xl'>
            <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'> Get In <span className='text-primary'> Touch </span> </h2>
            <p className='text-center text-muted-foreground max-w-2xl mx-auto'>
                Fresher developer open to opportunities and learning experiences. 

            </p>
            <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>

                Let’s connect anytime.
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>    
                <div className='space-y-8'>
                    <h3 className='text-2xl font-semibold mb-6'>
                        {" "} Contact Infomation
                    </h3>

                    <div className='space-y-6 justify-center'>  
                        <div className='flex items-start space-x-4'>
                            <div className='p-3 rounded-full bg-primary/10'>
                                <Mail className='h-6 w-6 text-primary'/> {" "}
                            </div>
                            <div>
                                <h4 className='font-medium'>
                                    Email
                                </h4>
                                <a href="mailto:nguyenquochuy3102@gmail.com" className='text-muted-foreground hover:text-primary transition-colors'> nguyenquochuy3102@gmail.com </a>
                            </div>
                        </div>

                        <div className='flex items-start space-x-4'>
                            <div className='p-3 rounded-full bg-primary/10'>
                                <Phone className='h-6 w-6 text-primary'/> {" "}
                            </div>
                            <div>
                                <h4 className='font-medium'>
                                    Phone
                                </h4>
                                <a href="tel: 0797744819" className='text-muted-foreground hover:text-primary transition-colors'> 0797.744.819 </a>
                            </div>
                        </div>

                        <div className='flex items-start space-x-4'>
                            <div className='p-3 rounded-full bg-primary/10'>
                                <Phone className='h-6 w-6 text-primary'/> {" "}
                            </div>
                            <div>
                                <h4 className='font-medium'>
                                    Location
                                </h4>
                                <a className='text-muted-foreground hover:text-primary transition-colors'> Ho Chi Minh city</a>
                            </div>
                        </div>

                    </div>

                    <div className='pt-8'>
                        <h4 className='font-medium mb-4'>
                            Connect With Me
                        </h4>
                        <div className='flex space-x-4 justify-center'>
                            <a href="www.linkedin.com/in/nguyenquochuy3102" target='_blank'> <Linkedin/> </a>
                            <a href="https://github.com/quochuyIT03" target='_blank'> <Github/> </a>
                            <a href="https://www.instagram.com/yuhcouq_2103/" target='_blank'> <Instagram/> </a>
                        </div>
                    </div>

                </div>

                <div className='bg-card p-8 rounded-lg shadow-xs' >
                    <div className='text-sm font-semibold mb-6'>
                        <form className='space-y-6' onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className='block text-sm font-medium mb-2'> {" "} Your Name</label>
                                <input type="text" id='id' name='name' required className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary' placeholder=" Write your name..." />
                            </div>

                            <div>
                                <label htmlFor="email" className='block text-sm font-medium mb-2'> {" "} Your Email</label>
                                <input type="email" id='email' name='email' required className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary' placeholder="write your email" />
                            </div>

                            <div>
                                <label htmlFor="message" className='block text-sm font-medium mb-2'> {" "} Your Message</label>
                                <textarea type="message" id='message' name='message' required className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary' placeholder="Hello, I'd like to talk about..." />
                            </div>

                            <button type='submit' disabled={isSubmiting} className={cn(
                                "cosmic-button w-full flex items-center justify-center gap-2"

                            )}>
                                {isSubmiting ? "Sending..." : "Send Message"}
                                <Send size={16} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
