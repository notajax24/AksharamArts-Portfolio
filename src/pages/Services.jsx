export default function Services({ id }) {
  const services = [
    {
      title: "Handcrafted PVC Nameplates",
      icon: "📜",
      desc: "Custom-designed nameplates with intricate detailing and durable finishes",
    },
    {
      title: "Business & Personal Signboards",
      icon: "🪧",
      desc: "Eye-catching signage solutions for offices, homes, and retail spaces",
    },
    {
      title: "Custom Logo Creations",
      icon: "✨",
      desc: "3D logo designs that bring your brand identity to life",
    },
    {
      title: "Tailored Branding Solutions",
      icon: "🧩",
      desc: "Complete branding packages including signage, displays, and environmental graphics",
    },
  ];

  return (
    <section id={id} className="py-20 bg-gradient-to-b to-[#0f2027] to-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-primary text-center mb-12">
          What We offer !
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 bg-white dark:bg-gray-500 rounded-xl shadow-lg hover:shadow-xl transition-shadow group relative overflow-hidden"
            >
              <div className="text-4xl mb-6 text-secondary">{service.icon}</div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{service.desc}</p>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-secondary transition-all duration-300 transform origin-left scale-x-0 group-hover:scale-x-100" />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-white max-w-2xl mx-auto">
            "Combining traditional craftsmanship with modern techniques to
            create lasting impressions through dimensional signage and branding
            solutions."
          </p>
        </div>
      </div>
    </section>
  );
}
