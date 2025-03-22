
import React from 'react';
import { BookOpen, Coins, GraduationCap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const AgeStages = () => {
  return (
    <section id="age-stages" className="py-20 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Growing Financial Literacy at Every Age</h2>
          <p className="text-gray-600">
            Our program adapts to your child's developmental stage, providing age-appropriate financial education from early childhood through university years.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ageStages.map((stage, index) => (
            <div 
              key={stage.title} 
              className="ios-card opacity-0 animate-fade-in" 
              style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
            >
              <Card className="h-full border-none shadow-none">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${stage.iconBg}`}>
                    <stage.icon className={`h-6 w-6 ${stage.iconColor}`} />
                  </div>
                  <CardTitle className="mt-4">{stage.title}</CardTitle>
                  <CardDescription className="text-lg font-medium">{stage.ageRange}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{stage.description}</p>
                  <ul className="mt-4 space-y-2">
                    {stage.learnings.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-cpost-blue mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ageStages = [
  {
    title: "Early Learning",
    ageRange: "Ages 5-8",
    icon: BookOpen,
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    description: "Introduction to basic financial concepts through fun, interactive activities.",
    learnings: [
      "Understanding the difference between needs and wants",
      "Introduction to saving with a digital piggy bank",
      "Learning about coins and bills with parental guidance",
      "Fun challenges to earn rewards for completing tasks"
    ]
  },
  {
    title: "Middle Childhood",
    ageRange: "Ages 9-13",
    icon: Coins,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    description: "Building confidence with money management and introducing planning skills.",
    learnings: [
      "Setting saving goals for things they want",
      "Learning about budgeting with weekly allowance",
      "First experience with supervised spending decisions",
      "Understanding the concept of earning through effort"
    ]
  },
  {
    title: "Teen & Pre-University",
    ageRange: "Ages 14-18",
    icon: GraduationCap,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    description: "Developing independence and preparing for financial responsibilities.",
    learnings: [
      "Managing monthly budgets for various expenses",
      "Learning about education costs and planning",
      "Introduction to part-time income management",
      "Understanding credit, debt, and saving for the future"
    ]
  }
];

export default AgeStages;
