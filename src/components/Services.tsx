import React, { useState } from 'react';
import { Check, MessageCircle, Calendar, Target, Loader2 } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { stripeProducts } from '../stripe-config';

interface ServicesProps {
  user: any;
}

export const Services: React.FC<ServicesProps> = ({ user }) => {
  const [selectedPackage, setSelectedPackage] = useState<string>('');
  const [checkoutLoading, setCheckoutLoading] = useState<string>('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    condition: '',
    message: ''
  });

  const getPackageIcon = (name: string) => {
    switch (name) {
      case 'Virtual PT Consult':
        return <MessageCircle className="h-8 w-8" />;
      case 'Custom Recovery Plan':
        return <Target className="h-8 w-8" />;
      case '12 Week Guided Program':
        return <Calendar className="h-8 w-8" />;
      default:
        return <MessageCircle className="h-8 w-8" />;
    }
  };

  const getPackageFeatures = (name: string) => {
    switch (name) {
      case 'Virtual PT Consult':
        return [
          '30-45 minute virtual consultation',
          'Review PTBot recommendations',
          'Exercise form guidance',
          'Q&A session',
          'Written summary of recommendations'
        ];
      case 'Custom Recovery Plan':
        return [
          'Initial assessment and consultation',
          '3-5 specific exercise prescriptions',
          'Direct links to video demonstrations',
          '2-week chat-based follow-up',
          'Plan modifications as needed'
        ];
      case '12 Week Guided Program':
        return [
          'Complete movement assessment',
          'Progressive exercise program',
          'Weekly check-ins and adjustments',
          'Unlimited messaging support',
          '12-week progress tracking',
          'Final reassessment and maintenance plan'
        ];
      default:
        return [];
    }
  };

  const getPackagePrice = (name: string) => {
    switch (name) {
      case 'Virtual PT Consult':
        return '$75';
      case 'Custom Recovery Plan':
        return '$175';
      case '12 Week Guided Program':
        return '$250';
      default:
        return '';
    }
  };

  const handleCheckout = async (priceId: string) => {
    if (!user) return;
    
    setCheckoutLoading(priceId);
    
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        throw new Error('No active session');
      }

      const product = stripeProducts.find(p => p.priceId === priceId);
      if (!product) {
        throw new Error('Product not found');
      }

      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/stripe-checkout`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${session.access_token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          price_id: priceId,
          mode: product.mode,
          success_url: `${window.location.origin}/success`,
          cancel_url: `${window.location.origin}`,
        }),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to create checkout session');
      }

      if (data.url) {
        window.location.href = data.url;
      }
    } catch (error) {
      console.error('Checkout error:', error);
    } finally {
      setCheckoutLoading('');
    }
  };

  const handleSubmit = async (e: React.FormEvent, priceId: string) => {
    e.preventDefault();
    await handleCheckout(priceId);
    setFormData({
      name: '',
      email: '',
      phone: '',
      condition: '',
      message: ''
    });
    setSelectedPackage('');
  };

  // Reorder products: Virtual PT Consult, 12 Week Guided Program, Custom Recovery Plan
  const orderedProducts = [
    stripeProducts.find(p => p.name === 'Virtual PT Consult'),
    stripeProducts.find(p => p.name === '12 Week Guided Program'),
    stripeProducts.find(p => p.name === 'Custom Recovery Plan')
  ].filter(Boolean);

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Recovery Path
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Select the virtual physical therapy package that best fits your needs and recovery goals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {orderedProducts.map((pkg, index) => (
            <div
              key={pkg!.priceId}
              className={`relative bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 hover:shadow-xl ${
                pkg!.name === '12 Week Guided Program' ? 'border-blue-500 scale-105' : 'border-gray-200 hover:border-blue-300'
              }`}
            >
              {pkg!.name === '12 Week Guided Program' && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="p-8">
                <div className={`inline-flex p-3 rounded-lg mb-4 ${
                  pkg!.name === '12 Week Guided Program' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'
                }`}>
                  {getPackageIcon(pkg!.name)}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg!.name}</h3>
                <div className="mb-4">
                  <div className="text-3xl font-bold text-gray-900">
                    {getPackagePrice(pkg!.name)}
                  </div>
                </div>
                <p className="text-gray-600 mb-6">{pkg!.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {getPackageFeatures(pkg!.name).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button
                  onClick={() => user ? handleCheckout(pkg!.priceId) : setSelectedPackage(pkg!.priceId)}
                  disabled={checkoutLoading === pkg!.priceId}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                    pkg!.name === '12 Week Guided Program'
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  } flex items-center justify-center space-x-2`}
                >
                  {checkoutLoading === pkg!.priceId ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      <span>Processing...</span>
                    </>
                  ) : (
                    <span>{user ? 'Get Started' : 'Sign Up & Get Started'}</span>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Registration Form */}
        {selectedPackage && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  Register for {stripeProducts.find(p => p.priceId === selectedPackage)?.name}
                </h3>
                <button
                  onClick={() => setSelectedPackage('')}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ×
                </button>
              </div>
              
              <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-blue-800 text-sm">
                  Please create an account or sign in to complete your purchase securely.
                </p>
              </div>
              
              <form onSubmit={(e) => handleSubmit(e, selectedPackage)}>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Primary Condition/Concern
                    </label>
                    <input
                      type="text"
                      value={formData.condition}
                      onChange={(e) => setFormData({ ...formData, condition: e.target.value })}
                      placeholder="e.g., Lower back pain, shoulder injury"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Information
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Please share any additional details about your condition, symptoms, or questions you have about PTBot recommendations..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setSelectedPackage('')}
                    className="flex-1 py-3 px-6 border border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-3 px-6 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Continue to Checkout
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};