export default function Navbar() {
  const linkStyle = { border: '1px black', padding: '5px' };
  return (
    <nav className="main-header-menu">
    <section
      style={{
        display: 'flex',
        fontFamily: 'helvetica',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
      }}
    >
      <div style={linkStyle}>
        <a href="./portfolio">Portfolio</a>
      </div>
      <div style={linkStyle}>
        <a href="./contact">Contact</a>
      </div>
      <div style={linkStyle}>
        <a href="./resume">Resume</a>
      </div>
      <div style={linkStyle}>
        <a href="./about">About</a>
      </div>
    </section>
  </nav>
  );
}
