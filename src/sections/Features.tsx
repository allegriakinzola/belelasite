import React from 'react'; 
import Image from 'next/image';

export const Features = () => {
  return (
    <section id='about' className="py-16 bg-slate-200 text-center px-6 md:px-20 mx-auto">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900">Les fonctionnalités clés de Belela</h2>
        <p className="mt-4 text-gray-600">
          BELELA est une application mobile qui permet aux citoyens d’accéder rapidement aux services de police et de secours en cas d’urgence grâce à des fonctionnalités innovantes.
        </p>
      </div>
      <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-12">
        <div className="space-y-8 max-w-sm">
          <Step number={1} title="Appels d’urgence gratuits" description="Grâce aux numéros verts, les citoyens peuvent contacter la police et les pompiers même sans crédit téléphonique, garantissant ainsi une assistance immédiate en cas de danger." />
          <Step number={3} title="Bouton d’alerte rapide" description="Un bouton d’urgence intégré permet d’envoyer un signal instantané aux autorités, sans passer par un appel vocal, idéal en cas de danger immédiat." />
        </div>
        <div>
          <Image src="/phonefeatures.png" alt="Capture d'écran de l'application" width={500} height={500} className="rounded-lg" />
        </div>
        <div className="space-y-8 max-w-sm">
          <Step number={2} title="Géolocalisation des secours" description="L’application identifie automatiquement le poste de police ou la caserne de pompiers la plus proche pour assurer une intervention rapide et efficace." />
          <Step number={4} title="Répertoire centralisé des services de sécurité" description="Accès rapide à un annuaire structuré de tous les numéros d’urgence, facilitant la mise en relation avec les services de secours." />
        </div>
      </div>
    </section>

    
  );
};

export default Features;

function Step({ number, title, description }: { number: number; title: string; description: string }) {
  return (
    <div className="flex items-center space-x-4">
      <div className="flex items-center justify-center w-12 h-12 bg-red-600 text-white text-xl font-bold rounded-full shrink-0">
        {number}
      </div>
      <div className="text-left">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}