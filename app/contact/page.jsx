import React from 'react';
import { MapPin, Phone, Mail, Send, User, MessageSquare, Clock, Globe } from 'lucide-react';

const LocationMap = () => {
  return (
    <div className="container mx-auto px-4 py-12 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-2 tracking-tight">
          JMC Technology Limited
        </h1>
        <p className="text-xl text-gray-600">Innovating for a Connected Future</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3 bg-white shadow-xl rounded-2xl overflow-hidden transform hover:scale-105 transition duration-300">
          <div className="p-4 bg-primary text-white flex justify-between items-center">
            <h2 className="text-xl font-semibold flex items-center">
              <MapPin className="mr-2" /> Our Location
            </h2>
            <span className="text-sm bg-white text-primary px-2 py-1 rounded-full">
              Dhaka, Bangladesh
            </span>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.0326707444417!2d90.44273821492546!3d23.765373084581183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c78c2a0db3f1%3A0x3c0d10bd59b2a2c4!2sJMC%20Technology%20Limited!5e0!3m2!1sen!2sbd!4v1629789065919!5m2!1sen!2sbd"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          ></iframe>
          <div className="p-4 bg-gray-50">
            <p className="text-gray-700 flex items-start mb-2">
              <MapPin className="mr-2 mt-1 flex-shrink-0 text-primary" />
              Block-H, MN Tower, House: 01 N - S Rd, Dhaka 1212
            </p>
            <div className="flex justify-between text-sm text-gray-600">
              <span className="flex items-center">
                <Clock className="mr-1 h-4 w-4 text-primary" /> Mon-Fri: 9AM-6PM
              </span>
              <span className="flex items-center">
                <Globe className="mr-1 h-4 w-4 text-primary" /> www.jmctechnology.com
              </span>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-2 bg-white shadow-xl rounded-2xl overflow-hidden p-6 space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-primary flex items-center">
              <Phone className="mr-2" /> Contact Us
            </h2>
            <div className="space-y-2">
              <p className="text-gray-700 flex items-center">
                <Phone className="mr-2 text-primary" /> +880 1321210095
              </p>
              <p className="text-gray-700 flex items-center">
                <Mail className="mr-2 text-primary" /> info@jmctechnology.com
              </p>
            </div>
          </div>
          
          <form className="space-y-4">
            <h3 className="text-xl font-semibold mb-2 text-primary flex items-center">
              <MessageSquare className="mr-2" /> Get in Touch
            </h3>
            <div className="relative">
              <input type="text" id="name" name="name" className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary" placeholder="Your Name" />
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
            <div className="relative">
              <input type="email" id="email" name="email" className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary" placeholder="Your Email" />
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
            <div className="relative">
              <textarea id="message" name="message" rows="3" className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary" placeholder="Your Message"></textarea>
              <MessageSquare className="absolute left-3 top-3 text-gray-400" size={18} />
            </div>
            <button type="submit" className="w-full flex justify-center items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition duration-300">
              <Send className="mr-2" size={18} /> Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LocationMap;