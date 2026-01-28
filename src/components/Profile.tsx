import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { useTheme } from '@/components/ThemeProvider';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';

export function Profile() {
  const { theme, setTheme } = useTheme();

  const themes = [
    { id: 'purple', name: 'Фиолетовая', gradient: 'from-purple-500 to-pink-500' },
    { id: 'blue', name: 'Синяя', gradient: 'from-blue-500 to-cyan-500' },
    { id: 'sunset', name: 'Закат', gradient: 'from-orange-500 to-red-500' },
    { id: 'ocean', name: 'Океан', gradient: 'from-teal-500 to-blue-500' }
  ];

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <Card className="backdrop-blur-xl bg-card/50 border-white/10 shadow-2xl">
        <div className="p-6 space-y-6">
          <div className="flex items-center gap-6">
            <Avatar className="w-20 h-20 border-4 border-primary/20">
              <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white text-2xl">
                ИИ
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Личный кабинет
              </h2>
              <p className="text-muted-foreground">Управление профилем и настройками</p>
            </div>
          </div>

          <Separator className="bg-white/10" />

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Номер телефона</Label>
              <div className="relative">
                <Icon name="Phone" size={18} className="absolute left-3 top-3 text-muted-foreground" />
                <Input
                  id="phone"
                  placeholder="+7 (___) ___-__-__"
                  className="pl-10 backdrop-blur-sm bg-background/50 border-white/10"
                  disabled
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="surname">Фамилия</Label>
              <div className="relative">
                <Icon name="User" size={18} className="absolute left-3 top-3 text-muted-foreground" />
                <Input
                  id="surname"
                  placeholder="Введите фамилию"
                  className="pl-10 backdrop-blur-sm bg-background/50 border-white/10"
                />
              </div>
            </div>

            <Button className="w-full gap-2 bg-gradient-to-r from-primary to-secondary hover:opacity-90">
              <Icon name="Save" size={18} />
              Сохранить изменения
            </Button>
          </div>

          <Separator className="bg-white/10" />

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Icon name="Palette" size={20} className="text-primary" />
              <h3 className="font-semibold">Цветовая тема</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {themes.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTheme(t.id as any)}
                  className={`p-4 rounded-xl border-2 transition-all hover-scale ${
                    theme === t.id ? 'border-primary shadow-lg' : 'border-white/10'
                  }`}
                >
                  <div className={`h-12 rounded-lg bg-gradient-to-r ${t.gradient} mb-2`} />
                  <p className="text-sm font-medium">{t.name}</p>
                </button>
              ))}
            </div>
          </div>

          <Separator className="bg-white/10" />

          <div className="space-y-3">
            <Button variant="outline" className="w-full gap-2 justify-start">
              <Icon name="Bell" size={18} />
              Уведомления
            </Button>
            <Button variant="outline" className="w-full gap-2 justify-start">
              <Icon name="Shield" size={18} />
              Безопасность
            </Button>
            <Button variant="outline" className="w-full gap-2 justify-start">
              <Icon name="Info" size={18} />
              О приложении
            </Button>
          </div>
        </div>
      </Card>

      <Card className="p-6 backdrop-blur-xl bg-card/30 border-white/10">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center">
            <Icon name="Zap" size={24} className="text-yellow-500" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold mb-1">Войти через Яндекс</h3>
            <p className="text-sm text-muted-foreground">Быстрый и безопасный вход</p>
          </div>
          <Button variant="outline" className="gap-2">
            <Icon name="LogIn" size={18} />
            Войти
          </Button>
        </div>
      </Card>
    </div>
  );
}
