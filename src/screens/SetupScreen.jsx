import { useState } from 'react';
import { AVAILABLE_CATEGORIES } from '../data/categories';

const AVAILABLE_POWERS = [
  { id: 'double', name: 'دوو هێندە', icon: '✨' },
  { id: 'steal', name: 'دزین', icon: '🎭' },
  { id: 'call', name: 'پەیوەندی', icon: '📞' },
  { id: 'double_answer', name: 'دوو وەڵام', icon: '✌️' },
  { id: 'time', name: 'کاتی زیادە', icon: '⏱️' },
];

function SetupScreen({ onFinishSetup, onBack }) {
  const [selectedCats, setSelectedCats] = useState([]);
  const [gameName, setGameName] = useState('');
  const [team1Name, setTeam1Name] = useState('');
  const [team2Name, setTeam2Name] = useState('');
  const [team1Powers, setTeam1Powers] = useState([]);
  const [team2Powers, setTeam2Powers] = useState([]);

  const toggleCategory = (cat) => {
    if (selectedCats.find(c => c.id === cat.id)) setSelectedCats(selectedCats.filter(c => c.id !== cat.id));
    else if (selectedCats.length < 6) setSelectedCats([...selectedCats, cat]);
  };

  const togglePower = (team, powerId) => {
    if (team === 1) {
      if (team1Powers.includes(powerId)) setTeam1Powers(team1Powers.filter(p => p !== powerId));
      else if (team1Powers.length < 3) setTeam1Powers([...team1Powers, powerId]);
    } else {
      if (team2Powers.includes(powerId)) setTeam2Powers(team2Powers.filter(p => p !== powerId));
      else if (team2Powers.length < 3) setTeam2Powers([...team2Powers, powerId]);
    }
  };

  const handleStart = () => {
    if (selectedCats.length < 6) return alert('تکایە ٦ پۆل هەڵبژێرە');
    if (!gameName || !team1Name || !team2Name) return alert('تکایە ناوەکان پڕبکەرەوە');
    if (team1Powers.length < 3 || team2Powers.length < 3) return alert('هەر تیمێک دەبێت ٣ هاوکاری هەڵبژێرێت');

    onFinishSetup({
      gameName,
      categories: selectedCats,
      team1: { name: team1Name, powers: team1Powers, score: 0 },
      team2: { name: team2Name, powers: team2Powers, score: 0 }
    });
  };

  return (
    <div className="container" style={{ paddingBottom: '100px' }}>
      <button onClick={onBack} style={backBtnStyle}>گەڕانەوە</button>
      <h1 className="title" style={{ fontSize: '35px', marginTop: '30px' }}>دیاریکردنی پۆلەکان</h1>
      
      <div style={{ display: 'flex', gap: '30px', alignItems: 'flex-start', marginTop: '30px' }}>
        <div style={{ flex: 1, backgroundColor: 'var(--bg-card)', padding: '20px', borderRadius: '15px' }}>
          <h2 style={{ marginBottom: '20px', color: 'var(--color-green)' }}>پۆلە بەردەستەکان</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            {Object.entries(
              AVAILABLE_CATEGORIES.reduce((acc, cat) => {
                if (!acc[cat.group]) acc[cat.group] = [];
                acc[cat.group].push(cat);
                return acc;
              }, {})
            ).map(([groupName, cats]) => (
              <div key={groupName} style={{ backgroundColor: '#e2e8f0', borderRadius: '15px', padding: '40px 20px 20px', position: 'relative', marginTop: '20px' }}>
                <div style={{ position: 'absolute', top: '-18px', left: '50%', transform: 'translateX(-50%)', backgroundColor: 'var(--color-red)', color: 'white', padding: '8px 40px', borderRadius: '25px', fontWeight: 'bold', fontSize: '18px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', border: '2px solid white' }}>
                  {groupName}
                </div>
                <div style={gridStyle}>
                  {cats.map(cat => {
                    const isSelected = selectedCats.find(c => c.id === cat.id);
                    return (
                      <div key={cat.id} onClick={() => toggleCategory(cat)} style={{ border: isSelected ? '3px solid var(--color-green)' : '1px solid var(--border-color)', borderRadius: '12px', cursor: 'pointer', backgroundColor: 'white', opacity: (selectedCats.length >= 6 && !isSelected) ? 0.5 : 1, transition: 'all 0.2s', textAlign: 'center', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                        <div style={{ position: 'absolute', top: '8px', right: '8px', backgroundColor: '#3b82f6', color: 'white', borderRadius: '50%', width: '22px', height: '22px', fontSize: '14px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold', zIndex: 5 }}>i</div>
                        
                        <div style={{ height: '120px', backgroundColor: '#f8f9fa', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '60px' }}>
                          {cat.icon}
                        </div>
                        
                        <div style={{ backgroundColor: isSelected ? 'var(--color-green)' : 'var(--color-red)', color: 'white', padding: '12px 5px', fontWeight: 'bold', fontSize: '15px', transition: 'background-color 0.2s' }}>
                          {cat.name}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ width: '300px', backgroundColor: 'var(--bg-card)', padding: '20px', borderRadius: '15px', position: 'sticky', top: '20px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
          <h2 style={{ marginBottom: '15px', color: 'var(--color-red)' }}>هەڵبژێردراوەکان ({selectedCats.length}/6)</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {selectedCats.map(cat => (
              <div key={`sel-${cat.id}`} onClick={() => toggleCategory(cat)} style={{ padding: '15px', backgroundColor: 'var(--color-green)', color: 'white', borderRadius: '8px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontWeight: 'bold', boxShadow: '0 2px 4px rgba(0,0,0,0.2)' }} title="لابردن">
                <span>{cat.icon} {cat.name}</span>
                <span style={{ backgroundColor: 'white', color: 'var(--color-red)', borderRadius: '50%', width: '25px', height: '25px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>✖</span>
              </div>
            ))}
            {selectedCats.length === 0 && <p style={{ color: 'gray', fontSize: '15px', textAlign: 'center', padding: '20px 0' }}>هیچ پۆلێک هەڵنەبژێردراوە</p>}
            {selectedCats.length === 6 && <p style={{ color: 'var(--color-green)', fontSize: '16px', textAlign: 'center', fontWeight: 'bold', marginTop: '10px' }}>٦ پۆل هەڵبژێردرا</p>}
          </div>
        </div>
      </div>

      <h2 style={{ color: 'var(--color-red)', marginTop: '50px', marginBottom: '20px' }}>زانیاری تیمەکان</h2>
      <div style={formContainerStyle}>
        <input placeholder="ناوی یاری (Game Name)" value={gameName} onChange={e => setGameName(e.target.value)} style={gameNameInputStyle} />
        <div style={teamsContainerStyle}>
          <div style={teamBoxStyle}>
            <h3 style={{color: 'var(--text-main)'}}>تیمی یەکەم</h3>
            <input placeholder="ناوی تیم" value={team1Name} onChange={e => setTeam1Name(e.target.value)} style={teamInputStyle} />
            <p style={{ color: 'var(--color-yellow)', marginBottom: '10px', textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}>هەڵبژاردنی ٣ هاوکاری ({team1Powers.length}/3)</p>
            <div style={powersContainerStyle}>
              {AVAILABLE_POWERS.map(p => (
                <button key={p.id} onClick={() => togglePower(1, p.id)} style={getPowerBtnStyle(team1Powers.includes(p.id))} title={p.name}>{p.icon}</button>
              ))}
            </div>
          </div>
          <div style={teamBoxStyle}>
            <h3 style={{color: 'var(--text-main)'}}>تیمی دووەم</h3>
            <input placeholder="ناوی تیم" value={team2Name} onChange={e => setTeam2Name(e.target.value)} style={teamInputStyle} />
            <p style={{ color: 'var(--color-yellow)', marginBottom: '10px', textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}>هەڵبژاردنی ٣ هاوکاری ({team2Powers.length}/3)</p>
            <div style={powersContainerStyle}>
              {AVAILABLE_POWERS.map(p => (
                <button key={p.id} onClick={() => togglePower(2, p.id)} style={getPowerBtnStyle(team2Powers.includes(p.id))} title={p.name}>{p.icon}</button>
              ))}
            </div>
          </div>
        </div>
        <button onClick={handleStart} className="btn-primary" style={startBtnStyle}>دەستپێکردنی یاری</button>
      </div>
    </div>
  );
}

const backBtnStyle = { float: 'right', padding: '10px', cursor: 'pointer', backgroundColor: 'transparent', border: '1px solid var(--border-color)', borderRadius: '5px', color: 'var(--text-main)' };
const gridStyle = { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '20px' };
const placeholderImageStyle = { height: '100px', backgroundColor: '#f0f0f0', borderRadius: '10px', marginBottom: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '50px' };
const formContainerStyle = { backgroundColor: 'var(--bg-card)', padding: '30px', borderRadius: '15px' };
const gameNameInputStyle = { width: '50%', padding: '15px', borderRadius: '8px', border: '1px solid var(--border-color)', fontSize: '18px', display: 'block', margin: '0 auto 30px', backgroundColor: 'var(--bg-main)', color: 'var(--text-main)' };
const teamsContainerStyle = { display: 'flex', gap: '30px', justifyContent: 'center', flexWrap: 'wrap' };
const teamBoxStyle = { flex: '1 1 300px', textAlign: 'center', padding: '20px', border: '1px solid var(--border-color)', borderRadius: '10px' };
const teamInputStyle = { width: '100%', padding: '10px', margin: '15px 0', borderRadius: '8px', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-main)', color: 'var(--text-main)' };
const powersContainerStyle = { display: 'flex', gap: '10px', justifyContent: 'center' };
const startBtnStyle = { marginTop: '40px', padding: '15px 60px', fontSize: '24px', backgroundColor: 'var(--color-red)' };
const getPowerBtnStyle = (isSelected) => ({ padding: '10px', borderRadius: '50%', width: '50px', height: '50px', fontSize: '20px', cursor: 'pointer', backgroundColor: isSelected ? 'var(--color-green)' : 'var(--bg-main)', border: '1px solid var(--border-color)' });

export default SetupScreen;
