import { useState } from "react";
import { ChevronDown, Globe } from "lucide-react";
import VoiceCard from "./VoiceCard";
import type { LanguageGroup } from "@/data/voices";

interface LanguageSectionProps {
  group: LanguageGroup;
  defaultOpen?: boolean;
}

const LanguageSection = ({ group, defaultOpen = false }: LanguageSectionProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="rounded-lg border border-border bg-card/50 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between px-5 py-4 text-left transition-colors hover:bg-surface-hover"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10">
            <Globe className="h-4 w-4 text-primary" />
          </div>
          <div>
            <h2 className="font-heading text-lg font-semibold text-foreground">
              {group.language}
            </h2>
            <p className="text-xs text-muted-foreground">
              {group.voices.length} Neural Voices
            </p>
          </div>
        </div>
        <ChevronDown
          className={`h-5 w-5 text-muted-foreground transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="border-t border-border p-5 animate-in fade-in slide-in-from-top-1 duration-200">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {group.voices.map((voice) => (
              <VoiceCard key={voice.id} voice={voice} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSection;
