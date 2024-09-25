'use client';

import { useState, useEffect } from 'react';
import { motion, useAnimate } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import Image from 'next/image';
import Link from 'next/link';
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { Badge } from "@/components/ui/badge";

export default function JoinTeam() {
  const [scope, animate] = useAnimate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    position: '',
    message: '',
  });
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // there is no function for submitting a form on the template, you must make your own.
  const handleSubmit = async (e) => {
      setFormData({ name: '', email: '', position: '', message: '' });
      setIsDialogOpen(true);
  };
  

  const handleJoinDiscord = () => {
    window.open('https://tago.works/discord', '_blank');
    setIsDialogOpen(false);
  };

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
              <ShimmerButton disabled className="transition-transform duration-200 ease-in-out hover:scale-105 active:translate-y-0.5">
                Fill a Form
              </ShimmerButton>
            </div>
          </nav>
        </header>

        <main className="space-y-16 py-12">
          <section className="text-center space-y-6 opacity-0" style={{ transform: "translateY(50px)" }}>
            <h2 className="text-4xl sm:text-5xl font-bold">
              Fill out a{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-purple-400">
                Form
              </span>
            </h2>
            <p className="text-lg sm:text-xl max-w-2xl mx-auto text-gray-300">
              Some text here about how your looking for people to join your team maybe, or anything else you want to let them know before filling out the contact form.  Submitting the form will do nothing.
            </p>
          </section>

          <section className="opacity-0" style={{ transform: "translateY(50px)" }}>
            <Card className="bg-gray-800 border border-gray-700 p-6 rounded-lg shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label htmlFor="position" className="block text-sm font-medium text-gray-300 mb-1">Position of Interest</label>
                  <input
                    type="text"
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  ></textarea>
                </div>
                <ShimmerButton type="submit" className="w-full">
                  Submit The Form
                </ShimmerButton>
              </form>
            </Card>
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

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="bg-gray-800 text-white">
            <DialogHeader>
              <DialogTitle>Application Received</DialogTitle>
              <DialogDescription className="text-gray-300">
                Thank you for your interest in joining our team! We've received your application and will review it shortly. Join the Discord server to stay updated on different projects and potentially get in touch with the team, resulting in a faster response.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter className="flex justify-end space-x-2">
              <Button variant="secondary" onClick={handleJoinDiscord}>
                Join the Discord
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
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
