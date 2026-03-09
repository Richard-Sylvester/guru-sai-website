"use client"; 

import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [buttonText, setButtonText] = useState("REQUEST A CALL BACK");
  const [formStatus, setFormStatus] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setButtonText("SENDING...");
    
    const formData = new FormData(event.target);
    
    // ⚠️ PASTE YOUR WEB3FORMS ACCESS KEY HERE
    formData.append("access_key", "0c6acca9-35eb-4258-98b0-b23adf6cde49");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setButtonText("SENT SUCCESSFULLY ✓");
        setFormStatus("Thank you! We will get back to you shortly.");
        event.target.reset(); 
        
        setTimeout(() => {
          setButtonText("REQUEST A CALL BACK");
          setFormStatus("");
        }, 3000);
      } else {
        setButtonText("ERROR - TRY AGAIN");
        setFormStatus("Something went wrong. Please call us directly.");
      }
    } catch (error) {
      setButtonText("ERROR");
      setFormStatus("Network error. Please try again.");
    }
  };

  return (
    <main className="flex flex-col w-full bg-slate-50 min-h-screen">
      
      {/* Header Banner - Keeps the instant load CSS animation */}
      <section className="w-full bg-slate-900 pt-12 pb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight animate-fade-in-up">Contact Us</h1>
        <div className="w-16 h-1 bg-amber-500 mx-auto mt-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}></div>
      </section>

      {/* Content Section - Upgraded with Framer Motion Stagger */}
      <section className="max-w-6xl mx-auto px-4 py-16 w-full mt-12 z-10 overflow-hidden">
        
        {/* Master Stagger Container */}
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.3 } // 0.3s delay between Left and Right panels
            }
          }}
          className="bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-slate-100"
        >
          
          {/* Left Column: Dark Corporate Info Panel (Animates First) */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 40 },
              show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
            }}
            className="w-full lg:w-2/5 bg-slate-200 text-white p-10 md:p-14 flex flex-col justify-between relative overflow-hidden"
          >
            
            {/* Subtle background decoration */}
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-slate-800 rounded-full opacity-50"></div>
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-amber-500 rounded-full opacity-10"></div>

            <div className="relative z-10">
              <h2 className="text-3xl text-slate-900 font-bold mb-2">Get in touch</h2>
              <p className="text-slate-800 mb-10 leading-relaxed">
                We are ready to partner on your next major infrastructure project. Reach out to our corporate team today.
              </p>
              
              <div className="space-y-8 text-lg">
                <div className="flex items-start group">
                  <span className="text-amber-500 text-2xl mr-4 mt-1 bg-slate-800 p-3 rounded-lg group-hover:bg-amber-500 group-hover:text-slate-900 transition-colors">📍</span>
                  <div>
                    <p className="font-bold text-slate-900 mb-1">Corporate Headquarters</p>
                    <p className="text-slate-800 text-base leading-relaxed">
                      Benson Town<br />
                      Bangalore - 560046
                    </p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <span className="text-amber-500 text-2xl mr-4 mt-1 bg-slate-800 p-3 rounded-lg group-hover:bg-amber-500 group-hover:text-slate-900 transition-colors">📞</span>
                  <div>
                    <p className="font-bold text-slate-900 mb-1">Direct Lines</p>
                    <p className="text-slate-800 text-base">+91-9008342182</p>
                    <p className="text-slate-800 text-base">+91-9964847399</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <span className="text-amber-800 text-2xl mr-4 mt-1 bg-slate-800 p-3 rounded-lg group-hover:bg-amber-500 group-hover:text-slate-900 transition-colors">✉️</span>
                  <div>
                    <p className="font-bold text-slate-900 mb-1">Email</p>
                    <p className="text-slate-800 text-base">gurusaidevelopers97@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Clean White Form (Animates Second) */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 40 },
              show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
            }}
            className="w-full lg:w-3/5 p-10 md:p-14 bg-white"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-8 border-b pb-4">Send us a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:border-amber-500 focus:ring-2 focus:ring-amber-200 focus:bg-white transition-all outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="mobile" className="block text-sm font-semibold text-slate-700 mb-2">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    required
                    placeholder="+91 90000 00000"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:border-amber-500 focus:ring-2 focus:ring-amber-200 focus:bg-white transition-all outline-none"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                  Email Address (Optional)
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="company@domain.com"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:border-amber-500 focus:ring-2 focus:ring-amber-200 focus:bg-white transition-all outline-none"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Tell us about your requirement..."
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:border-amber-500 focus:ring-2 focus:ring-amber-200 focus:bg-white transition-all outline-none resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className={`w-full px-8 py-4 rounded-lg font-bold transition-all text-lg shadow-md hover:shadow-lg mt-4 ${
                  buttonText === "SENT SUCCESSFULLY ✓" 
                    ? "bg-emerald-500 text-white hover:bg-emerald-600" 
                    : "bg-amber-500 text-slate-900 hover:bg-amber-400"
                }`}
              >
                {buttonText}
              </button>

              {formStatus && (
                <p className={`text-center font-medium mt-4 ${buttonText.includes("ERROR") ? "text-red-500" : "text-emerald-600"}`}>
                  {formStatus}
                </p>
              )}
            </form>
          </motion.div>
          
        </motion.div>
      </section>
    </main>
  );
}