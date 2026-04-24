import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/2.png";
import ieeeLogo from "@/assets/ieee-logo.png";

const navItems: { label: string; to: string; children?: { label: string; to: string }[] }[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  {
    label: "Committee",
    to: "/committee/organizing",
    children: [
      { label: "Organizing", to: "/committee/organizing" },
      { label: "Steering", to: "/committee/steering" },
      { label: "Advisory", to: "/committee/advisory" },
    ],
  },
  { label: "Authors", to: "/author" },
  { label: "Registration", to: "/register" },
  { label: "Call for Papers", to: "/call" },
  { label: "Speakers", to: "/speakers" },
  {
    label: "Venue",
    to: "/venue",
    children: [
      { label: "Venue", to: "/venue" },
      { label: "Tourist Places", to: "/venue/tourism" },
      { label: "Hotels to Stay", to: "/venue/hotels" },
    ],
  },
  { label: "Contact", to: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isParentActive = (item: typeof navItems[number]) =>
    item.children?.some((c) => location.pathname.startsWith(c.to.split("/").slice(0, 2).join("/"))) ?? false;

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled
          ? "bg-primary/95 backdrop-blur-lg shadow-soft border-b border-primary-glow/20 py-2"
          : "bg-primary text-primary-foreground py-4"
        }`}
    >
      <div className="container flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-3 group">
          <motion.img
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.8, ease: "anticipate" }}
            src={logo}
            alt="Sri Ramakrishna Engineering College"
            className="h-10 w-10 sm:h-12 sm:w-12 bg-white rounded-full p-0.5 ring-2 ring-accent/30 group-hover:ring-accent transition-all shrink-0"
          />
          <motion.img
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            src={ieeeLogo}
            alt="IEEE SREC"
            className="h-10 sm:h-12 w-auto bg-white rounded-full p-1 ring-2 ring-accent/30 group-hover:ring-accent transition-all shrink-0 hidden xs:block"
          />
          <div className="leading-tight ml-1">
            <p className="font-serif font-semibold text-sm md:text-base tracking-wide text-white group-hover:text-accent transition-colors">IEEE SREC</p>
            <p className="text-[9px] md:text-[11px] tracking-[0.2em] text-white/70 uppercase whitespace-nowrap">Student Branch</p>
          </div>
        </NavLink>

        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) =>
            item.children ? (
              <div key={item.label} className="relative group">
                <button
                  className={`px-3 py-2 text-[13px] font-medium tracking-wide transition-colors flex items-center gap-1 relative ${isParentActive(item) ? "text-accent" : "text-white/90 hover:text-white"
                    }`}
                >
                  {item.label}
                  <ChevronDown className="h-3 w-3 transition-transform group-hover:rotate-180" />
                  {isParentActive(item) && (
                    <motion.div layoutId="nav-underline" className="absolute -bottom-[10px] left-3 right-3 h-[2px] bg-accent" />
                  )}
                </button>
                <div className="absolute left-0 top-full pt-4 w-52 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="bg-card text-foreground rounded-lg shadow-elegant border border-border overflow-hidden origin-top-left transform scale-95 group-hover:scale-100 transition-transform duration-300">
                    {item.children.map((c) => (
                      <NavLink
                        key={c.to}
                        to={c.to}
                        className={({ isActive }) =>
                          `block px-4 py-3 text-sm hover:bg-primary/5 hover:text-primary transition-colors ${isActive ? "text-primary font-bold bg-primary/5 border-l-2 border-accent" : "text-foreground/80 border-l-2 border-transparent"
                          }`
                        }
                      >
                        {c.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `relative px-3 py-2 text-[13px] font-medium tracking-wide transition-colors ${isActive ? "text-accent" : "text-white/90 hover:text-white"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    {isActive && <motion.div layoutId="nav-underline" className="absolute -bottom-[10px] left-3 right-3 h-[2px] bg-accent" />}
                  </>
                )}
              </NavLink>
            )
          )}
          <a
            href="/"
            className="ml-4 px-4 py-2 bg-accent text-primary-dark font-bold tracking-wide rounded-full hover:bg-accent/90 transition-all text-[13px] shadow-[0_0_15px_rgba(var(--accent),0.3)] hover:shadow-[0_0_20px_rgba(var(--accent),0.5)]"
          >
            Back to IEEE
          </a>
        </nav>

        <button
          className="lg:hidden p-2 text-white/90 hover:text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-primary-dark border-t border-primary-glow/20 px-6 overflow-hidden flex flex-col gap-1 shadow-lg"
          >
            <div className="py-4">
              {navItems.map((item, idx) =>
                item.children ? (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    key={item.label}
                    className="mb-2"
                  >
                    <p className="pt-3 pb-1 text-[11px] uppercase tracking-[0.2em] font-semibold text-accent/80">{item.label}</p>
                    <div className="pl-2 flex flex-col gap-1">
                      {item.children.map((c) => (
                        <NavLink
                          key={c.to}
                          to={c.to}
                          onClick={() => setOpen(false)}
                          className={({ isActive }) =>
                            `block px-3 py-2 text-sm rounded-md transition-colors ${isActive ? "bg-primary text-accent font-semibold" : "text-white/80 hover:text-white hover:bg-primary/50"
                            }`
                          }
                        >
                          {c.label}
                        </NavLink>
                      ))}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    key={item.to}
                  >
                    <NavLink
                      to={item.to}
                      end={item.to === "/"}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        `block py-3 px-3 text-sm font-medium rounded-md transition-colors ${isActive ? "bg-primary text-accent font-semibold" : "text-white/90 hover:text-white hover:bg-primary/50"
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  </motion.div>
                )
              )}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.05 }}
                className="mt-4 border-t border-primary-glow/20 pt-4"
              >
                <a
                  href="/"
                  className="block py-3 px-4 text-sm font-bold tracking-wider rounded-md bg-accent text-primary-dark text-center shadow-md uppercase"
                  onClick={() => setOpen(false)}
                >
                  Back to IEEE Website
                </a>
              </motion.div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
