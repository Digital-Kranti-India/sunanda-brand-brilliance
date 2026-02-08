import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Sparkles, Rocket, LineChart } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Research-Driven Planning",
    description:
      "We begin with deep market and audience insights. Understanding your business landscape, competitors, and target audience forms the foundation of every successful campaign.",
  },
  {
    icon: Sparkles,
    step: "02",
    title: "Creative Ideation",
    description:
      "Strategy meets imagination. Our creative team develops compelling concepts and narratives that align with your brand vision and resonate with your audience.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Technology-Enabled Execution",
    description:
      "Precision delivery at scale. We leverage cutting-edge tools and platforms to execute campaigns flawlessly across all channels and touchpoints.",
  },
  {
    icon: LineChart,
    step: "04",
    title: "Performance & Optimization",
    description:
      "Continuous improvement through data. We monitor, measure, and optimize every campaign to ensure maximum ROI and sustainable growth.",
  },
];

const Approach = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="approach" className="section-padding bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-4">
            Our Approach
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            How We Deliver Results
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto text-balance">
            Our proven four-step methodology ensures every project is executed with 
            strategic precision and creative excellence, delivering measurable outcomes.
          </p>
        </motion.div>

        {/* Process Steps - Desktop */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute top-24 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

            <div className="grid lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative text-center"
                >
                  {/* Step Number & Icon */}
                  <div className="relative inline-block mb-6">
                    <div className="w-20 h-20 rounded-full bg-background border-2 border-primary/30 flex items-center justify-center relative z-10 group hover:border-primary transition-colors duration-300">
                      <step.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-xs font-bold text-primary-foreground">
                      {step.step}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Process Steps - Mobile/Tablet */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-6"
            >
              {/* Left - Step indicator */}
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-background border-2 border-primary/30 flex items-center justify-center shrink-0">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                {index < steps.length - 1 && (
                  <div className="w-px flex-1 bg-border mt-4" />
                )}
              </div>

              {/* Right - Content */}
              <div className="pb-8">
                <span className="text-primary text-sm font-semibold">Step {step.step}</span>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2 mt-1">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Approach;
