import { useTranslation } from "@/hooks/useTranslation";

const Footer = () => {
  const t = useTranslation();
  
  return (
    <footer className="border-t border-border py-12 bg-muted/20">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-primary mb-2">Kalora</h3>
            <p className="text-sm text-muted-foreground">
              {t.footer.description}
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <a href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
              {t.footer.privacy}
            </a>
            <a href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
              {t.footer.terms}
            </a>
            <a href="/support" className="text-muted-foreground hover:text-primary transition-colors">
              {t.footer.support}
            </a>
            <a href="mailto:support@kalora.fi" className="text-muted-foreground hover:text-primary transition-colors">
              {t.footer.contact}
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          {t.footer.rights}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
