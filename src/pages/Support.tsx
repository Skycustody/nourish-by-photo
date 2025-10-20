import { useTranslation } from "@/hooks/useTranslation";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Footer from "@/components/Footer";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Support = () => {
  const t = useTranslation();
  
  return (
    <div className="min-h-screen bg-background">
      <div className="fixed top-4 right-4 z-50">
        <LanguageSwitcher />
      </div>
      
      <div className="container px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t.footer.support}
            </h1>
            <p className="text-xl text-muted-foreground">
              We're here to help you with any questions or issues
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardHeader>
                <Mail className="w-8 h-8 mb-2 text-primary" />
                <CardTitle>Email</CardTitle>
                <CardDescription>Get in touch via email</CardDescription>
              </CardHeader>
              <CardContent>
                <a 
                  href="mailto:support@kalora.fi" 
                  className="text-primary hover:underline"
                >
                  support@kalora.fi
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <MessageCircle className="w-8 h-8 mb-2 text-primary" />
                <CardTitle>Chat</CardTitle>
                <CardDescription>Live chat support</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Available Mon-Fri, 9am-5pm EET
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Phone className="w-8 h-8 mb-2 text-primary" />
                <CardTitle>Phone</CardTitle>
                <CardDescription>Call us directly</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Coming soon
                </p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">How accurate is the calorie tracking?</h3>
                <p className="text-muted-foreground">
                  Our AI-powered recognition system provides accurate calorie estimates based on visual analysis and our extensive food database.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Is my data secure?</h3>
                <p className="text-muted-foreground">
                  Yes, we take data security seriously. All your information is encrypted and stored securely.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Can I cancel my subscription?</h3>
                <p className="text-muted-foreground">
                  Yes, you can cancel anytime from your account settings. No questions asked.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Support;
