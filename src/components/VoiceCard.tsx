import { useState, useRef } from "react";
import { Play, Download, Loader2, Volume2, Sparkles } from "lucide-react";
import type { Voice } from "@/data/voices";

interface VoiceCardProps {
  voice: Voice;
}

const VoiceCard = ({ voice }: VoiceCardProps) => {
  const [text, setText] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generated, setGenerated] = useState(false);
  const [isPlayingDemo, setIsPlayingDemo] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handlePlayDemo = () => {
    setIsPlayingDemo(true);
    setTimeout(() => setIsPlayingDemo(false), 2000);
  };

  const handleGenerate = () => {
    if (!text.trim()) return;
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setGenerated(true);
    }, 1800);
  };

  return (
    <div className="group rounded-lg border border-border bg-card p-5 transition-all duration-300 hover:border-primary/30 hover:glow-primary">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="font-heading text-lg font-semibold text-foreground">
            {voice.name}
          </h3>
          <p className="text-sm text-muted-foreground">{voice.style}</p>
        </div>
        <button
          onClick={handlePlayDemo}
          disabled={isPlayingDemo}
          className="flex items-center gap-1.5 rounded-md bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground transition-colors hover:bg-accent"
        >
          {isPlayingDemo ? (
            <Volume2 className="h-3.5 w-3.5 animate-pulse-glow text-primary" />
          ) : (
            <Play className="h-3.5 w-3.5" />
          )}
          {isPlayingDemo ? "Playing..." : "Play Demo"}
        </button>
      </div>

      {/* Text Area */}
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write your script here..."
        rows={3}
        className="mb-4 w-full resize-none rounded-md border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-colors"
      />

      {/* Generate Button */}
      <button
        onClick={handleGenerate}
        disabled={isGenerating || !text.trim()}
        className="flex w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed"
      >
        {isGenerating ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Generating...
          </>
        ) : (
          <>
            <Sparkles className="h-4 w-4" />
            Generate Voice
          </>
        )}
      </button>

      {/* Generated Audio Section */}
      {generated && (
        <div className="mt-4 rounded-md border border-primary/20 bg-primary/5 p-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <p className="mb-2 text-xs font-medium text-primary">
            ✓ Generated Audio
          </p>
          <audio
            ref={audioRef}
            controls
            className="mb-3 w-full [&::-webkit-media-controls-panel]:bg-secondary"
            src="https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
          />
          <a
            href="https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
            download={`${voice.name}-output.mp3`}
            className="inline-flex items-center gap-1.5 rounded-md bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground transition-colors hover:bg-accent"
          >
            <Download className="h-3.5 w-3.5" />
            Download Audio
          </a>
        </div>
      )}
    </div>
  );
};

export default VoiceCard;
