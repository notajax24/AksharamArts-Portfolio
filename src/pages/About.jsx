import React from "react";

export default function About({ id }) {
  return (
    <section id={id} className="py-20 bg-gradient-to-b to-[#0f2027] to-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-primary text-center mb-12">
          Our Story
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-secondary mb-4">
                Mission
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                To deliver transformative digital solutions that empower
                businesses.
              </p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-secondary mb-4">Vision</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Becoming the most trusted partner in digital innovation.
              </p>
            </div>
          </div>

          <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl group">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/20 opacity-80 z-10 transition-opacity group-hover:opacity-60" />

            {/* Image */}
            <img
              src="https://images.unsplash.com/photo-1618220179428-22790b461013"
              alt="Our workshop process"
              className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />

            {/* Optional text overlay */}
            <div className="absolute bottom-0 left-0 right-0 z-20 p-6 bg-gradient-to-t from-primary/90 via-primary/60 to-transparent">
              <p className="text-white font-medium text-lg">
                Crafting perfection in our studio
              </p>
            </div>
          </div>
        </div>

        {/* Timeline */}
      </div>
    </section>
  );
}
