import { Link } from 'react-router-dom';
import practiceConfig from '../config/practice';

export default function Privacy() {
  return (
    <main id="main-content">
      <section className="bg-white border-b border-sage/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
          <h1 className="text-3xl sm:text-4xl font-bold text-forest">Privacy Policy</h1>
          <p className="mt-3 text-base text-charcoal-light max-w-2xl">
            How we collect, use and protect your personal information.
          </p>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="prose prose-base max-w-none space-y-6 text-charcoal-light">
            <div className="p-4 bg-sage/15 rounded-lg border border-sage/40 mb-8">
              <p className="text-sm text-charcoal">
                <strong>Draft policy:</strong> This privacy policy is a draft and must be reviewed against the practice's actual data handling systems, third-party services and legal obligations before publication.
              </p>
            </div>

            <h2 className="text-xl font-semibold text-charcoal">Overview</h2>
            <p>
              {practiceConfig.doctor.name} is committed to protecting the privacy of patients and website visitors. This policy outlines how personal information is collected, used and stored in accordance with the Privacy Act 1988 (Cth) and the Australian Privacy Principles.
            </p>

            <h2 className="text-xl font-semibold text-charcoal">What Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Personal details such as name, date of birth, address and contact information</li>
              <li>Medicare number and health care card details</li>
              <li>Medical history, health information and clinical records</li>
              <li>Payment and billing information</li>
              <li>Referral letters and correspondence from other health providers</li>
            </ul>

            <h2 className="text-xl font-semibold text-charcoal">Why We Collect Information</h2>
            <p>Personal and health information is collected to:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Provide medical care and treatment</li>
              <li>Process Medicare claims and billing</li>
              <li>Communicate with patients about appointments and health matters</li>
              <li>Meet legal and regulatory obligations</li>
            </ul>

            <h2 className="text-xl font-semibold text-charcoal">How We Collect Information</h2>
            <p>
              Information is primarily collected directly from patients during consultations, via referral letters, and through our practice management software. We do not collect sensitive health information through the website contact form.
            </p>

            <h2 className="text-xl font-semibold text-charcoal">Website Information</h2>
            <p>
              This website does not collect medical or health information. No patient data is stored in browser local storage, URL query strings or public frontend configuration. The website may collect basic analytics data (such as page views) for operational purposes only.
            </p>

            <h2 className="text-xl font-semibold text-charcoal">How We Store and Protect Information</h2>
            <p>
              Patient records are stored securely using compliant practice management software. Access to patient information is restricted to authorised staff. We take reasonable steps to protect personal information from misuse, interference, loss and unauthorised access.
            </p>

            <h2 className="text-xl font-semibold text-charcoal">Sharing Information</h2>
            <p>
              Health information may be shared with other health care providers involved in your care, Medicare and the Department of Veterans' Affairs for claims processing, or as required by law. We do not share personal information with third parties for marketing purposes.
            </p>

            <h2 className="text-xl font-semibold text-charcoal">Accessing and Correcting Your Information</h2>
            <p>
              You have the right to access and request correction of your personal information held by this practice. Please contact us to make a request.
            </p>

            <h2 className="text-xl font-semibold text-charcoal">Complaints</h2>
            <p>
              If you believe your privacy has been breached, please contact the practice. If you are not satisfied with our response, you may lodge a complaint with the Office of the Australian Information Commissioner (OAIC) at www.oaic.gov.au.
            </p>

            <h2 className="text-xl font-semibold text-charcoal">Contact</h2>
            <p>
              For privacy enquiries, please contact the practice at:
              <br />
              {practiceConfig.practice.address !== '[Street Address — To Be Confirmed]' && (
                <>
                  {practiceConfig.practice.address}, {practiceConfig.practice.suburb} {practiceConfig.practice.state} {practiceConfig.practice.postcode}
                </>
              )}
              {practiceConfig.practice.phone !== '[Phone — To Be Confirmed]' && (
                <>
                  <br />
                  Phone: {practiceConfig.practice.phoneDisplay}
                </>
              )}
            </p>
          </div>
        </div>
      </section>

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
