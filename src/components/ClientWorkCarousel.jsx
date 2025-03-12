import { useEffect, useRef } from "react";

const clientWorks = [
  // Handcrafted PVC Nameplates
  {
    image:
      "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/115793769/original/a5a15853f00ed8706722f9ec41769d6c6a59e8b0/design-an-out-stand-logo-in-just-few-hours.png",
    type: "Handcrafted PVC Nameplate",
    title: "3D Wall Art Installation",
    client: "Corporate Office",
  },
  {
    image:
      "https://img.staticmb.com/mbcontent/images/crop/uploads/2022/12/Acrylic-Name-Plate_0_1200.jpg",
    type: "Handcrafted PVC Nameplate",
    title: "Laser-cut Room Divider",
    client: "Luxury Residence",
  },

  // Business Signboards
  {
    image: "https://images.unsplash.com/photo-1579033461380-adb47c3eb938",
    type: "Business Signboard",
    title: "Neon Store Signage",
    client: "Retail Storefront",
  },
  {
    image: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a",
    type: "Business Signboard",
    title: "Channel Letter Sign",
    client: "Commercial Building",
  },

  // Personal Signboards
  {
    image:
      "https://icreations.co.in/wp-content/uploads/2024/01/IMG_20230717_102616-1.jpg",
    type: "Personal Signboard",
    title: "Custom House Numbers",
    client: "Private Residence",
  },
  {
    image:
      "https://artstreet.in/cdn/shop/products/ASMDF23714_700x700.jpg?v=1687854752",
    type: "Personal Signboard",
    title: "Decorative Wall Plaque",
    client: "Art Studio",
  },

  // Custom Logo Creations

  {
    image:
      "https://i.etsystatic.com/23515302/r/il/dd7826/4886687017/il_fullxfull.4886687017_nvvs.jpg",
    type: "Custom Logo Creation",
    title: "Dimensional Letters",
    client: "Fashion Brand",
  },

  // Tailored Branding Solutions
  {
    image: "https://weprints.in/wp-content/uploads/2023/04/bannerprint.jpg",
    type: "Branding",
    title: "Banners",
    client: "Corporate Campus",
  },
  {
    image:
      "https://i.pinimg.com/736x/50/b7/b7/50b7b7844b5225028e52f9f36c801e78.jpg",
    type: "Branding",
    title: "Retail Branding Package",
    client: "Lifestyle Store",
  },

  // Banners
  {
    image:
      "https://static.wixstatic.com/media/6add09_de3b53cda86544c78df4162d44d32344~mv2.webp/v1/fill/w_560,h_404,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/6add09_de3b53cda86544c78df4162d44d32344~mv2.webp",
    type: "Promotional Banner",
    title: "Event Marketing Banner",
    client: "Music Festival",
  },
  {
    image:
      "https://c8.alamy.com/comp/RF9DY2/sale-banner-in-shop-window-for-end-of-the-season-sales-deals-RF9DY2.jpg",
    type: "Retail Banner",
    title: "Seasonal Sale Display",
    client: "Department Store",
  },

  // Duplicate first 2 items for seamless loop
  {
    image:
      "https://m.media-amazon.com/images/I/518JMGpAg4L._AC_UF1000,1000_QL80_.jpg",
    type: "Handcrafted PVC Nameplate",
    title: "3D Wall Art Installation",
    client: "Corporate Office",
  },
  {
    image:
      "https://rukminim2.flixcart.com/image/850/1000/kwmfqfk0/wall-decoration/9/b/w/pine-mdf-3mm-wooden-panel-for-room-divider-partition-wall-decor-original-imag99mjtxwcwyjm.jpeg?q=90&crop=false",
    type: "Handcrafted PVC Nameplate",
    title: "Laser-cut Room Divider",
    client: "Luxury Residence",
  },
];

export default function ClientWorkCarousel() {
  const containerRef = useRef(null);

  // Add scroll functions
  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= containerRef.current.offsetWidth;
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += containerRef.current.offsetWidth;
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scrollWidth = container.scrollWidth / 2;
    let animationFrame;

    const animate = () => {
      container.scrollLeft += 1;
      if (container.scrollLeft >= scrollWidth) {
        container.scrollLeft = 0;
      }
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="relative max-w-[90%] mx-auto py-12">
      {/* Left scroll button - hidden on mobile, visible from md breakpoint */}
      <button
        onClick={scrollLeft}
        className="hidden md:block absolute -left-20 top-1/2 -translate-y-1/2 z-10 p-2 text-white bg-primary rounded-full hover:text-primary/70 transition-colors"
        aria-label="Scroll left"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>

      <div
        ref={containerRef}
        className="flex gap-8 w-full overflow-x-auto md:overflow-x-hidden scroll-smooth touch-pan-x snap-x snap-mandatory"
        style={{ scrollBehavior: "smooth", WebkitOverflowScrolling: "touch" }}
      >
        {clientWorks.map((work, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-80 h-96 rounded-xl shadow-lg overflow-hidden group relative hover:scale-95 transition-transform duration-300 snap-center"
          >
            <img
              src={work.image}
              alt={`${work.client} - ${work.title}`}
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <p className="text-secondary font-semibold mb-1">{work.type}</p>
              <h3 className="text-xl font-bold">{work.title}</h3>
              <p className="text-sm opacity-90 mt-1">{work.client}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Right scroll button - hidden on mobile, visible from md breakpoint */}
      <button
        onClick={scrollRight}
        className="hidden md:block absolute -right-20 top-1/2 -translate-y-1/2 z-10 p-2 text-white bg-primary rounded-full hover:text-primary/70 transition-colors"
        aria-label="Scroll right"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  );
}
