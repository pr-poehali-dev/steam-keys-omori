import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Features = () => {
  const features = [
    {
      icon: "Code",
      title: "Современный код",
      description:
        "React, TypeScript и Tailwind CSS для максимальной производительности",
    },
    {
      icon: "Palette",
      title: "Красивый дизайн",
      description: "Элегантные компоненты и анимации для превосходного UX",
    },
    {
      icon: "Smartphone",
      title: "Адаптивность",
      description: "Идеальная работа на всех устройствах и экранах",
    },
    {
      icon: "Globe",
      title: "SEO оптимизация",
      description: "Готовность к индексации поисковыми системами",
    },
    {
      icon: "Database",
      title: "База данных",
      description: "Интеграция с современными решениями для хранения данных",
    },
    {
      icon: "Lock",
      title: "Безопасность",
      description: "Защита данных и современные стандарты безопасности",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Возможности платформы
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Всё необходимое для создания современных веб-приложений
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon
                    name={feature.icon as any}
                    size={24}
                    className="text-purple-600"
                  />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
