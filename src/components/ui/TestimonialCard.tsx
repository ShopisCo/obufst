import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating: number;
  avatarUrl: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  name, 
  role, 
  content, 
  rating, 
  avatarUrl 
}) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <div className="flex items-center space-x-1 mb-4">
        {[...Array(5)].map((_, index) => (
          <Star 
            key={index} 
            className={`h-5 w-5 ${index < rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} 
          />
        ))}
      </div>
      <p className="text-gray-600 mb-6">"{content}"</p>
      <div className="flex items-center space-x-3">
        <img 
          src={avatarUrl} 
          alt={name} 
          className="h-12 w-12 rounded-full object-cover" 
        />
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;