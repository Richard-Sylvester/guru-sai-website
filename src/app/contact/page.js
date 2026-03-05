"use client"; // This tells Next.js this is an interactive component

import { useState } from "react";

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
        event.target.reset(); // Clears the form fields
        
        // Reset button text after 3 seconds
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
      
      {/* Header Banner */}
      <section className="w-full bg-slate-900 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">Contact Us</h1>
        <div className="w-16 h-1 bg-amber-500 mx-auto mt-6"></div>
      </section>

      {/* Content Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 md:py-24 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          
          {/* Column 1: Corporate Office Details */}
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-sm border border-slate-200 flex flex-col">
            <h2 className="text-2xl font-bold text-slate-900 mb-8 border-b pb-4">Corporate Office Details</h2>
            
            <div className="space-y-6 text-lg text-slate-700 flex-grow">
              <div className="flex items-start">
                <span className="text-2xl mr-4">📍</span>
                <div>
                  <p className="font-bold text-slate-900">Headquarters</p>
                  <p>Benson Town</p>
                  <p>Bangalore - 560046</p>
                </div>
              </div>

              <div className="flex items-center">
                <span className="text-2xl mr-4">📞</span>
                <div>
                  <p className="font-bold text-slate-900">Phone</p>
                  <p>+91-9008342182 / +91-9964847399</p>
                </div>
              </div>

              <div className="flex items-center">
                <span className="text-2xl mr-4">✉️</span>
                <div>
                  <p className="font-bold text-slate-900">Email</p>
                  <p>gurusaidevelopers97@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Interactive Contact Form */}
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-sm border border-slate-200">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight">Get In Touch</h2>
            <p className="text-slate-600 mb-10 leading-relaxed max-w-lg">
              Have questions or need more information? Reach out to us today. Our team will be happy to assist you and solve your queries.
            </p>

            {/* Added onSubmit handler here */}
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                  Your Name*
                </label>
                <input
                  type="text"
                  id="name"
                  name="name" // The 'name' attribute is what Web3Forms reads
                  required
                  placeholder="Your Name*"
                  className="w-full px-4 py-3.5 border border-slate-300 rounded focus:border-amber-500 focus:ring-1 focus:ring-amber-500 bg-white"
                />
              </div>

              <div>
                <label htmlFor="mobile" className="block text-sm font-medium text-slate-700 mb-2">
                  Mobile No*
                </label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  required
                  placeholder="Mobile No*"
                  className="w-full px-4 py-3.5 border border-slate-300 rounded focus:border-amber-500 focus:ring-1 focus:ring-amber-500 bg-white"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                  Email (Optional)
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Optional"
                  className="w-full px-4 py-3.5 border border-slate-300 rounded focus:border-amber-500 focus:ring-1 focus:ring-amber-500 bg-white"
                />
              </div>

              {/* Dynamic Submit Button */}
              <button
                type="submit"
                className={`w-full px-8 py-4 rounded font-bold transition text-lg shadow-sm ${
                  buttonText === "SENT SUCCESSFULLY ✓" 
                    ? "bg-emerald-500 text-white hover:bg-emerald-600" 
                    : "bg-amber-500 text-slate-900 hover:bg-amber-400"
                }`}
              >
                {buttonText}
              </button>

              {/* Status Message */}
              {formStatus && (
                <p className={`text-center font-medium mt-4 ${buttonText.includes("ERROR") ? "text-red-500" : "text-emerald-600"}`}>
                  {formStatus}
                </p>
              )}
            </form>
          </div>
          
        </div>
      </section>
    </main>
  );
}