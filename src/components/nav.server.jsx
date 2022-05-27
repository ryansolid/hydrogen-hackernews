import { Link } from '@shopify/hydrogen';

function Nav() {
  return (
    <header className="header">
      <nav className="inner">
        <Link to="/">
          <strong>HN</strong>
        </Link>
        <Link to="/new">
          <strong>New</strong>
        </Link>
        <Link to="/show">
          <strong>Show</strong>
        </Link>
        <Link to="/ask">
          <strong>Ask</strong>
        </Link>
        <Link to="/job">
          <strong>Jobs</strong>
        </Link>
        <a
          className="github"
          href="https://hydrogen.shopify.dev/"
          target="_blank"
          rel="noreferrer"
        >
          Built with Hydrogen
        </a>
      </nav>
    </header>
  );
}

export default Nav;
