const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-12 px-6 mt-auto border-t border-blue-100 shadow-inner">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-600">LMS</h2>
          <p className="text-gray-600">
            Empowering learners and instructors through a modern, interactive learning platform.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-blue-700">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-blue-500 transition">Home</a></li>
            <li><a href="/courses" className="hover:text-blue-500 transition">Courses</a></li>
            <li><a href="/about" className="hover:text-blue-500 transition">About</a></li>
            <li><a href="/contact" className="hover:text-blue-500 transition">Contact</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-blue-700">Resources</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-500 transition">Blog</a></li>
            <li><a href="#" className="hover:text-blue-500 transition">Help Center</a></li>
            <li><a href="#" className="hover:text-blue-500 transition">Terms of Service</a></li>
            <li><a href="#" className="hover:text-blue-500 transition">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-blue-700">Contact Us</h3>
          <p>Email: <a href="mailto:support@lms.com" className="hover:text-blue-500 transition">support@lms.com</a></p>
          <p>Phone: +91 98765 43210</p>
          <div className="mt-4 flex space-x-4">
            <a href="#" className="hover:text-blue-600 transition">Twitter</a>
            <a href="#" className="hover:text-blue-600 transition">LinkedIn</a>
            <a href="#" className="hover:text-blue-600 transition">GitHub</a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-500 text-xs">
        &copy; {new Date().getFullYear()} LMS Platform. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
