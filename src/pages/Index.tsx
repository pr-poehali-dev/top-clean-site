import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Calendar } from '@/components/ui/calendar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

const Index = () => {
  const [date, setDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [selectedService, setSelectedService] = useState<string>('');
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const services = [
    {
      icon: 'Home',
      title: 'Поддерживающая уборка',
      description: 'Регулярная комплексная уборка для поддержания чистоты',
      price: 'от 3 500 ₽'
    },
    {
      icon: 'Sparkles',
      title: 'Генеральная уборка',
      description: 'Глубокая уборка всех помещений с дезинфекцией',
      price: 'от 7 000 ₽'
    },
    {
      icon: 'Sofa',
      title: 'Химчистка мебели',
      description: 'Профессиональная чистка мягкой мебели и ковров',
      price: 'от 2 500 ₽'
    },
    {
      icon: 'Wind',
      title: 'Мытьё окон',
      description: 'Качественное мытьё окон внутри и снаружи',
      price: 'от 150 ₽/окно'
    },
    {
      icon: 'Hammer',
      title: 'Уборка после ремонта',
      description: 'Комплексная уборка после строительных работ',
      price: 'от 10 000 ₽'
    },
    {
      icon: 'Building2',
      title: 'Уборка офисов',
      description: 'Регулярная уборка коммерческих помещений',
      price: 'от 5 000 ₽'
    }
  ];

  const portfolio = [
    { title: 'Квартира 120 м²', location: 'ЖК Алые Паруса', image: '🏢' },
    { title: 'Загородный дом', location: 'КП Рублёвка', image: '🏡' },
    { title: 'Офис 200 м²', location: 'БЦ Москва-Сити', image: '🏢' },
  ];

  const reviews = [
    {
      name: 'Анна Петрова',
      rating: 5,
      text: 'Превосходное качество уборки! Команда работает быстро и очень аккуратно. Рекомендую!',
      date: '15 октября 2024'
    },
    {
      name: 'Михаил Соколов',
      rating: 5,
      text: 'Заказываем регулярную уборку офиса. Всегда приходят вовремя, работают профессионально.',
      date: '10 октября 2024'
    },
    {
      name: 'Елена Иванова',
      rating: 5,
      text: 'После ремонта квартира была в ужасном состоянии. TOP CLEAN справились на отлично!',
      date: '5 октября 2024'
    }
  ];

  const faqItems = [
    {
      question: 'Какие средства вы используете?',
      answer: 'Мы используем только профессиональные гипоаллергенные средства европейских производителей, безопасные для детей и животных.'
    },
    {
      question: 'Как происходит оплата?',
      answer: 'Оплата производится после выполнения работ наличными или картой. Также доступна безналичная оплата для юридических лиц.'
    },
    {
      question: 'Можно ли заказать уборку на выходные?',
      answer: 'Да, мы работаем 7 дней в неделю, включая выходные и праздничные дни.'
    },
    {
      question: 'Предоставляете ли вы гарантию?',
      answer: 'Да, мы предоставляем гарантию качества. Если вас что-то не устроит, мы бесплатно устраним недочёты в течение 24 часов.'
    }
  ];

  const timeSlots = ['09:00', '11:00', '13:00', '15:00', '17:00', '19:00'];

  const handleBooking = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success('Заявка отправлена! Мы свяжемся с вами в ближайшее время.');
    setIsBookingOpen(false);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-primary/95 backdrop-blur-sm z-50 shadow-lg">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Sparkles" className="text-accent" size={32} />
              <span className="text-2xl font-bold text-primary-foreground font-heading">TOP CLEAN</span>
            </div>
            <div className="hidden md:flex space-x-6">
              {['Главная', 'Услуги', 'Прайс', 'Портфолио', 'Отзывы', 'FAQ', 'Контакты'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-primary-foreground hover:text-accent transition-colors font-medium"
                >
                  {item}
                </button>
              ))}
            </div>
            <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
              <DialogTrigger asChild>
                <Button className="bg-accent text-primary hover:bg-accent/90 font-semibold">
                  Записаться
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle className="font-heading">Онлайн-запись на уборку</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleBooking} className="space-y-4">
                  <div>
                    <Label htmlFor="service">Тип уборки</Label>
                    <Select value={selectedService} onValueChange={setSelectedService}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите услугу" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service.title} value={service.title}>
                            {service.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Дата</Label>
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      disabled={(date) => date < new Date()}
                      className="rounded-md border"
                    />
                  </div>
                  <div>
                    <Label htmlFor="time">Время</Label>
                    <Select value={selectedTime} onValueChange={setSelectedTime}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите время" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="name">Имя</Label>
                    <Input id="name" placeholder="Ваше имя" required />
                  </div>
                  <div>
                    <Label htmlFor="phone">Телефон</Label>
                    <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" required />
                  </div>
                  <div>
                    <Label htmlFor="address">Адрес</Label>
                    <Textarea id="address" placeholder="Укажите адрес для уборки" required />
                  </div>
                  <Button type="submit" className="w-full bg-accent text-primary hover:bg-accent/90">
                    Отправить заявку
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </nav>
      </header>

      <section id="главная" className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary via-primary to-primary/90">
        <div className="container mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 font-heading">
            Премиальная уборка<br />вашего пространства
          </h1>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Профессиональный клининг с гарантией качества.<br />
            Доверьте чистоту экспертам TOP CLEAN.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-accent text-primary hover:bg-accent/90 font-semibold text-lg px-8"
              onClick={() => setIsBookingOpen(true)}
            >
              Заказать уборку
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold text-lg px-8"
              onClick={() => scrollToSection('услуги')}
            >
              Наши услуги
            </Button>
          </div>
        </div>
      </section>

      <section id="услуги" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 font-heading">Наши услуги</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Полный спектр клининговых услуг для дома и офиса
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <Card key={idx} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-scale-in border-2">
                <CardHeader>
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name={service.icon} className="text-accent" size={32} />
                  </div>
                  <CardTitle className="font-heading">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-accent font-heading">{service.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="прайс" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 font-heading">Прайс-лист</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Прозрачное ценообразование без скрытых платежей
          </p>
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="space-y-4">
                {services.map((service, idx) => (
                  <div key={idx} className="flex justify-between items-center py-4 border-b last:border-0">
                    <div className="flex items-center space-x-4">
                      <Icon name={service.icon} className="text-accent" size={24} />
                      <div>
                        <h3 className="font-semibold text-lg">{service.title}</h3>
                        <p className="text-sm text-muted-foreground">{service.description}</p>
                      </div>
                    </div>
                    <p className="text-xl font-bold text-accent font-heading whitespace-nowrap ml-4">{service.price}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-4 bg-accent/10 rounded-lg">
                <p className="text-sm text-center">
                  <Icon name="Info" className="inline mr-2" size={16} />
                  Точная стоимость рассчитывается после осмотра объекта
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="портфолио" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 font-heading">Портфолио</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Примеры наших работ
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((item, idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="h-48 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center text-7xl">
                  {item.image}
                </div>
                <CardHeader>
                  <CardTitle className="font-heading">{item.title}</CardTitle>
                  <CardDescription className="flex items-center">
                    <Icon name="MapPin" size={16} className="mr-1" />
                    {item.location}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="о компании" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 font-heading">О компании</h2>
          <Card className="mt-8">
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed mb-6">
                TOP CLEAN — это команда профессионалов с более чем 10-летним опытом работы в сфере клининговых услуг. 
                Мы используем только современное оборудование и экологичные средства, обеспечивая безупречную чистоту 
                в вашем доме или офисе.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2 font-heading">500+</div>
                  <p className="text-muted-foreground">Довольных клиентов</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2 font-heading">10</div>
                  <p className="text-muted-foreground">Лет на рынке</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2 font-heading">98%</div>
                  <p className="text-muted-foreground">Положительных отзывов</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="отзывы" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 font-heading">Отзывы клиентов</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Что говорят о нас наши клиенты
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {reviews.map((review, idx) => (
              <Card key={idx} className="hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg font-heading">{review.name}</CardTitle>
                    <div className="flex text-accent">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} fill="currentColor" />
                      ))}
                    </div>
                  </div>
                  <CardDescription>{review.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground leading-relaxed">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 font-heading">Часто задаваемые вопросы</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Ответы на популярные вопросы
          </p>
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`}>
                <AccordionTrigger className="text-lg font-semibold text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="контакты" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 font-heading">Контакты</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Свяжитесь с нами удобным способом
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="font-heading">Свяжитесь с нами</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" className="text-accent" size={24} />
                  <div>
                    <p className="font-semibold">Телефон</p>
                    <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" className="text-accent" size={24} />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-muted-foreground">info@topclean.ru</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" className="text-accent" size={24} />
                  <div>
                    <p className="font-semibold">Адрес</p>
                    <p className="text-muted-foreground">Москва, ул. Примерная, 123</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" className="text-accent" size={24} />
                  <div>
                    <p className="font-semibold">Режим работы</p>
                    <p className="text-muted-foreground">Ежедневно с 8:00 до 22:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="font-heading">Или запишитесь онлайн</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">
                  Оставьте заявку через форму онлайн-записи, и мы свяжемся с вами в течение 15 минут.
                </p>
                <Button 
                  className="w-full bg-accent text-primary hover:bg-accent/90 font-semibold"
                  onClick={() => setIsBookingOpen(true)}
                >
                  Открыть форму записи
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Sparkles" className="text-accent" size={32} />
            <span className="text-2xl font-bold font-heading">TOP CLEAN</span>
          </div>
          <p className="text-primary-foreground/80 mb-4">
            Премиальная клининговая компания
          </p>
          <p className="text-sm text-primary-foreground/60">
            © 2024 TOP CLEAN. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
