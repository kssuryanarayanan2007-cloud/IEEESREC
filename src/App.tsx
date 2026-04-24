import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SpeedInsights } from "@vercel/speed-insights/react";

import Index from "./pages/Index";
import OfficeBearersPage from "./pages/OfficeBearersPage";
import AboutPage from "./pages/AboutPage";
import SocietiesPage from "./pages/SocietiesPage";
import SocietyDetailPage from "./pages/SocietyDetailPage";
import SrecBranchPage from "./pages/SrecBranchPage";
import WiePage from "./pages/WiePage";
import EmbsPage from "./pages/EmbsPage";
import CsPage from "./pages/CsPage";
import ComsocPage from "./pages/ComsocPage";
import PelsPage from "./pages/PelsPage";
import ImPage from "./pages/ImPage";
import CisPage from "./pages/CisPage";
import JoinPage from "./pages/JoinPage";
import ContactPage from "./pages/ContactPage";
import MembersPage from "./pages/MembersPage";
import AdminDashboardRoute from "./pages/AdminDashboard.tsx";
import AdminLoginPage from "./pages/AdminLoginPage.tsx";
import AwardsPage from "./pages/AwardsPage.tsx";
import NotFound from "./pages/NotFound.tsx";
import ActivitiesPage from "./pages/ActivitiesPage.tsx";
import AnnualPlansPage from "./pages/AnnualPlansPage.tsx";
import Gallery from "./pages/Gallery.tsx";
import FundingsPlanPage from "./pages/FundingsPlanPage.tsx";
import SeniorMembersPage from "./pages/SeniorMembersPage.tsx";
import TeamPage from "./pages/Team.tsx";
import ReportsPage from "./pages/ReportsPage.tsx";

// Pixel Perfect Platform Imports
import PPLayout from "./components/pixel-perfect/Layout";
import PPIndex from "./pages/pixel-perfect/Index";
import PPAbout from "./pages/pixel-perfect/About";
import PPCommitteeOrganizing from "./pages/pixel-perfect/CommitteeOrganizing";
import PPCommitteeSteering from "./pages/pixel-perfect/CommitteeSteering";
import PPCommitteeAdvisory from "./pages/pixel-perfect/CommitteeAdvisory";
import PPAuthors from "./pages/pixel-perfect/Authors";
import PPRegister from "./pages/pixel-perfect/Register";
import PPCall from "./pages/pixel-perfect/Call";
import PPSpeakers from "./pages/pixel-perfect/Speakers";
import PPVenue from "./pages/pixel-perfect/Venue";
import PPTourism from "./pages/pixel-perfect/Tourism";
import PPHotels from "./pages/pixel-perfect/Hotels";
import PPContact from "./pages/pixel-perfect/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <SpeedInsights />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/activities" element={<ActivitiesPage />} />
          <Route path="/Team" element={<TeamPage />} />
          <Route path="/office-bearers" element={<OfficeBearersPage />} />
          <Route path="/members" element={<MembersPage />} />
          <Route path="/senior-members" element={<SeniorMembersPage />} />
          <Route path="/awards" element={<AwardsPage />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/annual-plans" element={<AnnualPlansPage />} />
          <Route path="/funding" element={<FundingsPlanPage />} />
          <Route path="/societies" element={<SocietiesPage />} />
          <Route path="/societies/srec" element={<SrecBranchPage />} />
          <Route path="/societies/wie" element={<WiePage />} />
          <Route path="/societies/embs" element={<EmbsPage />} />
          <Route path="/societies/cs" element={<CsPage />} />
          <Route path="/societies/comsoc" element={<ComsocPage />} />
          <Route path="/societies/pels" element={<PelsPage />} />
          <Route path="/societies/im" element={<ImPage />} />
          <Route path="/societies/cis" element={<CisPage />} />
          <Route path="/join" element={<JoinPage />} />
          <Route path="/societies/:id" element={<SocietyDetailPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/admin-login" element={<AdminLoginPage />} />
          <Route path="/admin/*" element={<AdminDashboardRoute />} />
          
          {/* Pixel Perfect Platform Routes */}
          <Route path="/pixel-perfect" element={<PPLayout />}>
            <Route index element={<PPIndex />} />
            <Route path="about" element={<PPAbout />} />
            <Route path="committee" element={<Navigate to="/pixel-perfect/committee/organizing" replace />} />
            <Route path="committee/organizing" element={<PPCommitteeOrganizing />} />
            <Route path="committee/steering" element={<PPCommitteeSteering />} />
            <Route path="committee/advisory" element={<PPCommitteeAdvisory />} />
            <Route path="author" element={<PPAuthors />} />
            <Route path="register" element={<PPRegister />} />
            <Route path="call" element={<PPCall />} />
            <Route path="speakers" element={<PPSpeakers />} />
            <Route path="venue" element={<PPVenue />} />
            <Route path="venue/tourism" element={<PPTourism />} />
            <Route path="venue/hotels" element={<PPHotels />} />
            <Route path="contact" element={<PPContact />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;