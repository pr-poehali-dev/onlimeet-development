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
          <a href="https://m1.nandbox.ca/v1/AUTH_137b624a8e434c4e88e9be30fa5e7bed/appprod/onlimeet-1.1.2.apk?temp_url_sig=d776e1ae3751b9ed0837772b9fe4bc2d540cb9bf&temp_url_expires=2077102292" download className="text-muted-foreground hover:text-primary transition-colors">Скачать</a>
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
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-base px-8" asChild>
                <a href="https://m1.nandbox.ca/v1/AUTH_137b624a8e434c4e88e9be30fa5e7bed/appprod/onlimeet-1.1.2.apk?temp_url_sig=d776e1ae3751b9ed0837772b9fe4bc2d540cb9bf&temp_url_expires=2077102292" download>
                  <Icon name="Download" className="mr-2" size={20} />
                  Скачать приложение
                </a>
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