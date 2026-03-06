import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-82.25 bg-[linear-gradient(0deg,rgba(0,0,0,0.20)_0%,rgba(0,0,0,0.20)_100%),linear-gradient(180deg,#C586A6_-18.5%,#9F558D_13.06%,#49407A_52.33%,#61417B_115.45%)] flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-25 py-6 sm:py-8 md:py-10 lg:py-12 gap-4 sm:gap-6 md:gap-8 lg:gap-10 relative mt-12 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-30">
      {/* Sun - Hidden on very small screens */}
      <Image
        src={"/Matahari 2.png"}
        alt="Matahari"
        width={500}
        height={500}
        className="hidden sm:block object-cover w-12 sm:w-16 md:w-20 lg:w-24 xl:w-30"
      />
      {/* Logo */}
      <Image
        src={"/Logo Ajisaka.png"}
        alt="logo ajisaka"
        width={500}
        height={500}
        className="object-cover w-32 sm:w-40 md:w-52 lg:w-72 xl:w-90"
      />
      {/* Moon - Hidden on very small screens */}
      <Image
        src={"/Bulan 2.png"}
        alt="Bulan"
        width={500}
        height={500}
        className="hidden sm:block object-cover w-12 sm:w-16 md:w-20 lg:w-24 xl:w-30"
      />

      {/* Side gradients */}
      <div className="absolute top-0 left-0 w-1/4 h-full bg-[linear-gradient(270deg,rgba(0,0,0,0)_23.72%,rgba(0,0,0,0.5)_69.19%)]" />
      <div className="absolute top-0 right-0 w-1/4 h-full bg-[linear-gradient(90deg,rgba(0,0,0,0)_23.72%,rgba(0,0,0,0.5)_69.19%)]" />

      {/* Decorative leaves - Responsive */}
      <Image
        src={"/Bunga Daun 14.png"}
        alt="Bunga Daun"
        className="absolute bottom-0 left-0 object-cover w-24 sm:w-40 md:w-56 lg:w-80 xl:w-100 z-30"
        width={500}
        height={500}
        style={{ '--initial-rotate': '0deg' } as React.CSSProperties}
      />
      <Image
        src={"/Bunga Daun 15.png"}
        alt="Bunga Daun"
        className="block absolute bottom-0 left-0 object-cover w-40 lg:w-64 xl:w-80 z-10 animate-[leafSway_4s_ease-in-out_infinite]"
        width={500}
        height={500}
        style={{ '--initial-rotate': '0deg' } as React.CSSProperties}
      />
      <Image
        src={"/Bunga Daun 15.png"}
        alt="Bunga Daun"
        className="block absolute bottom-0 right-0 object-cover w-40 lg:w-64 xl:w-80 z-10 scale-x-[-1] animate-[leafSway_4s_ease-in-out_infinite]"
        width={500}
        height={500}
        style={{ '--initial-rotate': '0deg' } as React.CSSProperties}
      />
      <Image
        src={"/Bunga Daun 5.png"}
        alt="Bunga Daun"
        className="block absolute bottom-0 left-0 object-cover w-52 xl:w-100 z-0 animate-[leafSway_4s_ease-in-out_infinite]"
        width={500}
        height={500}
        style={{ '--initial-rotate': '0deg' } as React.CSSProperties}
      />
      <Image
        src={"/Bunga Daun 5.png"}
        alt="Bunga Daun"
        className="block absolute bottom-0 right-0 object-cover w-52 xl:w-100 z-0 scale-x-[-1] animate-[leafSway_4s_ease-in-out_infinite]"
        width={500}
        height={500}
        style={{ '--initial-rotate': '0deg' } as React.CSSProperties}
      />
      <Image
        src={"/Bunga Daun 14.png"}
        alt="Bunga Daun"
        className="absolute bottom-0 right-0 object-cover w-24 sm:w-40 md:w-56 lg:w-80 xl:w-100 z-30 scale-x-[-1] "
        width={500}
        height={500}
        style={{ '--initial-rotate': '0deg' } as React.CSSProperties}
      />
    </footer>
  );
};

export default Footer;
