
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, GraduationCap, Wallet, BookOpen, Users } from 'lucide-react';
import Button from '@/components/Button';

const UniversityReadiness = () => {
  return (
    <section id="university-readiness" className="py-20 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-6">Ready for University and Beyond</h2>
            <p className="text-gray-600 mb-6">
              By the time your child reaches university age, they'll have the financial literacy skills needed to navigate adult life confidently. Our program gradually builds their knowledge and responsibility.
            </p>
            
            <div className="space-y-6 mb-8">
              {readinessPoints.map((point, index) => (
                <div key={index} className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className={`w-8 h-8 rounded-full ${point.bgColor} flex items-center justify-center`}>
                      <point.icon className={`h-4 w-4 ${point.iconColor}`} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium">{point.title}</h3>
                    <p className="text-gray-600 mt-1">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <Link to="/signin">
              <Button variant="primary" size="lg" className="group">
                Start Their Journey Now
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const readinessPoints = [
  {
    icon: GraduationCap,
    title: "Education Funding Knowledge",
    description: "Understanding student loans, scholarships, grants, and responsible borrowing for education.",
    bgColor: "bg-blue-100",
    iconColor: "text-blue-600"
  },
  {
    icon: Wallet,
    title: "Independent Money Management",
    description: "Ability to create and follow a budget, track expenses, and prioritize spending wisely.",
    bgColor: "bg-green-100",
    iconColor: "text-green-600"
  },
  {
    icon: BookOpen,
    title: "Financial Literacy Foundation",
    description: "Solid understanding of banking, saving, interest, and basic investment principles.",
    bgColor: "bg-purple-100",
    iconColor: "text-purple-600"
  },
  {
    icon: Users,
    title: "Peer Financial Pressure Resistance",
    description: "Confidence to make sound financial decisions despite social pressures from peers.",
    bgColor: "bg-orange-100",
    iconColor: "text-orange-600"
  }
];

export default UniversityReadiness;
