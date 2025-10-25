import Image from "next/image";

export default function Home() {
  return (
        <div className="layout">  
            <nav className="side-nav">
                <div className="brand">GlobalGuide</div>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Guides</li>
                    <li>Contact</li>
                </ul>
            </nav>

            <main className="content">
                <h1>Welcome to GlobalGuide</h1>
                <p>Your landing page content goes here.</p>
      </main>
    </div>
  );
}