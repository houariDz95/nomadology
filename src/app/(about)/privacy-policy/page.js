import siteMetadata from "@/src/utils/siteMetaData";
const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-light dark:bg-dark text-dark dark:text-light py-12 px-4 sm:px-10 lg:px-20">
      <div className="max-w-4xl mx-auto  p-8 rounded-2xl shadow-lg">
        {/* Header Section */}
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6">
          Privacy Policy
        </h1>
        <p className="text-center text-sm sm:text-base font-light dark:font-medium">
          Welcome to our website. We are committed to protecting your personal
          data and respecting your privacy. This privacy policy outlines the
          types of personal data we collect and how we use it.
        </p>

        {/* Section: Who We Are */}
        <section className="mt-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">Who We Are</h2>
          <p className="text-sm sm:text-base font-light dark:font-medium leading-relaxed">
            Our company is <strong>{siteMetadata.headerTitle}</strong>, and our
            website address is <strong>{siteMetadata.siteUrl}</strong>.
          </p>
        </section>

        {/* Section: Personal Data We Collect */}
        <section className="mt-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">
            What Personal Data We Collect and Why We Collect It
          </h2>
          <ul className="list-disc list-inside space-y-3 text-sm sm:text-base font-light dark:font-medium leading-relaxed">
            <li>
              <strong>Cookies:</strong> We use cookies to collect information
              about your visit to our website, including the pages you viewed,
              the links you clicked, and the duration of your visit. This helps
              us improve your user experience.
            </li>
            <li>
              <strong>Embedded Content:</strong> Articles on this site may
              include embedded content such as videos, images, or articles.
              These websites may collect data about you, use cookies, and track
              your interaction with the content.
            </li>
            <li>
              <strong>Analytics:</strong> We use Google Analytics to track
              website usage, helping us understand user behavior and improve
              our services.
            </li>
          </ul>
        </section>

        {/* Section: Affiliate Disclosure */}
        <section className="mt-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">
            Affiliate Disclosure
          </h2>
          <p className="text-sm sm:text-base font-light dark:font-medium leading-relaxed">
            We are affiliates of various online tools, services, and products.
            Links on this site may be affiliate links, and we may earn
            commissions for purchases made through these links. Rest assured, we
            only promote products we believe in.
          </p>
        </section>

        {/* Section: Information You Provide */}
        <section className="mt-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">
            Information You Provide to Us
          </h2>
          <p className="text-sm sm:text-base font-light dark:font-medium leading-relaxed">
            We collect information you provide directly to us through forms,
            surveys, or other interactions. This may include:
          </p>
          <ul className="list-disc list-inside space-y-3 text-sm sm:text-base font-light dark:font-medium leading-relaxed mt-3">
            <li>Name</li>
            <li>Email address</li>
            <li>Postal address</li>
            <li>Phone number</li>
            <li>Any other information you choose to provide</li>
          </ul>
        </section>

        {/* Section: Security */}
        <section className="mt-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">Security</h2>
          <p className="text-sm sm:text-base font-light dark:font-medium leading-relaxed">
            We take reasonable measures to protect your data from unauthorized
            access, theft, and misuse. However, no method of transmission over
            the Internet is completely secure.
          </p>
        </section>

        {/* Section: Social Sharing */}
        <section className="mt-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">
            Social Sharing
          </h2>
          <p className="text-sm sm:text-base font-light dark:font-medium leading-relaxed">
            This website may offer social sharing features (e.g., Facebook’s
            “Like” button). By using these features, you share information
            depending on your social network settings.
          </p>
        </section>

        {/* Section: Changes to Privacy Policy */}
        <section className="mt-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">
            Changes to This Privacy Policy
          </h2>
          <p className="text-sm sm:text-base font-light dark:font-medium leading-relaxed">
            We reserve the right to modify this privacy policy at any time. Any
            changes will be reflected on this page. We encourage you to review
            this policy periodically.
          </p>
        </section>

        {/* Section: Contact Us */}
        <section className="mt-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-sm sm:text-base font-light dark:font-medium leading-relaxed">
            If you have any questions, please contact us at{" "}
            <strong>{siteMetadata.email}</strong>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
