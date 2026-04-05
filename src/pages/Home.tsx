import { AudioLines } from "lucide-react";
import LanguageSection from "@/components/LanguageSection";
import { languages } from "@/data/voices";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary glow-primary">
              <AudioLines className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-heading text-lg font-bold text-foreground">
              AI Text to Speech Studio
            </span>
          </div>
          <div className="hidden items-center gap-1 text-sm text-muted-foreground sm:flex">
            <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
              Beta
            </span>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pb-6 pt-12 sm:px-6 sm:pt-16">
        <h1 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
          Generate lifelike speech
        </h1>
        <p className="mt-2 max-w-xl text-muted-foreground">
          Choose a neural voice, write your script, and generate studio-quality
          audio in seconds.
        </p>
      </section>

      {/* Language Sections */}
      <main className="mx-auto max-w-6xl space-y-4 px-4 pb-20 sm:px-6">
        {languages.map((group, i) => (
          <LanguageSection
            key={group.code}
            group={group}
            defaultOpen={i === 0}
          />
        ))}
      </main>
    </div>
  );
};

export default Home;
