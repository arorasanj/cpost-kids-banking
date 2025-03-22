
import React from 'react';
import { Palette, Heart, Globe } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";

const CardPersonality = () => {
  return (
    <section id="card-personality" className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Spending Card with Personality</h2>
          <p className="text-gray-600 mb-6">
            Let your child express themselves through their CPost card. Choose designs that reflect their interests and passions.
          </p>
        </div>

        <Tabs defaultValue="arts" className="max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="arts" className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700">
              <Palette className="mr-2 h-4 w-4" />
              Arts
            </TabsTrigger>
            <TabsTrigger value="culture" className="data-[state=active]:bg-purple-50 data-[state=active]:text-purple-700">
              <Heart className="mr-2 h-4 w-4" />
              Culture
            </TabsTrigger>
            <TabsTrigger value="causes" className="data-[state=active]:bg-green-50 data-[state=active]:text-green-700">
              <Globe className="mr-2 h-4 w-4" />
              Social Causes
            </TabsTrigger>
          </TabsList>

          <TabsContent value="arts" className="mt-0">
            <div className="ios-card p-0 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-4">Express Creativity</h3>
                  <p className="text-gray-600 mb-6">
                    For the young artists, musicians, and creative minds. Cards inspired by various art forms that celebrate creativity and self-expression.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="bg-blue-100 text-blue-700 p-1 rounded-full mr-2">•</span>
                      <span>Customizable card designs featuring artwork</span>
                    </li>
                    <li className="flex items-center">
                      <span className="bg-blue-100 text-blue-700 p-1 rounded-full mr-2">•</span>
                      <span>Special discounts at art supply stores</span>
                    </li>
                    <li className="flex items-center">
                      <span className="bg-blue-100 text-blue-700 p-1 rounded-full mr-2">•</span>
                      <span>Rewards for museum visits and art classes</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-6 flex items-center justify-center">
                  <div className="relative w-[280px] h-[180px] rounded-xl overflow-hidden shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
                    <img 
                      src="https://images.unsplash.com/photo-1541961017774-22349e4a1262" 
                      alt="Abstract Painting Card Design" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/40 to-purple-500/40 mix-blend-overlay"></div>
                    <div className="absolute bottom-4 left-4">
                      <p className="text-white text-xs font-medium">C-POST</p>
                      <p className="text-white text-xs opacity-80">4000 1234 5678 9010</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="culture" className="mt-0">
            <div className="ios-card p-0 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-4">Celebrate Culture</h3>
                  <p className="text-gray-600 mb-6">
                    Cards that celebrate diversity, heritage, and cultural traditions. Help your child connect with their roots or explore new cultures.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="bg-purple-100 text-purple-700 p-1 rounded-full mr-2">•</span>
                      <span>Cards featuring cultural motifs and symbols</span>
                    </li>
                    <li className="flex items-center">
                      <span className="bg-purple-100 text-purple-700 p-1 rounded-full mr-2">•</span>
                      <span>Rewards for cultural events and festivals</span>
                    </li>
                    <li className="flex items-center">
                      <span className="bg-purple-100 text-purple-700 p-1 rounded-full mr-2">•</span>
                      <span>Educational content about traditions worldwide</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-6 flex items-center justify-center">
                  <div className="relative w-[280px] h-[180px] rounded-xl overflow-hidden shadow-lg transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                    <img 
                      src="https://images.unsplash.com/photo-1515404929826-76fff9fef6fe" 
                      alt="Sistine Chapel Art Card Design" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/40 to-pink-500/40 mix-blend-overlay"></div>
                    <div className="absolute bottom-4 left-4">
                      <p className="text-white text-xs font-medium">C-POST</p>
                      <p className="text-white text-xs opacity-80">4000 1234 5678 9010</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="causes" className="mt-0">
            <div className="ios-card p-0 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-4">Support Social Causes</h3>
                  <p className="text-gray-600 mb-6">
                    For young activists and socially conscious children. Cards that highlight environmental protection, equality, and community service.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="bg-green-100 text-green-700 p-1 rounded-full mr-2">•</span>
                      <span>Each transaction contributes to a chosen cause</span>
                    </li>
                    <li className="flex items-center">
                      <span className="bg-green-100 text-green-700 p-1 rounded-full mr-2">•</span>
                      <span>Cards featuring endangered species or causes</span>
                    </li>
                    <li className="flex items-center">
                      <span className="bg-green-100 text-green-700 p-1 rounded-full mr-2">•</span>
                      <span>Monthly impact reports showing their contribution</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-green-50 p-6 flex items-center justify-center">
                  <div className="relative w-[280px] h-[180px] rounded-xl overflow-hidden shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
                    <img 
                      src="https://images.unsplash.com/photo-1493612276216-ee3925520721" 
                      alt="Social Change and Activism Card Design" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500/40 to-teal-500/40 mix-blend-overlay"></div>
                    <div className="absolute bottom-4 left-4">
                      <p className="text-white text-xs font-medium">C-POST</p>
                      <p className="text-white text-xs opacity-80">4000 1234 5678 9010</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default CardPersonality;
