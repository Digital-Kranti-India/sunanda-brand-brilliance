import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Sunanda Entertainment transformed our brand presence completely. Their strategic approach combined with creative excellence delivered results beyond our expectations.",
    author: "Client Name",
    position: "CEO, Company Name",
    company: "Industry Leader",
  },
  {
    quote:
      "Working with Sunanda has been a game-changer for our marketing efforts. Their integrated campaigns across multiple channels have significantly increased our market reach.",
    author: "Client Name",
    position: "Marketing Director",
    company: "Global Enterprise",
  },
  {
    quote:
      "The team at Sunanda understands business outcomes, not just marketing metrics. They've consistently delivered campaigns that drive real revenue growth.",
    author: "Client Name",
    position: "Founder & CEO",
    company: "Tech Startup",
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-gradient-radial from-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-4">
            Testimonials
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our valued clients have to say 
            about working with Sunanda Entertainment.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative p-8 bg-background rounded-xl border border-border"
            >
              {/* Quote icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <Quote className="w-4 h-4 text-primary-foreground" />
                </div>
              </div>

              {/* Quote */}
              <blockquote className="text-muted-foreground leading-relaxed mb-6 pt-4">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                  <span className="font-display font-bold text-muted-foreground">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm">
                    {testimonial.author}
                  </div>
                  <div className="text-muted-foreground text-xs">
                    {testimonial.position}
                  </div>
                  <div className="text-primary text-xs">{testimonial.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Placeholder note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center text-muted-foreground/50 text-sm mt-8 italic"
        >
          * Testimonial content is placeholder. Replace with actual client testimonials.
        </motion.p>
      </div>
    </section>
  );
};

export default Testimonials;
