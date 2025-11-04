import Header from "@/components/Header";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const tiles = [
  {
    id: 1,
    title: "Керамогранит Premium",
    price: "от 2 500 ₽/м²",
    collection: "Итальянская коллекция",
    image: "https://cdn.poehali.dev/projects/de278397-5198-423b-b8af-d32fe71d005f/files/288cf2e8-404a-482c-bb4f-acc89e4b0d4a.jpg",
    description: "Керамогранит под мрамор с глянцевой поверхностью, размер 60x120 см"
  },
  {
    id: 2,
    title: "Мозаика Glass",
    price: "от 3 800 ₽/м²",
    collection: "Испанская серия",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800",
    description: "Стеклянная мозаика для ванной и кухни, устойчива к влаге"
  },
  {
    id: 3,
    title: "Плитка «Метро»",
    price: "от 900 ₽/м²",
    collection: "Классическая линия",
    image: "https://images.unsplash.com/photo-1615971677499-5467cbab01c0?w=800",
    description: "Белая керамическая плитка в стиле метро 10x20 см, глянец"
  },
  {
    id: 4,
    title: "Керамогранит Wood",
    price: "от 1 800 ₽/м²",
    collection: "Натуральная серия",
    image: "https://images.unsplash.com/photo-1615874694520-474822394e73?w=800",
    description: "Керамогранит под дерево с текстурой, размер 20x120 см"
  },
  {
    id: 5,
    title: "Плитка Hexagon",
    price: "от 1 500 ₽/м²",
    collection: "Геометрия",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800",
    description: "Шестигранная плитка для создания уникальных паттернов"
  },
  {
    id: 6,
    title: "Мрамор натуральный",
    price: "от 8 500 ₽/м²",
    collection: "Элитная коллекция",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
    description: "Натуральный мрамор Carrara для премиальных интерьеров"
  }
];

const Tiles = () => {
  return (
    <div className="min-h-screen bg-muted/30">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-secondary animate-fade-in">
            Заказать Плитку
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Широкий ассортимент керамической плитки, керамогранита и мозаики от ведущих производителей
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tiles.map((tile, idx) => (
            <Card 
              key={tile.id} 
              className="overflow-hidden hover:shadow-lg transition-shadow animate-fade-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={tile.image} 
                  alt={tile.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="text-sm text-primary font-medium mb-1">{tile.collection}</div>
                <CardTitle className="text-xl">{tile.title}</CardTitle>
                <p className="text-2xl font-bold text-primary">{tile.price}</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{tile.description}</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon name="Package" size={16} />
                  <span>В наличии</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Добавить в корзину
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tiles;
