import React, { useState } from "react";
import { Button } from "./ui/button";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: "(555) 123-4567",
      subtitle: "Mon-Fri 8am-6pm",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: "hello@mindcare.com",
      subtitle: "We respond within 24 hours",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Office",
      details: "123 Wellness St, New York, NY",
      subtitle: "Visit us in person",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Hours",
      details: "Mon-Fri: 8am-6pm",
      subtitle: "Sat: 9am-1pm",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-custom text-lg max-w-2xl mx-auto">
            Ready to start your journey to better mental health? Contact us
            today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold text-secondary mb-8">
              Contact Information
            </h3>
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white mb-4">
                    {info.icon}
                  </div>
                  <h4 className="font-semibold text-secondary mb-2">
                    {info.title}
                  </h4>
                  <p className="text-gray-custom font-medium mb-1">
                    {info.details}
                  </p>
                  <p className="text-sm text-gray-custom">{info.subtitle}</p>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl p-8">
              <h4 className="font-semibold text-secondary mb-4">
                Emergency Contact
              </h4>
              <p className="text-gray-custom mb-4">
                For mental health emergencies, please call our 24/7 crisis line:
              </p>
              <div className="text-2xl font-bold text-primary mb-2">
                (555) 987-EMRG
              </div>
              <p className="text-sm text-gray-custom">
                Available 24 hours a day, 7 days a week
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-secondary mb-6">
              Send us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-secondary mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-secondary mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary mb-2">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="appointment">Book Appointment</option>
                    <option value="information">General Information</option>
                    <option value="billing">Billing Question</option>
                    <option value="emergency">Emergency</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-secondary mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 border border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-vertical"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90"
              >
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
