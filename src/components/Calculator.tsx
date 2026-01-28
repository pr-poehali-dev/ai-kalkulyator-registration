import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

interface CalculatorProps {
  addToHistory: (expression: string, result: string) => void;
}

export function Calculator({ addToHistory }: CalculatorProps) {
  const [display, setDisplay] = useState('0');
  const [expression, setExpression] = useState('');
  const [aiHint, setAiHint] = useState('Начните вводить выражение...');

  const buttons = [
    ['C', '±', '%', '÷'],
    ['7', '8', '9', '×'],
    ['4', '5', '6', '−'],
    ['1', '2', '3', '+'],
    ['0', '.', '=']
  ];

  const handleClick = (value: string) => {
    if (value === 'C') {
      setDisplay('0');
      setExpression('');
      setAiHint('Начните вводить выражение...');
      return;
    }

    if (value === '=') {
      try {
        const result = eval(expression.replace('×', '*').replace('÷', '/').replace('−', '-'));
        setDisplay(result.toString());
        addToHistory(expression, result.toString());
        setExpression('');
        setAiHint('Результат готов! 🎉');
        toast.success('Расчёт выполнен');
      } catch {
        setDisplay('Ошибка');
        setAiHint('Проверьте выражение');
        toast.error('Ошибка в выражении');
      }
      return;
    }

    if (value === '±') {
      setDisplay(prev => (parseFloat(prev) * -1).toString());
      return;
    }

    if (value === '%') {
      setDisplay(prev => (parseFloat(prev) / 100).toString());
      return;
    }

    const newExpression = display === '0' ? value : expression + value;
    setExpression(newExpression);
    setDisplay(newExpression);
    setAiHint('AI подсказка: продолжайте ввод');
  };

  return (
    <div className="max-w-md mx-auto space-y-6">
      <Card className="p-6 backdrop-blur-xl bg-card/50 border-white/10 shadow-2xl">
        <div className="space-y-4">
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-6 min-h-[120px] flex flex-col justify-end backdrop-blur-sm border border-white/10">
            <div className="text-sm text-muted-foreground mb-2 flex items-center gap-2">
              <Icon name="Sparkles" size={16} className="text-primary" />
              {aiHint}
            </div>
            <div className="text-4xl font-bold text-right break-all bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              {display}
            </div>
          </div>

          <div className="grid grid-cols-4 gap-3">
            {buttons.map((row, i) => (
              row.map((btn, j) => (
                <Button
                  key={`${i}-${j}`}
                  onClick={() => handleClick(btn)}
                  variant={['C', '±', '%', '÷', '×', '−', '+', '='].includes(btn) ? 'default' : 'outline'}
                  className={`h-16 text-xl font-semibold transition-all hover-scale ${
                    btn === '0' ? 'col-span-2' : ''
                  } ${
                    btn === '=' ? 'bg-gradient-to-r from-primary to-secondary hover:opacity-90' : ''
                  }`}
                >
                  {btn}
                </Button>
              ))
            ))}
          </div>
        </div>
      </Card>

      <Card className="p-4 backdrop-blur-xl bg-card/30 border-white/10">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
            <Icon name="Lightbulb" size={16} className="text-white" />
          </div>
          <div className="text-sm text-muted-foreground">
            <p className="font-semibold mb-1">AI Совет дня:</p>
            <p>Используйте % для быстрого расчёта процентов. Например: 200 × 15% = 30</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
