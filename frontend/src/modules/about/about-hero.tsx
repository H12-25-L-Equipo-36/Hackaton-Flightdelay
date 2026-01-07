"use client";
import { Rocket, Globe, Shield } from "lucide-react";
import { motion } from "motion/react";

export default function AboutHero() {
  return (
    <div className="relative pt-20 pb-16 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase"
        >
          <Rocket className="size-4" />
          <span>Our Mission</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-black tracking-tight leading-[1.1]"
        >
          Redefining the Future of{" "}
          <span className="bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent italic">
            Flight Prediction
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          We combine cutting-edge artificial intelligence with real-time
          atmospheric data to make air travel safer, more efficient, and
          completely predictable for everyone, everywhere.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12"
        >
          {[
            {
              icon: Globe,
              title: "Global Reach",
              desc: "Covering thousands of routes across all continents.",
            },
            {
              icon: Shield,
              title: "Enhanced Safety",
              desc: "Proactive risk mitigation through predictive analytics.",
            },
            {
              icon: Rocket,
              title: "AI Powered",
              desc: "State-of-the-art neural networks for maximum accuracy.",
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-secondary/30 border border-border/50 hover:border-primary/30 transition-colors text-left space-y-3 group"
            >
              <div className="p-3 rounded-2xl bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors">
                <feature.icon className="size-6 text-primary" />
              </div>
              <h3 className="font-bold text-lg">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
