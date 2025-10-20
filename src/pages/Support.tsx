import { useTranslation } from "@/hooks/useTranslation";
import { Mail } from "lucide-react";
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

          <div className="max-w-md mx-auto">
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
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Support;
