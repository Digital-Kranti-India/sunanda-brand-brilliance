import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Layers,
  Brain,
  Eye,
  Users,
  Shield,
  CheckCircle2,
} from "lucide-react";

const differentiators = [
  {
    icon: Layers,
    title: "Integrated Multi-Channel",
    description:
      "Seamless campaigns across print, digital, outdoor, and electronic media for maximum brand consistency and reach.",
  },
  {
    icon: Brain,
    title: "Strategic Thinking",
    description:
      "Every campaign is backed by data-driven insights and strategic planning to ensure meaningful business outcomes.",
  },
  {
    icon: Eye,
    title: "Transparent Processes",
    description:
      "Clear communication, regular reporting, and full visibility into campaign performance and budget allocation.",
  },
  {
    icon: Users,
    title: "Long-Term Partnerships",
    description:
      "We invest in understanding your business deeply, growing alongside you as a true strategic partner.",
  },
  {
    icon: Shield,
    title: "Consistent Quality",
    description:
      "Rigorous quality standards across every deliverable, ensuring your brand is always represented at its best.",
  },
  {
    icon: CheckCircle2,
    title: "Accountability",
    description:
      "We own our results. Clear KPIs, measurable outcomes, and a commitment to delivering on our promises.",
  },
];

const WhyUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-us" className="section-padding bg-background relative">
      <div className="container mx-auto px-4 md:px-6" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-4">
              Why Choose Us
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              The Sunanda Advantage
            </h2>
            <p className="text-muted-foreground text-lg mb-8 text-balance">
              Choosing the right marketing partner is crucial for your brand's success. 
              Here's what sets Sunanda Entertainment apart from the rest.
            </p>

            {/* Key stats */}
            <div className="grid grid-cols-3 gap-6 p-6 bg-card rounded-xl border border-border">
              <div className="text-center">
                <div className="font-display text-2xl md:text-3xl font-bold text-primary">
                  98%
                </div>
                <div className="text-xs md:text-sm text-muted-foreground">
                  Client Retention
                </div>
              </div>
              <div className="text-center border-x border-border">
                <div className="font-display text-2xl md:text-3xl font-bold text-primary">
                  3.5x
                </div>
                <div className="text-xs md:text-sm text-muted-foreground">
                  Avg. ROI Increase
                </div>
              </div>
              <div className="text-center">
                <div className="font-display text-2xl md:text-3xl font-bold text-primary">
                  24/7
                </div>
                <div className="text-xs md:text-sm text-muted-foreground">
                  Support Available
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Differentiators Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {differentiators.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                className="group p-5 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1 text-sm">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
