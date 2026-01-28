import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Sheet, SheetContent } from '@/components/ui/sheet';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  activeTab: 'calculator' | 'history' | 'profile';
  setActiveTab: (tab: 'calculator' | 'history' | 'profile') => void;
}

export function Sidebar({ isOpen, onClose, activeTab, setActiveTab }: SidebarProps) {
  const handleTabChange = (tab: 'calculator' | 'history' | 'profile') => {
    setActiveTab(tab);
    onClose();
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="left" className="backdrop-blur-xl bg-background/95 border-white/10">
        <div className="py-6 space-y-4">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Icon name="Calculator" size={24} className="text-white" />
            </div>
            <span className="text-xl font-bold">AI Калькулятор</span>
          </div>

          <div className="space-y-2">
            <Button
              variant={activeTab === 'calculator' ? 'default' : 'ghost'}
              onClick={() => handleTabChange('calculator')}
              className="w-full justify-start gap-3"
            >
              <Icon name="Calculator" size={20} />
              Калькулятор
            </Button>
            <Button
              variant={activeTab === 'history' ? 'default' : 'ghost'}
              onClick={() => handleTabChange('history')}
              className="w-full justify-start gap-3"
            >
              <Icon name="History" size={20} />
              История
            </Button>
            <Button
              variant={activeTab === 'profile' ? 'default' : 'ghost'}
              onClick={() => handleTabChange('profile')}
              className="w-full justify-start gap-3"
            >
              <Icon name="User" size={20} />
              Профиль
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
