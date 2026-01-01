import React, { useState } from 'react';

/**
 * ContactSection - Premium agency-style contact form.
 * Features a minimalist 2-column layout and a liquid glass iOS success modal.
 */
const ContactSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you'd send data to a backend here
    setShowModal(true);
    setFormData({
      name: '',
      email: '',
      company: '',
      projectType: '',
      message: ''
    });
  };

  return (
    <section className="relative w-full bg-white pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="px-[30px]">
        {/* Top Indicators */}
        <div className="flex items-center justify-between mb-12 md:mb-16">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
            <p className="text-[10px] md:text-xs font-bold text-black uppercase tracking-[0.2em] leading-none">
              • Contact
            </p>
          </div>
          <span className="text-[10px] md:text-xs font-bold text-gray-300 uppercase tracking-widest">
            (05)
          </span>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">
          
          {/* Left Column: Heading & Copy */}
          <div className="flex flex-col">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-black mb-6 md:mb-8">
              Let’s start <br />
              a conversation
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-gray-400 mb-8 md:mb-10 max-w-md">
              Have a bold idea or a complex challenge? We're here to help you navigate the digital landscape.
            </h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-md">
              Whether you're looking to start a new project, explore a potential collaboration, or just have a few questions about our process, our team is ready to listen and provide strategic insights.
            </p>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-[#f5f5f7] rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-12 lg:p-16">
            <form className="flex flex-col gap-6 md:gap-8" onSubmit={handleSubmit}>
              
              {/* Row 1: Name */}
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400 ml-1">Full Name</label>
                <input 
                  required
                  type="text" 
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-white rounded-2xl md:rounded-[1.2rem] px-6 py-4 md:py-5 text-black placeholder:text-gray-300 outline-none focus:ring-2 focus:ring-black/5 transition-all text-sm md:text-base"
                />
              </div>

              {/* Row 2: Email */}
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400 ml-1">Email Address</label>
                <input 
                  required
                  type="email" 
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-white rounded-2xl md:rounded-[1.2rem] px-6 py-4 md:py-5 text-black placeholder:text-gray-300 outline-none focus:ring-2 focus:ring-black/5 transition-all text-sm md:text-base"
                />
              </div>

              {/* Row 3: Company */}
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400 ml-1">Company (Optional)</label>
                <input 
                  type="text" 
                  placeholder="Your Agency"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  className="w-full bg-white rounded-2xl md:rounded-[1.2rem] px-6 py-4 md:py-5 text-black placeholder:text-gray-300 outline-none focus:ring-2 focus:ring-black/5 transition-all text-sm md:text-base"
                />
              </div>

              {/* Row 4: Project Type */}
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400 ml-1">Project Type</label>
                <div className="relative">
                  <select 
                    required
                    value={formData.projectType}
                    onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                    className="w-full bg-white rounded-2xl md:rounded-[1.2rem] px-6 py-4 md:py-5 text-black appearance-none outline-none focus:ring-2 focus:ring-black/5 transition-all cursor-pointer text-sm md:text-base"
                  >
                    <option value="" disabled>Select an option</option>
                    <option value="branding">Branding</option>
                    <option value="development">Development</option>
                    <option value="web-design">Web Design</option>
                    <option value="marketing">Marketing</option>
                  </select>
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Row 5: Message */}
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400 ml-1">Message</label>
                <textarea 
                  required
                  rows="4"
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-white rounded-2xl md:rounded-[1.2rem] px-6 py-4 md:py-5 text-black placeholder:text-gray-300 outline-none focus:ring-2 focus:ring-black/5 transition-all resize-none text-sm md:text-base"
                ></textarea>
              </div>

              {/* Row 6: Submit */}
              <button 
                type="submit"
                className="w-full bg-black text-white rounded-full py-5 md:py-6 font-bold text-lg hover:bg-gray-800 transition-all hover:scale-[1.02] active:scale-[0.98] mt-4"
              >
                Send Message
              </button>

            </form>
          </div>
        </div>
      </div>

      {/* Liquid Glass iOS Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center px-6">
          {/* Backdrop Blur Overlay */}
          <div 
            className="absolute inset-0 bg-black/5 backdrop-blur-sm transition-opacity"
            onClick={() => setShowModal(false)}
          ></div>
          
          {/* Glass Modal Card */}
          <div className="relative bg-white/40 backdrop-blur-[40px] border border-white/40 w-full max-w-md rounded-[2.5rem] p-10 md:p-12 shadow-[0_32px_128px_rgba(0,0,0,0.1)] text-center animate-in zoom-in-95 duration-500">
            <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            
            <h3 className="text-3xl font-bold text-black mb-4 tracking-tight">Message Sent!</h3>
            <p className="text-gray-700 leading-relaxed font-medium mb-10">
              Thank you for reaching out. <br />
              We'll get back to you within 24 hours.
            </p>
            
            <button 
              onClick={() => setShowModal(false)}
              className="w-full bg-white text-black rounded-full py-4 font-bold text-sm shadow-sm hover:scale-[1.05] active:scale-[0.95] transition-all"
            >
              Great, thanks!
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactSection;
