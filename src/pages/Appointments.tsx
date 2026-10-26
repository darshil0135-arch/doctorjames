import { Link } from 'react-router-dom';
import { Calendar, Clock, CreditCard, AlertCircle } from 'lucide-react';
import practiceConfig from '../config/practice';

export default function Appointments() {
  return (
    <main id="main-content">
      {/* Page Header */}
      <section className="bg-white border-b border-sage/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
          <h1 className="text-3xl sm:text-4xl font-bold text-forest">
            Appointments & Fees
          </h1>
          <p className="mt-3 text-base text-charcoal-light max-w-2xl">
            Information about appointment types, consultation fees, billing arrangements and payment options.
          </p>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Left Column - Appointments */}
            <div className="space-y-8">
              {/* Booking */}
              <div>
                <h2 className="text-xl font-semibold text-charcoal mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-forest" />
                  How to Book
                </h2>
                <p className="text-base text-charcoal-light leading-relaxed mb-4">
                  Appointments can be booked online through our booking system or by telephone during practice hours.
                </p>
                <a
                  href={practiceConfig.booking.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-5 py-2.5 bg-forest text-white font-semibold rounded-lg hover:bg-forest-dark transition-colors text-sm"
                >
                  Book Online
                </a>
              </div>

              {/* Appointment Types */}
              <div>
                <h2 className="text-xl font-semibold text-charcoal mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-forest" />
                  Appointment Types
                </h2>
                <div className="space-y-3">
                  <div className="p-4 bg-white rounded-lg border border-sage/30">
                    <h3 className="text-sm font-semibold text-charcoal">Standard Consultation</h3>
                    <p className="text-sm text-charcoal-light mt-1">
                      Up to 15 minutes. Suitable for single issues, follow-ups and prescriptions.
                    </p>
                  </div>
                  <div className="p-4 bg-white rounded-lg border border-sage/30">
                    <h3 className="text-sm font-semibold text-charcoal">Long Consultation</h3>
                    <p className="text-sm text-charcoal-light mt-1">
                      Up to 30 minutes. For multiple issues, complex matters or comprehensive discussions.
                    </p>
                  </div>
                  <div className="p-4 bg-white rounded-lg border border-sage/30">
                    <h3 className="text-sm font-semibold text-charcoal">Extended Consultation</h3>
                    <p className="text-sm text-charcoal-light mt-1">
                      Up to 45 minutes. For health assessments, chronic disease plans and complex care.
                    </p>
                  </div>
                  <div className="p-4 bg-white rounded-lg border border-sage/30">
                    <h3 className="text-sm font-semibold text-charcoal">Telehealth Consultation</h3>
                    <p className="text-sm text-charcoal-light mt-1">
                      Telephone or video appointment. Available for follow-ups, results and non-urgent matters.
                    </p>
                  </div>
                </div>
              </div>

              {/* Cancellation Policy */}
              <div>
                <h2 className="text-xl font-semibold text-charcoal mb-4">Cancellation Policy</h2>
                <p className="text-base text-charcoal-light leading-relaxed">
                  Please provide at least 24 hours notice if you need to cancel or reschedule your appointment.
                  Late cancellations or non-attendance may incur a fee. This allows other patients to use the appointment time.
                </p>
              </div>
            </div>

            {/* Right Column - Fees */}
            <div className="space-y-8">
              {/* Fees */}
              <div>
                <h2 className="text-xl font-semibold text-charcoal mb-4 flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-forest" />
                  Consultation Fees
                </h2>
                <div className="bg-white rounded-xl border border-sage/30 overflow-hidden">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-sage/30 bg-sage/10">
                        <th className="text-left px-4 py-3 font-semibold text-charcoal">Appointment Type</th>
                        <th className="text-right px-4 py-3 font-semibold text-charcoal">Fee</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-sage/20">
                        <td className="px-4 py-3 text-charcoal-light">Standard (up to 15 min)</td>
                        <td className="px-4 py-3 text-right font-medium text-charcoal">{practiceConfig.fees.standardConsultation}</td>
                      </tr>
                      <tr className="border-b border-sage/20">
                        <td className="px-4 py-3 text-charcoal-light">Long (up to 30 min)</td>
                        <td className="px-4 py-3 text-right font-medium text-charcoal">{practiceConfig.fees.longConsultation}</td>
                      </tr>
                      <tr className="border-b border-sage/20">
                        <td className="px-4 py-3 text-charcoal-light">Extended (up to 45 min)</td>
                        <td className="px-4 py-3 text-right font-medium text-charcoal">{practiceConfig.fees.extendedConsultation}</td>
                      </tr>
                      <tr className="border-b border-sage/20">
                        <td className="px-4 py-3 text-charcoal-light">Telehealth — Standard</td>
                        <td className="px-4 py-3 text-right font-medium text-charcoal">{practiceConfig.fees.telehealthStandard}</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-charcoal-light">Telehealth — Long</td>
                        <td className="px-4 py-3 text-right font-medium text-charcoal">{practiceConfig.fees.telehealthLong}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Medicare & Billing */}
              <div>
                <h2 className="text-xl font-semibold text-charcoal mb-4">Medicare & Billing</h2>
                <p className="text-base text-charcoal-light leading-relaxed mb-4">
                  {practiceConfig.fees.medicareRebate}
                </p>
                <p className="text-base text-charcoal-light leading-relaxed mb-4">
                  <strong className="text-charcoal">Billing:</strong> {practiceConfig.practice.billingType}
                </p>
                <p className="text-base text-charcoal-light leading-relaxed">
                  <strong className="text-charcoal">Payment methods:</strong> {practiceConfig.fees.paymentMethods}
                </p>
              </div>

              {/* Important Notice */}
              <div className="p-5 bg-sage/15 rounded-xl border border-sage/40">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-forest flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-semibold text-charcoal mb-1">Important</h3>
                    <p className="text-sm text-charcoal-light leading-relaxed">
                      Fees are subject to change. The out-of-pocket cost for your consultation will be confirmed at the time of booking.
                      If you have questions about fees, please contact the practice before your appointment.
                    </p>
                  </div>
                </div>
              </div>

              {/* Urgent Care Notice */}
              <div className="p-5 bg-ivory-dark rounded-xl border border-sage/30">
                <h3 className="text-sm font-semibold text-charcoal mb-2">Urgent or Same-Day Care</h3>
                <p className="text-sm text-charcoal-light leading-relaxed">
                  If you need urgent medical attention and cannot get an appointment, call the practice.
                  For life-threatening emergencies, call Triple Zero (000).
                </p>
              </div>
            </div>
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
