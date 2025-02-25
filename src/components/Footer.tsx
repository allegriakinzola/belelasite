import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">BELELA</h3>
            <p className="text-sm text-gray-400">Votre application d'alerte locale pour une communauté plus sûre.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <p className="text-sm text-gray-400">Email: contact@belela.com</p>
            <p className="text-sm text-gray-400">Tél: +243 828312365</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li><a href="#accueil" className="text-sm text-gray-400 hover:text-white">Accueil</a></li>
              <li><a href="#fonctionnalites" className="text-sm text-gray-400 hover:text-white">Fonctionnalités</a></li>
              <li><a href="#telechargement" className="text-sm text-gray-400 hover:text-white">Téléchargement</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm text-gray-400">&copy; 2025 Belela. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
