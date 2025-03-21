
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SignInForm from '@/components/auth/SignInForm';
import SignUpForm from '@/components/auth/SignUpForm';
import AuthLayout from '@/components/auth/AuthLayout';

const SignIn = () => {
  const navigate = useNavigate();
  
  const handleSignedIn = () => {
    navigate('/dashboard');
  };

  return (
    <AuthLayout>
      <div className="w-full max-w-md mx-auto">
        <div className="flex items-center mb-8">
          <div className="bg-cpost-red p-1.5 rounded-md">
            <svg width="28" height="20" viewBox="0 0 350 280" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M312 0L225 87L175 37L125 87L38 0H0V38L87 125L0 212V250H38L125 163L175 213L225 163L312 250H350V212L263 125L350 38V0H312Z" fill="white"/>
            </svg>
          </div>
          <span className="ml-2 text-xl font-bold">CPost</span>
        </div>
        
        <Tabs defaultValue="signin" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="signin">Sign In</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>
          <TabsContent value="signin">
            <SignInForm onSignedIn={handleSignedIn} />
          </TabsContent>
          <TabsContent value="signup">
            <SignUpForm onSignedIn={handleSignedIn} />
          </TabsContent>
        </Tabs>
      </div>
    </AuthLayout>
  );
};

export default SignIn;
