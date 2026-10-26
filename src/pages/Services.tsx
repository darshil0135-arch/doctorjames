import { Link } from 'react-router-dom';
import { Stethoscope, Shield, Heart, Syringe, Baby, User, Users, Brain, Video } from 'lucide-react';
import practiceConfig from '../config/practice';

const serviceIcons: Record<string, React.ReactNode> = {
  generalConsultations: <Stethoscope className="w-6 h-6" />,
  preventiveHealth: <Shield className="w-6 h-6" />,
  chronicDisease: <Heart className="w-6 h-6" />,
  immunisations: <Syringe className="w-6 h-6" />,
  childAndFamilyHealth: <Baby className="w-6 h-6" />,
  womensHealth: <User className="w-6 h-6" />,
  mensHealth: <Users className="w-6 h-6" />,
  mentalHealth: <Brain className="w-6 h-6" />,
  telehealth: <Video className="w-6 h-6" />,
};

const serviceNames: Record<string, string> = {
  generalConsultations: 'General Consultations',
  preventiveHealth: 'Preventive Health & Screening',
  chronicDisease: 'Chronic Disease Management',
  immunisations: 'Immunisations',
  childAndFamilyHealth: 'Child & Family Health',
  womensHealth: "Women's Health",
  mensHealth: "Men's Health",
  mentalHealth: 'Mental Health',
  telehealth: 'Telehealth Consultations',
};

export default function Services() {
  const availableServices = Object.entries(practiceConfig.services)
    .filter(([, service]) => service.available);

  return (
    <main id="main-content">
      {/* Page Header */}
      <section className="bg-white border-b border-sage/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
          <h1 className="text-3xl sm:text-4xl font-bold text-forest">
            Medical Services
          </h1>
          <p className="mt-3 text-base text-charcoal-light max-w-2xl">
            {practiceConfig.doctor.name} provides a range of general practice services.
            Consultations are available in person and via telehealth.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {availableServices.map(([key, service]) => (
              <div
                key={key}
                className="p-6 bg-white rounded-xl border border-sage/30 hover:border-sage transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-sage/20 flex items-center justify-center text-forest mb-4">
                  {serviceIcons[key]}
                </div>
                <h2 className="text-lg font-semibold text-charcoal mb-2">
                  {serviceNames[key]}
                </h2>
                <p className="text-sm text-charcoal-light leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {availableServices.length === 0 && (
            <div className="text-center py-12">
              <p className="text-charcoal-light">
                Service information will be available soon. Please contact the practice for details.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Booking CTA */}
      <section className="bg-white border-t border-sage/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-xl font-semibold text-forest mb-3">
              Need to book a consultation?
            </h2>
            <p className="text-base text-charcoal-light mb-6">
              Appointments are available for all listed services. Book online or call the practice.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={practiceConfig.booking.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-forest text-white font-semibold rounded-lg hover:bg-forest-dark transition-colors"
              >
                Book Appointment
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-forest text-forest font-semibold rounded-lg hover:bg-forest hover:text-white transition-colors"
              >
                Contact the Practice
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
