import React, { useState } from 'react';

export default function ArelPortfolio() {
  const [hoveredSection, setHoveredSection] = useState(null);
  const [projects, setProjects] = useState([null, null, null, null]);

  const handleImageUpload = (index, event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const newProjects = [...projects];
        newProjects[index] = e.target.result;
        setProjects(newProjects);
      };
      reader.readAsDataURL(file);
    }
  };

  const sections = [
    {
      id: 'about',
      title: 'О нас',
      subtitle: 'Арман и Елдос',
      content: {
        main: 'Мы друзья детства из Павлодара. Учимся в КИТ и работаем над большим проектом для колледжей.',
        details: [
          'Заняли 3 место на Google DevFest 2025',
          'Параллельно занимаемся спортом',
          'Постоянно ищем способы развиваться'
        ]
      }
    },
    {
      id: 'why',
      title: 'Почему мы учим',
      subtitle: 'Наша миссия',
      content: {
        main: 'Объясняем простым языком, чтобы каждый понял и чувствовал себя комфортно.',
        details: [
          'Самим было непросто — знаем все сложности',
          'Делимся реальным опытом',
          'Показываем плюсы и минусы сферы'
        ]
      }
    },
    {
      id: 'services',
      title: 'Что мы делаем',
      subtitle: 'Наши услуги',
      content: {
        main: 'Курсы по веб-дизайну и разработка проектов для образования и стартапов.',
        details: [
          'Курсы для школьников и студентов',
          'Landing Pages и UI/UX',
          'Проекты для колледжей и университетов'
        ]
      }
    },
    {
      id: 'students',
      title: 'Что получат ученики',
      subtitle: 'Результаты обучения',
      content: {
        main: 'После курса вы будете создавать сайты и понимать основы веб-разработки.',
        details: [
          'Создадите свои первые сайты',
          'Поймёте структуру веб-страниц',
          'Узнаете, какие инструменты использовать дальше'
        ]
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 text-slate-900">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        * { font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; }
        
        .glass-effect {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .hover-lift {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .hover-lift:hover {
          transform: translateY(-8px);
        }
        
        .smooth-shadow {
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
        }
        
        .smooth-shadow:hover {
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);
        }
      `}</style>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-cyan-500/5"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        
        <div className="text-center relative z-10">
          <div className="mb-6 inline-block">
            <div className="text-sm font-medium tracking-widest text-slate-500 uppercase mb-2">
              Павлодар, Казахстан
            </div>
          </div>
          
          <h1 className="text-8xl md:text-9xl font-bold tracking-tighter mb-6">
            <span className="gradient-text">ArEl</span>
          </h1>
          
          <p className="text-2xl md:text-3xl font-light text-slate-600 mb-4 tracking-tight">
            Web & UI Design
          </p>
          
          <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-12 font-light">
            Создаём красивые цифровые продукты.<br />
            Учим веб-дизайну школьников и студентов.
          </p>
          
          <div className="flex gap-4 justify-center">
            <a 
              href="https://instagram.com/ar.el.team" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass-effect px-8 py-4 rounded-full text-sm font-medium hover:scale-105 transition-all duration-300 smooth-shadow"
            >
              @ar.el.team
            </a>
          </div>
        </div>
      </section>

      {/* Team Section with Photos */}
      <section className="py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">
              Команда
            </h2>
            <p className="text-xl text-slate-500 font-light">Познакомьтесь с нами</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="group hover-lift smooth-shadow rounded-3xl overflow-hidden bg-white">
              <div className="aspect-[3/4] bg-gradient-to-br from-violet-100 to-violet-50 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-slate-300">
                  <div className="text-center">
                    <svg className="w-24 h-24 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">Фото Армана</span>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-2">Арман</h3>
                <p className="text-slate-600 mb-1">17 лет</p>
                <p className="text-sm text-slate-500 mb-4">Организатор • Спокойный • Сообразительный</p>
                <a 
                  href="https://instagram.com/arrmanelo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-violet-600 hover:text-violet-700 font-medium text-sm transition-colors"
                >
                  @arrmanelo
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="group hover-lift smooth-shadow rounded-3xl overflow-hidden bg-white">
              <div className="aspect-[3/4] bg-gradient-to-br from-cyan-100 to-cyan-50 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-slate-300">
                  <div className="text-center">
                    <svg className="w-24 h-24 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">Фото Елдоса</span>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-2">Елдос</h3>
                <p className="text-slate-600 mb-1">17 лет</p>
                <p className="text-sm text-slate-500 mb-4">Ведущий • Активный • Эмоциональный</p>
                <a 
                  href="https://instagram.com/eldowxl" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-cyan-600 hover:text-cyan-700 font-medium text-sm transition-colors"
                >
                  @eldowxl
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Sections */}
      <section className="py-32 px-8 bg-slate-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">
              Узнайте больше
            </h2>
            <p className="text-xl text-slate-500 font-light">Наведите курсор на карточку</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sections.map((section) => (
              <div
                key={section.id}
                className="relative h-80 rounded-3xl overflow-hidden cursor-pointer hover-lift smooth-shadow bg-white"
                onMouseEnter={() => setHoveredSection(section.id)}
                onMouseLeave={() => setHoveredSection(null)}
              >
                {/* Default State */}
                <div className={`absolute inset-0 flex flex-col justify-center items-center p-8 transition-opacity duration-500 ${hoveredSection === section.id ? 'opacity-0' : 'opacity-100'}`}>
                  <h3 className="text-4xl font-bold tracking-tight mb-3 text-center">
                    {section.title}
                  </h3>
                  <p className="text-slate-500 font-light text-center">{section.subtitle}</p>
                </div>
                
                {/* Hover State */}
                <div className={`absolute inset-0 bg-gradient-to-br ${section.id === 'about' ? 'from-violet-500 to-purple-600' : section.id === 'why' ? 'from-cyan-500 to-blue-600' : section.id === 'services' ? 'from-rose-500 to-orange-600' : 'from-emerald-500 to-teal-600'} p-8 flex flex-col justify-center transition-opacity duration-500 ${hoveredSection === section.id ? 'opacity-100' : 'opacity-0'}`}>
                  <p className="text-white text-lg font-medium mb-6 leading-relaxed">
                    {section.content.main}
                  </p>
                  <ul className="space-y-3">
                    {section.content.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start text-white/90">
                        <svg className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section with Upload */}
      <section className="py-32 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">
              Наши работы
            </h2>
            <p className="text-xl text-slate-500 font-light">Загрузите скриншоты проектов</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="relative aspect-[4/3] rounded-3xl overflow-hidden hover-lift smooth-shadow bg-gradient-to-br from-slate-100 to-slate-50 group cursor-pointer">
                {project ? (
                  <div className="relative w-full h-full">
                    <img src={project} alt={`Project ${index + 1}`} className="w-full h-full object-cover" />
                    <label className="absolute inset-0 bg-black/0 hover:bg-black/50 transition-all duration-300 flex items-center justify-center cursor-pointer">
                      <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">
                        Изменить фото
                      </span>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => handleImageUpload(index, e)}
                      />
                    </label>
                  </div>
                ) : (
                  <label className="w-full h-full flex flex-col items-center justify-center cursor-pointer">
                    <div className="text-6xl font-bold text-slate-200 mb-4">0{index + 1}</div>
                    <div className="glass-effect px-6 py-3 rounded-full group-hover:scale-105 transition-transform duration-300">
                      <span className="text-sm font-medium text-slate-700">Загрузить проект</span>
                    </div>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => handleImageUpload(index, e)}
                    />
                  </label>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-8 bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1vcGFjaXR5PSIuMDUiLz48L2c+PC9zdmc+')] opacity-20"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Готовы начать?
          </h2>
          <p className="text-xl md:text-2xl font-light text-white/80 mb-12 leading-relaxed">
            С нами не страшно начинать — мы объясняем просто,<br />
            учимся вместе и готовы поддержать
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <a 
              href="https://instagram.com/arrmanelo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass-effect text-white px-8 py-4 rounded-full font-medium hover:scale-105 transition-all duration-300"
            >
              @arrmanelo
            </a>
            <a 
              href="https://instagram.com/eldowxl" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass-effect text-white px-8 py-4 rounded-full font-medium hover:scale-105 transition-all duration-300"
            >
              @eldowxl
            </a>
            <a 
              href="https://instagram.com/ar.el.team" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-violet-600 px-8 py-4 rounded-full font-medium hover:scale-105 transition-all duration-300 smooth-shadow"
            >
              @ar.el.team
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 bg-slate-900 text-slate-400">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm font-light">
            © 2024 ArEl Team · Павлодар, Казахстан
          </p>
        </div>
      </footer>
    </div>
  );
}