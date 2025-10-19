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
          <a href="#download" className="text-muted-foreground hover:text-primary transition-colors">Скачать</a>
        </nav>
      </header>

      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground leading-tight my-0 px-0 py-0 mx-0">"OnliMeet" </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              OnliMeet — это мессенджер нового поколения для делового и личного общения. 
              Быстро, безопасно, удобно.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-base px-8">
                <Icon name="Download" className="mr-2" size={20} />
                Скачать приложение
              </Button>
            </div>
          </div>
          <div className="relative animate-scale-in flex justify-center">
            <img 
              src="https://cdn.poehali.dev/files/59e532f0-0fea-4ed9-b891-639abc5180ab.png" 
              alt="OnliMeet Logo" 
              className="w-72 h-72 md:w-96 md:h-96 object-contain my-[1px] rounded-sm"
            />
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 text-base px-8 font-semibold">
                <Icon name="Smartphone" className="mr-2" size={20} />
                App Store
              </Button>
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 text-base px-8 font-semibold">
                <Icon name="Smartphone" className="mr-2" size={20} />
                Google Play
              </Button>

            </div>
          </div>
        </div>
      </section>

      <footer className="container mx-auto px-4 py-12 border-t">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="MessageCircle" className="text-white" size={18} />
            </div>
            <span className="text-xl font-heading font-bold text-foreground">OnliMeet</span>
          </div>
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