import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full h-[7.5vw] bg-[linear-gradient(90deg,#00704A_0%,#00A864_50%,#00704A_100%)] flex items-center justify-center">
      <div className="w-full h-full flex items-center justify-center">
        {/* ✅ Desktop Navbar */}
        {!isMobile && (
          <div className="w-full flex items-center justify-center gap-[10vw] font-starbucks font-thin text-white text-[1.5rem]">
            <div>Home</div> 
            <div>About</div>
            <div>
              <img
                className="w-[6vw] object-cover"
                src="/Images/Starbucks-logo.png"
                alt="Starbucks Logo"
              />
            </div>
            <div>Products</div>
            <div>Contact</div>
          </div>
        )}

        {/* ✅ Mobile Navbar */}
        {isMobile && (
          <div className="w-full flex items-center justify-between px-6 font-starbucks font-thin text-white text-[1.2rem]">
            <div>
              <img
                className="w-[10vw] object-cover"
                src="/Images/Starbucks-logo.png"
                alt="Starbucks Logo"
              />
            </div>
            <button className="text-white text-[1.5rem]">☰</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
