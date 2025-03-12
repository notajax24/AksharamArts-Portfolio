import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";

const projects = [
  {
    category: "PVC Art",
    items: [
      {
        title: "3D Wall Art Installation",
        image: "https://images.unsplash.com/photo-1618220179428-22790b461013",
        description: "Custom 3D wall art for corporate office lobby",
        materials: "PVC, Acrylic Paint",
        size: "8ft x 12ft",
      },
      {
        title: "Decorative Room Partitions",
        image:
          "https://image.made-in-china.com/2f0j00wPEcuvdGbHbp/China-Art-Stainless-Steel-Laser-Cut-Frame-Partition-Room-Divider-for-Decoration.webp",
        description: "Laser-cut decorative room dividers",
        materials: "PVC, Gold Leaf",
        size: "6ft x 8ft",
      },
    ],
  },
  {
    category: "Sign Boards",
    items: [
      {
        title: "Neon-effect Store Signage",
        image:
          "https://i.etsystatic.com/32672952/r/il/4aed2b/4659571824/il_570xN.4659571824_b2m4.jpg",

        description: "LED illuminated store front sign",
        materials: "PVC, LED Lights",
        size: "4ft x 10ft",
      },
      {
        title: "Directional Signage System",
        image:
          "https://readesigns.com/wp-content/uploads/2022/07/wayfinding-signage-new-development.jpeg",
        description: "Corporate campus wayfinding system",
        materials: "PVC, Weather-resistant Coating",
        size: "Various Sizes",
      },
    ],
  },
  {
    category: "Client Works",
    items: [
      {
        title: "Hotel Lobby Centerpiece",
        image:
          "https://5.imimg.com/data5/ANDROID/Default/2022/9/GZ/RO/FV/8895765/product-jpeg-500x500.jpg",
        description: "Custom-designed luxury hotel installation",
        client: "Grand Horizon Hotels",
        size: "10ft diameter",
      },
    ],
  },
  {
    category: "3D Lettering",
    items: [
      {
        title: "Dimensional Office Signage",
        image:
          "https://www.mossinc.com/wp-content/uploads/2023/09/Dimensional-Letters.jpg",
        description: "Corporate identity dimensional letters",
        materials: "PVC, Matte Finish",
        size: '18" Tall Letters',
      },
      {
        title: "Illuminated Channel Letters",
        image:
          "https://businesssigns.net/wp-content/uploads/2022/12/lighted-business-signs.jpg",
        description: "Front-lit commercial signage",
        materials: "PVC, LED Modules",
        size: '24" Tall Letters',
      },
    ],
  },
];

export default function Portfolio({ id }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects.flatMap((p) => p.items)
      : projects.find((p) => p.category === activeCategory)?.items || [];

  return (
    <section
      id={id}
      className="py-20 bg-gradient-to-t to-[#0f2027] to-black dark:bg-gray-900"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-primary text-center mb-12">
          Our Portfolio
        </h2>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <button
            onClick={() => setActiveCategory("All")}
            className={`px-6 py-2 rounded-full ${
              activeCategory === "All"
                ? "bg-secondary text-primary"
                : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
          >
            All Works
          </button>
          {projects.map((category) => (
            <button
              key={category.category}
              onClick={() => setActiveCategory(category.category)}
              className={`px-6 py-2 rounded-full ${
                activeCategory === category.category
                  ? "bg-secondary text-primary"
                  : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {category.category}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              onClick={() => setSelectedProject(project)}
              className="group relative cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <span className="bg-secondary text-primary px-3 py-1 rounded-full text-sm font-bold">
                  {projects.find((p) => p.items.includes(project))?.category}
                </span>
                <h3 className="text-xl font-bold mt-2">{project.title}</h3>
                <p className="text-sm opacity-90">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-gray-800 rounded-xl max-w-2xl w-full p-8 relative">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
              >
                <XMarkIcon className="h-6 w-6 text-primary" />
              </button>

              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <h3 className="text-2xl font-bold text-primary mb-4">
                {selectedProject.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {selectedProject.description}
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-primary/10 rounded-lg">
                  <h4 className="text-sm font-bold text-primary mb-2">
                    Materials
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    {selectedProject.materials || "Custom Materials"}
                  </p>
                </div>
                <div className="p-4 bg-primary/10 rounded-lg">
                  <h4 className="text-sm font-bold text-primary mb-2">Size</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    {selectedProject.size}
                  </p>
                </div>
                {selectedProject.client && (
                  <div className="p-4 bg-primary/10 rounded-lg col-span-2">
                    <h4 className="text-sm font-bold text-primary mb-2">
                      Client
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {selectedProject.client}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
