"use client";

import { useAuth } from "@/context/AuthContext";
import NavLink from "./NavLink";
import { useState, useEffect } from "react";

const navLinks = [
  {
    id: 1,
    children: "خانه",
    path: "/",
  },
  {
    id: 2,
    children: "بلاگ ها",
    path: "/blogs",
  },
];

function Header() {
  const { user, isLoading } = useAuth();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        sticky top-0 
        z-50  
        transition-all duration-200 
        border-b border-b-secondary-300
        mb-8
        ${scrolled 
          ? "bg-white/95 backdrop-blur-md shadow-lg"  
          : "bg-white shadow-md"  
        }
        ${isLoading ? "blur-sm opacity-70" : "opacity-100"}
      `}
    >
      <nav className="container xl:max-w-screen-xl">
        <ul className="flex items-center text-secondary-400 justify-between py-2">
          <div className="flex items-center gap-x-10">
            {navLinks.map((navLink) => (
              <li key={navLink.id}>
                <NavLink path={navLink.path}>{navLink.children}</NavLink>
              </li>
            ))}
          </div>
          
          <li>
            {user ? (
              <NavLink path="/profile">پروفایل</NavLink>
            ) : (
              <NavLink path="/signin">ورود</NavLink>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;