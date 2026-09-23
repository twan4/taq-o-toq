import { useState } from 'react';

function LoginScreen({ onLogin }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!name || !phone || !email) {
      setError('تکایە هەموو زانیارییەکان پڕبکەرەوە'); // "Please fill all fields"
      return;
    }

    // Load existing accounts from our "Database" (LocalStorage)
    const existingUsers = JSON.parse(localStorage.getItem('seenJeemUsers') || '[]');

    // Check if phone or email already exists
    const userExists = existingUsers.find(
      (u) => u.phone === phone || u.email === email
    );

    if (userExists) {
      // If it's the exact same person, log them in!
      if (userExists.name === name) {
        onLogin(userExists);
        return;
      } else {
        // Someone else is using this phone/email!
        setError('ئەم ژمارە مۆبایلە یان ئیمەیڵە پێشتر بەکارهاتووە بۆ هەژمارێکی تر!'); 
        return;
      }
    }

    // Create a new account
    const newUser = { id: Date.now(), name, phone, email, history: [] };
    existingUsers.push(newUser);
    localStorage.setItem('seenJeemUsers', JSON.stringify(existingUsers));
    
    // Log them in
    onLogin(newUser);
  };

  return (
    <div className="container" style={{ maxWidth: '400px', marginTop: '100px' }}>
      <div className="card" style={{ backgroundColor: 'var(--bg-card)', padding: '30px', borderRadius: '15px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', textAlign: 'center' }}>
        <img src="/logo.jpg" alt="Logo" style={{ width: '120px', height: '120px', borderRadius: '50%', marginBottom: '15px', border: '3px solid var(--color-green)' }} />
        <h1 className="title" style={{ fontSize: '40px', color: 'var(--color-red)', marginBottom: '15px' }}>تەق و تۆق</h1>
        <p style={{ marginBottom: '20px', color: 'var(--text-main)' }}>تکایە هەژمار دروست بکە بۆ دەستپێکردن</p>
        
        {error && <div style={{ color: 'white', backgroundColor: 'var(--color-red)', padding: '10px', borderRadius: '5px', marginBottom: '15px' }}>{error}</div>}

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <input 
            type="text" 
            placeholder="ناو (Name)" 
            value={name} 
            onChange={(e) => setName(e.target.value)}
            style={inputStyle}
          />
          <input 
            type="tel" 
            placeholder="ژمارەی مۆبایل (Phone)" 
            value={phone} 
            onChange={(e) => setPhone(e.target.value)}
            style={inputStyle}
          />
          <input 
            type="email" 
            placeholder="ئیمەیڵ (Email)" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
          />
          
          <button type="submit" className="btn-primary" style={{ marginTop: '10px', padding: '15px', fontSize: '18px', fontWeight: 'bold' }}>
            چوونە ژوورەوە
          </button>
        </form>
      </div>
    </div>
  );
}

const inputStyle = {
  padding: '12px',
  borderRadius: '8px',
  border: '1px solid var(--border-color)',
  fontSize: '16px',
  width: '100%',
  backgroundColor: 'var(--bg-main)',
  color: 'var(--text-main)'
};

export default LoginScreen;
