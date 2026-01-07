import Link from "next/link";

export default function AboutFooter() {
  return (
    <footer className="p-12 md:p-16 rounded-[48px] bg-primary/5 border border-primary/20 text-center space-y-8 relative overflow-hidden">
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />

      <h2 className="text-3xl md:text-5xl font-bold tracking-tight relative z-10">
        Ready to <span className="text-primary italic">take off?</span>
      </h2>
      <p className="max-w-xl mx-auto text-muted-foreground relative z-10 text-lg">
        Join us in our mission to make global air travel more predictable and
        safer for everyone.
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 relative z-10 w-full px-4 sm:px-0">
        <Link
          href="/"
          className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-primary text-primary-foreground font-bold rounded-2xl hover:shadow-lg hover:shadow-primary/20 transition-all active:scale-95 block text-center"
        >
          Try it out
        </Link>
        <Link
          href="/"
          className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-background border border-border font-bold rounded-2xl hover:bg-secondary/50 transition-all active:scale-95 block text-center"
        >
          Read Documentation
        </Link>
      </div>
    </footer>
  );
}
