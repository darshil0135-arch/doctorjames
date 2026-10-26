import { Link } from 'react-router-dom';

export default function AccessibilityStatement() {
  return (
    <main id="main-content">
      <section className="bg-white border-b border-sage/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
          <h1 className="text-3xl sm:text-4xl font-bold text-forest">Accessibility Statement</h1>
          <p className="mt-3 text-base text-charcoal-light max-w-2xl">
            Our commitment to making this website accessible to all users.
          </p>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="space-y-6 text-charcoal-light">
            <h2 className="text-xl font-semibold text-charcoal">Our Commitment</h2>
            <p>
              We are committed to ensuring this website is accessible to all users, including those with disabilities. We aim to meet WCAG 2.2 Level AA standards where practical.
            </p>

            <h2 className="text-xl font-semibold text-charcoal">Accessibility Features</h2>
            <p>This website includes the following accessibility features:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Semantic HTML structure with proper heading hierarchy</li>
              <li>Keyboard navigation support throughout the site</li>
              <li>Visible focus indicators for interactive elements</li>
              <li>Sufficient colour contrast for text readability</li>
              <li>Descriptive alternative text for images</li>
              <li>Responsive design that works across devices and screen sizes</li>
              <li>Respect for reduced-motion preferences</li>
              <li>Accessible form labels and error messages</li>
              <li>Skip-to-content link for keyboard users</li>
            </ul>

            <h2 className="text-xl font-semibold text-charcoal">Known Limitations</h2>
            <p>
              We continually work to improve the accessibility of this website. If you encounter any accessibility barriers, please let us know.
            </p>

            <h2 className="text-xl font-semibold text-charcoal">Feedback</h2>
            <p>
              If you have difficulty accessing any content on this website or require information in an alternative format, please contact the practice by telephone. We will make reasonable efforts to assist you.
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
