import React from 'react';

const WhatsAppChat = () => {
  const phoneNumber = '8801521481618'; // Replace with your number
  const message = 'Hello, I have a question!'; // Optional preset message
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: 'rgb(9 30 105)',
        color: '#fff',
        borderRadius: '50%',
        fontSize: '24px',
        boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
        zIndex: 1000,
        textAlign: 'center',
        textDecoration: 'none',
        width:'50px',
        height: '50px',
        display:"flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      💬
    </a>
  );
};

export default WhatsAppChat;
