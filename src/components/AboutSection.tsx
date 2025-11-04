import Icon from "@/components/ui/icon";

const AboutSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-secondary">
            О компании СтройДом
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Мы — профессиональная строительная компания с более чем 15-летним опытом работы. 
            Специализируемся на строительстве частных домов, комплексном ремонте и поставке 
            премиальных отделочных материалов. Наша команда — это более 50 квалифицированных 
            специалистов, готовых реализовать проект любой сложности.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-lg hover:bg-muted/50 transition-colors">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Award" className="text-primary" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">15+ лет опыта</h3>
            <p className="text-muted-foreground">
              Успешно завершили более 500 проектов по всей России
            </p>
          </div>

          <div className="text-center p-6 rounded-lg hover:bg-muted/50 transition-colors">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Users" className="text-primary" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Профессиональная команда</h3>
            <p className="text-muted-foreground">
              50+ квалифицированных специалистов с лицензиями
            </p>
          </div>

          <div className="text-center p-6 rounded-lg hover:bg-muted/50 transition-colors">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Shield" className="text-primary" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Гарантия качества</h3>
            <p className="text-muted-foreground">
              Официальная гарантия на все виды работ до 5 лет
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
