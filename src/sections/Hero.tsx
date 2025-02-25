'use client';

import Image from 'next/image';
import { MdOutlineSecurity } from "react-icons/md";
import { GiSecurityGate } from "react-icons/gi";
import { MdSecurityUpdateWarning } from "react-icons/md";

export default function Hero() {
  return (
    <section id='contact' className="py-16 bg-white text-center px-6 md:px-20 mx-auto">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900">Nos Activités</h2>
        <p className="mt-4 text-gray-600">
          Belela est une application innovante qui permet aux citoyens et aux entreprises d’alerter rapidement les forces de l’ordre et les pompiers en cas d’urgence.
        </p>
      </div>

      <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-12">
        <div className="relative w-full md:w-1/2 flex justify-center">
          <Image src="/phonefeatures.png" alt="Capture d'écran de l'application" width={500} height={500} className="rounded-lg" />
        </div>
        
        <div className="space-y-8 max-w-md">
          <Step title="Alerte Criminalité Domiciliaire" description="Les particuliers peuvent signaler instantanément une agression ou une intrusion chez eux et contacter la police en un clic." icone={<MdSecurityUpdateWarning size={32} className="text-white" />} />
          <Step title="Alerte Incendie" description="En cas d’incendie, les citoyens peuvent alerter rapidement les pompiers et obtenir une intervention rapide."  icone={<MdOutlineSecurity size={32} className="text-white" />} />
          <Step title="Alerte Cambriolage pour les Entreprises" description="Les banques et entreprises peuvent signaler un cambriolage en appuyant sur un bouton d’alerte, connectant ainsi directement la police la plus proche." icone={<GiSecurityGate size={32} className="text-white" />} />
        </div>
      </div>
      {/* Nouvelle Section : Télécharger l'application Belela */}
             <div className="mt-16 bg-red-600 text-white py-12 px-6 rounded-lg max-w-5xl mx-auto text-center md:text-left flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <h2 className="text-2xl font-bold">Télécharger l'application Belela</h2>
                <p className="mt-4 text-white">
                BELELA est une application mobile conçue pour offrir aux citoyens congolais, en particulier ceux de Kinshasa, un accès rapide et efficace aux services de police et de secours en cas d’urgence. Elle centralise les numéros d’urgence des services de police et des pompiers tout en intégrant un système de géolocalisation, permettant d’identifier le poste de police ou la caserne la plus proche de l’utilisateur.
                </p>
                <button className="mt-6 px-6 py-2 bg-black text-white rounded-lg">Commencer</button>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <Image src="/phonemap.png" alt="Capture d'écran de l'application Belela" width={400} height={400} className="rounded-lg" />
              </div>
            </div>
    </section>
  );
}

function Step({ title, description, icone} : { title : string; description: string, icone: any}) {
  return (
    <div className="flex items-start gap-2">
      <div className="w-26 h-20 bg-red-600 rounded-full flex items-center justify-center mt-2">
        {icone}
      </div>
      <div className="text-left">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

