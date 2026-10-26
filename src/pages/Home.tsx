import { Link } from 'react-router-dom';
import { Phone, Clock, MapPin, Calendar, CreditCard, Video } from 'lucide-react';
import practiceConfig from '../config/practice';

export default function Home() {
  const services = Object.entries(practiceConfig.services)
    .filter(([, service]) => service.available)
    .slice(0, 6);

  return (
    <main id="main-content">
      {/* Hero Section */}
      <section className="bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-forest leading-tight mb-6">
                Personal General Practice Care in {practiceConfig.practice.suburb}, {practiceConfig.practice.state}
              </h1>
              <p className="text-lg text-charcoal-light leading-relaxed mb-8 max-w-xl">
                Learn about {practiceConfig.doctor.name}, available consultations, appointment options and practice information.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={practiceConfig.booking.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-forest text-white font-semibold rounded-lg hover:bg-forest-dark transition-colors text-base"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Appointment
                </a>
                {practiceConfig.practice.phone !== '[Phone — To Be Confirmed]' && (
                  <a
                    href={`tel:${practiceConfig.practice.phone}`}
                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-forest text-forest font-semibold rounded-lg hover:bg-forest hover:text-white transition-colors text-base"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call the Practice
                  </a>
                )}
              </div>
            </div>

            {/* Right — Doctor Portrait */}
            <div className="relative">
              <div className="aspect-[4/5] max-w-md mx-auto lg:max-w-none rounded-2xl overflow-hidden bg-sage/20">
                <img
                  src={practiceConfig.doctor.portrait}
                  alt={`Portrait of ${practiceConfig.doctor.name}, General Practitioner`}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-sage/30 rounded-xl px-4 py-3 hidden sm:block">
                <p className="text-sm font-medium text-forest">
                  {practiceConfig.doctor.qualifications}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Essential Practice Information */}
      <section className="bg-white border-y border-sage/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Address */}
            {practiceConfig.practice.address !== '[Street Address — To Be Confirmed]' && (
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-forest mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-charcoal mb-0.5">Location</p>
                  <p className="text-sm text-charcoal-light">
                    {practiceConfig.practice.suburb}, {practiceConfig.practice.state}
                  </p>
                </div>
              </div>
            )}

            {/* Hours */}
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-forest mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-semibold text-charcoal mb-0.5">Opening Hours</p>
                <p className="text-sm text-charcoal-light">
                  {practiceConfig.hours.monday !== '[Hours — To Be Confirmed]'
                    ? `${practiceConfig.hours.monday} (Mon)`
                    : 'See contact page'}
                </p>
              </div>
            </div>

            {/* New Patients */}
            <div className="flex items-start gap-3">
              <Calendar className="w-5 h-5 text-forest mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-semibold text-charcoal mb-0.5">New Patients</p>
                <p className="text-sm text-charcoal-light">
                  {practiceConfig.practice.newPatientsAccepted ? 'Currently accepting' : 'Please enquire'}
                </p>
              </div>
            </div>

            {/* Billing */}
            <div className="flex items-start gap-3">
              <CreditCard className="w-5 h-5 text-forest mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-semibold text-charcoal mb-0.5">Billing</p>
                <p className="text-sm text-charcoal-light">{practiceConfig.practice.billingType}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-forest mb-6">
              About {practiceConfig.doctor.name}
            </h2>
            <p className="text-base text-charcoal-light leading-relaxed mb-4">
              {practiceConfig.doctor.bio}
            </p>
            <p className="text-base text-charcoal-light leading-relaxed mb-6">
              {practiceConfig.doctor.approach}
            </p>
            {practiceConfig.doctor.languagesSpoken.length > 0 && (
              <p className="text-sm text-charcoal-light mb-6">
                <strong className="text-charcoal">Languages spoken:</strong>{' '}
                {practiceConfig.doctor.languagesSpoken.join(', ')}
              </p>
            )}
            <Link
              to="/about"
              className="inline-flex items-center text-forest font-semibold hover:underline text-base"
            >
              Read more about Dr Mitchell
              <span className="ml-1" aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="bg-white border-t border-sage/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="flex items-end justify-between mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-forest">
              Medical Services
            </h2>
            <Link
              to="/services"
              className="hidden sm:inline-flex text-forest font-semibold hover:underline text-sm"
            >
              View all services &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(([key, service]) => (
              <div
                key={key}
                className="p-6 bg-ivory rounded-xl border border-sage/30"
              >
                <h3 className="text-base font-semibold text-charcoal mb-2">
                  {formatServiceName(key)}
                </h3>
                <p className="text-sm text-charcoal-light leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 sm:hidden">
            <Link
              to="/services"
              className="inline-flex text-forest font-semibold hover:underline text-sm"
            >
              View all services &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Appointment Booking Section */}
      <section className="bg-forest">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Book an Appointment
            </h2>
            <p className="text-base text-white/85 leading-relaxed mb-8">
              Appointments can be booked online or by telephone. If you cannot find a suitable time, please contact the practice directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={practiceConfig.booking.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-forest font-semibold rounded-lg hover:bg-ivory transition-colors text-base"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Online
              </a>
              {practiceConfig.practice.phone !== '[Phone — To Be Confirmed]' && (
                <a
                  href={`tel:${practiceConfig.practice.phone}`}
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-forest transition-colors text-base"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call to Book
                </a>
              )}
            </div>
            <div className="mt-8 flex items-center justify-center gap-2">
              <Video className="w-4 h-4 text-white/70" />
              <p className="text-sm text-white/70">
                Telehealth consultations also available
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function formatServiceName(key: string): string {
  const names: Record<string, string> = {
    generalConsultations: 'General Consultations',
    preventiveHealth: 'Preventive Health',
    chronicDisease: 'Chronic Disease Management',
    immunisations: 'Immunisations',
    childAndFamilyHealth: 'Child & Family Health',
    womensHealth: "Women's Health",
    mensHealth: "Men's Health",
    mentalHealth: 'Mental Health',
    telehealth: 'Telehealth',
  };
  return names[key] || key;
}
