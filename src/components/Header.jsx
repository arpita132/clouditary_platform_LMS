
// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { Menu, X, Cloud, Server, Database, Shield, LayoutGrid, Terminal, Cpu, LayoutDashboard, LogOut } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { useToast } from '@/hooks/use-toast';
// import { coursesData } from '@/data/coursesData';
// import { useAuth } from '@/contexts/AuthContext';

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const { toast } = useToast();
//   const { isAuthenticated, user, logout } = useAuth();
//   const navigate = useNavigate();

//   const handleNotImplemented = () => {
//     toast({
//       title: "Coming Soon",
//       description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
//     });
//   };

//   const handleLogout = () => { logout(); navigate('/'); };

//   const dashboardPath = user?.role === 'admin' ? '/admin' : user?.role === 'trainer' ? '/trainer' : '/student';

//   const closeMenu = () => setIsMenuOpen(false);

//   const awsCourses = coursesData.filter(c => c.provider === 'AWS');
//   const azureCourses = coursesData.filter(c => c.provider === 'Azure');
//   const gcpCourses = coursesData.filter(c => c.provider === 'GCP');

//   return (
//     <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b shadow-sm">
//       <div className="container mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
//         <Link to="/" className="flex items-center">
//           <img 
//             src="https://horizons-cdn.hostinger.com/af239f46-9306-46fa-8afa-8c2095d6535e/66495a843ba10e96700a74ef2edc4e73.jpg" 
//             alt="Clouditary - Grow in the Cloud" 
//             className="h-10 w-auto object-contain"
//           />
//         </Link>

//         {/* Desktop Nav */}
//         <nav className="hidden lg:flex items-center gap-8">
//           <Link to="/" className="text-gray-600 hover:text-[#0EA5E9] font-medium transition-colors">Home</Link>
          
//           <div className="group relative">
//             <Link to="/courses" className="text-gray-600 hover:text-[#0EA5E9] font-medium transition-colors py-8 inline-block">Courses</Link>
//             <div className="absolute top-full left-1/2 -translate-x-1/2 w-[850px] bg-white border shadow-xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 p-6 grid grid-cols-3 gap-8">
//               <div>
//                 <Link to="/courses/aws" className="font-bold text-[#1E293B] mb-4 flex items-center gap-2 hover:text-[#0EA5E9]">
//                   <Server className="h-5 w-5 text-[#0EA5E9]" /> Amazon AWS
//                 </Link>
//                 <ul className="space-y-3">
//                   {awsCourses.map((c) => (
//                     <li key={c.id}>
//                       <Link to={c.slug} className="text-sm text-gray-600 hover:text-[#0EA5E9] hover:underline line-clamp-1" title={c.title}>
//                         {c.title}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//               <div>
//                 <Link to="/courses/azure" className="font-bold text-[#1E293B] mb-4 flex items-center gap-2 hover:text-[#10B981]">
//                   <Database className="h-5 w-5 text-[#10B981]" /> Microsoft Azure
//                 </Link>
//                 <ul className="space-y-3">
//                   {azureCourses.map((c) => (
//                     <li key={c.id}>
//                       <Link to={c.slug} className="text-sm text-gray-600 hover:text-[#10B981] hover:underline line-clamp-1" title={c.title}>
//                         {c.title}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//               <div>
//                 <Link to="/courses/gcp" className="font-bold text-[#1E293B] mb-4 flex items-center gap-2 hover:text-blue-500">
//                   <Cloud className="h-5 w-5 text-blue-500" /> Google Cloud
//                 </Link>
//                 <ul className="space-y-3">
//                   {gcpCourses.map((c) => (
//                     <li key={c.id}>
//                       <Link to={c.slug} className="text-sm text-gray-600 hover:text-blue-500 hover:underline line-clamp-1" title={c.title}>
//                         {c.title}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
              
//               <div className="col-span-3 pt-6 border-t mt-2">
//                 <div className="flex flex-wrap gap-4 justify-center">
//                   {[
//                     { i: Terminal, n: "Hands-on Labs" }, { i: Cpu, n: "ML & AI" }, { i: Shield, n: "Cyber Security" }, { i: LayoutGrid, n: "DevOps" }
//                   ].map((c, i) => (
//                     <button key={i} onClick={handleNotImplemented} className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-[#0EA5E9] bg-gray-50 px-3 py-2 rounded-lg hover:bg-gray-100">
//                       <c.i className="h-4 w-4" /> {c.n}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
          
//           <Link to="/certifications" className="text-gray-600 hover:text-[#0EA5E9] font-medium transition-colors">Certifications</Link>
//           <button onClick={handleNotImplemented} className="text-gray-600 hover:text-[#0EA5E9] font-medium transition-colors">Resources</button>
//           <Link to="/about" className="text-gray-600 hover:text-[#0EA5E9] font-medium transition-colors">About</Link>
//           <Link to="/contact" className="text-gray-600 hover:text-[#0EA5E9] font-medium transition-colors">Contact</Link>
//         </nav>

//         <div className="hidden lg:flex items-center gap-4">
//           {isAuthenticated ? (
//             <>
//               <Link to={dashboardPath}>
//                 <Button variant="outline" className="border-[#0EA5E9] text-[#0EA5E9] hover:bg-[#0EA5E9] hover:text-white min-h-[44px] gap-2">
//                   <LayoutDashboard className="h-4 w-4" /> {user?.name?.split(' ')[0]}
//                 </Button>
//               </Link>
//               <Button onClick={handleLogout} variant="ghost" className="text-gray-500 hover:text-red-500 min-h-[44px] gap-2">
//                 <LogOut className="h-4 w-4" /> Logout
//               </Button>
//             </>
//           ) : (
//             <>
//               <Link to="/login">
//                 <Button variant="outline" className="border-[#0EA5E9] text-[#0EA5E9] hover:bg-[#0EA5E9] hover:text-white min-h-[48px]">Log In</Button>
//               </Link>
//               <Link to="/register">
//                 <Button className="bg-[#10B981] hover:bg-[#059669] text-white min-h-[48px]">Get Started</Button>
//               </Link>
//             </>
//           )}
//         </div>

//         <button className="lg:hidden text-gray-600 touch-target flex items-center justify-center" onClick={() => setIsMenuOpen(!isMenuOpen)}>
//           {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="lg:hidden bg-white border-t p-4 absolute top-full left-0 right-0 shadow-lg max-h-[85vh] overflow-y-auto">
//           <nav className="flex flex-col gap-2">
//             <Link to="/" className="text-lg font-medium text-gray-800 border-b py-3" onClick={closeMenu}>Home</Link>
//             <Link to="/courses" className="text-lg font-medium text-gray-800 border-b py-3" onClick={closeMenu}>All Courses</Link>
            
//             <div className="pl-4 space-y-1 py-2">
//               <p className="font-bold text-[#0EA5E9] py-2">AWS</p>
//               {awsCourses.map(c => <Link key={c.id} to={c.slug} onClick={closeMenu} className="block text-gray-600 text-sm py-2">{c.title}</Link>)}
              
//               <p className="font-bold text-[#10B981] mt-2 py-2">Azure</p>
//               {azureCourses.map(c => <Link key={c.id} to={c.slug} onClick={closeMenu} className="block text-gray-600 text-sm py-2">{c.title}</Link>)}
              
//               <p className="font-bold text-blue-500 mt-2 py-2">GCP</p>
//               {gcpCourses.map(c => <Link key={c.id} to={c.slug} onClick={closeMenu} className="block text-gray-600 text-sm py-2">{c.title}</Link>)}
//             </div>

//             <Link to="/certifications" className="text-left text-lg font-medium text-gray-800 border-b py-3 mt-2" onClick={closeMenu}>Certifications</Link>
//             <Link to="/about" className="text-left text-lg font-medium text-gray-800 border-b py-3" onClick={closeMenu}>About</Link>
//             <Link to="/contact" className="text-left text-lg font-medium text-gray-800 border-b py-3" onClick={closeMenu}>Contact</Link>
//             <div className="flex flex-col gap-3 mt-4 pt-4 border-t">
//               {isAuthenticated ? (
//                 <>
//                   <Link to={dashboardPath} onClick={closeMenu}>
//                     <Button variant="outline" className="w-full min-h-[48px] gap-2"><LayoutDashboard className="h-4 w-4" /> My Dashboard</Button>
//                   </Link>
//                   <Button onClick={handleLogout} variant="ghost" className="w-full text-red-500 min-h-[48px] gap-2"><LogOut className="h-4 w-4" /> Logout</Button>
//                 </>
//               ) : (
//                 <>
//                   <Link to="/login" onClick={closeMenu}><Button variant="outline" className="w-full min-h-[48px]">Log In</Button></Link>
//                   <Link to="/register" onClick={closeMenu}><Button className="w-full bg-[#10B981] text-white min-h-[48px]">Get Started</Button></Link>
//                 </>
//               )}
//             </div>
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;
import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu, X, Cloud, Server, Database, Shield, LayoutGrid,
  Terminal, Cpu, LayoutDashboard, LogOut, ChevronDown,
  Award, BookOpen, Zap, Lock, Brain, ArrowRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { coursesData } from '@/data/coursesData';
import { certificationsData } from '@/data/certificationsData';
import { useAuth } from '@/contexts/AuthContext';

// ─── helpers ──────────────────────────────────────────────────────────────────
const providerMeta = {
  AWS:   { color: '#F59E0B', icon: Server,   label: 'Amazon AWS',       path: '/courses/aws'   },
  Azure: { color: '#06B6D4', icon: Database,  label: 'Microsoft Azure',  path: '/courses/azure' },
  GCP:   { color: '#10B981', icon: Cloud,     label: 'Google Cloud',     path: '/courses/gcp'   },
};

const certCategoryMeta = {
  'Microsoft Azure': { color: '#06B6D4', icon: Database },
  'AWS':             { color: '#F59E0B', icon: Server   },
  'Google Cloud':    { color: '#10B981', icon: Cloud    },
  'DevOps':          { color: '#8B5CF6', icon: LayoutGrid },
  'Security':        { color: '#EF4444', icon: Shield   },
  'AI/ML':           { color: '#EC4899', icon: Brain    },
};

const difficultyColor = {
  Foundational: '#10B981',
  Associate:    '#06B6D4',
  Expert:       '#F59E0B',
  Specialty:    '#EF4444',
};

// ─── sub-components ───────────────────────────────────────────────────────────
const DropdownOverlay = ({ onClose }) => (
  <div className="fixed inset-0 z-30" onClick={onClose} />
);

const CoursesMegaMenu = ({ onClose }) => {
  const aws   = coursesData.filter(c => c.provider === 'AWS');
  const azure = coursesData.filter(c => c.provider === 'Azure');
  const gcp   = coursesData.filter(c => c.provider === 'GCP');

  const { toast } = useToast();
  const handleNI = () => { onClose(); toast({ title: 'Coming Soon', description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀" }); };

  const cols = [
    { provider: 'AWS',   courses: aws   },
    { provider: 'Azure', courses: azure },
    { provider: 'GCP',   courses: gcp   },
  ];

  const quickLinks = [
    { i: Terminal, n: 'Hands-on Labs',  color: '#10B981' },
    { i: Cpu,      n: 'ML & AI',        color: '#8B5CF6' },
    { i: Shield,   n: 'Cyber Security', color: '#EF4444' },
    { i: LayoutGrid, n: 'DevOps',       color: '#F59E0B' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 8, scale: 0.98 }}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 w-[860px] rounded-2xl overflow-hidden z-40"
      style={{
        background: 'rgba(10,25,47,0.92)',
        backdropFilter: 'blur(24px) saturate(180%)',
        border: '1px solid rgba(255,255,255,0.08)',
        boxShadow: '0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(16,185,129,0.08)',
      }}
    >
      {/* Column header strip */}
      <div className="grid grid-cols-3 border-b border-white/[0.06]">
        {cols.map(({ provider }) => {
          const m = providerMeta[provider];
          return (
            <Link
              key={provider}
              to={m.path}
              onClick={onClose}
              className="flex items-center gap-2.5 px-6 py-4 group transition-colors hover:bg-white/[0.04]"
            >
              <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: `${m.color}18` }}>
                <m.icon size={16} style={{ color: m.color }} />
              </div>
              <span className="font-bold text-white text-sm group-hover:text-white/80 transition-colors">
                {m.label}
              </span>
              <ArrowRight size={13} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: m.color }} />
            </Link>
          );
        })}
      </div>

      {/* Course lists */}
      <div className="grid grid-cols-3 gap-0 p-2">
        {cols.map(({ provider, courses }) => {
          const m = providerMeta[provider];
          return (
            <div key={provider} className="px-4 py-3">
              <ul className="space-y-0.5">
                {courses.map(c => (
                  <li key={c.id}>
                    <Link
                      to={c.slug}
                      onClick={onClose}
                      className="flex items-start gap-2 px-2 py-2 rounded-lg group transition-all"
                      style={{ '--accent': m.color }}
                    >
                      <span
                        className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0 opacity-40 group-hover:opacity-100 transition-opacity"
                        style={{ background: m.color }}
                      />
                      <div className="flex-1 min-w-0">
                        <span
                          className="text-xs text-slate-400 group-hover:text-white transition-colors line-clamp-1 leading-relaxed"
                        >
                          {c.title}
                        </span>
                        <div className="flex items-center gap-2 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                          <span className="text-[10px] font-medium px-1.5 py-0.5 rounded"
                            style={{ background: `${m.color}18`, color: m.color }}>
                            {c.level}
                          </span>
                          <span className="text-[10px] text-slate-500">{c.duration}</span>
                        </div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* Footer quick links */}
      <div className="border-t border-white/[0.06] px-6 py-4">
        <p className="text-[10px] font-bold tracking-widest text-slate-500 uppercase mb-3">Browse by Topic</p>
        <div className="flex flex-wrap gap-2">
          {quickLinks.map(q => (
            <button
              key={q.n}
              onClick={handleNI}
              className="flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-white px-3 py-1.5 rounded-lg transition-all"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <q.i size={12} style={{ color: q.color }} />
              {q.n}
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const CertificationsMegaMenu = ({ onClose }) => {
  const categories = [...new Set(certificationsData.map(c => c.category))];

  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 8, scale: 0.98 }}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 w-[800px] rounded-2xl overflow-hidden z-40"
      style={{
        background: 'rgba(10,25,47,0.92)',
        backdropFilter: 'blur(24px) saturate(180%)',
        border: '1px solid rgba(255,255,255,0.08)',
        boxShadow: '0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(6,182,212,0.08)',
      }}
    >
      <div className="p-5">
        <div className="grid grid-cols-2 gap-3">
          {categories.map(cat => {
            const meta = certCategoryMeta[cat] || { color: '#94A3B8', icon: Award };
            const certs = certificationsData.filter(c => c.category === cat);

            return (
              <div
                key={cat}
                className="rounded-xl p-4 transition-all"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                {/* Category header */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: `${meta.color}18` }}>
                    <meta.icon size={14} style={{ color: meta.color }} />
                  </div>
                  <span className="text-sm font-bold text-white">{cat}</span>
                </div>

                {/* Cert items */}
                <ul className="space-y-1">
                  {certs.map(cert => (
                    <li key={cert.id}>
                      <Link
                        to="/certifications"
                        onClick={onClose}
                        className="flex items-center justify-between gap-2 px-2 py-1.5 rounded-lg group hover:bg-white/[0.04] transition-all"
                      >
                        <div className="flex items-center gap-2 min-w-0">
                          <span
                            className="text-[10px] font-bold px-1.5 py-0.5 rounded flex-shrink-0 font-mono"
                            style={{ background: `${meta.color}14`, color: meta.color }}
                          >
                            {cert.code}
                          </span>
                          <span className="text-xs text-slate-400 group-hover:text-white transition-colors line-clamp-1">
                            {cert.name}
                          </span>
                        </div>
                        <span
                          className="text-[10px] font-semibold flex-shrink-0 px-1.5 py-0.5 rounded"
                          style={{
                            color: difficultyColor[cert.difficulty] || '#94A3B8',
                            background: `${difficultyColor[cert.difficulty] || '#94A3B8'}14`,
                          }}
                        >
                          {cert.difficulty}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer CTA */}
      <div className="border-t border-white/[0.06] px-5 py-3 flex items-center justify-between">
        <p className="text-xs text-slate-500">
          <span className="text-white font-semibold">{certificationsData.length}</span> certifications across all platforms
        </p>
        <Link
          to="/certifications"
          onClick={onClose}
          className="flex items-center gap-1 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
        >
          View all certifications <ArrowRight size={12} className="ml-1" />
        </Link>
      </div>
    </motion.div>
  );
};

// ─── main Header ──────────────────────────────────────────────────────────────
const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // 'courses' | 'certs' | null
  const [scrolled, setScrolled] = useState(false);
  const { toast } = useToast();
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setActiveDropdown(null);
    setMobileOpen(false);
  }, [location.pathname]);

  const handleNotImplemented = () => {
    toast({ title: 'Coming Soon', description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀" });
  };

  const handleLogout = () => { logout(); navigate('/'); };
  const dashboardPath = user?.role === 'admin' ? '/admin' : user?.role === 'trainer' ? '/trainer' : '/student';

  const awsCourses   = coursesData.filter(c => c.provider === 'AWS');
  const azureCourses = coursesData.filter(c => c.provider === 'Azure');
  const gcpCourses   = coursesData.filter(c => c.provider === 'GCP');

  const toggleDropdown = (name) =>
    setActiveDropdown(prev => (prev === name ? null : name));

  const closeAll = () => setActiveDropdown(null);

  const navLinks = [
    { label: 'Home',           to: '/' },
    { label: 'Courses',        dropdown: 'courses' },
    { label: 'Certifications', dropdown: 'certs' },
    { label: 'Resources',      action: handleNotImplemented },
    { label: 'About',          to: '/about' },
    { label: 'Contact',        to: '/contact' },
  ];

  return (
    <>
      {activeDropdown && <DropdownOverlay onClose={closeAll} />}

      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? 'rgba(10,25,47,0.88)'
            : 'rgba(10,25,47,0.72)',
          backdropFilter: 'blur(20px) saturate(160%)',
          borderBottom: scrolled
            ? '1px solid rgba(255,255,255,0.07)'
            : '1px solid rgba(255,255,255,0.04)',
          boxShadow: scrolled ? '0 8px 32px rgba(0,0,0,0.4)' : 'none',
        }}
      >
        <div className="container mx-auto px-5 md:px-10 h-[72px] flex items-center justify-between">

          {/* Logo */}
          <Link to="/" onClick={closeAll} className="flex-shrink-0">
            <img
              src="https://horizons-cdn.hostinger.com/af239f46-9306-46fa-8afa-8c2095d6535e/66495a843ba10e96700a74ef2edc4e73.jpg"
              alt="Clouditary"
              className="h-9 w-auto object-contain rounded-lg"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1 relative">
            {navLinks.map(link => {
              if (link.to) {
                return (
                  <Link
                    key={link.label}
                    to={link.to}
                    onClick={closeAll}
                    className="relative px-4 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-lg transition-colors group"
                  >
                    {link.label}
                    <span className="absolute bottom-1 left-4 right-4 h-px bg-emerald-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full" />
                  </Link>
                );
              }

              if (link.action) {
                return (
                  <button
                    key={link.label}
                    onClick={link.action}
                    className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-lg transition-colors"
                  >
                    {link.label}
                  </button>
                );
              }

              // Dropdown trigger
              const isOpen = activeDropdown === link.dropdown;
              return (
                <div key={link.label} className="relative">
                  <button
                    onClick={() => toggleDropdown(link.dropdown)}
                    className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                      isOpen
                        ? 'text-white bg-white/[0.06]'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    {link.label}
                    <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                      <ChevronDown size={14} className="opacity-60" />
                    </motion.div>
                  </button>

                  {/* Glow dot when open */}
                  {isOpen && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-emerald-400" />
                  )}

                  <AnimatePresence>
                    {isOpen && link.dropdown === 'courses' && (
                      <CoursesMegaMenu onClose={closeAll} />
                    )}
                    {isOpen && link.dropdown === 'certs' && (
                      <CertificationsMegaMenu onClose={closeAll} />
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>

          {/* Right CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            {isAuthenticated ? (
              <>
                <Link to={dashboardPath}>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-slate-300 hover:text-white hover:bg-white/[0.06] gap-2 h-9"
                  >
                    <LayoutDashboard size={15} />
                    {user?.name?.split(' ')[0]}
                  </Button>
                </Link>
                <Button
                  onClick={handleLogout}
                  variant="ghost"
                  size="sm"
                  className="text-slate-400 hover:text-red-400 hover:bg-red-500/[0.08] gap-2 h-9"
                >
                  <LogOut size={15} />
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-slate-300 hover:text-white hover:bg-white/[0.06] h-9 px-5 text-sm font-medium"
                  >
                    Log In
                  </Button>
                </Link>
                <Link to="/register">
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                    <Button
                      size="sm"
                      className="relative overflow-hidden h-9 px-5 text-sm font-bold text-white border-0 rounded-lg group"
                      style={{
                        background: 'linear-gradient(92deg, #10B981, #06B6D4)',
                        boxShadow: '0 0 20px rgba(16,185,129,0.3)',
                      }}
                    >
                      Get Started
                      <span className="absolute inset-0 translate-x-[-110%] group-hover:translate-x-[110%] transition-transform duration-600 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                    </Button>
                  </motion.div>
                </Link>
              </>
            )}
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg text-slate-300 hover:text-white transition-colors"
            style={{ background: 'rgba(255,255,255,0.04)' }}
            onClick={() => { setMobileOpen(v => !v); closeAll(); }}
          >
            <AnimatePresence mode="wait">
              {mobileOpen
                ? <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}><X size={20} /></motion.div>
                : <motion.div key="m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}><Menu size={20} /></motion.div>
              }
            </AnimatePresence>
          </button>
        </div>

        {/* ─── Mobile drawer ─────────────────────────────────────────────────── */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="lg:hidden overflow-hidden"
              style={{
                background: 'rgba(8,20,40,0.97)',
                borderTop: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <div className="px-5 py-5 max-h-[80vh] overflow-y-auto">
                <nav className="flex flex-col gap-1">
                  <Link to="/" className="px-3 py-3 text-white font-semibold text-sm rounded-lg hover:bg-white/[0.04]" onClick={() => setMobileOpen(false)}>Home</Link>

                  {/* Mobile Courses accordion */}
                  <MobileAccordion label="Courses" icon={<BookOpen size={14} className="text-emerald-400" />}>
                    {[
                      { label: 'Amazon AWS', courses: awsCourses, color: '#F59E0B', path: '/courses/aws' },
                      { label: 'Microsoft Azure', courses: azureCourses, color: '#06B6D4', path: '/courses/azure' },
                      { label: 'Google Cloud', courses: gcpCourses, color: '#10B981', path: '/courses/gcp' },
                    ].map(group => (
                      <div key={group.label} className="mb-4">
                        <Link to={group.path} onClick={() => setMobileOpen(false)}
                          className="text-xs font-bold mb-2 block px-2 py-1 rounded-md"
                          style={{ color: group.color, background: `${group.color}10` }}>
                          {group.label}
                        </Link>
                        {group.courses.map(c => (
                          <Link key={c.id} to={c.slug} onClick={() => setMobileOpen(false)}
                            className="block text-xs text-slate-400 hover:text-white py-1.5 px-2 rounded hover:bg-white/[0.04] transition-colors line-clamp-1">
                            {c.title}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </MobileAccordion>

                  {/* Mobile Certifications accordion */}
                  <MobileAccordion label="Certifications" icon={<Award size={14} className="text-cyan-400" />}>
                    {[...new Set(certificationsData.map(c => c.category))].map(cat => {
                      const meta = certCategoryMeta[cat] || { color: '#94A3B8', icon: Award };
                      return (
                        <div key={cat} className="mb-3">
                          <p className="text-xs font-bold mb-1.5 px-2" style={{ color: meta.color }}>{cat}</p>
                          {certificationsData.filter(c => c.category === cat).map(cert => (
                            <Link key={cert.id} to="/certifications" onClick={() => setMobileOpen(false)}
                              className="flex items-center justify-between py-1.5 px-2 rounded hover:bg-white/[0.04] transition-colors group">
                              <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded mr-2 flex-shrink-0"
                                style={{ background: `${meta.color}15`, color: meta.color }}>{cert.code}</span>
                              <span className="text-xs text-slate-400 group-hover:text-white transition-colors flex-1 line-clamp-1">{cert.name}</span>
                            </Link>
                          ))}
                        </div>
                      );
                    })}
                  </MobileAccordion>

                  <Link to="/about" className="px-3 py-3 text-slate-300 font-medium text-sm rounded-lg hover:bg-white/[0.04] hover:text-white" onClick={() => setMobileOpen(false)}>About</Link>
                  <Link to="/contact" className="px-3 py-3 text-slate-300 font-medium text-sm rounded-lg hover:bg-white/[0.04] hover:text-white" onClick={() => setMobileOpen(false)}>Contact</Link>

                  <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-white/[0.06]">
                    {isAuthenticated ? (
                      <>
                        <Link to={dashboardPath} onClick={() => setMobileOpen(false)}>
                          <Button variant="outline" className="w-full h-11 gap-2 border-white/20 text-white bg-white/[0.05]"><LayoutDashboard size={15} /> My Dashboard</Button>
                        </Link>
                        <Button onClick={handleLogout} variant="ghost" className="w-full h-11 text-red-400 hover:text-red-300 gap-2"><LogOut size={15} /> Logout</Button>
                      </>
                    ) : (
                      <>
                        <Link to="/login" onClick={() => setMobileOpen(false)}>
                          <Button variant="outline" className="w-full h-11 border-white/20 text-white bg-white/[0.04]">Log In</Button>
                        </Link>
                        <Link to="/register" onClick={() => setMobileOpen(false)}>
                          <Button className="w-full h-11 font-bold text-white border-0"
                            style={{ background: 'linear-gradient(92deg, #10B981, #06B6D4)' }}>
                            Get Started
                          </Button>
                        </Link>
                      </>
                    )}
                  </div>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

// ─── Mobile accordion helper ──────────────────────────────────────────────────
const MobileAccordion = ({ label, icon, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-lg overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.05)' }}>
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between px-3 py-3 text-sm font-semibold text-slate-300 hover:text-white transition-colors"
        style={{ background: open ? 'rgba(255,255,255,0.04)' : 'transparent' }}
      >
        <span className="flex items-center gap-2">{icon}{label}</span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown size={14} className="opacity-50" />
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-3 pb-3 pt-1">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;