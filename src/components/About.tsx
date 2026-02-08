import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Lightbulb, TrendingUp, Handshake } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Mission",
    description:
      "To empower businesses with integrated marketing solutions that drive measurable growth and lasting brand impact.",
  },
  {
    icon: Lightbulb,
    title: "Vision",
    description:
      "To be the most trusted strategic partner for brands seeking transformation through creativity and innovation.",
  },
  {
    icon: TrendingUp,
    title: "Innovation",
    description:
      "We embrace cutting-edge technologies and creative approaches to stay ahead of market trends and deliver exceptional results.",
  },
  {
    icon: Handshake,
    title: "Trust",
    description:
      "We build transparent, long-term partnerships founded on accountability, integrity, and consistent quality.",
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-card relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-4">
            Who We Are
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Your Strategic Growth Partner
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto text-balance">
            Sunanda Entertainment Limited is a full-service marketing and advertising 
            agency dedicated to transforming complex business goals into powerful brand 
            narratives that resonate and convert.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Left - Image/Visual Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="font-display text-3xl font-bold text-primary">S</span>
                  </div>
                  <p className="text-muted-foreground">Visual Content Placeholder</p>
                </div>
              </div>
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-primary/30 rounded-lg -z-10" />
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground">
              Built on Excellence, Driven by Results
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              With years of experience across diverse industries, we've developed a deep 
              understanding of what it takes to build brands that stand out. Our integrated 
              approach combines strategic thinking with creative execution to deliver 
              campaigns that not only capture attention but also drive measurable business outcomes.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From print to digital, outdoor to electronic media, we offer end-to-end 
              solutions tailored to your unique business objectives. Our team of strategists, 
              creatives, and execution specialists work together to ensure every campaign 
              delivers maximum impact.
            </p>
            <div className="pt-4 flex items-center gap-8">
              <div className="text-center">
                <div className="font-display text-3xl md:text-4xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <div className="font-display text-3xl md:text-4xl font-bold text-primary">200+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <div className="font-display text-3xl md:text-4xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="group p-6 bg-background rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover-lift"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <value.icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-display text-xl font-semibold text-foreground mb-2">
                {value.title}
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
