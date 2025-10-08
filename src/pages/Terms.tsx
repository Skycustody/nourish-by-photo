import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-primary">Kalora Terms of Use</h1>
        
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <p className="text-muted-foreground mb-6">Last updated: October 2025</p>
          
          <p className="mb-6">
            Welcome to Kalora ("the App", "we", "us", or "our").
            These Terms of Use ("Terms") govern your use of Kalora, an AI-powered food recognition and calorie tracking application.
            By using Kalora, you agree to these Terms.
            If you do not agree, please do not use the App.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Description of the Service</h2>
            <p className="mb-4">
              Kalora helps users track nutrition by analyzing photos of food using artificial intelligence.
              The app:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-muted-foreground">
              <li>Identifies food items from photos</li>
              <li>Estimates calories and macronutrients (protein, carbs, fat)</li>
              <li>Lists detected ingredients</li>
              <li>Uses OpenAI GPT-4o-mini to generate nutrition insights</li>
            </ul>
            <p className="text-muted-foreground">
              Kalora is provided for informational and educational purposes only. It is not a medical or dietary service and should not be relied upon for medical decisions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Eligibility</h2>
            <p className="text-muted-foreground mb-4">
              You must be at least 13 years old (or 16 in the EU) to use the App.
              By using Kalora, you confirm that you meet the minimum age requirement and that you agree to these Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">3. User Accounts</h2>
            <p className="mb-4">
              You may create an account using an email address or a third-party login (e.g., Clerk authentication).
              You are responsible for:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-muted-foreground">
              <li>Keeping your login credentials secure</li>
              <li>All activity that occurs under your account</li>
            </ul>
            <p className="text-muted-foreground">
              We reserve the right to suspend or terminate accounts that violate these Terms or misuse the App.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Use of AI Services</h2>
            <p className="mb-4">
              Kalora integrates OpenAI's API for food recognition and nutritional analysis.
              By using the App, you agree that:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-muted-foreground">
              <li>Your photos and input text may be securely transmitted to OpenAI for processing.</li>
              <li>We do not permanently store your photos unless you choose to save them.</li>
              <li>AI-generated results may not always be accurate or complete.</li>
            </ul>
            <p className="text-muted-foreground">
              Kalora does not guarantee the accuracy, safety, or nutritional suitability of any AI output.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Health Disclaimer</h2>
            <p className="text-muted-foreground mb-4">
              Kalora is not a medical device and does not provide medical, dietary, or health advice.
              You should consult a qualified healthcare professional before making any changes to your diet or health routine.
              Use of the App is entirely at your own risk.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Subscriptions and Payments (if applicable)</h2>
            <p className="mb-4">If Kalora offers paid features or subscriptions:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-muted-foreground">
              <li>Prices and terms will be shown clearly in the App before purchase.</li>
              <li>Payments are processed securely through Apple's in-app purchase system.</li>
              <li>Subscriptions renew automatically unless canceled at least 24 hours before the renewal date.</li>
              <li>You can manage or cancel subscriptions in your App Store account settings.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">7. Acceptable Use</h2>
            <p className="mb-4">You agree not to:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-muted-foreground">
              <li>Upload content that is illegal, harmful, or infringing</li>
              <li>Misuse the App or interfere with its functionality</li>
              <li>Reverse-engineer, copy, or redistribute the App's code or content</li>
              <li>Use the App for any purpose other than calorie tracking and food analysis</li>
            </ul>
            <p className="text-muted-foreground">
              Violation of these terms may result in account suspension or permanent removal.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">8. Intellectual Property</h2>
            <p className="text-muted-foreground mb-4">
              All content, features, design, and code in Kalora are owned by Kalora Oy (or its developers).
              You are granted a personal, non-transferable license to use the App.
              You may not copy, modify, or distribute Kalora without permission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">9. Data and Privacy</h2>
            <p className="text-muted-foreground mb-4">
              Your data is handled according to our <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>.
              By using Kalora, you consent to data collection and processing as described there.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">10. Third-Party Services</h2>
            <p className="text-muted-foreground mb-4">
              Kalora may integrate with third-party services (such as OpenAI, Clerk, or Expo).
              We are not responsible for the actions, content, or policies of these third parties.
              Please review their respective privacy and terms policies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">11. Limitation of Liability</h2>
            <p className="mb-4">To the maximum extent permitted by law:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-muted-foreground">
              <li>Kalora and its developers are not liable for any damages resulting from the use or inability to use the App.</li>
              <li>All information provided by the App is for general informational purposes only.</li>
              <li>We make no warranties regarding the accuracy or reliability of AI-generated content.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">12. Termination</h2>
            <p className="text-muted-foreground mb-4">
              You may stop using the App at any time.
              We reserve the right to suspend or terminate your access to Kalora if you violate these Terms or misuse the App.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">13. Changes to These Terms</h2>
            <p className="text-muted-foreground mb-4">
              We may update these Terms from time to time.
              If we make significant changes, we will notify you through the App or via email.
              Continued use of Kalora after updates means you accept the new Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">14. Governing Law</h2>
            <p className="text-muted-foreground mb-4">
              These Terms are governed by and construed in accordance with the laws of Finland, without regard to conflict of law principles.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">15. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about these Terms or the App, please contact us:
            </p>
            <div className="text-muted-foreground space-y-2">
              <p className="font-semibold text-foreground">Kalora Support Team</p>
              <p>📧 Email: <a href="mailto:support@kalora.fi" className="text-primary hover:underline">support@kalora.fi</a></p>
              <p>🌐 Website: <a href="https://kalora.fi" className="text-primary hover:underline">https://kalora.fi</a></p>
            </div>
          </section>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Terms;
