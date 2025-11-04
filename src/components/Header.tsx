import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Header = () => {
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

          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-primary hover:bg-primary/90">
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
        </div>

        <nav className="md:hidden flex gap-2 mt-4">
          <Link to="/houses" className="flex-1">
            <Button variant="outline" className="w-full text-sm">
              Купить Дом
            </Button>
          </Link>
          <Link to="/renovation" className="flex-1">
            <Button variant="outline" className="w-full text-sm">
              Ремонт
            </Button>
          </Link>
          <Link to="/tiles" className="flex-1">
            <Button variant="outline" className="w-full text-sm">
              Плитка
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
