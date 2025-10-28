'use client';

import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

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
                <div className="banner-slider">
                    <Slider {...settings}>
                        <div>
                            <img src="/images/banner1.jpg" alt="Banner 1" className="banner-image" />
                        </div>
                        <div>
                            <img src="/images/banner2.jpg" alt="Banner 2" className="banner-image" />
                        </div>
                        <div>
                            <img src="/images/banner3.jpg" alt="Banner 3" className="banner-image" />
                        </div>
                    </Slider>
                </div>
            </main>
        </div>
    );
}