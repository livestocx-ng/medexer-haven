import React from 'react';
import { motion, useSpring, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';

const stats = [
  { label: 'Cases Logged', value: 500, suffix: '+' },
  { label: 'Therapists Connected', value: 120, suffix: '' },
  { label: 'Anonymity Guaranteed', value: 100, suffix: '%' },
];

const Counter = ({ value, suffix }: { value: number, suffix: string }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    // @ts-ignore
    const springValue = useSpring(0, { bounce: 0, duration: 2000 });

    useEffect(() => {
        if (isInView) {
            springValue.set(value);
        }
    }, [isInView, value, springValue]);

    const [displayValue, setDisplayValue] = React.useState(0);

    useEffect(() => {
        springValue.on("change", (latest) => {
            setDisplayValue(Math.round(latest));
        });
        return () => springValue.destroy();
    }, [springValue]);

    return <span ref={ref}>{displayValue}{suffix}</span>;
};

const Impact: React.FC = () => {
  return (
    <section id="impact" className="py-24 bg-secondary text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute right-0 top-0 w-96 h-96 bg-primary rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute left-0 bottom-0 w-64 h-64 bg-gray-600 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {stats.map((stat, index) => (
                <motion.div 
                    key={index} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="flex flex-col items-center"
                >
                    <h3 className="text-6xl font-extrabold text-white mb-2 tracking-tight">
                         <Counter value={stat.value} suffix={stat.suffix} />
                    </h3>
                    <p className="text-gray-400 uppercase tracking-widest font-medium text-sm">
                        {stat.label}
                    </p>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
