import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles } from 'lucide-react';

export default function Summary() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="summary" className="relative py-20 px-4">
            <div className="max-w-4xl mx-auto" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="glass-card rounded-2xl p-8 md:p-10 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-accent-purple/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent-blue/10 rounded-full blur-3xl" />

                    <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-lg bg-accent-purple/20 flex items-center justify-center">
                                <Sparkles className="w-5 h-5 text-accent-purple" />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold">Özet</h2>
                        </div>

                        <p className="text-text-secondary leading-relaxed text-base md:text-lg">
                            Unity ile oyun geliştirme alanında deneyimli bir yazılım geliştiriciyim. Farklı oyun projelerinde aktif rol alarak mekanik geliştirme, optimizasyon ve Ar-Ge süreçlerinde katkı sağladım. Yazılım ve mühendislik altyapımı kullanarak verimli ve sürdürülebilir çözümler üretmeye odaklanıyorum.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
