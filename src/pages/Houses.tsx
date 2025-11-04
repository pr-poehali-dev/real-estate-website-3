import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const houses = [
  {
    id: 1,
    title: "Загородный дом «Премиум»",
    price: "12 500 000 ₽",
    area: "250 м²",
    rooms: "5 комнат",
    image: "https://cdn.poehali.dev/projects/de278397-5198-423b-b8af-d32fe71d005f/files/d33c0c40-b2d7-4341-8c97-a079f34d1e53.jpg",
    description: "Современный двухэтажный дом с панорамными окнами и террасой"
  },
  {
    id: 2,
    title: "Коттедж «Семейный»",
    price: "8 900 000 ₽",
    area: "180 м²",
    rooms: "4 комнаты",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800",
    description: "Уютный одноэтажный дом с гаражом и ландшафтным дизайном"
  },
  {
    id: 3,
    title: "Таунхаус «Комфорт»",
    price: "6 200 000 ₽",
    area: "140 м²",
    rooms: "3 комнаты",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800",
    description: "Компактный таунхаус в закрытом поселке с инфраструктурой"
  },
  {
    id: 4,
    title: "Вилла «Люкс»",
    price: "25 000 000 ₽",
    area: "400 м²",
    rooms: "7 комнат",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
    description: "Элитная вилла с бассейном, сауной и видом на лес"
  },
  {
    id: 5,
    title: "Дом «Эко-стиль»",
    price: "9 500 000 ₽",
    area: "165 м²",
    rooms: "4 комнаты",
    image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800",
    description: "Экологичный дом из натуральных материалов с солнечными панелями"
  },
  {
    id: 6,
    title: "Резиденция «Классика»",
    price: "18 000 000 ₽",
    area: "320 м²",
    rooms: "6 комнат",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800",
    description: "Дом в классическом стиле с колоннами и парадным входом"
  }
];

const Houses = () => {
  return (
    <div className="min-h-screen bg-muted/30">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-secondary animate-fade-in">
            Купить Дом
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Выберите готовый дом из нашего каталога или закажите строительство по индивидуальному проекту
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {houses.map((house, idx) => (
            <Card 
              key={house.id} 
              className="overflow-hidden hover:shadow-lg transition-shadow animate-fade-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={house.image} 
                  alt={house.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{house.title}</CardTitle>
                <p className="text-2xl font-bold text-primary">{house.price}</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{house.description}</p>
                <div className="flex gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Icon name="Maximize" size={16} />
                    <span>{house.area}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="Bed" size={16} />
                    <span>{house.rooms}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Подробнее
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Houses;