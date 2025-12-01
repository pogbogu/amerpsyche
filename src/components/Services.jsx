import React from "react";
import { Brain, Users, Heart, Clock, Star } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Psychiatric Evaluation",
      description:
        "Comprehensive assessment to understand your mental health needs and create a personalized treatment plan.",
      features: ["Initial Assessment", "Diagnosis", "Treatment Planning"],
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Therapy Sessions",
      description:
        "Individual, couples, and family therapy sessions with licensed mental health professionals.",
      features: ["CBT Therapy", "Family Therapy", "Group Sessions"],
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Medication Management",
      description:
        "Careful monitoring and management of psychiatric medications for optimal treatment outcomes.",
      features: [
        "Prescription Management",
        "Side Effect Monitoring",
        "Dosage Adjustment",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-white w-full">
      <div className="container mx-auto px-4 flex flex-col gap-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Our Services
          </h2>
          <p className="text-gray-custom text-lg  max-w-2xl mx-auto">
            Comprehensive mental health services designed to support your
            journey to wellness
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 px-6 w-full">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-light rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-4">
                {service.title}
              </h3>
              <p className="text-gray-custom mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-sm text-gray-custom"
                  >
                    <Star className="w-4 h-4 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-linear-to-r from-primary to-accent  p-8 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <Clock className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-4">
              24/7 Emergency Support
            </h3>
            <p className="mb-6 opacity-90">
              Immediate help is available for mental health emergencies. Don't
              hesitate to reach out.
            </p>
            <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-light transition-colors">
              Call Emergency Line
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
