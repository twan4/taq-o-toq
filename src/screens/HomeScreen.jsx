import { useState, useEffect } from 'react';

function HomeScreen({ user, onStartGame, onLogout }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (newMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  };

  return (
    <div className="container" style={{ paddingBottom: '50px' }}>
      <nav style={navContainerStyle}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <div style={avatarStyle}>{user.name.charAt(0)}</div>
          <span style={{ fontWeight: 'bold', fontSize: '18px' }}>{user.name}</span>
        </div>
        <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
          <button onClick={toggleDarkMode} style={navBtnStyle}>
            {isDarkMode ? '🌞 ڕۆژ' : '🌙 شەو'}
          </button>
          <button onClick={onLogout} style={{ ...navBtnStyle, color: 'var(--color-red)', borderColor: 'var(--color-red)' }}>
            چوونە دەرەوە
          </button>
        </div>
      </nav>

      <div style={{ marginTop: '80px', marginBottom: '100px', textAlign: 'center' }}>
        <img src="/logo.jpg" alt="Taq o Toq Logo" style={{ width: '250px', height: '250px', borderRadius: '50%', boxShadow: '0 10px 20px rgba(0,0,0,0.2)', marginBottom: '20px', border: '5px solid white' }} />
        <h1 style={{ fontSize: '90px', color: 'var(--color-red)', marginBottom: '30px', textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}>
          تەق و تۆق
        </h1>
        <button onClick={onStartGame} className="btn-primary" style={{ fontSize: '26px', padding: '15px 50px', backgroundColor: 'var(--color-green)', boxShadow: '0 4px 15px rgba(42, 139, 70, 0.4)' }}>
          دروستکردنی یاری نوێ (Create Game)
        </button>
      </div>

      <div style={sectionStyle}>
        <h2 style={sectionTitleStyle}>دەربارەی یارییەکە</h2>
        <p style={paragraphStyle}>
          تەق و تۆق یارییەکی پێشبڕکێی زانیارییە لە نێوان دوو تیمدا. هەریەک لە تیمەکان ٣ پۆل (Category) هەڵدەبژێرن و کێبڕکێ دەکەن لەسەر وەڵامدانەوەی پرسیارەکان. پرسیارەکان لە ئاسانەوە بۆ قورس پۆلێن کراون (٢٠٠، ٤٠٠، ٦٠٠ خاڵ). ئەو تیمەی زۆرترین خاڵ کۆبکاتەوە لە کۆتاییدا براوە دەبێت!
        </p>
      </div>

      <div style={sectionStyle}>
        <h2 style={sectionTitleStyle}>٥ هاوکارییەکان (The 5 Powers)</h2>
        <div style={powersGridStyle}>
          <PowerCard title="دوو هێندە (Double)" desc="ئەگەر وەڵامەکەت ڕاست بێت، دوو هێندەی خاڵەکان بەدەست دەهێنیت." />
          <PowerCard title="دزینی خاڵ (Steal)" desc="ئەگەر ڕاست بێت خاڵەکە دەبەیت، و هەمان بڕ لە تیمی بەرامبەر کەم دەبێتەوە." />
          <PowerCard title="پەیوەندی بە هاوڕێ (Call)" desc="کاتەکەت ڕاستەوخۆ دەبێت بە ٦٠ چرکە بۆ پەیوەندیکردن بە هاوڕێیەکەوە." />
          <PowerCard title="دوو وەڵام (Double Answer)" desc="دەتوانیت دوو جار وەڵام بدەیتەوە، ئەگەر یەکێکیان ڕاست بێت خاڵەکە بەدەست دەهێنیت." />
          <PowerCard title="کاتی زیادە (Extra Time)" desc="٣٠ چرکە کاتی زیادەت پێدەدرێت بۆ ئەوەی زیاتر بیربکەیتەوە." />
        </div>
      </div>

      <footer style={footerStyle}>
        <h3 style={{ color: 'var(--color-red)', marginBottom: '10px', fontSize: '24px' }}>تەق و تۆق</h3>

        <p style={{ marginTop: '10px', fontSize: '14px', color: 'gray' }}>© 2024 هەموو مافێک پارێزراوە</p>
      </footer>
    </div>
  );
}

const navContainerStyle = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 20px', backgroundColor: 'var(--bg-card)', borderRadius: '15px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' };
const avatarStyle = { width: '45px', height: '45px', backgroundColor: 'var(--color-yellow)', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', fontWeight: 'bold', fontSize: '20px' };
const navBtnStyle = { padding: '8px 15px', borderRadius: '8px', border: '2px solid var(--border-color)', backgroundColor: 'transparent', color: 'var(--text-main)', cursor: 'pointer', fontWeight: 'bold', fontSize: '15px', transition: 'all 0.3s' };
const sectionStyle = { backgroundColor: 'var(--bg-card)', padding: '40px', borderRadius: '20px', marginBottom: '40px', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' };
const sectionTitleStyle = { color: 'var(--color-red)', marginBottom: '20px', fontSize: '28px', borderBottom: '2px solid var(--color-green)', paddingBottom: '10px', display: 'inline-block' };
const paragraphStyle = { fontSize: '18px', lineHeight: '1.8', color: 'var(--text-main)' };
const powersGridStyle = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginTop: '30px' };
const footerStyle = { marginTop: '80px', padding: '30px', borderTop: '2px solid var(--border-color)', textAlign: 'center', color: 'var(--text-main)' };

function PowerCard({ title, desc }) {
  return (
    <div style={{ padding: '20px', border: '2px solid var(--color-yellow)', borderRadius: '15px', backgroundColor: 'var(--bg-main)' }}>
      <h3 style={{ color: 'var(--color-green)', marginBottom: '10px' }}>{title}</h3>
      <p style={{ fontSize: '15px', lineHeight: '1.6' }}>{desc}</p>
    </div>
  );
}

export default HomeScreen;
