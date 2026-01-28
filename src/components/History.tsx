import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { ScrollArea } from '@/components/ui/scroll-area';

interface HistoryProps {
  history: Array<{ expression: string; result: string; timestamp: Date }>;
}

export function History({ history }: HistoryProps) {
  return (
    <div className="max-w-2xl mx-auto">
      <Card className="backdrop-blur-xl bg-card/50 border-white/10 shadow-2xl">
        <div className="p-6 border-b border-white/10">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                История расчётов
              </h2>
              <p className="text-sm text-muted-foreground mt-1">
                Всего операций: {history.length}
              </p>
            </div>
            <Button variant="outline" size="sm" className="gap-2">
              <Icon name="Trash2" size={16} />
              Очистить
            </Button>
          </div>
        </div>

        <ScrollArea className="h-[500px]">
          <div className="p-6 space-y-3">
            {history.length === 0 ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <Icon name="History" size={32} className="text-muted-foreground" />
                </div>
                <p className="text-muted-foreground">История пуста</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Начните считать, чтобы увидеть историю
                </p>
              </div>
            ) : (
              history.map((item, index) => (
                <Card
                  key={index}
                  className="p-4 backdrop-blur-sm bg-card/30 border-white/10 hover-scale animate-fade-in"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="text-sm text-muted-foreground mb-1">
                        {item.timestamp.toLocaleTimeString('ru-RU')}
                      </div>
                      <div className="font-mono text-lg">
                        {item.expression} = <span className="font-bold text-primary">{item.result}</span>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon">
                      <Icon name="Copy" size={18} />
                    </Button>
                  </div>
                </Card>
              ))
            )}
          </div>
        </ScrollArea>
      </Card>
    </div>
  );
}
