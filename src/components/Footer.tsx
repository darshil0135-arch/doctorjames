import { Link } from 'react-router-dom';
import practiceConfig from '../config/practice';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-forest text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Emergency Notice */}
        <div className="py-6 border-b border-white/20">
          <p className="text-sm text-white/90 leading-relaxed">
            <strong>For a life-threatening emergency, call Triple Zero (000).</strong>{' '}
            For health advice, contact healthdirect on{' '}
            <a href="tel:1800022222" className="underline hover:no-underline">
              1800 022 222
            </a>
            . This website is not an emergency medical service.
          </p>
        </div>

        {/* Footer Content */}
        <div className="py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Practice Info */}
          <div>
            <h3 className="text-lg font-semibold mb-3">{practiceConfig.doctor.name}</h3>
            <p className="text-sm text-white/80 leading-relaxed mb-2">
              {practiceConfig.doctor.title}
            </p>
            {practiceConfig.practice.address !== '[Street Address — To Be Confirmed]' && (
              <p className="text-sm text-white/80 leading-relaxed">
                {practiceConfig.practice.address}
                <br />
                {practiceConfig.practice.suburb} {practiceConfig.practice.state} {practiceConfig.practice.postcode}
              </p>
            )}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-white/80 hover:text-white transition-colors">
                  About the Doctor
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-white/80 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/appointments" className="text-sm text-white/80 hover:text-white transition-colors">
                  Appointments & Fees
                </Link>
              </li>
              <li>
                <Link to="/new-patients" className="text-sm text-white/80 hover:text-white transition-colors">
                  New Patients
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-white/80 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Patient Information */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Patient Information</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-sm text-white/80 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" className="text-sm text-white/80 hover:text-white transition-colors">
                  Website Disclaimer
                </Link>
              </li>
              <li>
                <Link to="/appointments" className="text-sm text-white/80 hover:text-white transition-colors">
                  Cancellation Policy
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm text-white/80 hover:text-white transition-colors">
                  Feedback & Complaints
                </a>
              </li>
              <li>
                <Link to="/accessibility" className="text-sm text-white/80 hover:text-white transition-colors">
                  Accessibility Statement
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/70">
            &copy; {currentYear} {practiceConfig.doctor.name}. All rights reserved.
          </p>
          <p className="text-xs text-white/70">
            {practiceConfig.practice.suburb}, {practiceConfig.practice.state}, Australia
          </p>
        </div>
      </div>
    </footer>
  );
}
