import React, { useEffect, useState } from 'react';
import { Calendar, CreditCard, Package, Clock, CheckCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { getProductByPriceId } from '../stripe-config';

interface DashboardProps {
  user: any;
}

interface Subscription {
  subscription_status: string;
  price_id: string;
  current_period_end: number;
  cancel_at_period_end: boolean;
  payment_method_brand: string;
  payment_method_last4: string;
}

interface Order {
  order_id: number;
  amount_total: number;
  currency: string;
  order_date: string;
  order_status: string;
}

export const Dashboard: React.FC<DashboardProps> = ({ user }) => {
  const [subscription, setSubscription] = useState<Subscription | null>(null);
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      if (!supabase) {
        setLoading(false);
        return;
      }

      try {
        // Fetch subscription data
        const { data: subData } = await supabase
          .from('stripe_user_subscriptions')
          .select('*')
          .maybeSingle();

        if (subData) {
          setSubscription(subData);
        }

        // Fetch order history
        const { data: orderData } = await supabase
          .from('stripe_user_orders')
          .select('*')
          .order('order_date', { ascending: false });

        if (orderData) {
          setOrders(orderData);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const formatCurrency = (amount: number, currency: string) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency.toUpperCase(),
    }).format(amount / 100);
  };

  const formatDate = (timestamp: number | string) => {
    const date = typeof timestamp === 'number' ? new Date(timestamp * 1000) : new Date(timestamp);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  const activeSubscription = subscription && subscription.subscription_status === 'active';
  const subscriptionProduct = subscription?.price_id ? getProductByPriceId(subscription.price_id) : null;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {user.user_metadata?.full_name || user.email}
          </h1>
          <p className="text-gray-600">Manage your virtual physical therapy services</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Current Plan */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <div className="flex items-center mb-6">
                <Package className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Current Plan</h2>
              </div>

              <div className="border border-blue-200 bg-blue-50 rounded-xl p-6 text-center">
                <Calendar className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Services Coming Soon</h3>
                <p className="text-gray-600 mb-4">
                  Virtual physical therapy services will be available soon. Stay tuned for updates!
                </p>
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg inline-block">
                  <span className="font-semibold">Launching Soon</span>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <CreditCard className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Get Notified</h2>
              </div>
              
              <div className="text-center py-8">
                <Clock className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Be the First to Know</h3>
                <p className="text-gray-600 mb-4">
                  Sign up to be notified when virtual PT services become available
                </p>
                <a
                  href="mailto:justinlemmodpt@gmail.com?subject=Notify me when services are available"
                  className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Get Notified
                </a>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <a
                  href="mailto:justinlemmodpt@gmail.com"
                  className="block w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  <p className="font-medium text-gray-900">Contact Dr. Lemmo</p>
                  <p className="text-sm text-gray-600">Send an email directly</p>
                </a>
                <a
                  href="https://www.youtube.com/@justinlemmodpt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  <p className="font-medium text-gray-900">Exercise Library</p>
                  <p className="text-sm text-gray-600">Browse video demonstrations</p>
                </a>
                <button
                  disabled
                  className="block w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  <p className="font-medium text-gray-500">Browse Services</p>
                  <p className="text-sm text-gray-400">Coming soon</p>
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Stay Updated</h3>
              <p className="text-blue-800 text-sm mb-4">
                Virtual PT services are in development. Follow Dr. Lemmo's YouTube channel for updates and exercise content.
              </p>
              <a
                href="https://www.youtube.com/@justinlemmodpt"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                Subscribe on YouTube
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};