import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, ChevronDown, Award, Users, BookOpen, TrendingUp, Quote, ArrowRight, Check } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-amber-50/30 text-gray-900 font-inter">
      {/* Subtle texture overlay */}
      <div className="fixed inset-0 opacity-20 pointer-events-none bg-gradient-to-br from-amber-50/50 to-transparent" 
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.03'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='53' cy='53' r='1'/%3E%3Ccircle cx='27' cy='33' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
           }}>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold tracking-tight">
              <span className="text-gray-900">Sarah</span>
              <span className="text-gray-600 font-light ml-1">Mitchell</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['About', 'Services', 'Experience', 'Testimonials', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium tracking-wide"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md hover:bg-gray-100 transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t bg-white/95 backdrop-blur-md">
              {['About', 'Services', 'Experience', 'Testimonials', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block py-3 text-gray-700 hover:text-gray-900 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight">
                  Transforming
                  <span className="block text-gray-600 font-light">Organizations</span>
                  <span className="block">Through People</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                  Corporate trainer specializing in leadership development, team dynamics, 
                  and organizational excellence with over 15 years of proven results.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-all duration-200 transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center justify-center group">
                  <span className="font-medium">Let's Collaborate</span>
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-200 font-medium">
                  View Portfolio
                </button>
              </div>

              <div className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">500+</div>
                  <div className="text-sm text-gray-600 uppercase tracking-wide">Professionals Trained</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">50+</div>
                  <div className="text-sm text-gray-600 uppercase tracking-wide">Organizations</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">15+</div>
                  <div className="text-sm text-gray-600 uppercase tracking-wide">Years Experience</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img
                  src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Professional corporate trainer"
                  className="rounded-2xl shadow-2xl w-full max-w-lg mx-auto transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute top-8 right-8 w-full h-full bg-gray-200 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold mb-6 tracking-tight">About Sarah</h2>
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p className="text-lg">
                    With over 15 years of experience in corporate training and organizational development, 
                    I specialize in creating transformative learning experiences that drive measurable business results.
                  </p>
                  <p>
                    My approach combines evidence-based methodologies with practical application, ensuring that 
                    training initiatives translate into lasting behavioral change and improved performance.
                  </p>
                  <p>
                    I've had the privilege of working with Fortune 500 companies, government agencies, 
                    and growing startups across various industries including technology, healthcare, finance, and manufacturing.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Award className="text-gray-700" size={32} />
                  <h3 className="font-semibold text-gray-900">Certified Professional</h3>
                  <p className="text-sm text-gray-600">ICF Certified Coach, SHRM-CP, Dale Carnegie Master Trainer</p>
                </div>
                <div className="space-y-2">
                  <BookOpen className="text-gray-700" size={32} />
                  <h3 className="font-semibold text-gray-900">Continuous Learning</h3>
                  <p className="text-sm text-gray-600">MBA in Organizational Psychology, ongoing research in workplace dynamics</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184424/pexels-photo-3184424.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Training session"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 tracking-tight">Training Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive training solutions designed to unlock potential and drive organizational success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Users size={40} />,
                title: "Leadership Development",
                description: "Comprehensive programs to develop authentic, effective leaders at all organizational levels.",
                features: ["Executive Coaching", "360-degree Assessments", "Leadership Competency Mapping"]
              },
              {
                icon: <TrendingUp size={40} />,
                title: "Team Performance",
                description: "Build high-performing teams through improved communication, collaboration, and accountability.",
                features: ["Team Dynamics Workshop", "Conflict Resolution", "Performance Management"]
              },
              {
                icon: <BookOpen size={40} />,
                title: "Skills Development",
                description: "Targeted training programs to enhance specific competencies and professional capabilities.",
                features: ["Communication Skills", "Time Management", "Change Management"]
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="text-gray-700 mb-6 group-hover:text-gray-900 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <Check size={16} className="text-gray-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 tracking-tight">Professional Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A track record of delivering exceptional results across diverse industries and organizations
            </p>
          </div>

          <div className="space-y-12">
            {[
              {
                period: "2020 - Present",
                role: "Senior Corporate Training Consultant",
                company: "Independent Practice",
                achievements: [
                  "Designed and delivered 150+ training programs reaching 3,000+ professionals",
                  "Achieved 95% client satisfaction rate with measurable ROI improvements",
                  "Developed proprietary leadership assessment tools adopted by 5 major corporations"
                ]
              },
              {
                period: "2015 - 2020",
                role: "Director of Learning & Development",
                company: "TechCorp Solutions",
                achievements: [
                  "Led L&D strategy for 2,000+ employee technology company",
                  "Reduced employee turnover by 35% through targeted retention programs",
                  "Launched comprehensive management development program with 98% completion rate"
                ]
              },
              {
                period: "2010 - 2015",
                role: "Training Manager",
                company: "Global Finance Group",
                achievements: [
                  "Managed training budget of $2M+ across multiple business units",
                  "Implemented learning management system serving 10,000+ users globally",
                  "Developed compliance training programs ensuring 100% regulatory adherence"
                ]
              }
            ].map((exp, index) => (
              <div key={index} className="flex flex-col lg:flex-row gap-8 items-start">
                <div className="lg:w-1/4">
                  <div className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium inline-block">
                    {exp.period}
                  </div>
                </div>
                <div className="lg:w-3/4 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{exp.role}</h3>
                    <p className="text-gray-600 font-medium">{exp.company}</p>
                  </div>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start text-gray-700">
                        <ArrowRight size={16} className="text-gray-400 mr-3 mt-1 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 tracking-tight">What Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Testimonials from leaders who have experienced transformative results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "Sarah's leadership development program transformed our management team. The practical tools and insights she provided have had a lasting impact on our organizational culture.",
                author: "Michael Chen",
                role: "CEO, Innovation Labs",
                company: "Fortune 500"
              },
              {
                quote: "The team performance workshop exceeded our expectations. Our cross-functional collaboration improved dramatically, leading to a 40% increase in project delivery speed.",
                author: "Jennifer Rodriguez",
                role: "VP Operations",
                company: "Healthcare Solutions"
              },
              {
                quote: "Sarah's approach to change management helped us navigate a complex merger seamlessly. Her expertise in organizational psychology made all the difference.",
                author: "David Thompson",
                role: "Chief People Officer",
                company: "Global Manufacturing"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Quote size={32} className="text-gray-300 mb-4" />
                <p className="text-gray-700 leading-relaxed mb-6 italic">"{testimonial.quote}"</p>
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-gray-500">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold mb-6 tracking-tight">Let's Start a Conversation</h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Ready to transform your organization? I'd love to discuss how we can work together 
                  to achieve your training and development goals.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <Phone size={24} className="text-gray-700" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Phone</div>
                    <div className="text-gray-600">+1 (555) 123-4567</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <Mail size={24} className="text-gray-700" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Email</div>
                    <div className="text-gray-600">sarah@sarahmitchell.com</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <MapPin size={24} className="text-gray-700" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Location</div>
                    <div className="text-gray-600">San Francisco Bay Area</div>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <h3 className="text-lg font-semibold mb-4 text-gray-900">Availability</h3>
                <p className="text-gray-600">
                  Currently accepting new clients for Q2 2025. Book a consultation to discuss 
                  your training needs and explore how we can create a customized solution for your organization.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all"
                    placeholder="Your company"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all"
                    placeholder="your.email@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all resize-none"
                    placeholder="Tell me about your training needs and objectives..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gray-900 text-white py-4 px-6 rounded-lg hover:bg-gray-800 transition-all duration-200 transform hover:-translate-y-1 shadow-lg hover:shadow-xl font-medium"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-2xl font-bold mb-4">
              <span>Sarah</span><span className="font-light ml-1">Mitchell</span>
            </div>
            <p className="text-gray-400 mb-6">Corporate Training & Organizational Development</p>
            <div className="border-t border-gray-800 pt-6">
              <p className="text-gray-500 text-sm">
                © 2025 Sarah Mitchell. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;