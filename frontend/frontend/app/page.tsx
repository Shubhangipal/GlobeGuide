import Link from "next/link";

export default function Home() {
    return (
        <div className="layout">
            <div className="top-brand">GlobalGuide</div>

            <nav className="side-nav">
                <ul>
                    <li>
                        <Link href="/">
                            <i className="fas fa-home"></i>
                            <span className="nav-text">Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            <i className="fas fa-info-circle"></i>
                            <span className="nav-text">About</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/guides">
                            <i className="fas fa-map"></i>
                            <span className="nav-text">Guides</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact">
                            <i className="fas fa-envelope"></i>
                            <span className="nav-text">Contact</span>
                        </Link>
                    </li>
                </ul>
            </nav>

            <main className="content">
                <h1>Welcome to GlobalGuide</h1>
                <p>Your landing page content goes here.</p>
            </main>
        </div>
    );
}