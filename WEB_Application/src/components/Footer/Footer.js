import React from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import "../../styles/Footer/footer.css";

// Reusable FooterColumn component
const FooterColumn = ({ title, links }) => (
  <div className="footer_column">
    <h3>{title}</h3>
    <ul>
      {links.map((link, index) => (
        <li key={index}>
          {link.href ? (
            <a href={link.href}>{link.text}</a>
          ) : (
            <span>{link.text}</span>
          )}
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  // Data for each column
  const productLinks = [
    { href: "/", text: "Main Page" },
    { href: "/", text: "Popular" }
  ];

  const roundTableLinks = [
    { href: "/", text: "About Us" },
    { href: "/", text: "Privacy Policy" },
    { href: "/", text: "Terms of Service" },
    { href: "/", text: "Cookies Settings" }
  ];

  const supportLinks = [
    { href: "/", text: "Contact" },
    { href: "/", text: "Career" },
    { href: "/", text: "Forum" },
    { href: "/", text: "Technical support" },
  ];

  const contactLinks = [
    { text: <><FaPhone className="icon" /> 576 512 786</> },
    { text: <><FaEnvelope className="icon" /> <a href="mailto:viktorio.sokolov06@gmail.com" target="_blank" rel="noopener noreferrer">RoundTable@gmail.com</a></> },
    { text: <><FaMapMarkerAlt className="icon" /> <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer">Round Table Shops</a></> }
  ];

  return (
    <footer className="footer">
      <div className="footer_container">
        {/* Reusable FooterColumn components */}
        <FooterColumn title="Products" links={productLinks} />
        <FooterColumn title="Round Table" links={roundTableLinks} />
        <FooterColumn title="Support" links={supportLinks} />

        {/* Contact Column */}
        <div className="footer_column">
          <h3>Contact</h3>
          <ul className="contact_list">
            {contactLinks.map((link, index) => (
              <li key={index}>{link.text}</li>
            ))}
          </ul>

          {/* Social Icons */}
          <div className="social_icons">
            <a href="https://www.facebook.com/profile.php?id=100035450206318&locale=pl_PL" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://www.instagram.com/viktor_de_pelmen/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://www.youtube.com/@WEWE-ce1fe" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
            <a href="https://x.com/mistersaoman" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
