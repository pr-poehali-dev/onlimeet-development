import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-muted/30">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
            <Icon name="MessageCircle" className="text-white" size={24} />
          </div>
          <span className="text-2xl font-heading font-bold text-foreground">OnliMeet</span>
        </div>
        <nav className="hidden md:flex gap-8">
          <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">Возможности</a>
          <a href="#download" className="text-muted-foreground hover:text-primary transition-colors">Скачать</a>
        </nav>
        <Button className="bg-primary hover:bg-primary/90">
          Войти
        </Button>
      </header>

      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground leading-tight">
              Общайтесь
              <span className="block text-primary">без границ</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              OnliMeet — это мессенджер нового поколения для делового и личного общения. 
              Быстро, безопасно, удобно.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-base px-8">
                <Icon name="Download" className="mr-2" size={20} />
                Скачать приложение
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8">
                <Icon name="Play" className="mr-2" size={20} />
                Смотреть демо
              </Button>
            </div>
          </div>
          <div className="relative animate-scale-in">
            <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl p-8 backdrop-blur-sm border border-primary/20">
              <div className="bg-white rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="User" className="text-primary" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold">Анна Смирнова</div>
                    <div className="text-sm text-muted-foreground flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      Онлайн
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-end">
                    <div className="bg-primary text-primary-foreground rounded-2xl rounded-tr-sm px-4 py-3 max-w-[80%]">
                      Привет! Созвонимся через 5 минут?
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-muted rounded-2xl rounded-tl-sm px-4 py-3 max-w-[80%]">
                      Конечно! Жду звонка 📞
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-secondary/10 rounded-2xl px-4 py-3 flex items-center gap-3">
                      <Icon name="Mic" className="text-secondary" size={20} />
                      <div className="flex gap-1 items-center">
                        <div className="w-1 h-3 bg-secondary rounded-full"></div>
                        <div className="w-1 h-5 bg-secondary rounded-full"></div>
                        <div className="w-1 h-4 bg-secondary rounded-full"></div>
                        <div className="w-1 h-6 bg-secondary rounded-full"></div>
                        <div className="w-1 h-3 bg-secondary rounded-full"></div>
                      </div>
                      <span className="text-sm text-muted-foreground">0:03</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="container mx-auto px-4 py-20 bg-gradient-to-b from-muted/30 to-white">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Всё необходимое для общения
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Современные инструменты коммуникации в одном приложении
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-primary/10">
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
              <Icon name="Video" className="text-primary" size={28} />
            </div>
            <h3 className="text-xl font-heading font-semibold mb-3">Видеозвонки HD</h3>
            <p className="text-muted-foreground">
              Кристально чистое видео и звук. Созванивайтесь с командой или один на один.
            </p>
          </Card>

          <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-secondary/10">
            <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6">
              <Icon name="MessageSquare" className="text-secondary" size={28} />
            </div>
            <h3 className="text-xl font-heading font-semibold mb-3">Быстрые сообщения</h3>
            <p className="text-muted-foreground">
              Мгновенная доставка текстовых сообщений с подтверждением прочтения.
            </p>
          </Card>

          <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-primary/10">
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
              <Icon name="Mic" className="text-primary" size={28} />
            </div>
            <h3 className="text-xl font-heading font-semibold mb-3">Голосовые</h3>
            <p className="text-muted-foreground">
              Записывайте и отправляйте голосовые сообщения одним касанием.
            </p>
          </Card>

          <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-secondary/10">
            <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6">
              <Icon name="QrCode" className="text-secondary" size={28} />
            </div>
            <h3 className="text-xl font-heading font-semibold mb-3">QR-контакты</h3>
            <p className="text-muted-foreground">
              Добавляйте друзей и коллег мгновенно — просто отсканируйте QR-код.
            </p>
          </Card>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-transparent border-primary/20">
            <div className="flex items-center gap-4 mb-3">
              <Icon name="Shield" className="text-primary" size={24} />
              <h4 className="font-heading font-semibold text-lg">Безопасность</h4>
            </div>
            <p className="text-muted-foreground">
              Сквозное шифрование всех сообщений и звонков
            </p>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-secondary/5 to-transparent border-secondary/20">
            <div className="flex items-center gap-4 mb-3">
              <Icon name="Mail" className="text-secondary" size={24} />
              <h4 className="font-heading font-semibold text-lg">Email-вход</h4>
            </div>
            <p className="text-muted-foreground">
              Простая авторизация через электронную почту
            </p>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-primary/5 to-transparent border-primary/20">
            <div className="flex items-center gap-4 mb-3">
              <Icon name="Zap" className="text-primary" size={24} />
              <h4 className="font-heading font-semibold text-lg">Молниеносно</h4>
            </div>
            <p className="text-muted-foreground">
              Мгновенная синхронизация на всех устройствах
            </p>
          </Card>
        </div>
      </section>

      <section id="download" className="container mx-auto px-4 py-20">
        <div className="bg-gradient-to-br from-primary to-secondary rounded-3xl p-12 md:p-16 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6bTAgMTBjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6TTIwIDM0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wIDEwYzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Начните общаться прямо сейчас
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Присоединяйтесь к миллионам пользователей, которые выбрали OnliMeet
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 text-base px-8 font-semibold">
                <Icon name="Smartphone" className="mr-2" size={20} />
                App Store
              </Button>
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 text-base px-8 font-semibold">
                <Icon name="Smartphone" className="mr-2" size={20} />
                Google Play
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-base px-8">
                <Icon name="Monitor" className="mr-2" size={20} />
                Веб-версия
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="container mx-auto px-4 py-12 border-t">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="MessageCircle" className="text-white" size={18} />
              </div>
              <span className="text-xl font-heading font-bold">OnliMeet</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Современный мессенджер для деловой и личной коммуникации
            </p>
          </div>
          <div>
            <h4 className="font-heading font-semibold mb-4">Продукт</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Возможности</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Безопасность</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Тарифы</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-semibold mb-4">Компания</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Карьера</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-semibold mb-4">Поддержка</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Справка</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">API</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Статус</a></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t text-sm text-muted-foreground">
          <p>© 2024 OnliMeet. Все права защищены.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Конфиденциальность</a>
            <a href="#" className="hover:text-primary transition-colors">Условия</a>
            <a href="#" className="hover:text-primary transition-colors">Cookies</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
