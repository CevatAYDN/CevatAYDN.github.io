import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, MapPin, ExternalLink, Wifi } from 'lucide-react';
import { LinkedInIcon } from '../components/Icons';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="py-24 px-4 bg-bg-secondary/30" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text inline-block">İletişim</h2>
          <p className="text-text-secondary">Benimle iletişime geçmek için aşağıdaki kanalları kullanabilirsiniz.</p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
          {[
            {
              icon: <Mail className="w-5 h-5" />,
              label: 'E-posta',
              value: 'cvtaydn53@gmail.com',
              href: 'mailto:cvtaydn53@gmail.com',
            },
            {
              icon: <LinkedInIcon className="w-5 h-5" />,
              label: 'LinkedIn',
              value: 'Cevat Aydın',
              href: 'https://linkedin.com/in/cevat-aydin-39a821a7',
            },
            {
              icon: <MapPin className="w-5 h-5" />,
              label: 'Konum',
              value: 'İstanbul, Türkiye',
              href: 'https://maps.google.com/?q=Istanbul,Turkey',
            },
            {
              icon: <Wifi className="w-5 h-5" />,
              label: 'Çalışma Tercihi',
              value: 'Uzaktan / Remote',
              href: '#',
            },
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center gap-4 p-6 rounded-2xl glass-card hover:border-accent-purple/50 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-bg-card flex items-center justify-center text-accent-purple group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <div className="text-left">
                <p className="text-xs text-text-muted font-medium uppercase tracking-wider">{item.label}</p>
                <p className="text-text-primary font-medium">{item.value}</p>
              </div>
              <ExternalLink className="w-4 h-4 text-text-muted ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
