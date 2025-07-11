import React from 'react';

const socialLinks = [
  { name: 'WhatsApp', icon: 'fab fa-whatsapp', url: 'https://wa.me/212600000000' },
  { name: 'Facebook', icon: 'fab fa-facebook', url: 'https://facebook.com' },
  { name: 'Twitter', icon: 'fab fa-twitter', url: 'https://twitter.com' },
  { name: 'LinkedIn', icon: 'fab fa-linkedin', url: 'https://linkedin.com' },
  { name: 'YouTube', icon: 'fab fa-youtube', url: 'https://youtube.com' },
];

const SocialTable = () => {
  return (
    <div style={{marginTop:"140px",marginLeft:"240px"}}>
        <h2 className='fw-bold mb-5' id='social'>Contact</h2>

          {socialLinks.map((item) => (
              <button className={`${item.icon} fa-3x bg-white mt-3`} style={{ color: getColor(item.name),border:"none", }}/>
          ))}
    
    </div>
  );
};
const getColor = (platform) => {
  switch (platform) {
    case 'WhatsApp':
      return '#25D366';
    case 'Facebook':
      return '#1877F2';
    case 'Twitter':
      return '#1DA1F2';
    case 'LinkedIn':
      return '#0077B5';
    case 'YouTube':
      return '#FF0000';
    default:
      return '#000';
  }
};

export default SocialTable;
