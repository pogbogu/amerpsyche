import React from "react";
import { Button } from "./ui/button";
import { MapPin, Clock, DollarSign, Heart } from "lucide-react";

const Jobs = () => {
  const positions = [
    {
      title: "Licensed Psychiatrist",
      department: "Clinical",
      type: "Full-time",
      location: "New York, NY",
      salary: "$250,000 - $300,000",
      description:
        "We are seeking a compassionate psychiatrist to join our team and provide comprehensive mental health care.",
      requirements: [
        "MD/DO Degree",
        "Board Certified",
        "State License",
        "3+ years experience",
      ],
    },
    {
      title: "Clinical Psychologist",
      department: "Therapy",
      type: "Full-time",
      location: "Remote",
      salary: "$90,000 - $120,000",
      description:
        "Provide evidence-based therapy and psychological assessment to diverse patient populations.",
      requirements: [
        "PhD/PsyD",
        "State License",
        "2+ years experience",
        "Specialization preferred",
      ],
    },
    {
      title: "Mental Health Nurse",
      department: "Nursing",
      type: "Part-time",
      location: "New York, NY",
      salary: "$75,000 - $95,000",
      description:
        "Join our nursing team to provide medication management and patient education.",
      requirements: [
        "RN License",
        "Psychiatric Certification",
        "2+ years experience",
        "BLS Certified",
      ],
    },
  ];

  return (
    <section id="jobs" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Join Our Team
          </h2>
          <p className="text-gray-custom text-lg max-w-2xl mx-auto">
            Help us make a difference in mental health care. Join our team of
            dedicated professionals.
          </p>
        </div>

        <div className="grid gap-6 max-w-4xl mx-auto">
          {positions.map((position, index) => (
            <div
              key={index}
              className="bg-light rounded-2xl p-8 hover:shadow-lg transition-all duration-300 border-l-4 border-primary"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-secondary mb-2">
                    {position.title}
                  </h3>
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center gap-2 text-gray-custom">
                      <MapPin className="w-4 h-4" />
                      {position.location}
                    </div>
                    <div className="flex items-center gap-2 text-gray-custom">
                      <Clock className="w-4 h-4" />
                      {position.type}
                    </div>
                    <div className="flex items-center gap-2 text-gray-custom">
                      <DollarSign className="w-4 h-4" />
                      {position.salary}
                    </div>
                  </div>
                  <p className="text-gray-custom mb-4">
                    {position.description}
                  </p>
                  <div className="mb-6">
                    <h4 className="font-semibold text-secondary mb-2">
                      Requirements:
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {position.requirements.map((req, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-sm text-gray-custom"
                        >
                          <Heart className="w-4 h-4 text-primary" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <Button className="bg-primary hover:bg-primary/90 whitespace-nowrap">
                  Apply Now
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-white max-w-4xl mx-auto">
            <Heart className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-4">Why Work With Us?</h3>
            <p className="mb-6 opacity-90 max-w-2xl mx-auto">
              Join a supportive team that values work-life balance, professional
              development, and making a real difference in people's lives.
            </p>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              View All Benefits
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jobs;
