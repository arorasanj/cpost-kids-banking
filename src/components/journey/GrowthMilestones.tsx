
import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

const GrowthMilestones = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="growth-milestones" className="py-20 bg-gray-50 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Financial Growth Milestones</h2>
          <p className="text-gray-600">
            Our program celebrates your child's financial learning journey with milestone achievements that build confidence and knowledge.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
          <div className="w-full md:w-1/3">
            <ul className="space-y-3">
              {milestones.map((milestone, index) => (
                <li key={index}>
                  <button
                    onClick={() => setActiveIndex(index)}
                    className={`w-full text-left py-4 px-6 rounded-xl transition-all ${
                      activeIndex === index
                        ? 'bg-white shadow-md border-l-4 border-cpost-blue'
                        : 'bg-gray-100 hover:bg-gray-200'
                    }`}
                  >
                    <div className="font-medium">{milestone.title}</div>
                    <div className="text-sm text-gray-500">{milestone.age}</div>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full md:w-2/3">
            <div className="ios-card h-full">
              <h3 className="text-2xl font-bold mb-4">{milestones[activeIndex].title}</h3>
              <p className="text-gray-600 mb-6">{milestones[activeIndex].description}</p>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-lg">What they'll learn:</h4>
                <ul className="space-y-3">
                  {milestones[activeIndex].learnings.map((learning, index) => (
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
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center mr-4">
                    <img 
                      src="/placeholder.svg" 
                      alt={milestones[activeIndex].badgeName} 
                      className="w-10 h-10"
                    />
                  </div>
                  <div>
                    <p className="font-medium">{milestones[activeIndex].badgeName}</p>
                    <p className="text-sm text-gray-600">{milestones[activeIndex].badgeDescription}</p>
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

const milestones = [
  {
    title: "First Savings Goal",
    age: "Ages 5-7",
    description: "Your child's first experience setting and achieving a savings goal, laying the foundation for future financial habits.",
    learnings: [
      "Understanding delayed gratification",
      "Setting a specific, achievable goal",
      "Tracking progress visually",
      "Experiencing the satisfaction of achievement"
    ],
    badgeName: "Savings Explorer",
    badgeDescription: "Awarded for setting and reaching their first savings goal"
  },
  {
    title: "Budget Basics",
    age: "Ages 8-10",
    description: "Introducing the concept of budgeting through simple allocations of their allowance or earnings.",
    learnings: [
      "Dividing money between saving, spending and sharing",
      "Making choices based on priorities",
      "Understanding needs vs. wants",
      "Recording income and expenses"
    ],
    badgeName: "Budget Planner",
    badgeDescription: "Awarded for creating and following their first budget for 4 weeks"
  },
  {
    title: "Smart Consumer",
    age: "Ages 11-13",
    description: "Developing critical thinking skills when making purchasing decisions and understanding value.",
    learnings: [
      "Comparing prices and quality",
      "Researching before buying",
      "Understanding marketing tactics",
      "Making informed decisions"
    ],
    badgeName: "Savvy Shopper",
    badgeDescription: "Awarded for demonstrating thoughtful purchasing decisions"
  },
  {
    title: "Earning & Entrepreneurship",
    age: "Ages 14-16",
    description: "Exploring different ways to earn money and possibly starting a small business or service.",
    learnings: [
      "Identifying skills and interests that can generate income",
      "Understanding the value of work",
      "Basic business concepts like profit and expense",
      "Managing earnings responsibly"
    ],
    badgeName: "Young Entrepreneur",
    badgeDescription: "Awarded for initiating their first earning project or business"
  },
  {
    title: "Future Planning",
    age: "Ages 17-18",
    description: "Preparing for financial independence with long-term planning and understanding of more complex financial concepts.",
    learnings: [
      "Setting long-term financial goals",
      "Understanding student loans and education costs",
      "Basic investing concepts",
      "Creating a financial plan for university life"
    ],
    badgeName: "Future Planner",
    badgeDescription: "Awarded for creating a comprehensive financial plan for university"
  }
];

export default GrowthMilestones;
