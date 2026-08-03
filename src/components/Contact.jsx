import { useState } from "react";
import validateContact from "../utils/Validation";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateContact(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccess("");
      return;
    }

    setErrors({});

    setSuccess("Your message has been sent successfully!");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    setTimeout(() => {
      setSuccess("");
    }, 4000);
  };

  return (
    <section
      id="contact"
      className="py-24 bg-slate-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

    
        <div className="text-center mb-16">
          <p className="text-blue-400 uppercase tracking-[4px] font-semibold">
            Contact
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Get In Touch
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Have a project in mind or want to discuss an opportunity?
            Feel free to contact me.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

      
          <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">

            <h3 className="text-3xl font-semibold mb-6 text-blue-400">
              Contact Information
            </h3>

            <div className="space-y-6">

              <div>
                <h4 className="font-semibold text-lg">Email</h4>
                <p className="text-gray-400">
                  midhin.mugundan@gmail.com
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-lg">Phone</h4>
                <p className="text-gray-400">
                  +91 6383702078
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-lg">Location</h4>
                <p className="text-gray-400">
                  Coimbatore, Tamil Nadu, India
                </p>
              </div>

            </div>
          </div>

        
          <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">

            <form onSubmit={handleSubmit}>

         
              <div className="mb-5">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
                />

                {errors.name && (
                  <p className="text-red-500 mt-2 text-sm">
                    {errors.name}
                  </p>
                )}
              </div>

        
              <div className="mb-5">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
                />

                {errors.email && (
                  <p className="text-red-500 mt-2 text-sm">
                    {errors.email}
                  </p>
                )}
              </div>

           
              <div className="mb-5">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
                />

                {errors.subject && (
                  <p className="text-red-500 mt-2 text-sm">
                    {errors.subject}
                  </p>
                )}
              </div>

           
              <div className="mb-5">
                <textarea
                  rows="6"
                  name="message"
                  placeholder="Write your message..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 resize-none"
                ></textarea>

                {errors.message && (
                  <p className="text-red-500 mt-2 text-sm">
                    {errors.message}
                  </p>
                )}
              </div>

            
              {success && (
                <p className="text-green-500 mb-5 font-medium">
                  {success}
                </p>
              )}

             
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-semibold transition duration-300"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;