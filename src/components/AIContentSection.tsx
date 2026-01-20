'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Star, Users, Clock, Globe, Award } from 'lucide-react';

export default function AIContentSection() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose Sadique for Your Web Design Needs?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Professional web design services that transform your property into a digital destination that converts visitors into bookings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <CardTitle className="text-xl">7+ Years Experience</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Proven track record in web design with specialized expertise in real estate and hospitality websites.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <CardTitle className="text-xl">Client-Focused Approach</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Every project is tailored to your specific needs, target audience, and business goals.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <CardTitle className="text-xl">Global Reach</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Serving clients worldwide with responsive designs that work perfectly on all devices.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Services I Provide
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Custom Web Design</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Unique, modern designs tailored to your property and brand
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Responsive Development</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Mobile-first approach ensuring perfect display on all devices
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">SEO Optimization</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Built-in SEO features to help your property rank higher in search results
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Booking Integration</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Seamless integration with Airbnb, VRBO, and direct booking systems
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Ongoing Support</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Maintenance and updates to keep your website running smoothly
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Industries I Specialize In
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Real Estate</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                  Professional websites for real estate agents, property developers, and luxury homes.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Property Listings</Badge>
                  <Badge variant="secondary">Virtual Tours</Badge>
                  <Badge variant="secondary">Lead Generation</Badge>
                </div>
              </div>

              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Airbnb & Short-term Rentals</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                  Custom websites for Airbnb hosts and vacation rental property managers.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Booking Integration</Badge>
                  <Badge variant="secondary">Guest Experience</Badge>
                  <Badge variant="secondary">Local Attractions</Badge>
                </div>
              </div>

              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Homestays & B&Bs</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                  Warm, welcoming websites for bed & breakfasts and homestay properties.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Personal Touch</Badge>
                  <Badge variant="secondary">Local Culture</Badge>
                  <Badge variant="secondary">Guest Reviews</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 text-gray-600 dark:text-gray-300">
            <Clock className="w-4 h-4" />
            <span>Average project completion: 2-4 weeks</span>
          </div>
        </div>
      </div>
    </section>
  );
}
