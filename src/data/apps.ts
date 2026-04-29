export interface AppData {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  icon: string;
  technologies: string[];
  tech: string[]; // Keeping for backward compatibility if needed, but primarily using technologies
  links: {
    appStore?: string;
    playStore?: string;
    web?: string;
    privacy?: string;
    terms?: string;
  };
  features: string[];
  category: 'Mobile App' | 'Game' | 'Utility';
}

export const apps: AppData[] = [
  {
    id: 'matchinsights',
    title: 'MatchInsights',
    description: 'Spor istatistikleri ve analizleri sunan mobil uygulama.',
    longDescription: 'Hobi projesi olarak "Vibe Coding" yaklaşımıyla geliştirilen MatchInsights, spor severlere detaylı maç istatistikleri ve analizler sunar.',
    icon: '/matchinsights_icon.png',
    technologies: ['Flutter', 'Firebase', 'Vibe Coding'],
    tech: ['Flutter', 'Firebase', 'Vibe Coding'],
    links: {
      playStore: 'https://play.google.com/store/apps/details?id=com.cevataydn.matchinsights',
      privacy: '/matchinsights-privacy.html',
      terms: '/matchinsights-terms.html'
    },
    features: [
      'Canlı Maç Sonuçları',
      'Detaylı Takım İstatistikleri',
      'Yapay Zeka Destekli Analizler',
      'Kullanıcı Dostu Arayüz'
    ],
    category: 'Mobile App'
  },
  {
    id: 'shareready',
    title: 'ShareReady',
    description: 'Sosyal medya içerikleri için hızlı ve şık paylaşım şablonları.',
    longDescription: 'Flutter ile geliştirilen ShareReady, kullanıcıların metinlerini ve görsellerini saniyeler içinde profesyonel sosyal medya paylaşımlarına dönüştürmesini sağlar.',
    icon: '/shareready_icon.png',
    technologies: ['Flutter', 'Riverpod', 'Vibe Coding'],
    tech: ['Flutter', 'Riverpod', 'Vibe Coding'],
    links: {
      privacy: '/shareready-privacy.html'
    },
    features: [
      'Hazır Tasarım Şablonları',
      'Hızlı Dışa Aktarma',
      'Özelleştirilebilir Fontlar',
      'Minimalist Tasarım'
    ],
    category: 'Utility'
  },
  {
    id: 'subzen',
    title: 'Subzen',
    description: 'Abonelik ve gider takibi yapan yardımcı uygulama.',
    longDescription: 'Aylık giderlerinizi ve aboneliklerinizi kontrol altında tutmanıza yardımcı olan, hobi olarak geliştirilmiş şık bir finans aracı.',
    icon: '/subzen_icon.png',
    technologies: ['Flutter', 'SQLite', 'Vibe Coding'],
    tech: ['Flutter', 'SQLite', 'Vibe Coding'],
    links: {
      web: '#'
    },
    features: [
      'Abonelik Takibi',
      'Aylık Harcama Grafikleri',
      'Hatırlatıcı Bildirimler',
      'Karanlık Mod Desteği'
    ],
    category: 'Utility'
  }
];
