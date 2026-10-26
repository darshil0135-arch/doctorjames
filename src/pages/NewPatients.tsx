import { Link } from 'react-router-dom';
import { ClipboardCheck, FileText, Calendar, HelpCircle, Accessibility } from 'lucide-react';
import practiceConfig from '../config/practice';

export default function NewPatients() {
  return (
    <main id="main-content">
      {/* Page Header */}
      <section className="bg-white border-b border-sage/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
          <h1 className="text-3xl sm:text-4xl font-bold text-forest">
            New Patients
          </h1>
          <p className="mt-3 text-base text-charcoal-light max-w-2xl">
            Welcome. Here is what you need to know about your first visit to {practiceConfig.doctor.name}.
          </p>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          {/* New Patient Status */}
          <div className="mb-10 p-5 bg-white rounded-xl border border-sage/30">
            <div className="flex items-center gap-3">
              <div className={`w-3 h-3 rounded-full ${practiceConfig.practice.newPatientsAccepted ? 'bg-forest' : 'bg-amber-500'}`} aria-hidden="true"></div>
              <p className="text-base font-medium text-charcoal">
                {practiceConfig.practice.newPatientsAccepted
                  ? 'We are currently accepting new patients.'
                  : 'New patient availability is limited. Please contact the practice to enquire.'}
              </p>
            </div>
          </div>

          {/* Steps */}
          <div className="space-y-8">
            {/* Step 1 */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-forest/10 flex items-center justify-center flex-shrink-0">
                <Calendar className="w-5 h-5 text-forest" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-charcoal mb-2">
                  1. Make an Appointment
                </h2>
                <p className="text-base text-charcoal-light leading-relaxed mb-3">
                  Book your first consultation online or by telephone. For your first visit, a standard or long consultation is recommended to allow time for a thorough discussion of your health history and concerns.
                </p>
                <a
                  href={practiceConfig.booking.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-forest text-white font-medium rounded-lg hover:bg-forest-dark transition-colors text-sm"
                >
                  Book Your First Appointment
                </a>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-forest/10 flex items-center justify-center flex-shrink-0">
                <FileText className="w-5 h-5 text-forest" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-charcoal mb-2">
                  2. What to Bring
                </h2>
                <p className="text-base text-charcoal-light leading-relaxed mb-3">
                  Please bring the following to your first appointment:
                </p>
                <ul className="space-y-2 text-sm text-charcoal-light">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sage mt-2 flex-shrink-0" aria-hidden="true"></span>
                    Your Medicare card
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sage mt-2 flex-shrink-0" aria-hidden="true"></span>
                    A list of current medications (including supplements)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sage mt-2 flex-shrink-0" aria-hidden="true"></span>
                    Any relevant medical reports, test results or referral letters
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sage mt-2 flex-shrink-0" aria-hidden="true"></span>
                    Your concession or health care card, if applicable
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sage mt-2 flex-shrink-0" aria-hidden="true"></span>
                    Details of any chronic disease management plans from a previous GP
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-forest/10 flex items-center justify-center flex-shrink-0">
                <ClipboardCheck className="w-5 h-5 text-forest" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-charcoal mb-2">
                  3. Your First Consultation
                </h2>
                <p className="text-base text-charcoal-light leading-relaxed">
                  During your first consultation, {practiceConfig.doctor.name} will take a medical history, discuss your current health concerns and outline a plan for your ongoing care. This is an opportunity to ask questions and establish a comfortable doctor-patient relationship.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-forest/10 flex items-center justify-center flex-shrink-0">
                <HelpCircle className="w-5 h-5 text-forest" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-charcoal mb-2">
                  4. Fees and Billing
                </h2>
                <p className="text-base text-charcoal-light leading-relaxed">
                  Please review our{' '}
                  <Link to="/appointments" className="text-forest font-medium hover:underline">
                    appointments and fees page
                  </Link>{' '}
                  for current consultation charges. If you have questions about costs before your appointment, please contact the practice.
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-forest/10 flex items-center justify-center flex-shrink-0">
                <Accessibility className="w-5 h-5 text-forest" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-charcoal mb-2">
                  5. Accessibility
                </h2>
                <p className="text-base text-charcoal-light leading-relaxed">
                  If you require any accessibility assistance, please let us know when booking your appointment so we can make appropriate arrangements.
                  {practiceConfig.map.accessibility !== '[Accessibility information — To Be Confirmed]' && (
                    <> {practiceConfig.map.accessibility}</>
                  )}
                </p>
              </div>
            </div>
          </div>

          {/* Cannot find a suitable time */}
          <div className="mt-10 p-5 bg-sage/15 rounded-xl border border-sage/40">
            <h3 className="text-base font-semibold text-charcoal mb-2">Cannot find a suitable appointment?</h3>
            <p className="text-sm text-charcoal-light leading-relaxed">
              If you cannot find a suitable appointment time online, please call the practice during opening hours.
              We may be able to accommodate you or place you on a cancellation list.
            </p>
          </div>
        </div>
      </section>

      {/* Back Link */}
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
