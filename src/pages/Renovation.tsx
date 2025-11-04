import Header from "@/components/Header";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const services = [
  {
    id: 1,
    title: "Капитальный ремонт квартиры",
    price: "от 15 000 ₽/м²",
    duration: "2-3 месяца",
    image: "https://cdn.poehali.dev/projects/de278397-5198-423b-b8af-d32fe71d005f/files/a781ebba-822b-44c4-abda-0ba2c24eb070.jpg",
    description: "Полная перепланировка, замена коммуникаций, черновая и чистовая отделка"
  },
  {
    id: 2,
    title: "Ремонт под ключ",
    price: "от 12 000 ₽/м²",
    duration: "1-2 месяца",
    image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=800",
    description: "Комплексный ремонт с материалами, дизайн-проектом и авторским надзором"
  },
  {
    id: 3,
    title: "Косметический ремонт",
    price: "от 5 000 ₽/м²",
    duration: "2-3 недели",
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800",
    description: "Обновление отделки стен, потолков, полов без перепланировки"
  },
  {
    id: 4,
    title: "Ремонт санузла",
    price: "от 80 000 ₽",
    duration: "2-3 недели",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800",
    description: "Укладка плитки, установка сантехники, гидроизоляция"
  },
  {
    id: 5,
    title: "Ремонт кухни",
    price: "от 120 000 ₽",
    duration: "3-4 недели",
    image: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=800",
    description: "Установка кухонного гарнитура, фартука, встраиваемой техники"
  },
  {
    id: 6,
    title: "Офисный ремонт",
    price: "от 8 000 ₽/м²",
    duration: "1-2 месяца",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800",
    description: "Ремонт офисных помещений с зонированием и современным дизайном"
  }
];

const Renovation = () => {
  return (
    <div className="min-h-screen bg-muted/30">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-secondary animate-fade-in">
            Ремонт помещений
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Профессиональный ремонт квартир, домов и коммерческих помещений любой сложности
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <Card 
              key={service.id} 
              className="overflow-hidden hover:shadow-lg transition-shadow animate-fade-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <p className="text-2xl font-bold text-primary">{service.price}</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon name="Clock" size={16} />
                  <span>{service.duration}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Заказать расчёт
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Renovation;
