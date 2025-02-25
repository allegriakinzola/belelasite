"use client";
import React, { useState } from 'react';
import { CgDetailsMore } from "react-icons/cg";
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Fonction pour scroller vers une section
  const scrollToSection = (id : string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" }); // Animation fluide
    }
  };

  return (
    <nav className="bg-white top-0 fixed w-full z-10 h-20 shadow-sm px-6 md:px-20">
      <div className='flex justify-between h-full items-center'>
        <Image
          src="/logobelela.png"
          alt="image de l'application belela"
          width={80} 
          height={80}
          className="h-auto max-w-[300px] md:max-w-[500px]" 
        />

        {/* Menu pour grand écran */}
        <div className='hidden md:flex items-center'>
          <ul className='flex space-x-4'>
            <li className='text-md cursor-pointer' onClick={() => scrollToSection('home')}>Accueil</li>
            <li className='text-md cursor-pointer' onClick={() => scrollToSection('about')}>Présentation</li>
            <li className='text-md cursor-pointer' onClick={() => scrollToSection('contact')}>Activités</li>
          </ul>
          <button className='bg-red-600 text-white py-2 px-4 rounded-md ml-4'>Télécharger</button>
        </div>

        {/* Bouton du menu mobile */}
        <button className='md:hidden' onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <CgDetailsMore size={24} /> : <CgDetailsMore size={24} />}
        </button>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <div className='md:hidden flex flex-col items-center bg-slate-300 w-full py-4 space-y-4'>
          <a onClick={() => scrollToSection('home')} className='text-md cursor-pointer'>Accueil</a>
          <a onClick={() => scrollToSection('about')} className='text-md cursor-pointer'>Présentation</a>
          <a onClick={() => scrollToSection('contact')} className='text-md cursor-pointer'>Activités</a>
          <button className='bg-red-600 text-white py-2 px-4 rounded-md'>Télécharger</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;