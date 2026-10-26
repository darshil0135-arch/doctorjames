import { Link } from 'react-router-dom';

export default function Disclaimer() {
  return (
    <main id="main-content">
      <section className="bg-white border-b border-sage/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
          <h1 className="text-3xl sm:text-4xl font-bold text-forest">Website Disclaimer</h1>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="space-y-6 text-charcoal-light">
            <div className="p-5 bg-sage/15 rounded-xl border border-sage/40">
              <p className="text-sm text-charcoal font-medium">
                This website provides general information only. It is not a substitute for professional medical advice, diagnosis or treatment.
              </p>
            </div>

            <h2 className="text-xl font-semibold text-charcoal">General Information</h2>
            <p>
              The content on this website is provided for general informational purposes only. It does not constitute medical advice and should not be relied upon as a substitute for professional consultation, diagnosis or treatment.
            </p>

            <h2 className="text-xl font-semibold text-charcoal">Not an Emergency Service</h2>
            <p>
              This website is not an emergency medical service. If you are experiencing a medical emergency, call Triple Zero (000) immediately. For urgent health advice, contact healthdirect on 1800 022 222.
            </p>

            <h2 className="text-xl font-semibold text-charcoal">Accuracy of Information</h2>
            <p>
              While every effort is made to ensure the information on this website is accurate and up to date, no guarantee is given regarding its completeness, accuracy or reliability. Medical information may change over time.
            </p>

            <h2 className="text-xl font-semibold text-charcoal">Individual Medical Advice</h2>
            <p>
              Always seek the advice of a qualified health professional regarding your specific medical condition. Do not disregard professional medical advice or delay in seeking it because of information found on this website.
            </p>

            <h2 className="text-xl font-semibold text-charcoal">External Links</h2>
            <p>
              This website may contain links to external websites. These links are provided for convenience and do not imply endorsement of the content of those sites.
            </p>

            <h2 className="text-xl font-semibold text-charcoal">Limitation of Liability</h2>
            <p>
              To the extent permitted by law, the practice and its staff accept no liability for any loss or damage arising from the use of or reliance on information provided on this website.
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
