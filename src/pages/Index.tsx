import { useState } from 'react';
import { Calculator } from '@/components/Calculator';
import { History } from '@/components/History';
import { Profile } from '@/components/Profile';
import { Sidebar } from '@/components/Sidebar';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeTab, setActiveTab] = useState<'calculator' | 'history' | 'profile'>('calculator');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [history, setHistory] = useState<Array<{ expression: string; result: string; timestamp: Date }>>([]);

  const addToHistory = (expression: string, result: string) => {
    setHistory(prev => [{ expression, result, timestamp: new Date() }, ...prev]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-accent/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
      
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <header className="relative z-10 backdrop-blur-md bg-background/50 border-b border-white/10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <Icon name="Menu" size={24} />
            </Button>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Icon name="Calculator" size={24} className="text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                AI Калькулятор
              </h1>
            </div>
          </div>
          
          <nav className="hidden lg:flex items-center gap-2">
            <Button
              variant={activeTab === 'calculator' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('calculator')}
              className="gap-2"
            >
              <Icon name="Calculator" size={18} />
              Калькулятор
            </Button>
            <Button
              variant={activeTab === 'history' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('history')}
              className="gap-2"
            >
              <Icon name="History" size={18} />
              История
            </Button>
            <Button
              variant={activeTab === 'profile' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('profile')}
              className="gap-2"
            >
              <Icon name="User" size={18} />
              Профиль
            </Button>
          </nav>
        </div>
      </header>

      <Sidebar 
        isOpen={sidebarOpen} 
        onClose={() => setSidebarOpen(false)}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <main className="relative z-10 container mx-auto px-4 py-8">
        <div className="animate-fade-in">
          {activeTab === 'calculator' && <Calculator addToHistory={addToHistory} />}
          {activeTab === 'history' && <History history={history} />}
          {activeTab === 'profile' && <Profile />}
        </div>
      </main>
    </div>
  );
}