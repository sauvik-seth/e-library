import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');        // success / error message
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('');  // reset status

    try {
      const response = await fetch("https://formspree.io/f/xdkwnzpq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // submission went through
        setStatus("Thanks! Your message has been sent.");
        setFormData({ name: '', email: '', message: '' });
      } else {
        // server returned an error
        const data = await response.json();
        setStatus("❌ Something went wrong: " + (data.error || "Please try again later."));
      }
    } catch (error) {
      // network error, etc.
      setStatus("⚠️ Network error. Please try again later.");
    }

    setIsSubmitting(false);
  };

  return (
    <div className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Image Section */}
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <div className="relative w-full h-96 rounded-xl overflow-hidden shadow-lg">
              <img
                src="/images/contactus.png"
                alt="Contact us - Students studying"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Form Section */}
          <div className="w-full md:w-1/2">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Contact Us</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className={`w-full text-white font-bold py-3 px-6 rounded-lg transition duration-300 ${
                    isSubmitting
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                  }`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>

              {status && (
                <p className="mt-4 text-center text-sm text-gray-700">
                  {status}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
