import { Link } from 'react-router-dom';
import practiceConfig from '../config/practice';

export default function About() {
  return (
    <main id="main-content">
      {/* Page Header */}
      <section className="bg-white border-b border-sage/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
          <h1 className="text-3xl sm:text-4xl font-bold text-forest">
            About {practiceConfig.doctor.name}
          </h1>
          <p className="mt-3 text-base text-charcoal-light max-w-2xl">
            Professional background, qualifications and approach to patient care.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Bio */}
              <div>
                <h2 className="text-xl font-semibold text-charcoal mb-4">Professional Introduction</h2>
                <p className="text-base text-charcoal-light leading-relaxed mb-4">
                  {practiceConfig.doctor.bio}
                </p>
                <p className="text-base text-charcoal-light leading-relaxed">
                  {practiceConfig.doctor.approach}
                </p>
              </div>

              {/* Areas of Interest */}
              <div>
                <h2 className="text-xl font-semibold text-charcoal mb-4">Areas of Practice Interest</h2>
                <ul className="space-y-2">
                  {practiceConfig.doctor.areasOfInterest.map((area, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-sage mt-2 flex-shrink-0" aria-hidden="true"></span>
                      <span className="text-base text-charcoal-light">{area}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Languages */}
              <div>
                <h2 className="text-xl font-semibold text-charcoal mb-4">Languages Spoken</h2>
                <p className="text-base text-charcoal-light">
                  {practiceConfig.doctor.languagesSpoken.join(', ')}
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Portrait */}
              <div className="aspect-[4/5] rounded-xl overflow-hidden bg-sage/20">
                <img
                  src={practiceConfig.doctor.portrait}
                  alt={`Portrait of ${practiceConfig.doctor.name}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Credentials */}
              <div className="p-5 bg-white rounded-xl border border-sage/30">
                <h3 className="text-base font-semibold text-charcoal mb-3">Credentials</h3>
                <dl className="space-y-2">
                  <div>
                    <dt className="text-xs text-charcoal-light uppercase tracking-wide">Qualifications</dt>
                    <dd className="text-sm text-charcoal font-medium">{practiceConfig.doctor.qualifications}</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-charcoal-light uppercase tracking-wide">AHPRA Registration</dt>
                    <dd className="text-sm text-charcoal font-medium">{practiceConfig.doctor.registrationNumber}</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-charcoal-light uppercase tracking-wide">Specialty</dt>
                    <dd className="text-sm text-charcoal font-medium">General Practice</dd>
                  </div>
                </dl>
              </div>

              {/* CTA */}
              <div className="p-5 bg-forest rounded-xl">
                <h3 className="text-base font-semibold text-white mb-2">Book a Consultation</h3>
                <p className="text-sm text-white/80 mb-4">
                  Schedule an appointment with Dr Mitchell.
                </p>
                <a
                  href={practiceConfig.booking.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-4 py-2.5 bg-white text-forest font-semibold rounded-lg hover:bg-ivory transition-colors text-sm"
                >
                  Book Appointment
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="bg-white border-t border-sage/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link to="/" className="text-forest font-semibold hover:underline text-sm">
            &larr; Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}
