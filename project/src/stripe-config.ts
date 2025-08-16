export interface StripeProduct {
  id: string;
  priceId: string;
  name: string;
  description: string;
  mode: 'payment' | 'subscription';
  comingSoon: boolean;
}

export const stripeProducts: StripeProduct[] = [
  {
    id: 'YOUR_VIRTUAL_CONSULT_PRODUCT_ID',
    priceId: 'YOUR_VIRTUAL_CONSULT_PRICE_ID',
    name: 'Virtual PT Consult',
    description: '30-45 minute virtual consultation, review PTBot recommendations, Exercise form guidance, Q&A session, Written summary of recommendations.',
    mode: 'payment',
    comingSoon: false
  },
  {
    id: 'YOUR_12_WEEK_PRODUCT_ID',
    priceId: 'YOUR_12_WEEK_PRICE_ID',
    name: '12 Week Guided Program',
    description: 'Complete movement assessment, progressive exercise program, weekly check-ins and adjustments, unlimited messaging support, 3-month progress tracking, final reassessment and maintenance plan.',
    mode: 'payment',
    comingSoon: false
  },
  {
    id: 'YOUR_CUSTOM_PLAN_PRODUCT_ID',
    priceId: 'YOUR_CUSTOM_PLAN_PRICE_ID',
    name: 'Custom Recovery Plan',
    description: 'Initial assessment and consultation, 3-5 specific exercise prescriptions, direct links to video demonstrations, 2-week chat-based follow up, plan modifications if needed.',
    mode: 'payment',
    comingSoon: false
  }
];

export const getProductByPriceId = (priceId: string): StripeProduct | undefined => {
  return stripeProducts.find(product => product.priceId === priceId);
};