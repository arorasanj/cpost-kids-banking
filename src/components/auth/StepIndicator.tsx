
import React from 'react';
import { FormStep } from './SignUpSchemas';

interface StepIndicatorProps {
  currentStep: FormStep;
}

const StepIndicator = ({ currentStep }: StepIndicatorProps) => {
  return (
    <div className="flex items-center justify-between mb-6">
      {[1, 2, 3, 4].map((step) => (
        <div 
          key={step} 
          className={`
            flex items-center justify-center w-8 h-8 rounded-full 
            ${currentStep === step ? 'bg-cpost-blue text-white' : 
              currentStep > step ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-500'}
          `}
        >
          {currentStep > step ? '✓' : step}
        </div>
      ))}
    </div>
  );
};

export default StepIndicator;
