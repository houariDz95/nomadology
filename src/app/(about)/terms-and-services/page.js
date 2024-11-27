import siteMetadata from "@/src/utils/siteMetaData";
const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 p-8">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Terms of Service
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
          Last Updated: <span className="font-semibold">24-11-2024</span>
        </p>

        <p className="mb-4">
          Welcome to <span className="font-semibold">{siteMetadata.headerTitle}</span> (the "Website"), a blog dedicated to providing engaging and insightful content. By using the Website, you agree to be bound by these Terms.
        </p>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Acceptance of Terms</h2>
          <p className="leading-relaxed">
            By using the Website, you represent that you have read, understood, and agree to be bound by these Terms. If you do not agree, please do not use the Website. We may modify these Terms at any time, and your continued use signifies acceptance of those changes.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Intellectual Property Rights</h2>
          <p className="leading-relaxed">
            All content on the Website is the property of <span className="font-semibold">{siteMetadata.headerTitle}</span> and is protected by copyright laws. Unauthorized use or reproduction of the content is strictly prohibited.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">User Conduct</h2>
          <ul className="list-disc pl-6">
            <li>You will not use the Website for unlawful purposes.</li>
            <li>You will not reproduce, copy, or exploit any part of the Website without permission.</li>
            <li>You will not transmit harmful, offensive, or infringing material.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Disclaimer of Warranties</h2>
          <p className="leading-relaxed">
            The Website is provided "as is" without warranties of any kind. We disclaim all warranties, including merchantability and fitness for a particular purpose.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Limitation of Liability</h2>
          <p className="leading-relaxed">
            {siteMetadata.headerTitle} is not liable for any damages resulting from your use of the Website.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Indemnification</h2>
          <p className="leading-relaxed">
            You agree to indemnify and hold {siteMetadata.headerTitle} harmless from any claims arising out of your use of the Website.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Governing Law</h2>
          <p className="leading-relaxed">
            These Terms are governed by the laws of <span className="font-semibold">Algeria</span>. Any disputes will be resolved in the courts of Algeria.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
          <p className="leading-relaxed">
            If you have any questions, please contact us at <span className="font-semibold">{siteMetadata.email}</span>.
          </p>
        </section>

        <footer className="mt-8 text-center text-gray-600 dark:text-gray-400 text-sm">
          <p>© {siteMetadata.headerTitle} - All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default TermsOfService;
