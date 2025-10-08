import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 py-12 max-w-4xl mx-auto">
        <Link to="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <article className="prose prose-slate dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold mb-4">Kalora Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: October 2025</p>

          <p>
            Welcome to Kalora, an AI-powered calorie and nutrition tracking app.
            Your privacy is very important to us. This Privacy Policy explains what information we collect, how we use it, and your rights regarding that information.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">1. About Kalora</h2>
          <p>
            Kalora ("the App", "we", "us", or "our") helps users track their nutrition by analyzing photos of food using artificial intelligence.
            The app identifies food items, estimates calories and macronutrients (protein, carbohydrates, and fat), and provides ingredient information.
            We use OpenAI's GPT-4o-mini model to analyze images and generate nutritional insights.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">2. Information We Collect</h2>
          <p>We collect the minimum amount of information necessary to provide our service.</p>

          <h3 className="text-xl font-semibold mt-6 mb-3">a. Images You Upload</h3>
          <ul>
            <li>When you take or upload a food photo, the image is temporarily processed by our AI systems (including OpenAI's API).</li>
            <li>Images are not permanently stored after analysis unless you choose to save them in your history.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">b. App Usage Data</h3>
          <p>We may collect anonymized analytics such as:</p>
          <ul>
            <li>Number of scans performed</li>
            <li>Feature usage (e.g., food recognition, macro tracking)</li>
            <li>Device type, operating system version, and crash logs</li>
          </ul>
          <p>This helps us improve app performance and user experience.</p>

          <h3 className="text-xl font-semibold mt-6 mb-3">c. Account Information (If applicable)</h3>
          <p>If you create an account, we may collect your:</p>
          <ul>
            <li>Email address or login credentials (via a secure authentication service like Clerk)</li>
            <li>Optional profile data such as your name, gender, height, weight, or dietary goals</li>
          </ul>
          <p>These details are stored securely and used only to personalize calorie calculations.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">3. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Analyze and identify food items from photos</li>
            <li>Estimate calories and macronutrients</li>
            <li>Improve the accuracy of our AI models</li>
            <li>Provide a personalized tracking experience</li>
            <li>Ensure app functionality, security, and support</li>
          </ul>
          <p>We never sell or rent your data to third parties.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">4. Sharing with Third Parties</h2>
          <p>We share limited data only with trusted services necessary to operate the app:</p>
          <ul>
            <li><strong>OpenAI API</strong> – for image and text analysis</li>
            <li><strong>Clerk</strong> – for user authentication and secure account management</li>
            <li><strong>Expo & EAS Services</strong> – for app updates, error monitoring, and crash reports</li>
          </ul>
          <p>All third parties process data under strict confidentiality and GDPR-compliant agreements.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">5. Data Retention</h2>
          <ul>
            <li>Uploaded photos are deleted after analysis unless you manually save them.</li>
            <li>User accounts and stored data are kept as long as your account is active.</li>
            <li>You can delete your account or request full data deletion at any time by contacting us (see Section 9).</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">6. Security</h2>
          <p>We use industry-standard security measures including:</p>
          <ul>
            <li>HTTPS encryption for all data transfers</li>
            <li>Encrypted storage for sensitive information</li>
            <li>Secure authentication via Clerk</li>
          </ul>
          <p>While we strive to protect your data, no digital system is 100% secure. You use the app at your own risk.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">7. Your Rights</h2>
          <p>Under GDPR and similar privacy laws, you have the right to:</p>
          <ul>
            <li>Access and receive a copy of your personal data</li>
            <li>Correct or delete your data</li>
            <li>Withdraw consent at any time</li>
            <li>Request that we stop processing your data</li>
          </ul>
          <p>To exercise your rights, contact us at <a href="mailto:privacy@kalora.fi" className="text-primary hover:underline">privacy@kalora.fi</a>.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">8. Children's Privacy</h2>
          <p>
            Kalora is not intended for children under 13 (or under 16 in the EU).
            We do not knowingly collect personal data from minors.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">9. Contact Us</h2>
          <p>If you have any questions, concerns, or data deletion requests, contact:</p>
          <p>
            <strong>Kalora Support Team</strong><br />
            📧 Email: <a href="mailto:support@kalora.fi" className="text-primary hover:underline">support@kalora.fi</a><br />
            🌐 Website: <a href="https://kalora.fi" className="text-primary hover:underline">https://kalora.fi</a>
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">10. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy periodically.
            Any changes will be posted with a new "Last updated" date.
            Continued use of the app after updates means you accept the new policy.
          </p>
        </article>
      </div>
    </div>
  );
};

export default Privacy;
