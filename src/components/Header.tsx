import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Home" className="text-white" size={24} />
            </div>
            <span className="font-bold text-xl text-secondary">СтройДом</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link to="/houses">
              <Button variant="ghost" className="text-base">
                Купить Дом
              </Button>
            </Link>
            <Link to="/renovation">
              <Button variant="ghost" className="text-base">
                Ремонт
              </Button>
            </Link>
            <Link to="/tiles">
              <Button variant="ghost" className="text-base">
                Заказать Плитку
              </Button>
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-primary hover:bg-primary/90 hidden md:flex">
                  <Icon name="User" size={18} className="mr-2" />
                  Войти
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Авторизация</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="example@mail.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Пароль</Label>
                    <Input id="password" type="password" placeholder="••••••••" />
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Войти
                  </Button>
                </div>
              </DialogContent>
            </Dialog>

            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Icon name="Menu" size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <SheetHeader>
                  <SheetTitle className="text-left">Меню</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-4 mt-8">
                  <Link 
                    to="/houses" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors"
                  >
                    <Icon name="Building" size={20} className="text-primary" />
                    <span className="text-lg">Купить Дом</span>
                  </Link>
                  <Link 
                    to="/renovation" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors"
                  >
                    <Icon name="Hammer" size={20} className="text-primary" />
                    <span className="text-lg">Ремонт</span>
                  </Link>
                  <Link 
                    to="/tiles" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors"
                  >
                    <Icon name="Grid3x3" size={20} className="text-primary" />
                    <span className="text-lg">Заказать Плитку</span>
                  </Link>
                  
                  <div className="border-t border-border my-4" />
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="bg-primary hover:bg-primary/90 w-full justify-start gap-3">
                        <Icon name="User" size={20} />
                        <span className="text-lg">Войти</span>
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle>Авторизация</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4 py-4">
                        <div className="space-y-2">
                          <Label htmlFor="mobile-email">Email</Label>
                          <Input id="mobile-email" type="email" placeholder="example@mail.com" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="mobile-password">Пароль</Label>
                          <Input id="mobile-password" type="password" placeholder="••••••••" />
                        </div>
                        <Button className="w-full bg-primary hover:bg-primary/90">
                          Войти
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>

                  <div className="mt-8 space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Icon name="Phone" size={16} />
                      <a href="tel:+79991234567" className="hover:text-primary transition-colors">
                        +7 (999) 123-45-67
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Icon name="Mail" size={16} />
                      <a href="mailto:info@stroydom.ru" className="hover:text-primary transition-colors">
                        info@stroydom.ru
                      </a>
                    </div>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
