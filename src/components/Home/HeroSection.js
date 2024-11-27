// src/components/Home/HeroSection.js
export default function HeroSection() {
    return (
      <section className="relative w-full h-screen flex items-center justify-center bg-cover bg-center text-light dark:text-dark" 
               style={{ backgroundImage: `url('/travel.jpg')` }}>
        <div className="bg-black dark:bg-white bg-opacity-50 p-8 text-center rounded-md">
          <h1 className="text-4xl sm:text-6xl font-bold">Explore the World Remotely</h1>
          <p className="mt-4 text-lg sm:text-xl">
            Discover insights, tips, and guides to work from anywhere.
          </p>
          <button className="mt-6 px-8 py-3 bg-accent dark:bg-accentDark text-dark font-semibold rounded-md hover:bg-opacity-80 transition">
            Get Started
          </button>
        </div>
      </section>
    );
  }
  