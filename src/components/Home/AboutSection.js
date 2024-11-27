// src/components/Home/AboutSection.js
import { AdventureIcon, CommunityIcon } from "../Icons";

export default function AboutSection() {
  return (
    <section className="w-full max-w-4xl mx-auto px-6 py-16 text-center space-y-10 bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-lg shadow-lg">
      <h2 className="text-4xl font-extrabold text-gray-800 dark:text-gray-100">
        About Us
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        We’re here to inspire and equip you for a life of freedom—whether you’re
        planning your next destination or working from a remote paradise.
      </p>
      <div className="flex flex-wrap justify-center gap-8 mt-8">
        <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow transform hover:scale-105 max-w-xs">
          <span className="text-5xl mb-4">✈️</span>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Travel Guides</h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Discover top destinations, tips, and tricks for exploring the world.
          </p>
        </div>
        <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow transform hover:scale-105 max-w-xs">
          <span className="text-5xl mb-4">💰</span>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Remote Work Tips</h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Practical advice for thriving in a remote work environment.
          </p>
        </div>
      </div>
    </section>
  );
}
