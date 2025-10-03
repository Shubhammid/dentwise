import { SignUpButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import { CalendarIcon, MicIcon, StarIcon } from "lucide-react";
import Image from "next/image";

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16 sm:pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/5 to-primary/5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:3rem_3rem] md:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_70%,transparent_110%)] opacity-20"></div>
      </div>

      <div className="absolute top-20 left-1/4 w-40 h-40 sm:w-72 sm:h-72 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-1/4 w-60 h-60 sm:w-96 sm:h-96 bg-gradient-to-r from-primary/15 to-primary/5 rounded-full blur-3xl" />

      <div className="relative z-10 w-full px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8 sm:space-y-10">
              <div className="space-y-4 sm:space-y-6">
                <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-primary/10 to-primary/5 rounded-full border border-primary/20 backdrop-blur-sm text-xs sm:text-sm">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <span className="font-medium text-primary">
                    AI-Powered Dental Assistant
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
                  <span className="bg-gradient-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
                    Your dental
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                    questions
                  </span>
                  <br />
                  <span className="bg-gradient-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
                    answered instantly
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl font-medium">
                  Chat with our AI dental assistant for instant advice, book smart appointments, and
                  get personalized care recommendations. Available 24/7.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <SignUpButton mode="modal">
                  <Button size="lg" className="w-full sm:w-auto">
                    <MicIcon className="mr-2 size-5" />
                    Try voice agent
                  </Button>
                </SignUpButton>

                <SignUpButton mode="modal">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    <CalendarIcon className="mr-2 size-5" />
                    Book appointment
                  </Button>
                </SignUpButton>
              </div>

            </div>
            <div className="relative lg:pl-8 mt-8 lg:mt-0">
              <div className="absolute -top-4 -left-4 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl rotate-45 blur-xl"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-primary/15 to-primary/5 rounded-full blur-2xl"></div>
              <Image
                src="/hero.png"
                alt="DentWise AI"
                width={600}
                height={600}
                className="w-full h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full mx-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
