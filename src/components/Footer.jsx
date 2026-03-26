
import React from 'react';
import { Facebook, Twitter, Linkedin, Youtube, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const Footer = () => {
  const { toast } = useToast();

  const handleNotImplemented = () => {
    toast({
      title: "Link Clicked",
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <footer className="bg-[#1E293B] text-gray-300 pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6 bg-white/5 p-2 rounded-lg inline-block">
              <img 
                src="https://horizons-cdn.hostinger.com/af239f46-9306-46fa-8afa-8c2095d6535e/66495a843ba10e96700a74ef2edc4e73.jpg" 
                alt="Clouditary" 
                className="h-10 w-auto object-contain rounded"
              />
            </Link>
            <p className="mb-6 max-w-sm">
              Empowering IT professionals with premium cloud certification training. Master AWS, Azure, and Google Cloud with expert instructors.
            </p>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/company/clouditary/" target="_blank" rel="noopener noreferrer" className="hover:text-[#0EA5E9] transition-colors bg-white/10 p-2 rounded-full hover:bg-white/20"><Linkedin className="h-5 w-5" /></a>
              <a href="https://x.com/clouditaryllp" target="_blank" rel="noopener noreferrer" className="hover:text-[#0EA5E9] transition-colors bg-white/10 p-2 rounded-full hover:bg-white/20"><Twitter className="h-5 w-5" /></a>
              <button onClick={handleNotImplemented} className="hover:text-[#0EA5E9] transition-colors bg-white/10 p-2 rounded-full hover:bg-white/20"><Facebook className="h-5 w-5" /></button>
              <a href="https://youtube.com/@clouditary?si=aYVct-KteuPR9GEk" target="_blank" rel="noopener noreferrer" className="hover:text-[#0EA5E9] transition-colors bg-white/10 p-2 rounded-full hover:bg-white/20"><Youtube className="h-5 w-5" /></a>
            </div>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/courses" className="hover:text-[#0EA5E9] transition-colors">All Courses</Link></li>
              <li><button onClick={handleNotImplemented} className="hover:text-[#0EA5E9] transition-colors">About Us</button></li>
              <li><button onClick={handleNotImplemented} className="hover:text-[#0EA5E9] transition-colors">Blog & Resources</button></li>
              <li><button onClick={handleNotImplemented} className="hover:text-[#0EA5E9] transition-colors">Contact Support</button></li>
              <li><button onClick={handleNotImplemented} className="hover:text-[#0EA5E9] transition-colors">Terms of Service</button></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-[#0EA5E9] mt-1" />
                <a href="mailto:info@clouditary.com" className="hover:text-white transition-colors">info@clouditary.com</a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-[#10B981] mt-1" />
                <a href="tel:8287791155" className="hover:text-white transition-colors">8287791155</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm">
          <p>© 2026 Clouditary. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
