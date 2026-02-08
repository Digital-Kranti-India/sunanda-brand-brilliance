import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Newspaper,
  BarChart3,
  Megaphone,
  Radio,
  Palette,
  PartyPopper,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: Newspaper,
    title: "Print Media Solutions",
    description:
      "Traditional excellence meets modern strategy. We craft compelling print campaigns that command attention and deliver lasting brand impressions.",
    outcomes: ["Magazine & Newspaper Ads", "Brochures & Catalogs", "Corporate Collateral"],
  },
  {
    icon: BarChart3,
    title: "Digital Marketing & Performance",
    description:
      "Data-driven growth strategies that convert. From SEO to paid campaigns, we optimize every touchpoint for maximum ROI.",
    outcomes: ["SEO & Content Marketing", "Social Media Management", "PPC & Paid Campaigns"],
  },
  {
    icon: Megaphone,
    title: "Outdoor & Transit Advertising",
    description:
      "Maximum visibility, lasting impressions. Strategic outdoor placements that put your brand in front of the right audience at the right time.",
    outcomes: ["Billboards & Hoardings", "Transit & Vehicle Wraps", "Street Furniture Ads"],
  },
  {
    icon: Radio,
    title: "Electronic & Broadcast Media",
    description:
      "Engaging audiences at scale through television, radio, and digital broadcast channels with compelling audio-visual content.",
    outcomes: ["TV Commercials", "Radio Spots", "Digital Video Ads"],
  },
  {
    icon: Palette,
    title: "Creative & Brand Strategy",
    description:
      "Compelling narratives that convert. We develop brand identities and creative strategies that differentiate and resonate.",
    outcomes: ["Brand Identity Design", "Creative Campaigns", "Content Strategy"],
  },
  {
    icon: PartyPopper,
    title: "Promotional & Activation",
    description:
      "Direct engagement, measurable ROI. From events to experiential marketing, we create moments that build lasting connections.",
    outcomes: ["Event Marketing", "BTL Activations", "Experiential Campaigns"],
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding bg-background relative">
      <div className="container mx-auto px-4 md:px-6" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-4">
            What We Do
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Integrated Marketing Solutions
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto text-balance">
            We offer comprehensive marketing and advertising services designed to elevate 
            your brand, engage your audience, and drive measurable business growth.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-8 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover-lift overflow-hidden"
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Title */}
                <h3 className="font-display text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                  {service.title}
                  <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-primary" />
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Outcomes */}
                <div className="space-y-2">
                  {service.outcomes.map((outcome) => (
                    <div
                      key={outcome}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <span className="w-1 h-1 rounded-full bg-primary" />
                      {outcome}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
