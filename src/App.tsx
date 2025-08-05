import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, ChevronDown, Award, Users, BookOpen, TrendingUp, Quote, ArrowRight, Check, Star, Calendar, Globe, Linkedin, Twitter, Instagram, Play, Zap, Target, Brain, Heart, Shield } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'services', 'experience', 'testimonials', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-x-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/3 to-purple-500/3 rounded-full blur-3xl animate-spin" style={{ animationDuration: '60s' }}></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrollY > 50 
          ? 'bg-slate-900/95 backdrop-blur-xl border-b border-slate-700/50 shadow-2xl' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="text-2xl font-bold tracking-tight cursor-pointer" onClick={() => scrollToSection('home')}>
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Alexandra
              </span>
              <span className="text-slate-300 font-light ml-2">Sterling</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'services', label: 'Services' },
                { id: 'experience', label: 'Experience' },
                { id: 'testimonials', label: 'Testimonials' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 hover:text-blue-400 ${
                    activeSection === item.id ? 'text-blue-400' : 'text-slate-300'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg hover:bg-slate-800 transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-6 border-t border-slate-700/50 bg-slate-900/95 backdrop-blur-xl">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'services', label: 'Services' },
                { id: 'experience', label: 'Experience' },
                { id: 'testimonials', label: 'Testimonials' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left py-3 text-slate-300 hover:text-blue-400 transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-sm text-blue-300 font-medium">
                  <Zap size={16} className="mr-2" />
                  Transforming Organizations Since 2008
                </div>
                
                <h1 className="text-6xl md:text-7xl font-bold leading-tight tracking-tight">
                  <span className="block bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                    Elevating
                  </span>
                  <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Leadership
                  </span>
                  <span className="block text-slate-300 text-5xl md:text-6xl font-light">
                    Excellence
                  </span>
                </h1>
                
                <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">
                  Award-winning corporate trainer and leadership development expert, specializing in 
                  transformational programs that drive measurable business results and unlock human potential.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:-translate-y-1 shadow-2xl hover:shadow-blue-500/25 flex items-center justify-center overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <span className="relative font-semibold">Start Your Transformation</span>
                  <ArrowRight size={20} className="relative ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button 
                  onClick={() => scrollToSection('services')}
                  className="group border-2 border-slate-600 text-slate-300 px-8 py-4 rounded-xl hover:border-blue-500 hover:text-blue-400 hover:bg-blue-500/5 transition-all duration-300 font-semibold flex items-center justify-center"
                >
                  <Play size={20} className="mr-2 group-hover:text-blue-400" />
                  Explore Services
                </button>
              </div>

              <div className="flex items-center space-x-12 pt-8">
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">2,500+</div>
                  <div className="text-sm text-slate-500 uppercase tracking-wider font-medium">Leaders Trained</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">150+</div>
                  <div className="text-sm text-slate-500 uppercase tracking-wider font-medium">Organizations</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">16+</div>
                  <div className="text-sm text-slate-500 uppercase tracking-wider font-medium">Years Excellence</div>
                </div>
              </div>
            </div>

            <div className="relative animate-slide-up">
              <div className="relative z-10 group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Professional corporate trainer Alexandra Sterling"
                  className="relative rounded-3xl shadow-2xl w-full max-w-lg mx-auto transform group-hover:scale-105 transition-all duration-500 border border-slate-700/50"
                />
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-2xl shadow-2xl">
                  <div className="flex items-center space-x-2 text-white">
                    <Star className="fill-current" size={20} />
                    <span className="font-bold">4.9/5</span>
                    <span className="text-sm opacity-90">Client Rating</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-xl"></div>
              <img
                src="https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Leadership training session"
                className="relative rounded-3xl shadow-2xl w-full border border-slate-700/50"
              />
              <div className="absolute top-6 left-6 bg-slate-900/90 backdrop-blur-sm p-4 rounded-2xl border border-slate-700/50">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-slate-300">Currently Available</span>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-full text-sm text-purple-300 font-medium mb-6">
                  <Brain size={16} className="mr-2" />
                  About Alexandra
                </div>
                
                <h2 className="text-5xl font-bold mb-8 tracking-tight">
                  <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                    Transforming Leaders,
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Transforming Organizations
                  </span>
                </h2>
                
                <div className="space-y-6 text-slate-400 leading-relaxed text-lg">
                  <p>
                    With over 16 years of experience in executive coaching and organizational development, 
                    I've dedicated my career to unlocking the extraordinary potential within leaders and teams.
                  </p>
                  <p>
                    My evidence-based approach combines cutting-edge neuroscience, behavioral psychology, 
                    and proven business methodologies to create lasting transformation that drives measurable results.
                  </p>
                  <p>
                    From Fortune 100 companies to innovative startups, I've helped organizations across 
                    technology, healthcare, finance, and manufacturing achieve breakthrough performance.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="group p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300">
                  <Award className="text-blue-400 mb-4 group-hover:scale-110 transition-transform" size={32} />
                  <h3 className="font-bold text-white mb-2">Elite Certifications</h3>
                  <p className="text-sm text-slate-400">ICF Master Coach, SHRM-SCP, Certified Neurofeedback Practitioner</p>
                </div>
                
                <div className="group p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-slate-700/50 hover:border-purple-500/30 transition-all duration-300">
                  <BookOpen className="text-purple-400 mb-4 group-hover:scale-110 transition-transform" size={32} />
                  <h3 className="font-bold text-white mb-2">Continuous Innovation</h3>
                  <p className="text-sm text-slate-400">PhD in Organizational Psychology, Published researcher in leadership science</p>
                </div>
              </div>

              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-2">
                  <Shield className="text-green-400" size={20} />
                  <span className="text-sm text-slate-400">100% Confidentiality Guaranteed</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="text-blue-400" size={20} />
                  <span className="text-sm text-slate-400">Global Reach</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-800/20 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-sm text-blue-300 font-medium mb-6">
              <Target size={16} className="mr-2" />
              Premium Services
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight">
              <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                Transformational
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Training Solutions
              </span>
            </h2>
            
            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Comprehensive programs designed to unlock potential, drive performance, 
              and create lasting organizational change
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Users size={48} />,
                title: "Executive Leadership",
                description: "Transform C-suite and senior leaders with personalized coaching programs that drive strategic thinking and authentic leadership.",
                features: ["1:1 Executive Coaching", "360° Leadership Assessment", "Strategic Vision Development", "Board Presentation Skills"],
                color: "from-blue-500 to-cyan-500",
                bgColor: "from-blue-500/10 to-cyan-500/10",
                borderColor: "border-blue-500/20"
              },
              {
                icon: <TrendingUp size={48} />,
                title: "High-Performance Teams",
                description: "Build cohesive, high-performing teams through advanced collaboration frameworks and psychological safety principles.",
                features: ["Team Dynamics Optimization", "Conflict Resolution Mastery", "Innovation Workshops", "Remote Team Excellence"],
                color: "from-purple-500 to-pink-500",
                bgColor: "from-purple-500/10 to-pink-500/10",
                borderColor: "border-purple-500/20"
              },
              {
                icon: <Brain size={48} />,
                title: "Organizational Culture",
                description: "Design and implement culture transformation initiatives that align values, behaviors, and business outcomes.",
                features: ["Culture Assessment", "Change Management", "Values Integration", "Employee Engagement"],
                color: "from-emerald-500 to-teal-500",
                bgColor: "from-emerald-500/10 to-teal-500/10",
                borderColor: "border-emerald-500/20"
              },
              {
                icon: <Heart size={48} />,
                title: "Emotional Intelligence",
                description: "Develop emotional intelligence capabilities that enhance leadership effectiveness and interpersonal relationships.",
                features: ["EQ Assessment & Development", "Mindfulness Training", "Stress Management", "Empathetic Leadership"],
                color: "from-rose-500 to-orange-500",
                bgColor: "from-rose-500/10 to-orange-500/10",
                borderColor: "border-rose-500/20"
              },
              {
                icon: <Zap size={48} />,
                title: "Innovation Leadership",
                description: "Foster innovation mindsets and create environments where creativity and breakthrough thinking flourish.",
                features: ["Design Thinking Workshops", "Innovation Labs", "Creative Problem Solving", "Future-Ready Leadership"],
                color: "from-yellow-500 to-amber-500",
                bgColor: "from-yellow-500/10 to-amber-500/10",
                borderColor: "border-yellow-500/20"
              },
              {
                icon: <Target size={48} />,
                title: "Strategic Execution",
                description: "Bridge the gap between strategy and execution with frameworks that ensure consistent delivery of results.",
                features: ["Strategic Planning", "OKR Implementation", "Performance Management", "Accountability Systems"],
                color: "from-indigo-500 to-blue-500",
                bgColor: "from-indigo-500/10 to-blue-500/10",
                borderColor: "border-indigo-500/20"
              }
            ].map((service, index) => (
              <div key={index} className={`group relative p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-3xl border ${service.borderColor} hover:border-opacity-50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl overflow-hidden`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-r ${service.color} bg-opacity-10 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className={`bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                      {service.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-white transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-400 mb-6 leading-relaxed group-hover:text-slate-300 transition-colors">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color} mr-3`}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-6 pt-6 border-t border-slate-700/50">
                    <button className={`text-sm font-semibold bg-gradient-to-r ${service.color} bg-clip-text text-transparent hover:opacity-80 transition-opacity flex items-center group/btn`}>
                      Learn More
                      <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-full text-sm text-purple-300 font-medium mb-6">
              <Calendar size={16} className="mr-2" />
              Professional Journey
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight">
              <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                Proven Track Record
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                of Excellence
              </span>
            </h2>
            
            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              A career dedicated to transforming organizations and developing exceptional leaders 
              across diverse industries and global markets
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 hidden lg:block"></div>
            
            <div className="space-y-16">
              {[
                {
                  period: "2020 - Present",
                  role: "Founder & Principal Consultant",
                  company: "Sterling Leadership Solutions",
                  description: "Leading a boutique consultancy specializing in executive coaching and organizational transformation for Fortune 500 companies.",
                  achievements: [
                    "Generated $50M+ in measurable ROI for client organizations through leadership development programs",
                    "Achieved 98% client retention rate with average engagement satisfaction of 4.9/5.0",
                    "Developed proprietary 'Neuroscience-Based Leadership' methodology adopted by 25+ organizations",
                    "Featured keynote speaker at 50+ international conferences and leadership summits"
                  ],
                  metrics: { clients: "75+", revenue: "$50M+", satisfaction: "4.9/5" },
                  color: "from-blue-500 to-purple-500"
                },
                {
                  period: "2015 - 2020",
                  role: "VP of Leadership Development",
                  company: "Global Tech Innovations",
                  description: "Spearheaded enterprise-wide leadership development strategy for 15,000+ employee technology corporation.",
                  achievements: [
                    "Designed and launched comprehensive leadership pipeline reducing time-to-promotion by 40%",
                    "Implemented global mentorship program connecting 2,000+ employees across 25 countries",
                    "Led cultural transformation initiative resulting in 60% improvement in employee engagement",
                    "Established leadership academy with 95% program completion rate and 85% internal promotion rate"
                  ],
                  metrics: { employees: "15K+", engagement: "+60%", promotion: "85%" },
                  color: "from-purple-500 to-pink-500"
                },
                {
                  period: "2010 - 2015",
                  role: "Senior Training Director",
                  company: "Fortune Financial Group",
                  description: "Managed comprehensive training and development programs for multi-billion dollar financial services organization.",
                  achievements: [
                    "Oversaw $15M annual training budget across 12 business units and 8,000+ employees",
                    "Launched digital learning platform serving 25,000+ users with 92% utilization rate",
                    "Developed compliance training programs ensuring 100% regulatory adherence across all divisions",
                    "Created executive onboarding program reducing time-to-productivity by 50% for senior hires"
                  ],
                  metrics: { budget: "$15M", users: "25K+", compliance: "100%" },
                  color: "from-pink-500 to-rose-500"
                },
                {
                  period: "2008 - 2010",
                  role: "Leadership Development Manager",
                  company: "Healthcare Systems International",
                  description: "Launched career developing leadership capabilities in healthcare management and clinical excellence.",
                  achievements: [
                    "Built leadership development program from ground up serving 500+ healthcare professionals",
                    "Achieved 45% reduction in management turnover through targeted retention initiatives",
                    "Implemented cross-functional training programs improving patient satisfaction scores by 35%",
                    "Established mentorship network connecting senior executives with emerging leaders"
                  ],
                  metrics: { professionals: "500+", turnover: "-45%", satisfaction: "+35%" },
                  color: "from-rose-500 to-orange-500"
                }
              ].map((exp, index) => (
                <div key={index} className="relative flex flex-col lg:flex-row gap-8 items-start">
                  {/* Timeline dot */}
                  <div className="hidden lg:flex absolute left-6 w-5 h-5 bg-gradient-to-r from-slate-800 to-slate-700 border-2 border-blue-500 rounded-full z-10"></div>
                  
                  <div className="lg:ml-20 w-full">
                    <div className="group p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-3xl border border-slate-700/50 hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                        <div>
                          <div className={`inline-flex px-4 py-2 bg-gradient-to-r ${exp.color} bg-opacity-10 rounded-full text-sm font-semibold mb-4`}>
                            <span className={`bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
                              {exp.period}
                            </span>
                          </div>
                          <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                          <p className="text-lg text-blue-400 font-semibold mb-4">{exp.company}</p>
                          <p className="text-slate-400 leading-relaxed">{exp.description}</p>
                        </div>
                        
                        <div className="flex lg:flex-col gap-4 lg:gap-2 mt-4 lg:mt-0 lg:text-right">
                          {Object.entries(exp.metrics).map(([key, value]) => (
                            <div key={key} className="text-center lg:text-right">
                              <div className={`text-xl font-bold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
                                {value}
                              </div>
                              <div className="text-xs text-slate-500 uppercase tracking-wider">
                                {key.replace(/([A-Z])/g, ' $1').trim()}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {exp.achievements.map((achievement, idx) => (
                          <div key={idx} className="flex items-start text-slate-400 group-hover:text-slate-300 transition-colors">
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${exp.color} mr-3 mt-2 flex-shrink-0`}></div>
                            <span className="text-sm leading-relaxed">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-800/20 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-full text-sm text-emerald-300 font-medium mb-6">
              <Quote size={16} className="mr-2" />
              Client Success Stories
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight">
              <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                Transformational
              </span>
              <br />
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Results
              </span>
            </h2>
            
            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Hear from executives and organizations who have experienced breakthrough 
              results through our partnership
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "Alexandra's executive coaching transformed not just my leadership style, but our entire organizational culture. The ROI was immediate and continues to compound. Her neuroscience-based approach is revolutionary.",
                author: "Sarah Chen",
                role: "CEO & Founder",
                company: "TechVision AI",
                industry: "Artificial Intelligence",
                rating: 5,
                result: "300% team productivity increase",
                image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400",
                color: "from-blue-500 to-cyan-500"
              },
              {
                quote: "The leadership development program Alexandra designed for our C-suite was exceptional. Her ability to blend strategic thinking with emotional intelligence created lasting behavioral change across our organization.",
                author: "Marcus Rodriguez",
                role: "Chief Operating Officer",
                company: "Global Healthcare Solutions",
                industry: "Healthcare Technology",
                rating: 5,
                result: "85% leadership effectiveness improvement",
                image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400",
                color: "from-purple-500 to-pink-500"
              },
              {
                quote: "Working with Alexandra was a game-changer for our merger integration. Her culture transformation methodology helped us unite two distinct organizations into a cohesive, high-performing team.",
                author: "Jennifer Park",
                role: "Chief People Officer",
                company: "Meridian Financial Group",
                industry: "Financial Services",
                rating: 5,
                result: "95% employee retention during merger",
                image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400",
                color: "from-emerald-500 to-teal-500"
              },
              {
                quote: "Alexandra's innovation leadership workshops unlocked creative potential we didn't know existed in our teams. The breakthrough thinking methodologies she taught are now core to our competitive advantage.",
                author: "David Kim",
                role: "VP of Innovation",
                company: "NextGen Manufacturing",
                industry: "Advanced Manufacturing",
                rating: 5,
                result: "200% increase in patent applications",
                image: "https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=400",
                color: "from-rose-500 to-orange-500"
              },
              {
                quote: "The emotional intelligence training Alexandra provided to our leadership team transformed our workplace culture. Communication improved dramatically, and employee engagement reached all-time highs.",
                author: "Lisa Thompson",
                role: "Director of Human Resources",
                company: "Sustainable Energy Corp",
                industry: "Clean Energy",
                rating: 5,
                result: "75% improvement in employee engagement",
                image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400",
                color: "from-yellow-500 to-amber-500"
              },
              {
                quote: "Alexandra's strategic execution framework helped us bridge the gap between vision and results. Our ability to execute on strategic initiatives improved by 400% within six months of implementation.",
                author: "Robert Chang",
                role: "Chief Strategy Officer",
                company: "Digital Transformation Inc",
                industry: "Technology Consulting",
                rating: 5,
                result: "400% improvement in strategic execution",
                image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400",
                color: "from-indigo-500 to-blue-500"
              }
            ].map((testimonial, index) => (
              <div key={index} className={`group relative p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-3xl border border-slate-700/50 hover:border-opacity-50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl overflow-hidden`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className={`fill-current bg-gradient-to-r ${testimonial.color} bg-clip-text text-transparent`} />
                    ))}
                  </div>
                  
                  <Quote size={32} className="text-slate-600 mb-4" />
                  
                  <p className="text-slate-300 leading-relaxed mb-6 italic group-hover:text-white transition-colors">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className={`inline-flex px-4 py-2 bg-gradient-to-r ${testimonial.color} bg-opacity-10 rounded-full text-sm font-semibold mb-6`}>
                    <span className={`bg-gradient-to-r ${testimonial.color} bg-clip-text text-transparent`}>
                      {testimonial.result}
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-4 pt-6 border-t border-slate-700/50">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full object-cover border-2 border-slate-600"
                    />
                    <div>
                      <div className="font-semibold text-white">{testimonial.author}</div>
                      <div className="text-sm text-slate-400">{testimonial.role}</div>
                      <div className="text-sm text-slate-500">{testimonial.company}</div>
                      <div className="text-xs text-slate-600">{testimonial.industry}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-sm text-blue-300 font-medium mb-6">
                  <Mail size={16} className="mr-2" />
                  Let's Connect
                </div>
                
                <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight">
                  <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                    Ready to Transform
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Your Organization?
                  </span>
                </h2>
                
                <p className="text-xl text-slate-400 leading-relaxed mb-8">
                  Let's discuss how we can unlock your organization's potential and create 
                  lasting transformation that drives measurable results.
                </p>
              </div>

              <div className="space-y-6">
                <div className="group flex items-center space-x-4 p-4 rounded-2xl hover:bg-slate-800/30 transition-all duration-300">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-xl group-hover:scale-110 transition-transform">
                    <Phone size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Direct Line</div>
                    <div className="text-slate-400">+1 (555) 987-6543</div>
                    <div className="text-sm text-slate-500">Available Mon-Fri, 9AM-6PM PST</div>
                  </div>
                </div>
                
                <div className="group flex items-center space-x-4 p-4 rounded-2xl hover:bg-slate-800/30 transition-all duration-300">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-xl group-hover:scale-110 transition-transform">
                    <Mail size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Email</div>
                    <div className="text-slate-400">alexandra@sterlingls.com</div>
                    <div className="text-sm text-slate-500">Response within 24 hours</div>
                  </div>
                </div>
                
                <div className="group flex items-center space-x-4 p-4 rounded-2xl hover:bg-slate-800/30 transition-all duration-300">
                  <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-3 rounded-xl group-hover:scale-110 transition-transform">
                    <MapPin size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Headquarters</div>
                    <div className="text-slate-400">San Francisco, California</div>
                    <div className="text-sm text-slate-500">Global virtual delivery available</div>
                  </div>
                </div>
              </div>

              <div className="pt-8 space-y-6">
                <h3 className="text-2xl font-bold text-white">Current Availability</h3>
                <div className="p-6 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="font-semibold text-green-300">Accepting New Clients</span>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Currently booking strategic consulting engagements for Q2-Q3 2025. 
                    Executive coaching spots available with 2-week lead time. 
                    Book your complimentary strategy session to explore partnership opportunities.
                  </p>
                </div>
                
                <div className="flex items-center space-x-6">
                  <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                    <Linkedin size={24} />
                  </a>
                  <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                    <Twitter size={24} />
                  </a>
                  <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                    <Instagram size={24} />
                  </a>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-xl"></div>
              
              <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-3xl border border-slate-700/50 backdrop-blur-sm">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-semibold text-slate-300 mb-3">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        className="w-full px-4 py-4 bg-slate-800/50 border border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white placeholder-slate-400"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-semibold text-slate-300 mb-3">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        className="w-full px-4 py-4 bg-slate-800/50 border border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white placeholder-slate-400"
                        placeholder="Smith"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-300 mb-3">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-4 bg-slate-800/50 border border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white placeholder-slate-400"
                      placeholder="john.smith@company.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-slate-300 mb-3">
                      Company & Title
                    </label>
                    <input
                      type="text"
                      id="company"
                      className="w-full px-4 py-4 bg-slate-800/50 border border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white placeholder-slate-400"
                      placeholder="CEO, TechCorp Inc."
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-slate-300 mb-3">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      className="w-full px-4 py-4 bg-slate-800/50 border border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white"
                    >
                      <option value="">Select a service...</option>
                      <option value="executive">Executive Leadership</option>
                      <option value="teams">High-Performance Teams</option>
                      <option value="culture">Organizational Culture</option>
                      <option value="emotional">Emotional Intelligence</option>
                      <option value="innovation">Innovation Leadership</option>
                      <option value="strategy">Strategic Execution</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-300 mb-3">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-4 bg-slate-800/50 border border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none text-white placeholder-slate-400"
                      placeholder="Tell me about your organization's challenges, goals, and how I can help you achieve breakthrough results..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="group w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-xl hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:-translate-y-1 shadow-2xl hover:shadow-blue-500/25 font-semibold flex items-center justify-center overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    <span className="relative">Schedule Strategy Session</span>
                    <ArrowRight size={20} className="relative ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                  
                  <p className="text-xs text-slate-500 text-center leading-relaxed">
                    By submitting this form, you agree to receive communications from Sterling Leadership Solutions. 
                    We respect your privacy and will never share your information.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-20 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="text-3xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Alexandra
              </span>
              <span className="text-slate-300 font-light ml-2">Sterling</span>
            </div>
            
            <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Transforming organizations through exceptional leadership development, 
              innovative training solutions, and measurable business results.
            </p>
            
            <div className="flex justify-center items-center space-x-8">
              <a href="#" className="text-slate-500 hover:text-blue-400 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-slate-500 hover:text-blue-400 transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-slate-500 hover:text-blue-400 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-slate-500 hover:text-blue-400 transition-colors">
                <Globe size={24} />
              </a>
            </div>
            
            <div className="pt-8 border-t border-slate-800">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <p className="text-slate-500 text-sm">
                  © 2025 Alexandra Sterling. All rights reserved.
                </p>
                <div className="flex items-center space-x-6 text-sm text-slate-500">
                  <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
                  <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
                  <a href="#" className="hover:text-slate-300 transition-colors">Cookie Policy</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;