import React, { useState } from 'react';
import './DAO.css';

const DAO: React.FC = () => {
  const [proposal, setProposal] = useState('');
  const [proposals, setProposals] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (proposal.trim()) {
      setProposals([...proposals, proposal]);
      setProposal('');
    }
  };

  return (
    <div className="dao-container">
      <h2 className="dao-title">🛡️ DAO Governance Terminal</h2>
      <form onSubmit={handleSubmit} className="dao-form">
        <input
          type="text"
          value={proposal}
          onChange={(e) => setProposal(e.target.value)}
          placeholder="Enter new proposal..."
          className="dao-input"
        />
        <button type="submit" className="dao-button">Submit</button>
      </form>
      <ul className="dao-list">
        {proposals.map((text, index) => (
          <li key={index} className="dao-item">📄 {text}</li>
        ))}
      </ul>
    </div>
  );
};

export default DAO;