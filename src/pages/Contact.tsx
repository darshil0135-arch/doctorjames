import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, Car, Train, Accessibility as AccessibilityIcon, ExternalLink } from 'lucide-react';
import practiceConfig from '../config/practice';

export default function Contact() {
  return (
    <main id="main-content">
      {/* Page Header */}
      <section className="bg-white border-b border-sage/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
          <h1 className="text-3xl sm:text-4xl font-bold text-forest">
            Contact & Location
          </h1>
          <p className="mt-3 text-base text-charcoal-light max-w-2xl">
            Practice address, opening hours, contact details and directions.
          </p>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Left Column - Contact Details */}
            <div className="space-y-8">
              {/* Address */}
              <div>
                <h2 className="text-xl font-semibold text-charcoal mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-forest" />
                  Practice Address
                </h2>
                {practiceConfig.practice.address !== '[Street Address — To Be Confirmed]' ? (
                  <div className="p-5 bg-white rounded-xl border border-sage/30">
                    <p className="text-base text-charcoal leading-relaxed">
                      {practiceConfig.practice.address}
                      <br />
                      {practiceConfig.practice.suburb} {practiceConfig.practice.state} {practiceConfig.practice.postcode}
                    </p>
                  </div>
                ) : (
                  <div className="p-5 bg-white rounded-xl border border-sage/30">
                    <p className="text-base text-charcoal-light">
                      Practice address will be confirmed prior to publication.
                    </p>
                    <p className="text-sm text-charcoal-light mt-2">
                      Location: {practiceConfig.practice.suburb}, {practiceConfig.practice.state}
                    </p>
                  </div>
                )}
              </div>

              {/* Phone */}
              <div>
                <h2 className="text-xl font-semibold text-charcoal mb-4 flex items-center gap-2">
                  <Phone className="w-5 h-5 text-forest" />
                  Phone
                </h2>
                {practiceConfig.practice.phone !== '[Phone — To Be Confirmed]' ? (
                  <a
                    href={`tel:${practiceConfig.practice.phone}`}
                    className="inline-flex items-center gap-2 text-lg text-forest font-semibold hover:underline"
                  >
                    {practiceConfig.practice.phoneDisplay}
                  </a>
                ) : (
                  <p className="text-base text-charcoal-light">
                    Phone number will be confirmed prior to publication.
                  </p>
                )}
              </div>

              {/* Opening Hours */}
              <div>
                <h2 className="text-xl font-semibold text-charcoal mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-forest" />
                  Opening Hours
                </h2>
                <div className="bg-white rounded-xl border border-sage/30 overflow-hidden">
                  <table className="w-full text-sm">
                    <tbody>
                      {Object.entries(practiceConfig.hours).map(([day, hours]) => (
                        <tr key={day} className="border-b border-sage/20 last:border-b-0">
                          <td className="px-4 py-3 font-medium text-charcoal capitalize">{day}</td>
                          <td className="px-4 py-3 text-right text-charcoal-light">
                            {hours !== '[Hours — To Be Confirmed]' ? hours : 'By appointment'}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* After Hours */}
              <div className="p-5 bg-sage/15 rounded-xl border border-sage/40">
                <h3 className="text-sm font-semibold text-charcoal mb-2">After Hours</h3>
                <p className="text-sm text-charcoal-light leading-relaxed">
                  {practiceConfig.afterHours.message}
                </p>
              </div>
            </div>

            {/* Right Column - Map & Directions */}
            <div className="space-y-8">
              {/* Map */}
              <div>
                <h2 className="text-xl font-semibold text-charcoal mb-4">Location Map</h2>
                <div className="aspect-[4/3] rounded-xl overflow-hidden bg-sage/20 border border-sage/30">
                  {practiceConfig.map.embedUrl !== '[Google Maps Embed URL — To Be Confirmed]' ? (
                    <iframe
                      src={practiceConfig.map.embedUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Practice location map"
                    ></iframe>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center p-6">
                        <MapPin className="w-10 h-10 text-sage mx-auto mb-3" />
                        <p className="text-sm text-charcoal-light">
                          Map will be available once the practice address is confirmed.
                        </p>
                        <p className="text-sm text-charcoal-light mt-1">
                          {practiceConfig.practice.suburb}, {practiceConfig.practice.state}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
                {practiceConfig.map.googleMapsUrl !== '[Google Maps URL — To Be Confirmed]' && (
                  <a
                    href={practiceConfig.map.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-3 text-sm text-forest font-medium hover:underline"
                  >
                    Open in Google Maps
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

              {/* Directions */}
              <div className="space-y-4">
                {/* Parking */}
                <div className="flex items-start gap-3">
                  <Car className="w-5 h-5 text-forest mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="text-sm font-semibold text-charcoal mb-1">Parking</h3>
                    <p className="text-sm text-charcoal-light">
                      {practiceConfig.map.parking !== '[Parking information — To Be Confirmed]'
                        ? practiceConfig.map.parking
                        : 'Parking details will be confirmed prior to publication.'}
                    </p>
                  </div>
                </div>

                {/* Public Transport */}
                <div className="flex items-start gap-3">
                  <Train className="w-5 h-5 text-forest mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="text-sm font-semibold text-charcoal mb-1">Public Transport</h3>
                    <p className="text-sm text-charcoal-light">
                      {practiceConfig.map.publicTransport !== '[Public transport details — To Be Confirmed]'
                        ? practiceConfig.map.publicTransport
                        : 'Public transport details will be confirmed prior to publication.'}
                    </p>
                  </div>
                </div>

                {/* Accessibility */}
                <div className="flex items-start gap-3">
                  <AccessibilityIcon className="w-5 h-5 text-forest mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="text-sm font-semibold text-charcoal mb-1">Accessibility</h3>
                    <p className="text-sm text-charcoal-light">
                      {practiceConfig.map.accessibility !== '[Accessibility information — To Be Confirmed]'
                        ? practiceConfig.map.accessibility
                        : 'Accessibility information will be confirmed prior to publication.'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Book CTA */}
              <div className="p-5 bg-forest rounded-xl">
                <h3 className="text-base font-semibold text-white mb-2">Ready to book?</h3>
                <p className="text-sm text-white/80 mb-4">
                  Book your appointment online or call the practice.
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
