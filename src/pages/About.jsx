import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import Reveal from '../components/Reveal'; // 👈 استيراد الأنيميشن

export default function About() {
  const { language } = useLanguage();

  const content = {
    EN: {
      subtitle: "Manifesto • Philosophy",
      title: "Designing travel as an art form of deliberate pacing.",
      desc: "Aura Journeys was founded on a singular premise: that modern travel has grown overly hurried, loud, and formulaic. We exist to restore depth, beauty, and privacy to the art of exploration.",
      imgCaption: "Alpine Solitude • Field Study",
      tenetsTitle: "Guiding Tenets",
      principles: [
        { number: 'I', title: 'Intentional Silence', description: 'We believe true luxury is found in space, quietude, and the absence of noise. Every itinerary is paced to allow for reflection and genuine absorption.' },
        { number: 'II', title: 'Architectural Rhythms', description: 'We design journeys with the balance and structure of architectural masterworks—harmonizing transit, exploration, and absolute rest.' },
        { number: 'III', title: 'Cultural Reverence', description: 'We prioritize deep, respectful engagement with local artisans, historians, and custodians of heritage, ensuring our presence supports local longevity.' }
      ],
      noteLabel: "Editorial Note",
      quote: "\"We do not measure the success of a journey by the number of sights seen, but by the quiet resonance left within the traveler long after returning home.\"",
      board: "The Curatorial Board"
    },
    AR: {
      subtitle: "بيان • فلسفتنا",
      title: "تصميم السفر كفن يعتمد على التمهل المدروس.",
      desc: "تأسست أورا جيرنيز على مبدأ واحد: أن السفر الحديث أصبح متسرعاً، صاخباً، وتقليدياً للغاية. نحن هنا لاستعادة العمق، الجمال، والخصوصية إلى فن الاستكشاف.",
      imgCaption: "عزلة جبال الألب • دراسة ميدانية",
      tenetsTitle: "المبادئ التوجيهية",
      principles: [
        { number: 'I', title: 'الصمت المتعمد', description: 'نؤمن أن الرفاهية الحقيقية تكمن في المساحة، الهدوء، وغياب الضوضاء. يتم تحديد إيقاع كل مسار ليسمح بالتأمل والاستيعاب الحقيقي.' },
        { number: 'II', title: 'إيقاعات معمارية', description: 'نصمم رحلاتنا بتوازن وهيكل الروائع المعمارية—لخلق تناغم بين التنقل، الاستكشاف، والراحة المطلقة.' },
        { number: 'III', title: 'الاحترام الثقافي', description: 'نضع الأولوية للتفاعل العميق والمحترم مع الحرفيين المحليين، المؤرخين، وحراس التراث، لضمان أن وجودنا يدعم الاستدامة المحلية.' }
      ],
      noteLabel: "ملاحظة التحرير",
      quote: "\"نحن لا نقيس نجاح الرحلة بعدد المعالم التي تم رؤيتها، بل بالصدى الهادئ الذي يتبقى داخل المسافر بعد فترة طويلة من عودته إلى دياره.\"",
      board: "المجلس التنظيمي"
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-parchment dark:bg-charcoalDeep text-obsidian dark:text-parchment pt-32 pb-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <Reveal delay={100}>
          <span className="text-xs uppercase tracking-caps text-ashGray font-mono block mb-2">{t.subtitle}</span>
        </Reveal>
        <Reveal delay={300}>
          <h1 className="text-4xl md:text-6xl font-light tracking-editorial mb-6 max-w-3xl leading-tight text-obsidian dark:text-gallery">
            {t.title}
          </h1>
        </Reveal>
        <Reveal delay={500}>
          <p className="text-graphite dark:text-ashGray max-w-2xl font-light leading-relaxed text-lg">
            {t.desc}
          </p>
        </Reveal>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-24">
        <Reveal delay={400}>
          <div className="aspect-[21/9] overflow-hidden bg-graphite/10 dark:bg-graphite/30 relative">
            <img
              src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1600&q=80"
              alt="Philosophy"
              className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-1000"
            />
            <div className={`absolute bottom-6 ${language === 'AR' ? 'right-6' : 'left-6'} bg-parchment/90 dark:bg-charcoalDeep/90 backdrop-blur-sm px-5 py-2.5 text-xs uppercase tracking-editorial font-mono text-obsidian dark:text-parchment`}>
              {t.imgCaption}
            </div>
          </div>
        </Reveal>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-28">
        <div className="border-t border-graphite/10 dark:border-graphite/30 pt-16">
          <Reveal delay={200}>
            <span className="text-xs uppercase tracking-caps text-ashGray font-mono block mb-12">{t.tenetsTitle}</span>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {t.principles.map((principle, index) => (
              <Reveal key={principle.number} delay={index * 200 + 300}>
                <div className="space-y-4">
                  <span className="text-xs font-mono text-ashGray uppercase tracking-caps block">
                    {language === 'AR' ? 'مبدأ' : 'Tenet'} {principle.number}
                  </span>
                  <h3 className="text-2xl font-normal tracking-editorial text-obsidian dark:text-gallery">
                    {principle.title}
                  </h3>
                  <p className="text-graphite dark:text-ashGray text-sm font-light leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <Reveal delay={300}>
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center space-y-8 border-t border-graphite/10 dark:border-graphite/30 pt-20">
          <span className="text-xs uppercase tracking-caps text-ashGray font-mono">{t.noteLabel}</span>
          <blockquote className="text-2xl md:text-3xl font-light tracking-editorial leading-relaxed text-obsidian dark:text-gallery">
            {t.quote}
          </blockquote>
          <div className="pt-4">
            <span className="text-xs uppercase tracking-caps text-obsidian dark:text-parchment font-medium block">{t.board}</span>
            <span className="text-xs font-mono text-ashGray">Aura Journeys</span>
          </div>
        </div>
      </Reveal>
    </div>
  );
}