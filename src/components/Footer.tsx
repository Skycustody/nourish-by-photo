import { useTranslation } from "@/hooks/useTranslation";

const Footer = () => {
  const t = useTranslation();
  
  return (
    <footer className="border-t border-border py-16">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 max-w-5xl mx-auto">
          <div>
            <h3 className="text-xl font-light mb-2">Kalora</h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              {t.footer.description}
            </p>
          </div>
          
          <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm">
            <a href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
              {t.footer.privacy}
            </a>
            <a href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
              {t.footer.terms}
            </a>
            <a href="/support" className="text-muted-foreground hover:text-foreground transition-colors">
              {t.footer.support}
            </a>
            <a href="mailto:support@kalora.fi" className="text-muted-foreground hover:text-foreground transition-colors">
              {t.footer.contact}
            </a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground max-w-5xl mx-auto">
          {t.footer.rights}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
