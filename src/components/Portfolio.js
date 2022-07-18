import Isotope from "isotope-layout";
import { useEffect, useRef, useState } from "react";
import { dataImage, portfolioHover } from "../utilits";
import DetailsPopup from "./popup/DetailsPopup";

const Portfolio = () => {
  useEffect(() => {
    dataImage();
    portfolioHover();
  }, []);

  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".gallery_zoom", {
        itemSelector: ".grid-item",
        //    layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".grid-item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 500);
    return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "current" : "");

  // Popup
  const [popup, setPopup] = useState(false);

  return (
    <div className="dizme_tm_section" id="portfolio">
      <DetailsPopup open={popup} close={() => setPopup(false)} />
      <div className="dizme_tm_portfolio">
        <div className="container">
          <div className="dizme_tm_main_title" data-align="center">
            <span>Portfolio</span>
            <h3>My Amazing Works</h3>
            <p>
              Most common methods for designing websites that work well on
              desktop is responsive and adaptive design
            </p>
          </div>
          <div className="portfolio_filter">
            <ul>
              <li>
                <a
                  className={`c-pointer ${activeBtn("*")}`}
                  onClick={handleFilterKeyChange("*")}
                >
                  All
                </a>
              </li>
              <li>
                <a
                  className={`c-pointer ${activeBtn("youtube")}`}
                  onClick={handleFilterKeyChange("email")}
                >
                  Emails
                </a>
              </li>
              <li>
                <a
                  className={`c-pointer ${activeBtn("vimeo")}`}
                  onClick={handleFilterKeyChange("cms")}
                >
                  CMS
                </a>
              </li>
              <li>
                <a
                  className={`c-pointer ${activeBtn("soundcloud")}`}
                  onClick={handleFilterKeyChange("landing-page")}
                >
                  Landing Page
                </a>
              </li>
            </ul>
          </div>
          <div className="dizme_tm_portfolio_titles" />
          <div className="portfolio_list wow fadeInUp" data-wow-duration="1s">
            <ul className="gallery_zoom grid">
              {/* <li className="youtube grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Mockup Shape"
                    data-category="Youtube"
                  >
                    <a
                      className="popup-youtube"
                      href="https://www.youtube.com/embed/7e90gBu4pas?autoplay=1"
                    >
                      <img src="img/thumbs/42-56.jpg" alt="image" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/1.jpg"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>Mockup Shape</h3>
                    <span>Youtube</span>
                  </div>
                </div>
              </li>
              <li className="vimeo grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Ave Bottle"
                    data-category="Vimeo"
                  >
                    <a
                      className="popup-vimeo"
                      href="https://player.vimeo.com/video/337293658?autoplay=1"
                    >
                      <img src="img/thumbs/42-34.jpg" alt="image" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/2.jpg"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>Ave Bottle</h3>
                    <span>Vimeo</span>
                  </div>
                </div>
              </li>
              <li className="soundcloud grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Magic Art"
                    data-category="Soundcloud"
                  >
                    <a
                      className="soundcloude_link mfp-iframe audio"
                      href="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/471954807&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                    >
                      <img src="img/thumbs/42-56.jpg" alt="image" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/3.jpg"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>Magic Art</h3>
                    <span>Soundcloud</span>
                  </div>
                </div>
              </li> */}
              <li className="cms grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Shopify Store"
                    data-category="store password: password123"
                  >
                    <a className="zoom" href="https://amycases.myshopify.com/" target="_blank" rel="noreferrer">
                      <img src="img/portfolio/sneaker-img-one.jpg" alt="image" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/sneaker-img-one.jpg"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>Shopify Store</h3>
                    <span>store password: password123</span>
                  </div>
                </div>
              </li>

              <li className="landing-page grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Coinbase"
                    data-category="Landing Page"
                  >
                    <a className="zoom" href="https://jazzy-mandazi-acb24f.netlify.app/" target="_blank" rel="noreferrer">
                      <img src="img/portfolio/coinbase-page-img-one.JPG" alt="image" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/coinbase-page-img-one.JPG"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>Coinbase</h3>
                    <span>Landing Page</span>
                  </div>
                </div>
              </li>

              <li className="email grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Hotjar"
                    data-category="Newsletter"
                  >
                    <a className="zoom" href="https://quandre.github.io/hotjar_newsletter/" target="_blank" rel="noreferrer">
                      <img src="img/portfolio/hotjar-img.JPG" alt="image" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/hotjar-img.JPG"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>Hotjar</h3>
                    <span>Newsletter</span>
                  </div>
                </div>
              </li>

              <li className="email grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Apple Receipt"
                    data-category="Transactional email"
                  >
                    <a className="zoom" href="https://quandre.github.io/apple_transactional_email/" target="_blank" rel="noreferrer">
                      <img src="img/portfolio/apple-receipt-img-one.JPG" alt="image" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/apple-receipt-img-one.JPG"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>Apple Receipt</h3>
                    <span>Transactional email</span>
                  </div>
                </div>
              </li>

              <li className="email grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Forever 21"
                    data-category="Promotional Email"
                  >
                    <a className="zoom" href="https://quandre.github.io/frame-email/forever.html" target="_blank" rel="noreferrer">
                      <img src="img/portfolio/forever-img-one.JPG" alt="image" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/forever-img-one.JPG"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>Forever 21</h3>
                    <span>Promotional Email</span>
                  </div>
                </div>
              </li>

              <li className="email grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="e.l.f. Cosmetics"
                    data-category="Newsletter"
                  >
                    <a className="zoom" href="https://quandre.github.io/frame-email/elf.html" target="_blank" rel="noreferrer">
                      <img src="img/portfolio/elf-img-one.JPG" alt="image" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/elf-img-one.JPG"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>e.l.f. Cosmetics</h3>
                    <span>Newsletter</span>
                  </div>
                </div>
              </li>
              <li className="email grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Dollar General"
                    data-category="Promotional Email"
                  >
                    <a className="zoom" href="https://quandre.github.io/frame-email/dollarG.html" target="_blank" rel="noreferrer">
                      <img src="img/portfolio/dollar-img-one.JPG" alt="image" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/dollar-img-one.JPG"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>Dollar General</h3>
                    <span>Promotional Email</span>
                  </div>
                </div>
              </li>
              <li className="email grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Scentbird"
                    data-category="Newsletter"
                  >
                    <a className="zoom" href="https://quandre.github.io/scentbird_newsletter/" target="_blank" rel="noreferrer">
                      <img src="img/portfolio/scentbird-news-img-one.JPG" alt="image" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/scentbird-news-img-one.JPG"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>Scentbird</h3>
                    <span>Promotional Email</span>
                  </div>
                </div>
              </li>
              <li className="email grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Scentbird"
                    data-category="Promotional Email"
                  >
                    <a className="zoom" href="https://quandre.github.io/Scentbird_promotional_email/" target="_blank" rel="noreferrer">
                      <img src="img/portfolio/scentbird-promo-img-one.JPG" alt="image" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/scentbird-promo-img-one.JPG"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>Scentbird</h3>
                    <span>Promotional Email</span>
                  </div>
                </div>
              </li>
              
              {/* <li className="popup grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Art Stone"
                    data-category="Popup"
                  >
                    <a className="zoom" href="img/portfolio/4.jpg">
                      <img src="img/thumbs/42-34.jpg" alt="image" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/4.jpg"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>Art Stone</h3>
                    <span>Popup</span>
                  </div>
                </div>
              </li> */}

              {/* <li className="detail grid-item" onClick={() => setPopup(true)}>
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Global Evolution"
                    data-category="Detail"
                  >
                    <a className="portfolio_popup" href="#">
                      <img src="img/thumbs/42-34.jpg" alt="image" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/6.jpg"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>Global Evolution</h3>
                    <span>Detail</span>
                  </div>
                </div>
              </li> */}
            </ul>
          </div>
        </div>
        <div className="brush_1 wow zoomIn" data-wow-duration="1s">
          <img src="img/brushes/portfolio/1.png" alt="image" />
        </div>
        <div className="brush_2 wow fadeInRight" data-wow-duration="1s">
          <img src="img/brushes/portfolio/2.png" alt="image" />
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
