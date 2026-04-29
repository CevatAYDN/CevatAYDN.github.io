const { jsPDF } = require('jspdf');
const fs = require('fs');
const path = require('path');

const data = {
  name: 'CEVAT AYDIN',
  role: 'Oyun Gelistirici (Unity Uzmani) & Yazilim Gelistirici',
  contact: {
    email: 'cvtaydn53@gmail.com',
    location: 'Istanbul, Turkiye',
    linkedin: 'linkedin.com/in/cevat-aydin-39a821a7',
    website: 'cevataydn.github.io'
  },
  summary: 'Unity ve C# ile oyun gelistirme sureclerinde uzmanlasmis, karmasik oyun mekanikleri ve performans optimizasyonu konularinda derin deneyim sahibi yazilim gelistirici. Mobil uygulama gelistirme sureclerinde Flutter teknolojisini "Vibe Coding" yaklasimlariyla harmanlayarak hizli ve etkili cozumler uretmektedir.',
  experience: [
    {
      company: 'Gameflex',
      role: 'Game Developer (Unity Uzmani)',
      period: 'Agustos 2022 – Gunumuz',
      details: [
        'Unity ile ileri seviye oyun mekanikleri ve sistem mimarisi kurgulanmasi.',
        'Mobil platformlar icin performans ve GPU optimizasyonu calismalari.',
        'Flutter tabanli projelerde Vibe Coding metodolojisiyle hizli prototipleme ve gelistirme.'
      ]
    },
    {
      company: 'Gameguru',
      role: 'Game Developer',
      period: 'Ocak 2021 – Temmuz 2022',
      details: [
        'Unity tabanli projelerde oyun ici sistemlerin (AI, fizik, UI) gelistirilmesi.',
        'Kod kalitesi ve surdurulebilirlik odakli refactoring sureclerinin yonetimi.'
      ]
    },
    {
      company: 'Gameflex',
      role: 'Game Developer',
      period: 'Eylul 2019 – Ocak 2021'
    },
    {
      company: 'YCP Bilgi Teknolojileri',
      role: 'Game Developer',
      period: 'Ocak 2018 – Eylul 2019'
    }
  ],
  education: [
    {
      school: 'Anadolu Universitesi',
      degree: 'Yonetim Bilisim Sistemleri (Lisans)',
      period: '2018 – 2022'
    },
    {
      school: 'Afyon Kocatepe Universitesi',
      degree: 'Malzeme Bilimi ve Muhendisligi (Lisans)',
      period: '2011 – 2015'
    }
  ],
  skills: {
    'UZMANLIK': 'Unity, C#, Oyun Mekanikleri, Performans Optimizasyonu',
    'YAZILIM': 'Flutter (Vibe Coding), Dart, JavaScript, SQL, Firebase',
    'ARACLAR': 'Git, SQLite, Riverpod, REST APIs, Agile'
  }
};

const doc = new jsPDF();
const margin = 20;
const pageWidth = doc.internal.pageSize.getWidth();
let y = 30;

// Colors
const primaryColor = [15, 23, 42];    // Slate 900
const accentColor = [124, 58, 237];   // Violet 600
const secondaryColor = [100, 116, 139]; // Slate 500

const fixTR = (text) => {
    if (!text) return "";
    return text
        .replace(/ğ/g, "g").replace(/Ğ/g, "G")
        .replace(/ü/g, "u").replace(/Ü/g, "U")
        .replace(/ş/g, "s").replace(/Ş/g, "S")
        .replace(/ı/g, "i").replace(/İ/g, "I")
        .replace(/ö/g, "o").replace(/Ö/g, "O")
        .replace(/ç/g, "c").replace(/Ç/g, "C");
};

// --- Header ---
doc.setFillColor(...primaryColor);
doc.rect(margin, y - 10, 2, 20, 'F'); // Vertical accent bar

doc.setTextColor(...primaryColor);
doc.setFont('helvetica', 'bold');
doc.setFontSize(28);
doc.text(fixTR(data.name), margin + 6, y);
y += 8;

doc.setFontSize(11);
doc.setTextColor(...accentColor);
doc.text(fixTR(data.role).toUpperCase(), margin + 6, y);
y += 12;

doc.setFontSize(9);
doc.setTextColor(...secondaryColor);
doc.setFont('helvetica', 'normal');
doc.text(`${fixTR(data.contact.email)}  •  ${fixTR(data.contact.location)}  •  ${fixTR(data.contact.linkedin)}`, margin, y);
y += 6;
doc.setDrawColor(240, 240, 240);
doc.line(margin, y, pageWidth - margin, y);
y += 15;

// --- Section Helper ---
const drawSectionHeader = (title) => {
  doc.setFillColor(248, 250, 252);
  doc.rect(margin, y - 5, pageWidth - (margin * 2), 8, 'F');
  
  doc.setFillColor(...accentColor);
  doc.rect(margin, y - 5, 1.5, 8, 'F');

  doc.setFontSize(10);
  doc.setTextColor(...accentColor);
  doc.setFont('helvetica', 'bold');
  doc.text(fixTR(title).toUpperCase(), margin + 4, y + 1);
  y += 12;
};

// --- Summary ---
drawSectionHeader('Profesyonel Ozet');
doc.setFontSize(10);
doc.setFont('helvetica', 'normal');
doc.setTextColor(51, 65, 85);
const summaryLines = doc.splitTextToSize(fixTR(data.summary), pageWidth - (margin * 2));
doc.text(summaryLines, margin, y);
y += (summaryLines.length * 6) + 10;

// --- Experience ---
drawSectionHeader('Is Deneyimi');

data.experience.forEach(exp => {
  doc.setFontSize(11);
  doc.setTextColor(...primaryColor);
  doc.setFont('helvetica', 'bold');
  doc.text(fixTR(exp.role), margin, y);
  
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(...secondaryColor);
  doc.text(fixTR(exp.period), pageWidth - margin, y, { align: 'right' });
  y += 5;
  
  doc.setFontSize(9);
  doc.setTextColor(...accentColor);
  doc.setFont('helvetica', 'bold');
  doc.text(fixTR(exp.company), margin, y);
  y += 6;

  if (exp.details) {
    doc.setFontSize(9);
    doc.setTextColor(71, 85, 105);
    doc.setFont('helvetica', 'normal');
    exp.details.forEach(detail => {
      doc.setFillColor(...accentColor);
      doc.circle(margin + 2, y - 1, 0.4, 'F');
      const detailLines = doc.splitTextToSize(fixTR(detail), pageWidth - margin - 30);
      doc.text(detailLines, margin + 6, y);
      y += (detailLines.length * 5);
    });
  }
  y += 6;
});

// --- Education ---
y += 4;
drawSectionHeader('Egitim');

data.education.forEach(edu => {
  doc.setFontSize(10);
  doc.setTextColor(...primaryColor);
  doc.setFont('helvetica', 'bold');
  doc.text(fixTR(edu.school), margin, y);
  
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(...secondaryColor);
  doc.text(fixTR(edu.period), pageWidth - margin, y, { align: 'right' });
  y += 5;
  
  doc.setFontSize(9);
  doc.setTextColor(71, 85, 105);
  doc.text(fixTR(edu.degree), margin, y);
  y += 10;
});

// --- Skills ---
y += 4;
drawSectionHeader('Teknik Yetenekler');

doc.setFontSize(9);
Object.entries(data.skills).forEach(([category, skills]) => {
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...primaryColor);
  doc.text(`${fixTR(category)}: `, margin, y);
  const catWidth = doc.getTextWidth(`${fixTR(category)}: `);
  
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(71, 85, 105);
  doc.text(fixTR(skills), margin + catWidth, y);
  y += 6;
});

const outputPath = path.join(__dirname, '..', 'public', 'Cevat_Aydin_CV.pdf');
const pdfData = doc.output('arraybuffer');
fs.writeFileSync(outputPath, Buffer.from(pdfData));

console.log(`10/10 Premium ATS CV guncellendi: ${outputPath}`);
