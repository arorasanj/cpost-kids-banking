
import React, { useState } from 'react';
import { 
  FormStep, 
  BaseFormValues, 
  PersonalInfoValues, 
  ResidencyValues, 
  SinValues 
} from './SignUpSchemas';
import StepIndicator from './StepIndicator';
import SignUpStep1 from './SignUpStep1';
import SignUpStep2 from './SignUpStep2';
import SignUpStep3 from './SignUpStep3';
import SignUpStep4 from './SignUpStep4';

interface SignUpFormProps {
  onSignedIn: () => void;
}

// Define a more explicit type for the form data to match all possible values
interface FormData {
  email: string;
  password: string;
  dob: string;
  gender: 'male' | 'female' | 'non-binary' | 'prefer-not-to-say';
  address: string;
  residencyStatus: 'citizen' | 'permanent-resident';
  sin: string;
}

const SignUpForm = ({ onSignedIn }: SignUpFormProps) => {
  const [step, setStep] = useState<FormStep>(1);
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
    dob: '',
    gender: 'prefer-not-to-say',
    address: '',
    residencyStatus: 'citizen',
    sin: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleStep1Submit = (data: BaseFormValues) => {
    setFormData({ ...formData, ...data });
    setStep(2);
  };

  const handleStep2Submit = (data: PersonalInfoValues) => {
    setFormData({ ...formData, ...data });
    setStep(3);
  };

  const handleStep3Submit = (data: ResidencyValues) => {
    setFormData({ ...formData, ...data });
    setStep(4);
  };

  const handleStep4Submit = async (data: SinValues) => {
    const completeFormData = {
      ...formData,
      ...data
    };
    
    setIsSubmitting(true);
    
    console.log('Sign Up Complete:', completeFormData);
    
    setTimeout(() => {
      setIsSubmitting(false);
      onSignedIn();
    }, 1500);
  };

  return (
    <div className="space-y-6">
      <StepIndicator currentStep={step} />
      
      {step === 1 && (
        <SignUpStep1 
          initialData={{ email: formData.email, password: formData.password }}
          onNext={handleStep1Submit}
        />
      )}
      
      {step === 2 && (
        <SignUpStep2 
          initialData={{
            dob: formData.dob,
            gender: formData.gender,
            address: formData.address
          }}
          onNext={handleStep2Submit}
          onBack={() => setStep(1)}
        />
      )}
      
      {step === 3 && (
        <SignUpStep3 
          initialData={{ residencyStatus: formData.residencyStatus }}
          onNext={handleStep3Submit}
          onBack={() => setStep(2)}
        />
      )}
      
      {step === 4 && (
        <SignUpStep4 
          initialData={{ sin: formData.sin }}
          onSubmit={handleStep4Submit}
          onBack={() => setStep(3)}
          isSubmitting={isSubmitting}
        />
      )}
    </div>
  );
};

export default SignUpForm;
