import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>Johnny Chen's Judgy Cat | ITIS3135</h1>
      <nav>
        <Link to="/">Home</Link>
        |
        <Link to="/introduction">Introduction</Link>
        |
        <Link to="/contract">Contract</Link>
        |
        <Link to="/students">Students</Link>
      </nav>
    </header>
  );
}

export default Header;