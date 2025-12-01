import React from "react";
import { Button } from "./ui/button";
import { Calendar, Phone, Shield } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="pt-20 bg-linear-to-br from-light to-white min-h-screen w-full"
    >
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-secondary leading-tight">
              AmerPSyche
              <span className="text-primary block">Mental Health Care</span>
            </h1>
            <p className="text-gray-custom text-lg md:text-xl max-w-2xl">
              Your journey to wellness begins here. Professional, confidential
              psychiatric care tailored to your unique needs in a supportive
              environment.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Calendar className="w-5 h-5 mr-2" />
                Book Appointment
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary"
              >
                <Phone className="w-5 h-5 mr-2" />
                Emergency Help
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-6">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm text-gray-custom">Confidential</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm text-gray-custom">
                  Licensed Professionals
                </span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-primary/10 rounded-2xl p-8 aspect-square flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-secondary">
                  Safe Space
                </h3>
                <p className="text-gray-custom">
                  Your mental health journey is our priority
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
