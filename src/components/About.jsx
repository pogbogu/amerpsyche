import React from "react";
import { Award, Users, Target, CheckCircle } from "lucide-react";

const About = () => {
  const stats = [
    { number: "5000+", label: "Patients Helped" },
    { number: "15+", label: "Years Experience" },
    { number: "98%", label: "Patient Satisfaction" },
    { number: "24/7", label: "Support Available" },
  ];

  const values = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Our Mission",
      description:
        "To provide accessible, compassionate mental health care that empowers individuals to achieve lasting wellness.",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Our Vision",
      description:
        "A world where mental health care is stigma-free and accessible to all who need it.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Our Approach",
      description:
        "Patient-centered care that respects your unique journey and collaborates with you on your path to healing.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-light">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
              About AmerPSyche Clinic
            </h2>
            <p className="text-gray-custom text-lg mb-8">
              AmerPsych Mental Health & Holistic Clinic envisions a community
              where every individual feels empowered, supported, and understood
              on their journey toward emotional well-being. We strive to provide
              compassionate, evidence-based care that integrates psychotherapy,
              thoughtful medication management, and effective
              non-pharmacological treatments. Our vision is to create a safe,
              healing space where diverse mental health needs are met with
              respect, cultural sensitivity, and whole-person care. Through
              collaboration, innovation, and holistic practices, we aim to guide
              each patient toward lasting balance, restored hope, and a
              fulfilling quality of life. Our commitment is to inspire wellness
              that nurtures both mind and body.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Licensed and certified mental health professionals",
                "Evidence-based treatment approaches",
                "Confidential and secure environment",
                "Personalized care plans",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-gray-custom">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-custom text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-3">
                {value.title}
              </h3>
              <p className="text-gray-custom">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
