import LanguageSwitcher from "./LanguageSwitcher";
import logoImage from "@/assets/kalora-logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={logoImage} alt="Kalora" className="h-8 w-8" />
          <span className="text-xl font-bold text-primary">Kalora</span>
        </div>
        <LanguageSwitcher />
      </div>
    </header>
  );
};

export default Header;
