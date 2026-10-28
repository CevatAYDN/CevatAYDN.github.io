export interface AppData {
  id: string;
  title: string;
  description: string;
  icon: string;
  technologies: string[];
  links: {
    playStore?: string;
    privacy?: string;
    terms?: string;
    notices?: string;
    deleteAccount?: string;
  };
  category: 'Game' | 'App';
  genre: string;
}

export const developerPage = 'https://play.google.com/store/apps/dev?id=8193521309024953413';

const play = (id: string) => `https://play.google.com/store/apps/details?id=com.fiftythreestudio.${id}`;

export const apps: AppData[] = [
  {
    id: 'wickling',
    title: 'Wickling: Light the Dark',
    description: 'Karanlık bir ormanda küçük bir mum ol. Alevin hem canın, hem silahın, hem gözün; tek başparmakla oynanan aksiyon oyunu.',
    icon: '/wickling_icon.png',
    technologies: ['Unity', 'Firebase', 'AdMob'],
    links: {
      playStore: play('wickling'),
      privacy: '/wickling-privacy.html',
      notices: '/wickling-notices.html'
    },
    category: 'Game',
    genre: 'Aksiyon'
  },
  {
    id: 'gigawatt',
    title: 'Gigawatt Inc: AI Data Center',
    description: 'Garajdaki tek PC\'yi yapay zekâ veri merkezine büyüt. Kur, soğut, araştır; tamamen çevrimdışı oynanan simülasyon.',
    icon: '/gigawatt_icon.png',
    technologies: ['Unity', 'Unity LevelPlay', 'Unity IAP'],
    links: {
      playStore: play('gigawatt'),
      privacy: '/gigawatt-privacy.html'
    },
    category: 'Game',
    genre: 'Simülasyon'
  },
  {
    id: 'matchinsights',
    title: 'Match Insights for PUBG',
    description: 'Yapay zekâ destekli PUBG maç analizi ve kişiselleştirilmiş koçluk ipuçları.',
    icon: '/matchinsights_icon.png',
    technologies: ['Flutter', 'Firebase', 'Vibe Coding'],
    links: {
      playStore: play('matchinsightsforpubg'),
      privacy: '/matchinsights-privacy.html',
      terms: '/matchinsights-terms.html'
    },
    category: 'App',
    genre: 'Eğlence'
  },
  {
    id: 'shareready',
    title: 'Share Ready: Video Compressor',
    description: 'Videoları kalite kaybı olmadan sıkıştırır; WhatsApp, Telegram ve e-posta için boyutlandırır.',
    icon: '/shareready_icon.png',
    technologies: ['Flutter', 'Riverpod', 'Vibe Coding'],
    links: {
      playStore: play('shareready'),
      privacy: '/shareready-privacy.html'
    },
    category: 'App',
    genre: 'Verimlilik'
  },
  {
    id: 'subzen',
    title: 'SubZen: Subscription Manager',
    description: 'Aboneliklerini tek yerden yönet, ödemeleri hatırla ve aylık giderlerini düşür.',
    icon: '/subzen_icon.png',
    technologies: ['Flutter', 'SQLite', 'Vibe Coding'],
    links: {
      playStore: play('subzen'),
      privacy: '/subzen-privacy.html',
      deleteAccount: '/subzen/delete-account.html'
    },
    category: 'App',
    genre: 'Finans'
  }
];
