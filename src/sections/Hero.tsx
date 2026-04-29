import { motion } from 'framer-motion';
import { MapPin, Mail, Code2, Cpu, Download } from 'lucide-react';
import { LinkedInIcon } from '../components/Icons';

export default function Hero() {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 py-20">
            <div className="max-w-4xl mx-auto text-center relative z-10">
                {/* Profil Fotoğrafı */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
                    className="mb-8"
                >
                    <div className="relative inline-block group">
                        <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-accent-purple/40 via-accent-blue/30 to-accent-cyan/40 blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-accent-purple via-accent-blue to-accent-cyan animate-pulse-glow" />
                        <div className="relative w-40 h-40 md:w-52 md:h-52 rounded-full p-[3px] bg-gradient-to-br from-accent-purple via-accent-blue to-accent-cyan">
                            <div className="w-full h-full rounded-full overflow-hidden bg-bg-primary">
                                <img
                                    src="/profile.png"
                                    alt="Cevat Aydın"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                        </div>
                        <div className="absolute bottom-3 right-3 w-6 h-6 rounded-full bg-green-500 border-[3px] border-bg-primary flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="mb-6 flex flex-wrap items-center justify-center gap-3"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card">
                        <Code2 className="w-4 h-4 text-accent-purple" />
                        <span className="text-sm text-text-secondary">Unity Expert</span>
                    </div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-accent-blue/30">
                        <Cpu className="w-4 h-4 text-accent-blue" />
                        <span className="text-sm text-accent-blue font-medium">Vibe Coding Enthusiast</span>
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-7xl font-bold mb-4 tracking-tight"
                >
                    <span className="gradient-text">CEVAT AYDIN</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-xl md:text-2xl text-text-secondary mb-10 font-light max-w-2xl mx-auto"
                >
                    Unity ile profesyonel oyun dünyaları kurgulayan ve hobi olarak "Vibe Coding" ile modern mobil uygulamalar geliştiren teknoloji tutkunu.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mb-12"
                >
                    <a
                        href="https://maps.google.com/?q=Istanbul,Turkey"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-text-secondary hover:text-accent-purple transition-colors"
                    >
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">İstanbul, Türkiye</span>
                    </a>
                    <a
                        href="mailto:cvtaydn53@gmail.com"
                        className="flex items-center gap-2 text-text-secondary hover:text-accent-purple transition-colors"
                    >
                        <Mail className="w-4 h-4" />
                        <span className="text-sm">cvtaydn53@gmail.com</span>
                    </a>
                    <a
                        href="https://linkedin.com/in/cevat-aydin-39a821a7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-text-secondary hover:text-accent-purple transition-colors"
                    >
                        <LinkedInIcon className="w-4 h-4" />
                        <span className="text-sm">LinkedIn</span>
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="flex justify-center"
                >
                    <a
                        href="/Cevat_Aydin_CV.pdf"
                        download
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-accent-purple to-accent-blue text-white font-bold shadow-lg shadow-accent-purple/25 hover:shadow-accent-purple/40 hover:scale-105 transition-all duration-300"
                    >
                        <Download className="w-5 h-5" />
                        CV İndir (PDF)
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
