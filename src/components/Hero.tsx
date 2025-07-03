import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
            Добро пожаловать в{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              будущее
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            Создавайте невероятные проекты с помощью современных технологий
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3"
            >
              <Icon name="Rocket" size={20} className="mr-2" />
              Начать проект
            </Button>

            <Button variant="outline" size="lg" className="px-8 py-3">
              <Icon name="Play" size={20} className="mr-2" />
              Посмотреть демо
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <Icon
                name="Zap"
                size={32}
                className="mx-auto mb-4 text-purple-600"
              />
              <h3 className="text-lg font-semibold mb-2">Быстро</h3>
              <p className="text-gray-600">Мгновенная разработка и деплой</p>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <Icon
                name="Shield"
                size={32}
                className="mx-auto mb-4 text-blue-600"
              />
              <h3 className="text-lg font-semibold mb-2">Надёжно</h3>
              <p className="text-gray-600">Стабильность и безопасность</p>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <Icon
                name="Sparkles"
                size={32}
                className="mx-auto mb-4 text-green-600"
              />
              <h3 className="text-lg font-semibold mb-2">Современно</h3>
              <p className="text-gray-600">Передовые технологии</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
