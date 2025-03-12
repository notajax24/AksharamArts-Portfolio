import ClientWorkCarousel from "../components/ClientWorkCarousel";
import Contact from "./Contact";

export default function Home({ id }) {
  return (
    <section
      id={id}
      className="min-h-screen relative overflow-hidden bg-gradient-to-t to-[#0f2027] to-black"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-white -z-10" />
      <div className="container mx-auto px-6 py-24 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary">
          Transforming Ideas into
          <span className="block text-secondary mt-4">Digital Reality</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          "Transforming creativity into tangible art – one sign at a time!"
        </p>
        <button className="bg-primary text-white   px-8 py-3 rounded-lg hover:bg-secondary/90 transition-all font-bold shadow-lg  hover:cursor-pointer">
          Contact Us !
        </button>
      </div>

      <div className="container mx-auto px-6 pb-16">
        <h3 className="text-3xl font-bold text-secondary text-center mb-8">
          Our Client Works
        </h3>
        <ClientWorkCarousel />
      </div>
    </section>
  );
}
