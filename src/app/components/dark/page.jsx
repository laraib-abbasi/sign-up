"use client"

import { useEffect, useState } from "react";

export default function DarkMode() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      const savedMode = localStorage.getItem("darkMode");
      return savedMode ? JSON.parse(savedMode) : false;
    }
    return false;
  });

    // Use useEffect to ensure this runs on the client
   
  
    useEffect(() => {
      if (typeof window !== "undefined") {
        localStorage.setItem("darkMode", JSON.stringify(isDark));
        if (isDark) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }
    }, [isDark]);
  
    const handleDark = () => {
      setIsDark((prevMode) => !prevMode);
      document.documentElement.classList.toggle("darkMode");
    };

    return (
      <div>

      <div><button type="button" onClick={handleDark} className="" >
          {isDark?
          (
           <span className="group inline-flex shrink-0 justify-end items-center size-9">
        <svg className="shrink-0 size-4 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
        </svg>
      </span>):(
      <span className="group inline-flex shrink-0 justify-end items-center size-9">
      <svg className="shrink-0 size-4 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="navy" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="4"></circle>
        <path d="M12 2v2"></path>
        <path d="M12 20v2"></path>
        <path d="m4.93 4.93 1.41 1.41"></path>
        <path d="m17.66 17.66 1.41 1.41"></path>
        <path d="M2 12h2"></path>
        <path d="M20 12h2"></path>
        <path d="m6.34 17.66-1.41 1.41"></path>
        <path d="m19.07 4.93-1.41 1.41"></path>
      </svg>
      </span>
      )
      }
    </button>
  
    </div>
    </div>
    )
    }