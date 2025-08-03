export interface StripeProduct {
  id: string;
  priceId: string;
  name: string;
  description: string;
  price: number;
  mode: 'payment' | 'subscription';
}

export const stripeProducts: StripeProduct[] = [
  {
    id: 'prod_Snlflbz3KWUPV7',
    priceId: 'price_1RsA7pLBHhyJpJHOZVBbW412',
    name: '3-Month Guided Program',
    description: 'Complete movement assessment, progressive exercise program, weekly check-ins and adjustments, unlimited messaging support, 3-month progress tracking, final reassessment and maintenance plan.',
    price: 299,
    mode: 'subscription'
  },
  {
    id: 'prod_SnleI298titJSP',
    priceId: 'price_1RsA6oLBHhyJpJHOodF3J4Uy',
    name: 'Custom Recovery Plan',
    description: 'Initial assessment and consultation, 3-5 specific exercise prescriptions, direct links to video demonstrations, 2-week chat-based follow up, plan modifications if needed.',
    price: 149,
    mode: 'payment'
  },
  {
    id: 'prod_SnlcQeryFv0vRw',
    priceId: 'price_1RsA5jLBHhyJpJHOMe424Zh9',
    name: 'Virtual PT Consult',
    description: '30-45 minute virtual consultation, review PTBot recommendations, Exercise form guidance, Q&A session, Written summary of recommendations.',
    price: 49,
    mode: 'payment'
  }
];

export const getProductByPriceId = (priceId: string): StripeProduct | undefined => {
  return stripeProducts.find(product => product.priceId === priceId);
};