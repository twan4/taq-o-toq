import { useState, useEffect } from 'react';
import { QUESTION_BANK } from '../data/questions';

function GameBoardScreen({ config, onEndGame }) {
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [currentTurn, setCurrentTurn] = useState(1);
  const [team1Score, setTeam1Score] = useState(config.team1.score);
  const [team2Score, setTeam2Score] = useState(config.team2.score);

  const [team1Powers, setTeam1Powers] = useState([...config.team1.powers]);
  const [team2Powers, setTeam2Powers] = useState([...config.team2.powers]);

  const [activeModal, setActiveModal] = useState(null); 
  const [timerState, setTimerState] = useState('MAIN'); // 'MAIN' (90s), 'STEAL' (20s), 'SCORING'
  const [timeLeft, setTimeLeft] = useState(90);
  const [modalPowersUsed, setModalPowersUsed] = useState([]); 
  const [gameQuestions, setGameQuestions] = useState({});

  useEffect(() => {
    // Generate questions for the 6 selected categories
    const generated = {};
    config.categories.forEach(cat => {
      generated[cat.id] = {};
      const catBank = QUESTION_BANK[cat.id];
      
      [200, 400, 600].forEach(points => {
        // Pick 2 random questions for this point tier if available
        let qForTier = [];
        if (catBank && catBank[points] && catBank[points].length >= 2) {
          // Shuffle and pick 2
          const shuffled = [...catBank[points]].sort(() => 0.5 - Math.random());
          qForTier = [shuffled[0], shuffled[1]];
        } else {
          // Fallback placeholder
          qForTier = [
            { q: `پرسیاری ${points} خاڵی بۆ پۆلی ${cat.name} (تیمی یەکەم)`, a: `وەڵامی ${points} خاڵی` },
            { q: `پرسیاری ${points} خاڵی بۆ پۆلی ${cat.name} (تیمی دووەم)`, a: `وەڵامی ${points} خاڵی` }
          ];
        }
        
        generated[cat.id][`${points}-team1`] = qForTier[0];
        generated[cat.id][`${points}-team2`] = qForTier[1];
      });
    });
    setGameQuestions(generated);
  }, [config.categories]); 

  // Timer Countdown Logic
  useEffect(() => {
    let timer;
    if (activeModal && timerState !== 'SCORING' && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    } else if (timeLeft === 0 && timerState === 'MAIN') {
      // 90s is up! Switch to 20s Steal Window for the OTHER team
      setTimerState('STEAL');
      setTimeLeft(20);
      setActiveModal((prev) => ({ 
        ...prev, 
        answeringTeamId: prev.originalTeamId === 1 ? 2 : 1 
      }));
    } else if (timeLeft === 0 && timerState === 'STEAL') {
      // 20s is up! Force to Scoring (Reveal Answer automatically or wait for host)
      setTimerState('SCORING');
    }
    return () => clearInterval(timer);
  }, [activeModal, timerState, timeLeft]);

  const handleQuestionClick = (categoryId, originalTeamId, points) => {
    const questionId = `${categoryId}-team${originalTeamId}-${points}`;
    if (answeredQuestions.includes(questionId)) return;
    
    setActiveModal({ catId: categoryId, originalTeamId, answeringTeamId: originalTeamId, points, questionId });
    setTimerState('MAIN');
    setTimeLeft(90);
    setModalPowersUsed([]);
  };

  const handleActivatePower = (powerId) => {
    if (modalPowersUsed.includes(powerId)) return;
    setModalPowersUsed((prev) => [...prev, powerId]);
    
    if (powerId === 'time') {
      setTimeLeft((prev) => prev + 30);
    } else if (powerId === 'call') {
      setTimeLeft(60); // Instantly becomes 60s
    }
  };

  const handleRevealAnswer = () => {
    setTimerState('SCORING');
  };

  const handleCloseModal = (winningTeamId) => {
    if (!activeModal) return;
    const { points, questionId } = activeModal;

    // Apply Scoring Logic if someone got it right
    if (winningTeamId !== null) {
      let pointsToAdd = points;
      
      // Double Power (or Double Answer doesn't change points, just gives them 2 guesses)
      if (modalPowersUsed.includes('double')) {
        pointsToAdd *= 2;
      }
      
      if (winningTeamId === 1) {
        setTeam1Score((prev) => prev + pointsToAdd);
        if (modalPowersUsed.includes('steal')) setTeam2Score((prev) => prev - pointsToAdd);
      } else if (winningTeamId === 2) {
        setTeam2Score((prev) => prev + pointsToAdd);
        if (modalPowersUsed.includes('steal')) setTeam1Score((prev) => prev - pointsToAdd);
      }
    }

    // Permanently remove the used powers from the ORIGINAL team's inventory
    const originalTeamId = activeModal.originalTeamId;
    if (originalTeamId === 1) {
      setTeam1Powers((prev) => prev.filter(p => !modalPowersUsed.includes(p)));
    } else {
      setTeam2Powers((prev) => prev.filter(p => !modalPowersUsed.includes(p)));
    }

    setAnsweredQuestions((prev) => [...prev, questionId]);
    setCurrentTurn(currentTurn === 1 ? 2 : 1);
    setActiveModal(null);
  };

  const isGameOver = answeredQuestions.length >= 36;

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--bg-main)', fontFamily: 'system-ui, sans-serif' }}>
      
      {/* GAME OVER MODAL */}
      {isGameOver && (
        <div style={{...modalOverlayStyle, zIndex: 999}}>
          <div style={{...modalContentStyle, textAlign: 'center', padding: '60px'}}>
            <h1 style={{fontSize: '70px', color: 'var(--color-green)', marginBottom: '30px'}}>کۆتایی یاری!</h1>
            
            {team1Score > team2Score ? (
              <>
                <h2 style={{fontSize: '50px', color: 'var(--color-orange)'}}>پیرۆزە {config.team1.name}! 🎉🏆</h2>
                <p style={{fontSize: '40px', color: 'gray', marginTop: '20px'}}>Booooooooo بۆ {config.team2.name} 👎</p>
              </>
            ) : team2Score > team1Score ? (
              <>
                <h2 style={{fontSize: '50px', color: 'var(--color-orange)'}}>پیرۆزە {config.team2.name}! 🎉🏆</h2>
                <p style={{fontSize: '40px', color: 'gray', marginTop: '20px'}}>Booooooooo بۆ {config.team1.name} 👎</p>
              </>
            ) : (
              <h2 style={{fontSize: '50px', color: 'var(--color-yellow)'}}>یەکسان بوون! 🤝</h2>
            )}

            <div style={{display: 'flex', justifyContent: 'center', gap: '80px', marginTop: '60px', padding: '30px', backgroundColor: 'rgba(0,0,0,0.05)', borderRadius: '15px'}}>
              <div style={{fontSize: '40px'}}><b>{config.team1.name}:</b> {team1Score}</div>
              <div style={{fontSize: '40px'}}><b>{config.team2.name}:</b> {team2Score}</div>
            </div>

            <button onClick={onEndGame} className="btn-primary" style={{marginTop: '50px', fontSize: '28px', padding: '20px 60px'}}>
              گەڕانەوە بۆ سەرەتا
            </button>
          </div>
        </div>
      )}

      {/* HEADER */}
      <header style={headerStyle}>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <button onClick={onEndGame} style={headerIconBtnStyle}>🚪 دەرچوون</button>
          <button style={headerIconBtnStyle}>▦ گەڕانەوە</button>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <img src="/logo.jpg" alt="Logo" style={{ width: '60px', height: '60px', borderRadius: '50%', border: '2px solid white', boxShadow: '0 2px 5px rgba(0,0,0,0.2)' }} />
          <div style={gameNameStyle}>{config.gameName || 'تەق و تۆق'}</div>
        </div>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <div style={turnIndicatorStyle}>
            نۆرەی: <strong style={{ color: 'white', marginRight: '5px' }}>{currentTurn === 1 ? config.team1.name : config.team2.name}</strong>
          </div>
          <h1 style={{ fontSize: '32px', color: 'white', textShadow: '2px 2px 4px rgba(0,0,0,0.3)', margin: 0, lineHeight: 1 }}>تەق و<br/>تۆق</h1>
        </div>
      </header>

      {/* MAIN BOARD */}
      <div style={boardContainerStyle}>
        <div style={boardGridStyle}>
          {config.categories.map(cat => (
            <div key={cat.id} style={categoryCardStyle}>
              {/* Team 2 Questions (Left Side visually) */}
              <div style={colStyle}>
                {[200, 400, 600].map(points => {
                  const isAnswered = answeredQuestions.includes(`${cat.id}-team2-${points}`);
                  const isWrongTurn = currentTurn !== 2;
                  return (
                    <button key={`t2-${points}`} onClick={() => !isWrongTurn && handleQuestionClick(cat.id, 2, points)} style={getPillStyle(isAnswered, isWrongTurn, 'left')} disabled={isAnswered || isWrongTurn}>
                      {points}
                    </button>
                  )
                })}
              </div>

              {/* Category Image */}
              <div style={centerImageContainerStyle}>
                <div style={imagePlaceholderStyle}>{cat.icon || 'Wێنە'}</div>
                <div style={categoryNameTagStyle}>{cat.name}</div>
              </div>

              {/* Team 1 Questions (Right Side visually) */}
              <div style={colStyle}>
                {[200, 400, 600].map(points => {
                  const isAnswered = answeredQuestions.includes(`${cat.id}-team1-${points}`);
                  const isWrongTurn = currentTurn !== 1;
                  return (
                    <button key={`t1-${points}`} onClick={() => !isWrongTurn && handleQuestionClick(cat.id, 1, points)} style={getPillStyle(isAnswered, isWrongTurn, 'right')} disabled={isAnswered || isWrongTurn}>
                      {points}
                    </button>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <footer style={footerBarStyle}>
        <div style={teamControlBoxStyle}>
          <div style={teamNameBadgeStyle(currentTurn === 2)}>{config.team2.name}</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginTop: '10px' }}>
            <div style={scoreControlStyle}>
              <button onClick={() => setTeam2Score(team2Score - 100)} style={scoreMathBtnStyle}>-</button>
              <span style={{ fontSize: '28px', fontWeight: 'bold' }}>{team2Score}</span>
              <button onClick={() => setTeam2Score(team2Score + 100)} style={scoreMathBtnStyle}>+</button>
            </div>
            <div style={powersContainerStyle}>
              <span style={{ color: 'var(--text-main)', fontSize: '14px', fontWeight: 'bold' }}>هاوکاری</span>
              {team2Powers.map((p, i) => <button key={`t2-p-${i}`} style={powerBtnStyle} title={p}>{getPowerIcon(p)}</button>)}
            </div>
          </div>
        </div>

        <div style={teamControlBoxStyle}>
          <div style={teamNameBadgeStyle(currentTurn === 1)}>{config.team1.name}</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginTop: '10px' }}>
            <div style={powersContainerStyle}>
              <span style={{ color: 'var(--text-main)', fontSize: '14px', fontWeight: 'bold' }}>هاوکاری</span>
              {team1Powers.map((p, i) => <button key={`t1-p-${i}`} style={powerBtnStyle} title={p}>{getPowerIcon(p)}</button>)}
            </div>
            <div style={scoreControlStyle}>
              <button onClick={() => setTeam1Score(team1Score - 100)} style={scoreMathBtnStyle}>-</button>
              <span style={{ fontSize: '28px', fontWeight: 'bold' }}>{team1Score}</span>
              <button onClick={() => setTeam1Score(team1Score + 100)} style={scoreMathBtnStyle}>+</button>
            </div>
          </div>
        </div>
      </footer>

      {/* QUESTION MODAL */}
      {activeModal && (
        <div style={modalOverlayStyle}>
          <div style={modalContentStyle}>
            
            {/* Header info */}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', color: 'gray' }}>
              <span style={{ fontSize: '20px', fontWeight: 'bold', color: 'var(--color-yellow)' }}>بەهای پرسیار: {activeModal.points} خاڵ</span>
              <span style={{ fontSize: '20px', fontWeight: 'bold' }}>
                {timerState === 'STEAL' ? (
                  <span style={{ color: 'var(--color-red)', animation: 'pulse 1s infinite' }}>دەرفەتی دزین بۆ: {activeModal.answeringTeamId === 1 ? config.team1.name : config.team2.name}</span>
                ) : (
                  <span>تیمی وەڵامدەرەوە: <span style={{ color: 'var(--color-green)' }}>{activeModal.answeringTeamId === 1 ? config.team1.name : config.team2.name}</span></span>
                )}
              </span>
            </div>

            {/* Timer */}
            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
              {timerState !== 'SCORING' ? (
                <div style={timerBoxStyle(timeLeft, timerState)}>
                  {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
                </div>
              ) : (
                <div style={{ fontSize: '60px', fontWeight: 'bold', color: 'gray' }}>کات تەواو</div>
              )}
            </div>

            {/* The Question / Answer Area */}
            <div style={questionTextStyle}>
              {activeModal && gameQuestions[activeModal.catId] && gameQuestions[activeModal.catId][`${activeModal.points}-team${activeModal.originalTeamId}`] ? (
                timerState === 'SCORING' 
                  ? <span style={{ color: 'var(--color-green)' }}>وەڵام: {gameQuestions[activeModal.catId][`${activeModal.points}-team${activeModal.originalTeamId}`].a}</span>
                  : gameQuestions[activeModal.catId][`${activeModal.points}-team${activeModal.originalTeamId}`].q
              ) : "Loading..."}
            </div>

            {/* Reveal Answer Button */}
            {timerState !== 'SCORING' && (
              <div style={{ marginTop: '30px', textAlign: 'center' }}>
                <button onClick={handleRevealAnswer} className="btn-primary" style={{ backgroundColor: 'var(--color-green)', fontSize: '22px', padding: '15px 40px' }}>
                  ئاشکراکردنی وەڵام (Reveal Answer)
                </button>
              </div>
            )}

            {/* Scoring Buttons (Only shown in SCORING state) */}
            {timerState === 'SCORING' && (
              <div style={{ marginTop: '40px', padding: '30px', backgroundColor: 'var(--bg-main)', borderRadius: '15px', border: '2px solid var(--border-color)' }}>
                <h2 style={{ textAlign: 'center', color: 'var(--color-green)', marginBottom: '20px' }}>کێ وەڵامەکەی ڕاست بوو؟</h2>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                  <button onClick={() => handleCloseModal(1)} style={scoreWinnerBtnStyle(1)}>بۆ {config.team1.name}</button>
                  <button onClick={() => handleCloseModal(2)} style={scoreWinnerBtnStyle(2)}>بۆ {config.team2.name}</button>
                  <button onClick={() => handleCloseModal(null)} style={{ ...scoreWinnerBtnStyle(null), backgroundColor: 'gray' }}>هیچ تیمێک</button>
                </div>
              </div>
            )}

            {/* Power Activations */}
            {timerState === 'MAIN' && (
              <div style={{ marginTop: '40px', padding: '20px', backgroundColor: 'var(--bg-main)', borderRadius: '15px', border: '1px solid var(--border-color)' }}>
                <h3 style={{ color: 'var(--color-green)', marginBottom: '15px', textAlign: 'center' }}>بەکارهێنانی هاوکاری</h3>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
                  {(activeModal.originalTeamId === 1 ? team1Powers : team2Powers).map(p => {
                    const isUsed = modalPowersUsed.includes(p);
                    return (
                      <button 
                        key={`modal-power-${p}`} 
                        onClick={() => handleActivatePower(p)}
                        disabled={isUsed}
                        style={{
                          ...powerBtnStyle, width: '70px', height: '70px', fontSize: '30px',
                          backgroundColor: isUsed ? 'var(--color-green)' : 'var(--bg-card)',
                          opacity: isUsed ? 0.7 : 1, cursor: isUsed ? 'not-allowed' : 'pointer',
                          transform: isUsed ? 'scale(0.95)' : 'none', transition: 'all 0.2s'
                        }}
                        title="بەکارهێنان"
                      >
                        {getPowerIcon(p)}
                      </button>
                    )
                  })}
                  {(activeModal.originalTeamId === 1 ? team1Powers : team2Powers).length === 0 && (
                    <p style={{ color: 'gray' }}>هیچ هاوکارییەک نەماوە</p>
                  )}
                </div>
              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
}

function getPowerIcon(id) {
  switch(id) {
    case 'double': return '✨';
    case 'steal': return '🎭';
    case 'call': return '📞';
    case 'double_answer': return '✌️';
    case 'time': return '⏱️';
    default: return '❓';
  }
}

// --- MODAL STYLES ---
const modalOverlayStyle = { position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.85)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 100, backdropFilter: 'blur(5px)' };
const modalContentStyle = { backgroundColor: 'var(--bg-card)', width: '90%', maxWidth: '900px', borderRadius: '25px', padding: '50px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)', maxHeight: '95vh', overflowY: 'auto' };

const timerBoxStyle = (timeLeft, state) => ({
  fontSize: '90px', fontWeight: '900',
  color: state === 'STEAL' ? 'var(--color-red)' : (timeLeft <= 10 ? 'var(--color-red)' : 'var(--text-main)'),
  fontFamily: 'monospace', lineHeight: '1',
  textShadow: state === 'STEAL' ? '0 0 20px rgba(235, 32, 39, 0.5)' : 'none',
  transition: 'color 0.3s'
});

const questionTextStyle = { fontSize: '32px', lineHeight: '1.6', textAlign: 'center', backgroundColor: 'var(--bg-main)', padding: '40px', borderRadius: '15px', borderLeft: '5px solid var(--color-yellow)', borderRight: '5px solid var(--color-yellow)', fontWeight: 'bold', color: 'var(--text-main)' };
const scoreWinnerBtnStyle = (teamId) => ({ padding: '20px 40px', borderRadius: '15px', border: 'none', backgroundColor: 'var(--color-green)', color: 'white', fontSize: '20px', fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 6px 15px rgba(0,0,0,0.1)', transition: 'transform 0.1s' });

// --- PREVIOUS STYLES ---
const headerStyle = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 40px', background: 'linear-gradient(to right, #2a8b46, #f7d002, #eb2027)', color: 'white', boxShadow: '0 4px 15px rgba(0,0,0,0.2)', zIndex: 10 };
const headerIconBtnStyle = { background: 'transparent', border: 'none', color: 'white', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' };
const gameNameStyle = { fontSize: '28px', fontWeight: 'bold', border: '2px solid rgba(255,255,255,0.4)', padding: '5px 30px', borderRadius: '25px', backgroundColor: 'rgba(0,0,0,0.1)' };
const turnIndicatorStyle = { backgroundColor: 'rgba(0,0,0,0.3)', padding: '8px 25px', borderRadius: '25px', fontSize: '18px', color: 'rgba(255,255,255,0.8)' };
const boardContainerStyle = { flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '40px' };
const boardGridStyle = { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: 'repeat(2, 1fr)', gap: '30px', width: '100%', maxWidth: '1400px' };
const categoryCardStyle = { display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' };
const colStyle = { display: 'flex', flexDirection: 'column', gap: '8px' };
const getPillStyle = (isAnswered, isWrongTurn, side) => ({ width: '120px', height: '65px', borderRadius: side === 'right' ? '35px 0 0 35px' : '0 35px 35px 0', border: 'none', fontSize: '26px', fontWeight: 'bold', cursor: (isAnswered || isWrongTurn) ? 'not-allowed' : 'pointer', backgroundColor: isAnswered ? 'rgba(0,0,0,0.05)' : 'var(--bg-card)', color: isAnswered ? 'rgba(0,0,0,0.2)' : 'var(--color-red)', boxShadow: isAnswered ? 'none' : '0 4px 6px rgba(0,0,0,0.1)', opacity: (isWrongTurn && !isAnswered) ? 0.3 : 1, transition: 'all 0.2s', });
const centerImageContainerStyle = { display: 'flex', flexDirection: 'column', alignItems: 'center', width: '200px' };
const imagePlaceholderStyle = { width: '200px', height: '220px', backgroundColor: '#f3f4f6', borderTopLeftRadius: '15px', borderTopRightRadius: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#6b7280', fontSize: '100px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' };
const categoryNameTagStyle = { width: '100%', backgroundColor: 'var(--color-green)', color: 'white', textAlign: 'center', padding: '12px 0', fontWeight: 'bold', borderBottomLeftRadius: '15px', borderBottomRightRadius: '15px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', fontSize: '18px' };
const footerBarStyle = { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', padding: '20px 40px', backgroundColor: 'var(--bg-card)', borderTop: '2px solid var(--border-color)', boxShadow: '0 -4px 15px rgba(0,0,0,0.05)', zIndex: 10 };
const teamControlBoxStyle = { display: 'flex', flexDirection: 'column', alignItems: 'center' };
const teamNameBadgeStyle = (isMyTurn) => ({ backgroundColor: isMyTurn ? 'var(--color-green)' : 'var(--color-red)', color: 'white', padding: '8px 60px', borderRadius: '25px', fontWeight: 'bold', fontSize: '20px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', transition: 'background-color 0.3s' });
const scoreControlStyle = { display: 'flex', alignItems: 'center', gap: '15px', color: 'var(--text-main)' };
const scoreMathBtnStyle = { width: '35px', height: '35px', borderRadius: '50%', backgroundColor: 'var(--color-red)', color: 'white', border: 'none', fontSize: '20px', fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 2px 4px rgba(0,0,0,0.2)' };
const powersContainerStyle = { display: 'flex', alignItems: 'center', gap: '10px', marginLeft: '30px', marginRight: '30px' };
const powerBtnStyle = { width: '45px', height: '45px', borderRadius: '50%', border: '2px solid var(--border-color)', backgroundColor: 'transparent', cursor: 'pointer', fontSize: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'var(--text-main)', boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.05)' };

export default GameBoardScreen;
