
import React from 'react';
import { HelpCircle } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  return (
    <section id="faqs" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center rounded-full bg-cpost-red/10 px-3 py-1 text-sm font-medium text-cpost-red mb-4">
            <HelpCircle className="h-4 w-4 mr-1.5" />
            <span>Frequently Asked Questions</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6">
            Everything You Need to <br className="hidden sm:block" />
            <span className="text-cpost-red">Know About PLSA</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Learn more about how Prize Linked Savings Accounts work and how you can benefit from this innovative way to save money.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="ios-card">
            <AccordionItem value="item-1" className="border-b">
              <AccordionTrigger className="py-6 text-left font-medium text-lg">
                How does the Prize Linked Savings Account work?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-2 pb-6">
                Very simple, every dollar kept for 30 days in your savings account is a lottery ticket for a monthly prize draw. The more you save and the longer you keep your money in the account, the more chances you have to win prizes while earning interest.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="border-b">
              <AccordionTrigger className="py-6 text-left font-medium text-lg">
                Are there any fees on the PLSA account?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-2 pb-6">
                No extra fees! You can participate in the draw with as little as a dollar. There are no monthly fees, no minimum balance requirements, and no penalties for withdrawals. It's a completely free way to save money while having the chance to win prizes.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="border-b">
              <AccordionTrigger className="py-6 text-left font-medium text-lg">
                What kind of prizes can I win?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-2 pb-6">
                Monthly prize draws vary every month, from cash prizes to gift cards, tech products, and even experiences. The grand prize pool gets larger as more people join, and our goal is to one day offer a million-dollar prize. All prizes are tax-free in Canada.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4" className="border-b">
              <AccordionTrigger className="py-6 text-left font-medium text-lg">
                Can I withdraw my money anytime?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-2 pb-6">
                Yes, you can withdraw your money anytime without penalties. However, only funds that have been in your account for at least 30 days qualify for prize draw entries. After withdrawal, those entries will no longer be eligible for future draws until the funds are deposited again.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5">
              <AccordionTrigger className="py-6 text-left font-medium text-lg">
                Is the 4% interest rate guaranteed?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-2 pb-6">
                The interest rate of up to 4% is based on the current market conditions and may vary over time. The rate is competitive compared to other savings accounts in Canada. We'll always notify you of any changes to the interest rate, and your savings will continue to earn the highest possible rate we can offer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
