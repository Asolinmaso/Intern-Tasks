

import React from 'react';
import { useNavigate } from 'react-router-dom';

function ActionCards() {
  const navigate = useNavigate();

  const cards = [
    {
      title: 'Fee Structure and Payments',
      btn: 'Pay Now',
      color: 'success',
      path: '/feepayment'
    },
    {
      title: 'Subjects and Electives',
      btn: 'Complete Registration',
      color: 'primary',
      path: '/subjects'
    },
    {
      title: 'Check Result',
      footer: 'Coming Soon..',
      muted: true
    },
    {
      title: 'Documents and Forms',
      footer: 'Available 24/7',
      muted: false,
      path: '/student-doc'
    }
  ];

  return (
    <div className="row g-3">
      {cards.map((card, index) => (
        <div className="col-md-6" key={index}>
          <div
            className="bg-white border p-3 rounded text-center shadow-sm"
            style={{ cursor: card.path ? 'pointer' : 'default' }}
            onClick={() => {
              if (card.path) navigate(card.path);
            }}
          >
            <h6>{card.title}</h6>
            {card.btn ? (
              <button
                className={`btn btn-${card.color} btn-sm mt-2`}
                onClick={(e) => {
                  e.stopPropagation(); 
                  navigate(card.path);
                }}
              >
                {card.btn}
              </button>
            ) : (
              <span className={`d-block mt-2 ${card.muted ? 'text-muted' : 'text-success'}`}>
                {card.footer}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ActionCards;
