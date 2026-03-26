
// import React from 'react';
// import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
// import { AuthProvider } from '@/contexts/AuthContext';
// import ProtectedRoute from '@/components/ProtectedRoute';
// import ScrollToTop from '@/components/ScrollToTop';
// import Header from '@/components/Header';
// import Footer from '@/components/Footer';
// import BookDemoFAB from '@/components/BookDemoFAB';
// import { Toaster } from '@/components/ui/toaster';

// // Public pages
// import HomePage from '@/pages/HomePage';
// import CoursesListingPage from '@/pages/CoursesListingPage';
// import AWSCoursesPage from '@/pages/AWSCoursesPage';
// import AzureCoursesPage from '@/pages/AzureCoursesPage';
// import GCPCoursesPage from '@/pages/GCPCoursesPage';
// import DynamicCoursePage from '@/pages/DynamicCoursePage';
// import AboutPage from '@/pages/AboutPage';
// import ContactPage from '@/pages/ContactPage';
// import CertificationsPage from '@/pages/CertificationsPage';
// import WhatsAppButton from '@/components/WhatsAppButton';

// // Auth pages
// import LoginPage from '@/pages/auth/LoginPage';
// import RegisterPage from '@/pages/auth/RegisterPage';

// // Admin pages
// import AdminDashboard from '@/pages/admin/AdminDashboard';
// import AdminUsers from '@/pages/admin/AdminUsers';

// // Trainer pages
// import { TrainerDashboard, TrainerQueries } from '@/pages/trainer/TrainerPages';

// // Student pages
// import { StudentDashboard, StudentModules, StudentQueries } from '@/pages/student/StudentPages';

// // Layout wrapper for public pages (with header/footer/FAB)
// const PublicLayout = ({ children }) => (
//   <div className="min-h-screen flex flex-col relative">
//     <Header />
//     <main className="flex-grow">{children}</main>
//     <Footer />
//     <WhatsAppButton />
//     <BookDemoFAB />
//   </div>
// );

// function App() {
//   return (
//     <AuthProvider>
//       <Router>
//         <ScrollToTop />
//         <Toaster />
//         <Routes>
//           {/* ── Auth Routes ─────────────────────────────────────── */}
//           <Route path="/login" element={<LoginPage />} />
//           <Route path="/register" element={<RegisterPage />} />

//           {/* ── Admin Routes ────────────────────────────────────── */}
//           <Route path="/admin" element={
//             <ProtectedRoute roles={['admin']}>
//               <AdminDashboard />
//             </ProtectedRoute>
//           } />
//           <Route path="/admin/users" element={
//             <ProtectedRoute roles={['admin']}>
//               <AdminUsers />
//             </ProtectedRoute>
//           } />

//           {/* ── Trainer Routes ──────────────────────────────────── */}
//           <Route path="/trainer" element={
//             <ProtectedRoute roles={['trainer', 'admin']}>
//               <TrainerDashboard />
//             </ProtectedRoute>
//           } />
//           <Route path="/trainer/queries" element={
//             <ProtectedRoute roles={['trainer', 'admin']}>
//               <TrainerQueries />
//             </ProtectedRoute>
//           } />

//           {/* ── Student Routes ──────────────────────────────────── */}
//           <Route path="/student" element={
//             <ProtectedRoute roles={['student', 'admin']}>
//               <StudentDashboard />
//             </ProtectedRoute>
//           } />
//           <Route path="/student/modules" element={
//             <ProtectedRoute roles={['student', 'admin']}>
//               <StudentModules />
//             </ProtectedRoute>
//           } />
//           <Route path="/student/queries" element={
//             <ProtectedRoute roles={['student', 'admin']}>
//               <StudentQueries />
//             </ProtectedRoute>
//           } />

//           {/* ── Public Routes ──────────────────────────────────── */}
//           <Route path="/" element={<PublicLayout><HomePage /></PublicLayout>} />
//           <Route path="/courses" element={<PublicLayout><CoursesListingPage /></PublicLayout>} />
//           <Route path="/courses/aws" element={<PublicLayout><AWSCoursesPage /></PublicLayout>} />
//           <Route path="/courses/azure" element={<PublicLayout><AzureCoursesPage /></PublicLayout>} />
//           <Route path="/courses/gcp" element={<PublicLayout><GCPCoursesPage /></PublicLayout>} />
//           <Route path="/certifications" element={<PublicLayout><CertificationsPage /></PublicLayout>} />
//           <Route path="/about" element={<PublicLayout><AboutPage /></PublicLayout>} />
//           <Route path="/contact" element={<PublicLayout><ContactPage /></PublicLayout>} />
//           <Route path="/courses/:provider/:courseId" element={<PublicLayout><DynamicCoursePage /></PublicLayout>} />
//         </Routes>
//       </Router>
//     </AuthProvider>
//   );
// }

// export default App;
// ─── App.jsx ─────────────────────────────────────────────────────────────────
// Add this <link> in your index.html <head> for Plus Jakarta Sans:
//
//   <link
//     href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&family=Inter:wght@400;500;600&display=swap"
//     rel="stylesheet"
//   />
//
// Also add to your global CSS / tailwind.config.js:
//   fontFamily: { sans: ["'Plus Jakarta Sans'", "'Inter'", "sans-serif"] }
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from '@/contexts/AuthContext';
import ProtectedRoute from '@/components/ProtectedRoute';
import ScrollToTop from '@/components/ScrollToTop';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BookDemoFAB from '@/components/BookDemoFAB';
import { Toaster } from '@/components/ui/toaster';

// Public pages
import HomePage from '@/pages/HomePage';
import CoursesListingPage from '@/pages/CoursesListingPage';
import AWSCoursesPage from '@/pages/AWSCoursesPage';
import AzureCoursesPage from '@/pages/AzureCoursesPage';
import GCPCoursesPage from '@/pages/GCPCoursesPage';
import DynamicCoursePage from '@/pages/DynamicCoursePage';
import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';
import CertificationsPage from '@/pages/CertificationsPage';
import WhatsAppButton from '@/components/WhatsAppButton';

// Auth pages
import LoginPage from '@/pages/auth/LoginPage';
import RegisterPage from '@/pages/auth/RegisterPage';

// Admin pages
import AdminDashboard from '@/pages/admin/AdminDashboard';
import AdminUsers from '@/pages/admin/AdminUsers';

// Trainer pages
import { TrainerDashboard, TrainerQueries } from '@/pages/trainer/TrainerPages';

// Student pages
import { StudentDashboard, StudentModules, StudentQueries } from '@/pages/student/StudentPages';

/**
 * Public layout — dark nav + page content + footer + floating buttons.
 * The bg-[#0A192F] body color ensures there's no white flash between sections.
 */
const PublicLayout = ({ children }) => (
  <div className="min-h-screen flex flex-col relative bg-[#0A192F]">
    <Header />
    <main className="flex-grow">{children}</main>
    <Footer />
    {/* Floating action buttons — styled to be elegant & unobtrusive */}
    <WhatsAppButton />
    <BookDemoFAB />
  </div>
);

function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <Toaster />
        <Routes>
          {/* ── Auth ─────────────────────────────────── */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* ── Admin ────────────────────────────────── */}
          <Route path="/admin" element={<ProtectedRoute roles={['admin']}><AdminDashboard /></ProtectedRoute>} />
          <Route path="/admin/users" element={<ProtectedRoute roles={['admin']}><AdminUsers /></ProtectedRoute>} />

          {/* ── Trainer ──────────────────────────────── */}
          <Route path="/trainer" element={<ProtectedRoute roles={['trainer', 'admin']}><TrainerDashboard /></ProtectedRoute>} />
          <Route path="/trainer/queries" element={<ProtectedRoute roles={['trainer', 'admin']}><TrainerQueries /></ProtectedRoute>} />

          {/* ── Student ──────────────────────────────── */}
          <Route path="/student" element={<ProtectedRoute roles={['student', 'admin']}><StudentDashboard /></ProtectedRoute>} />
          <Route path="/student/modules" element={<ProtectedRoute roles={['student', 'admin']}><StudentModules /></ProtectedRoute>} />
          <Route path="/student/queries" element={<ProtectedRoute roles={['student', 'admin']}><StudentQueries /></ProtectedRoute>} />

          {/* ── Public ───────────────────────────────── */}
          <Route path="/" element={<PublicLayout><HomePage /></PublicLayout>} />
          <Route path="/courses" element={<PublicLayout><CoursesListingPage /></PublicLayout>} />
          <Route path="/courses/aws" element={<PublicLayout><AWSCoursesPage /></PublicLayout>} />
          <Route path="/courses/azure" element={<PublicLayout><AzureCoursesPage /></PublicLayout>} />
          <Route path="/courses/gcp" element={<PublicLayout><GCPCoursesPage /></PublicLayout>} />
          <Route path="/certifications" element={<PublicLayout><CertificationsPage /></PublicLayout>} />
          <Route path="/about" element={<PublicLayout><AboutPage /></PublicLayout>} />
          <Route path="/contact" element={<PublicLayout><ContactPage /></PublicLayout>} />
          <Route path="/courses/:provider/:courseId" element={<PublicLayout><DynamicCoursePage /></PublicLayout>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;