import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import About from "./pages/About";
import CommitteeOrganizing from "./pages/CommitteeOrganizing";
import CommitteeSteering from "./pages/CommitteeSteering";
import CommitteeAdvisory from "./pages/CommitteeAdvisory";
import Authors from "./pages/Authors";
import Register from "./pages/Register";
import Call from "./pages/Call";
import Speakers from "./pages/Speakers";
import Venue from "./pages/Venue";
import Tourism from "./pages/Tourism";
import Hotels from "./pages/Hotels";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/committee" element={<Navigate to="/committee/organizing" replace />} />
            <Route path="/committee/organizing" element={<CommitteeOrganizing />} />
            <Route path="/committee/steering" element={<CommitteeSteering />} />
            <Route path="/committee/advisory" element={<CommitteeAdvisory />} />
            <Route path="/author" element={<Authors />} />
            <Route path="/register" element={<Register />} />
            <Route path="/call" element={<Call />} />
            <Route path="/speakers" element={<Speakers />} />
            <Route path="/venue" element={<Venue />} />
            <Route path="/venue/tourism" element={<Tourism />} />
            <Route path="/venue/hotels" element={<Hotels />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
