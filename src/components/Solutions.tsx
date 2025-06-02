import React from 'react';
import { motion } from 'framer-motion';
import { TelemedIcon, HealthTechIcon } from './CustomIcons';
import SolutionCard from './SolutionCard';
import AnimatedSection from './AnimatedSection';

const Solutions: React.FC = () => {
  const solutions = [
    {
      id: 1,
      title: "Mallettes de télémédecine",
      description: "Kits portables avec outils de diagnostic (ECG, tension, otoscope…).",
      icon: <TelemedIcon />,
      action: "Demander une démonstration ou un échange",
      formFields: [
        { name: "entityName", label: "Nom de l'entité", type: "text" },
        { name: "country", label: "Pays & ville", type: "text" },
        { name: "projectManager", label: "Responsable du projet / Fonction", type: "text" },
        { name: "phone", label: "Téléphone / WhatsApp", type: "tel" },
        { name: "email", label: "E-mail", type: "email" },
        { name: "quantity", label: "Nombre de mallettes envisagées", type: "number" },
        { name: "targetAreas", label: "Zone(s) d'intervention ciblée(s)", type: "text" },
        { name: "objective", label: "Objectif du projet", type: "textarea" },
        { name: "message", label: "Message complémentaire", type: "textarea" },
      ]
    },
    {
      id: 2,
      title: "Bornes de télémédecine",
      description: "Dispositifs fixes connectés pour les téléconsultations.",
      icon: <HealthTechIcon />,
      action: "Planifier un rendez-vous d'étude technique",
      formFields: [
        { name: "establishmentName", label: "Nom de l'établissement", type: "text" },
        { name: "location", label: "Localisation", type: "text" },
        { name: "terminalType", label: "Type de borne souhaitée", type: "text" },
        { name: "consultationNeeds", label: "Besoins en téléconsultation", type: "textarea" },
        { name: "hasStableInternet", label: "Accès Internet stable ?", type: "select", options: ["Oui", "Non", "Incertain"] },
        { name: "contactPerson", label: "Interlocuteur principal", type: "text" },
        { name: "message", label: "Message libre", type: "textarea" },
      ]
    },
    {
      id: 3,
      title: "Véhicules médicalisés",
      description: "Ambulances et unités mobiles pour zones isolées.",
      icon: <TelemedIcon />,
      action: "Obtenir une fiche technique et un devis",
      formFields: [
        { name: "structure", label: "Structure concernée", type: "text" },
        { name: "vehicleType", label: "Type de véhicule recherché", type: "text" },
        { name: "estimatedQuantity", label: "Quantité estimée", type: "number" },
        { name: "budget", label: "Budget indicatif", type: "text" },
        { name: "financingMethod", label: "Mode de financement", type: "text" },
        { name: "projectLocation", label: "Localisation du projet", type: "text" },
        { name: "contact", label: "Contact", type: "text" },
      ]
    },
    {
      id: 4,
      title: "Conteneurs santé",
      description: "Structures médicalisées à installer.",
      icon: <HealthTechIcon />,
      action: "Demander un échange sur les modules santé",
      formFields: [
        { name: "organization", label: "Organisation demandeuse", type: "text" },
        { name: "containerType", label: "Type de conteneur", type: "text" },
        { name: "area", label: "Zone à équiper", type: "text" },
        { name: "containerCount", label: "Nombre de conteneurs", type: "number" },
        { name: "urgency", label: "Urgence du besoin", type: "select", options: ["Immédiate", "Dans les 3 mois", "Dans les 6 mois", "Projet à long terme"] },
        { name: "nameAndRole", label: "Nom et fonction", type: "text" },
        { name: "contactDetails", label: "Coordonnées complètes", type: "textarea" },
      ]
    },
    {
      id: 5,
      title: "Télé-expertise locale et internationale",
      description: "Mise en réseau avec spécialistes.",
      icon: <TelemedIcon />,
      action: "Organiser une réunion d'intégration de la télé-expertise",
      formFields: [
        { name: "medicalStructure", label: "Structure médicale", type: "text" },
        { name: "specialties", label: "Spécialités visées", type: "text" },
        { name: "volume", label: "Volume estimé de télé-expertises", type: "text" },
        { name: "hasPartner", label: "Partenaire identifié ?", type: "select", options: ["Oui", "Non", "En recherche"] },
        { name: "referent", label: "Référent", type: "text" },
        { name: "objectives", label: "Objectifs attendus", type: "textarea" },
      ]
    },
    {
      id: 6,
      title: "Assistance aux évacuations sanitaires",
      description: "Transferts médicaux assistés.",
      icon: <HealthTechIcon />,
      action: "Demander une convention ou un partenariat",
      formFields: [
        { name: "entityType", label: "Type d'entité", type: "text" },
        { name: "careCountry", label: "Pays de prise en charge", type: "text" },
        { name: "evacuationDestination", label: "Destination d'évacuation", type: "text" },
        { name: "estimatedCases", label: "Nombre estimé de cas/an", type: "number" },
        { name: "pathologyTypes", label: "Types de pathologies", type: "text" },
        { name: "contactPerson", label: "Responsable contact", type: "text" },
        { name: "additionalInfo", label: "Informations utiles", type: "textarea" },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section id="solutions" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-gray-900 dark:text-white">
            Nos solutions
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Des solutions innovantes et adaptées pour répondre aux besoins de santé en Afrique,
            même dans les zones les plus reculées.
          </p>
        </AnimatedSection>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {solutions.map((solution, index) => (
            <AnimatedSection key={solution.id} delay={index * 0.1}>
              <SolutionCard solution={solution} />
            </AnimatedSection>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Solutions;