
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, GraduationCap, Wallet, BookOpen, Users } from 'lucide-react';
import Button from '@/components/Button';

const UniversityReadiness = () => {
  return (
    <section id="university-readiness" className="py-20 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
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
          
          <div className="relative">
            <div className="ios-card bg-gradient-to-br from-sky-50 to-indigo-50 p-10">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6">University Ready Checklist</h3>
                <ul className="space-y-4">
                  {universityChecklist.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-6 h-6 rounded bg-green-100 text-green-600 flex items-center justify-center mr-4 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex items-center">
                    <img 
                      src="/placeholder.svg" 
                      alt="Student Testimonial" 
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <p className="text-sm italic text-gray-600">
                        "Starting with CPost at age 10 taught me financial skills that made my transition to university so much easier. I'm managing my budget better than most of my friends."
                      </p>
                      <p className="text-sm font-medium mt-1">Alex, 19 - First Year University Student</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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

const universityChecklist = [
  "Can create and follow a monthly budget",
  "Understands student loan terms and responsibilities",
  "Knows how to comparison shop and find best deals",
  "Can manage a checking account and avoid overdrafts",
  "Understands the impact of credit score on future finances",
  "Can identify and avoid financial scams targeting students",
  "Knows how to save for both emergencies and goals",
  "Understands basic investing principles for long-term growth"
];

export default UniversityReadiness;
