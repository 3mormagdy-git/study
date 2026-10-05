import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function Services() {
  const { language } = useLanguage();

  // قاموس الترجمة والبيانات الخاصة بصفحة الخدمات
  const content = {
    EN: {
      subtitle: "Capabilities • Expertise",
      title: "Our Services & Methodology",
      desc: "We approach travel design as an architectural discipline—balancing structure, space, and timing to create journeys of enduring resonance.",
      services: [
        {
          number: '01',
          title: 'Bespoke Itinerary Architecture',
          description: 'Completely tailored travel design built around your precise rhythms, preferences, and passions. From private access to historical sites to secluded sanctuaries.',
          details: ['Deep discovery consultation', 'Multi-destination route curation', 'Exclusive private access arrangements'],
        },
        {
          number: '02',
          title: 'Sanctuary & Hotel Procurements',
          description: 'Access to the world’s most private boutique hotels, architectural villas, and premium resorts that prioritize discretion, silence, and profound aesthetic beauty.',
          details: ['Preferred architectural stays', 'Private villa buyouts', 'Complimentary curated amenities'],
        },
        {
          number: '03',
          title: 'Private Transit & Logistics',
          description: 'Seamless, luxurious, and secure transportation across all your destinations. We handle all logistical intricacies behind the scenes.',
          details: ['Private chauffeur services', 'First-class train & flight bookings', 'Secure airport & city transfers'],
        },
        {
          number: '04',
          title: 'Expert Guides & Local Leadership',
          description: 'Accompanied by seasoned local experts, historians, and naturalists who provide deep cultural context and ensure unhurried exploration.',
          details: ['Handpicked local guides & scholars', 'Multilingual support', 'Discreet, high-touch assistance'],
        }
      ],
      included: "Included Elements",
      ctaSub: "Begin Your Consultation",
      ctaTitle: "Ready to craft your next expedition?",
      ctaDesc: "Initiate a private dialogue with our travel architects.",
      ctaBtn: "Start an Inquiry"
    },
    AR: {
      subtitle: "إمكانياتنا • خبراتنا",
      title: "خدماتنا ومنهجيتنا",
      desc: "نحن نتعامل مع تصميم السفر كانضباط معماري—نوازن بين الهيكل والمساحة والتوقيت لخلق رحلات ذات صدى دائم.",
      services: [
        {
          number: '01',
          title: 'تصميم مسارات مخصصة',
          description: 'تصميم سفر مصمم بالكامل حول إيقاعاتك وتفضيلاتك الدقيقة. من الوصول الخاص للمواقع التاريخية إلى أماكن الإقامة المنعزلة.',
          details: ['استشارة اكتشاف عميقة', 'تنظيم مسارات متعددة الوجهات', 'ترتيبات وصول خاص وحصري'],
        },
        {
          number: '02',
          title: 'حجوزات الفنادق والمنتجعات',
          description: 'وصول إلى أكثر الفنادق البوتيك خصوصية، والفيلات المعمارية، والمنتجعات الفاخرة التي تعطي الأولوية للهدوء والجمال العميق.',
          details: ['إقامات معمارية مفضلة', 'استئجار فيلات خاصة بالكامل', 'وسائل راحة مجانية منتقاة'],
        },
        {
          number: '03',
          title: 'التنقلات واللوجستيات الخاصة',
          description: 'تنقلات سلسة وفاخرة وآمنة عبر جميع وجهاتك. نحن نتعامل مع جميع التعقيدات اللوجستية خلف الكواليس لتجربة خالية من التوتر.',
          details: ['خدمات سائق خاص', 'حجوزات قطارات وطيران درجة أولى', 'انتقالات آمنة من وإلى المطار'],
        },
        {
          number: '04',
          title: 'مرشدون خبراء وقيادة محلية',
          description: 'برفقة خبراء محليين متمرسين ومؤرخين وعلماء طبيعة يقدمون سياقاً ثقافياً عميقاً ويضمنون استكشافاً متأنياً ومثرياً.',
          details: ['مرشدون وعلماء محليون منتقون بعناية', 'دعم متعدد اللغات', 'مساعدة سرية وعالية المستوى'],
        }
      ],
      included: "العناصر المتضمنة",
      ctaSub: "ابدأ استشارتك",
      ctaTitle: "هل أنت مستعد لتصميم رحلتك القادمة؟",
      ctaDesc: "ابدأ حواراً خاصاً مع مهندسي رحلاتنا.",
      ctaBtn: "ابدأ استعلاماً"
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-parchment dark:bg-charcoalDeep text-obsidian dark:text-parchment pt-32 pb-24 transition-colors duration-300">
      
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <span className="text-xs uppercase tracking-caps text-ashGray font-mono block mb-2">
          {t.subtitle}
        </span>
        <h1 className="text-4xl md:text-5xl font-light tracking-editorial mb-6 text-obsidian dark:text-gallery">
          {t.title}
        </h1>
        <p className="text-graphite dark:text-ashGray max-w-2xl font-light leading-relaxed">
          {t.desc}
        </p>
      </div>

      {/* Services List Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        {t.services.map((service, index) => (
          <div 
            key={service.number} 
            className={`grid grid-cols-1 md:grid-cols-12 gap-8 items-start pt-12 ${
              index !== 0 ? 'border-t border-graphite/10 dark:border-graphite/30' : ''
            }`}
          >
            <div className="md:col-span-2">
              <span className="text-xs font-mono text-ashGray uppercase tracking-caps">
                {language === 'AR' ? 'خدمة' : 'Service'} {service.number}
              </span>
            </div>
            
            <div className="md:col-span-5 space-y-3">
              <h3 className="text-2xl font-normal tracking-editorial text-obsidian dark:text-gallery">
                {service.title}
              </h3>
              <p className="text-graphite dark:text-ashGray text-sm font-light leading-relaxed">
                {service.description}
              </p>
            </div>

            <div className="md:col-span-5 bg-gallery dark:bg-obsidian/40 border border-graphite/10 dark:border-graphite/30 p-6 md:p-8 space-y-4 transition-colors">
              <span className="text-xs uppercase tracking-caps text-obsidian dark:text-parchment font-mono block">
                {t.included}
              </span>
              <ul className="space-y-2">
                {service.details.map((detail, idx) => (
                  <li key={idx} className="text-xs text-graphite dark:text-ashGray font-light flex items-center">
                    <span className={`w-1.5 h-1.5 bg-obsidian dark:bg-parchment rounded-full ${language === 'AR' ? 'ml-3' : 'mr-3'}`}></span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA Banner */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-28">
        <div className="bg-obsidian dark:bg-gallery text-parchment dark:text-obsidian p-12 md:p-16 flex flex-col md:flex-row justify-between items-start md:items-center transition-colors duration-300">
          <div className="space-y-3 max-w-xl mb-8 md:mb-0">
            <span className="text-xs uppercase tracking-caps text-ashGray dark:text-graphite font-mono">{t.ctaSub}</span>
            <h2 className="text-3xl font-light tracking-editorial text-gallery dark:text-obsidian">{t.ctaTitle}</h2>
            <p className="text-ashGray dark:text-graphite text-sm font-light">{t.ctaDesc}</p>
          </div>
          <Link
            to="/contact"
            className="px-8 py-4 bg-parchment dark:bg-obsidian text-obsidian dark:text-gallery text-xs uppercase tracking-caps hover:bg-gallery dark:hover:bg-graphite transition-all duration-300"
          >
            {t.ctaBtn}
          </Link>
        </div>
      </div>
    </div>
  );
}