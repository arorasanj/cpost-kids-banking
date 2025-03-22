
import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

const UniversityReadiness = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="university-readiness" className="py-20 bg-gray-50 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Ready for University and Beyond</h2>
          <p className="text-gray-600">
            By the time your child reaches university age, they'll have the financial literacy skills needed to navigate adult life confidently.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
          <div className="w-full md:w-1/3">
            <ul className="space-y-3">
              {readinessPoints.map((point, index) => (
                <li key={index}>
                  <button
                    onClick={() => setActiveIndex(index)}
                    className={`w-full text-left py-4 px-6 rounded-xl transition-all ${
                      activeIndex === index
                        ? 'bg-white shadow-md border-l-4 border-cpost-blue'
                        : 'bg-gray-100 hover:bg-gray-200'
                    }`}
                  >
                    <div className="font-medium">{point.title}</div>
                    <div className="text-sm text-gray-500">{point.ageGroup}</div>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full md:w-2/3">
            <div className="ios-card h-full">
              <h3 className="text-2xl font-bold mb-4">{readinessPoints[activeIndex].title}</h3>
              <p className="text-gray-600 mb-6">{readinessPoints[activeIndex].description}</p>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-lg">What they'll learn:</h4>
                <ul className="space-y-3">
                  {readinessPoints[activeIndex].learnings.map((learning, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{learning}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-lg mb-2">Badge Achievement</h4>
                <div className="flex items-center">
                  <div className={`w-16 h-16 rounded-full ${readinessPoints[activeIndex].badgeColor} flex items-center justify-center mr-4`}>
                    <CheckCircle2 className={`h-8 w-8 ${readinessPoints[activeIndex].iconColor}`} />
                  </div>
                  <div>
                    <p className="font-medium">{readinessPoints[activeIndex].badgeName}</p>
                    <p className="text-sm text-gray-600">{readinessPoints[activeIndex].badgeDescription}</p>
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
    title: "Education Funding Knowledge",
    ageGroup: "University Preparation",
    description: "Understanding student loans, scholarships, grants, and responsible borrowing for education.",
    learnings: [
      "Comparing different student loan options",
      "Searching and applying for scholarships",
      "Understanding interest rates and repayment terms",
      "Creating a college funding plan"
    ],
    badgeName: "Education Finance Expert",
    badgeDescription: "Mastery of education funding options and strategies",
    badgeColor: "bg-blue-100",
    iconColor: "text-blue-600"
  },
  {
    title: "Independent Money Management",
    ageGroup: "Life Skills",
    description: "Ability to create and follow a budget, track expenses, and prioritize spending wisely.",
    learnings: [
      "Creating a personal budget for university life",
      "Tracking expenses with digital tools",
      "Balancing needs vs wants in a limited budget",
      "Managing income from part-time jobs or allowance"
    ],
    badgeName: "Budget Master",
    badgeDescription: "Expert at creating and maintaining personal budgets",
    badgeColor: "bg-green-100",
    iconColor: "text-green-600"
  },
  {
    title: "Financial Literacy Foundation",
    ageGroup: "Core Knowledge",
    description: "Solid understanding of banking, saving, interest, and basic investment principles.",
    learnings: [
      "Understanding different types of bank accounts",
      "Managing online banking safely",
      "Calculating compound interest",
      "Introduction to investment options for young adults"
    ],
    badgeName: "Finance Fundamentals",
    badgeDescription: "Strong grasp of essential financial concepts and practices",
    badgeColor: "bg-purple-100",
    iconColor: "text-purple-600"
  },
  {
    title: "Peer Financial Pressure Resistance",
    ageGroup: "Social Skills",
    description: "Confidence to make sound financial decisions despite social pressures from peers.",
    learnings: [
      "Recognizing financial peer pressure situations",
      "Developing strategies to resist overspending",
      "Creating a personal financial value system",
      "Setting and communicating financial boundaries"
    ],
    badgeName: "Confident Decision-Maker",
    badgeDescription: "Making sound financial choices in social situations",
    badgeColor: "bg-orange-100",
    iconColor: "text-orange-600"
  }
];

export default UniversityReadiness;
