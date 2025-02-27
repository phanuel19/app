
const Footer = () => {
  return (
    <footer style={footerStyle}>
      
      <div style={sectionStyle}>
        <div style={columnStyle}>
          <h4 style={headingStyle}>Liens Utiles</h4>
          <ul style={listStyle}>
            <li><a href="#about" style={linkStyle}>À propos</a></li>
            <li><a href="#services" style={linkStyle}>Services</a></li>
            <li><a href="#contact" style={linkStyle}>Contact</a></li>
            <li><a href="#faq" style={linkStyle}>FAQ</a></li>
          </ul>
        </div>

        {/* Section des réseaux sociaux */}
        <div style={columnStyle}>
          <h4 style={headingStyle}>Suivez-nous</h4>
          <ul style={listStyle}>
            <li><a href="https://facebook.com" target="_blank" rel="noreferrer" style={linkStyle}>Facebook</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noreferrer" style={linkStyle}>Twitter</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noreferrer" style={linkStyle}>Instagram</a></li>
            <li><a href="https://github.com" target="_blank" rel="noreferrer" style={linkStyle}>GitHub</a></li>
          </ul>
        </div>

        {/* Section des contacts */}
        <div style={columnStyle}>
          <h4 style={headingStyle}>Contactez-nous</h4>
          <p>Email : contact@nova-projet.com</p>
          <p>Téléphone : +33 1 23 45 67 89</p>
          <p>Adresse : 123 Rue Exemple, Paris, France</p>
        </div>
      </div>

      {/* Copyright */}
      <div style={copyrightStyle}>
        © {new Date().getFullYear()} Nova Projet. Tous droits réservés.
      </div>
    </footer>
  );
};

// Styles CSS en ligne
const footerStyle = {
  backgroundColor: "#333",
  color: "#fff",
  padding: "20px",
  marginTop: "5%",
  textAlign: "center",
  width:"100%"
};

const sectionStyle = {
  display: "flex",
  justifyContent: "space-around",
  flexWrap: "wrap",
};

const columnStyle = {
  margin: "10px",
  minWidth: "200px",
};

const headingStyle = {
  fontSize: "18px",
  marginBottom: "10px",
};

const listStyle = {
  listStyleType: "none",
  padding: 0,
};

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
};

const copyrightStyle = {
  marginTop: "20px",
  fontSize: "14px",
};

export default Footer;
