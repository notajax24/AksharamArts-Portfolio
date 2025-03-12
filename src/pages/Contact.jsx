import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    serviceType: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <section className="min-h-screen bg-gradient-to-t to-[#0f2027] to-black py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-secondary text-center mb-12">
          Get in Touch
        </h2>

        <div className="w-auto gap-12">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-white font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 rounded-lg border border-primary focus:ring-2 focus:ring-secondary focus:border-transparent"
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-primary focus:ring-2 focus:ring-secondary"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  pattern="[0-9]{10}"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-primary focus:ring-2 focus:ring-secondary"
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
              </div>
            </div>

            <div>
              <label className="block text-white font-medium mb-2">
                Service Required
              </label>
              <select
                required
                className="w-full bg-transparent px-4 py-3 rounded-lg border border-primary focus:ring-2 focus:ring-white"
                onChange={(e) =>
                  setFormData({ ...formData, serviceType: e.target.value })
                }
              >
                <option value="" style={{ backgroundColor: "black" }}>
                  Select a service
                </option>
                <option style={{ backgroundColor: "black" }}>
                  PVC Nameplates
                </option>
                <option style={{ backgroundColor: "black" }}>
                  Business Signboards
                </option>
                <option style={{ backgroundColor: "black" }}>
                  Personal Signboards
                </option>
                <option style={{ backgroundColor: "black" }}>
                  Custom Logos
                </option>
                <option style={{ backgroundColor: "black" }}>
                  Branding Solutions
                </option>
                <option style={{ backgroundColor: "black" }}>Banners</option>
              </select>
            </div>

            <div>
              <label className="block text-white font-medium mb-2">
                Message
              </label>
              <textarea
                rows="5"
                required
                className="w-full px-4 py-3 rounded-lg border border-primary focus:ring-2 focus:ring-secondary"
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg- text-white font-bold py-3 px-6 rounded-lg cursor-pointer  hover:bg-secondary transition-colors flex items-center justify-center gap-2 "
            >
              <FaPaperPlane className="w-5 h-5" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
