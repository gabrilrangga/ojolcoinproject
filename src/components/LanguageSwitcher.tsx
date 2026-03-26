'use client';

import { useState } from 'react';
import { Language, languageNames } from '@/lib/translations';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Globe } from 'lucide-react';

interface LanguageSwitcherProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

export function LanguageSwitcher({ currentLang, onLanguageChange }: LanguageSwitcherProps) {
  const [open, setOpen] = useState(false);

  const handleLanguageChange = (lang: Language) => {
    onLanguageChange(lang);
    setOpen(false);
  };

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="border-blue-500/30 text-blue-400 hover:bg-blue-500/10 hover:text-blue-300 transition-all duration-300"
        >
          <Globe className="w-4 h-4 mr-2" />
          {languageNames[currentLang]}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-slate-900/95 border-blue-500/20 backdrop-blur-xl">
        {Object.entries(languageNames).map(([code, name]) => (
          <DropdownMenuItem
            key={code}
            onClick={() => handleLanguageChange(code as Language)}
            className={`cursor-pointer transition-colors duration-200 ${
              currentLang === code
                ? 'text-blue-400 bg-blue-500/10'
                : 'text-slate-300 hover:text-blue-400 hover:bg-blue-500/10'
            }`}
          >
            {name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
