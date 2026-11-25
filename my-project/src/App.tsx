 import './App.css';

export default function App() {
  return (
    <>
      {/* HEADER */}
      <header className="header">
        <div className="container flex header-container">
          <a href="#" className="header-logo">
            <img src="img/logo .svg" alt="Lionic Logo" />
          </a>
          <nav className="header-nav">
            <ul className="header-list list-reset flex">
              <li className="header-list-item">
                <a href="#" className="header-link">Home</a>
              </li>
              <li className="header-list-item">
                <a href="#services" className="header-link">Services</a>
              </li>
              <li className="header-list-item">
                <a href="#articles" className="header-link">Articles</a>
              </li>
              <li className="header-list-item">
                <a href="#clients" className="header-link">Clients</a>
              </li>
              <li className="header-list-item">
                <a href="#contacts" className="header-link">Contacts</a>
              </li>
              <li className="header-list-item">
                <a href="#join-us" className="header-link">Join Us</a>
              </li>
            </ul>
          </nav>
          <button className="btn header-btn btn-reset" type="button">
            Free Trial
          </button>
        </div>
      </header>

      <main className="main">
        {/* HERO SECTION */}
        <section id="hero" className="hero">
          <div className="container">
            <div className="hero-content flex">
              <h1 className="hero-title">
                This is simply a smarter way to make your legal online
              </h1>
              <p className="hero-descr">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.
              </p>
              <div className="hero-wrapper">
                <button className="btn hero-btn btn-reset" type="button">
                  FREE 30 DAY TRIAL
                </button>
                <span className="hero-secure">SSL secured connection</span>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section id="services" className="services section-offset">
          <div className="container">
            <h2 className="section-title services-title">Services</h2>
            <p className="services-descr">
              Lionic guides you on making decisions for all aspects of your end-of-life plans.
            </p>
            <ul className="services-items list-reset flex">
              <li className="services-item flex">
                <img src="img/Your Legacy.svg" alt="" className="services-img" />
                <h3 className="services-item-title">Your Legacy</h3>
                <p className="services-item-descr">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur atque est inventore officia nihil error magnam ducimus aut quia.
                </p>
              </li>

              <li className="services-item flex">
                <img src="img/Your Health.svg" alt="" className="services-img" />
                <h3 className="services-item-title">Your Health</h3>
                <p className="services-item-descr">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur atque est inventore officia nihil error magnam ducimus aut quia.
                </p>
              </li>

              <li className="services-item flex">
                <img src="img/Funeral & Memorial.svg" alt="" className="services-img" />
                <h3 className="services-item-title">Funeral &amp; Memorial</h3>
                <p className="services-item-descr">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur atque est inventore officia nihil error magnam ducimus aut quia.
                </p>
              </li>

              <li className="services-item flex">
                <img src="img/Legal & Financial.svg" alt="" className="services-img" />
                <h3 className="services-item-title">Legal &amp; Financial</h3>
                <p className="services-item-descr">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur atque est inventore officia nihil error magnam ducimus aut quia.
                </p>
              </li>
            </ul>
          </div>
        </section>

        {/* ARTICLES SECTION */}
        <section id="articles" className="articles section-offset">
          <div className="container">
            <h2 className="section-title articles-title">Articles</h2>
            <ul className="articles-list list-reset flex">
              <li className="articles-item">
                <article className="blog-preview flex">
                  <img
                    src="img/Rectangle-Jurisdiction.svg"
                    alt="Jurisdiction article thumbnail"
                    className="blog-preview-image"
                  />
                  <div className="blog-preview-text">
                    <time dateTime="2021-11-15T19:30" className="blog-preview-time">
                      15 Nov 2021
                    </time>
                    <h3 className="blog-preview-title">Jurisdiction</h3>
                    <p className="blog-preview-descr">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </p>
                  </div>
                </article>
              </li>
              <li className="articles-item">
                <article className="blog-preview flex">
                  <img
                    src="img/Rights and obligations.svg"
                    alt="Consulting article thumbnail"
                    className="blog-preview-image"
                  />
                  <div className="blog-preview-text">
                    <time dateTime="2021-11-15T19:30" className="blog-preview-time">
                      15 Nov 2021
                    </time>
                    <h3 className="blog-preview-title">Consulting</h3>
                    <p className="blog-preview-descr">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </p>
                  </div>
                </article>
              </li>
              <li className="articles-item">
                <article className="blog-preview flex">
                  <img
                    src="img/Rights and obligations.svg"
                    alt="Rights and obligations article thumbnail"
                    className="blog-preview-image"
                  />
                  <div className="blog-preview-text">
                    <time dateTime="2021-11-15T19:30" className="blog-preview-time">
                      15 Nov 2021
                    </time>
                    <h3 className="blog-preview-title">Rights and obligations</h3>
                    <p className="blog-preview-descr">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </p>
                  </div>
                </article>
              </li>
              <li className="articles-item">
                <article className="blog-preview flex">
                  <img
                    src="img/Consulting.svg"
                    alt="Contractors article thumbnail"
                    className="blog-preview-image"
                  />
                  <div className="blog-preview-text">
                    <time dateTime="2021-11-15T19:30" className="blog-preview-time">
                      15 Nov 2021
                    </time>
                    <h3 className="blog-preview-title">Contractors</h3>
                    <p className="blog-preview-descr">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </p>
                  </div>
                </article>
              </li>
            </ul>
          </div>
        </section>

        {/* CLIENTS SECTION */}
        <section id="clients" className="clients section-offset">
          <div className="container">
            <h2 className="section-title clients-title">Clients</h2>
            <ul className="clients-list list-reset flex">
              <li className="clients-item flex">
                <p className="clients-item-descr">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione inventore, sint vero corporis temporibus rem cupiditate voluptas quas quos vitae explicabo cumque illum vel numquam veniam ex distinctio? Et, neque!
                </p>
                <div className="clients-user flex">
                  <div className="clients-avatar">
                    <img src="img/Group 72.svg" alt="John Armstrong" />
                  </div>
                  <div className="clients-text">
                    <div className="clients-name">John Armstrong</div>
                    <span className="clients-post">Customer</span>
                  </div>
                </div>
              </li>
              <li className="clients-item flex">
                <p className="clients-item-descr">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nulla molestiae ut rerum atque consequuntur quasi quisquam explicabo, quia odit nihil adipisci voluptatum debitis libero doloribus dolores nisi. Quasi, fugiat.
                </p>
                <div className="clients-user flex">
                  <div className="clients-avatar">
                    <img src="img/elizabeth.svg" alt="Elizabeth Martin" />
                  </div>
                  <div className="clients-text">
                    <div className="clients-name">Elizabeth Martin</div>
                    <span className="clients-post">Customer</span>
                  </div>
                </div>
              </li>
              <li className="clients-item flex">
                <p className="clients-item-descr">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nulla molestiae ut rerum atque consequuntur quasi quisquam explicabo, quia odit nihil adipisci voluptatum debitis libero doloribus dolores nisi. Quasi, fugiat.
                </p>
                <div className="clients-user flex">
                  <div className="clients-avatar">
                    <img src="img/Group 43.svg" alt="Robin Soutby" />
                  </div>
                  <div className="clients-text">
                    <div className="clients-name">Robin Soutby</div>
                    <span className="clients-post">Customer</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* CONTACTS SECTION */}
        <section id="contacts" className="contacts section-offset">
          <div className="container">
            <h2 className="section-title contacts-title">Contacts</h2>
            <address className="contacts-address">
              <ul className="contacts-list list-reset flex">
                <li className="contacts-item flex contacts-item-address">
                  <strong className="contacts-item-caption">Visit Us</strong>
                  <p className="contacts-item-text">
                    Duis autem vel eum iriure dolor in hendrerit in vulputate velit.
                  </p>
                </li>
                <li className="contacts-item flex">
                  <strong className="contacts-item-caption">Call Us</strong>
                  <a href="tel:+79876543210" className="contacts-item-link">
                    +7 (987) 654-32-10
                  </a>
                  <a href="tel:+79876543210" className="contacts-item-link">
                    +7 (987) 654-32-10
                  </a>
                </li>
                <li className="contacts-item flex">
                  <strong className="contacts-item-caption">Email Us</strong>
                  <a href="mailto:example@example.com" className="contacts-item-link">
                    example@example.com
                  </a>
                  <a href="mailto:example@example.com" className="contacts-item-link">
                    example@example.com
                  </a>
                </li>
              </ul>
            </address>
          </div>
        </section>

        {/* JOIN US SECTION */}
        <section id="join-us" className="join-us section-offset">
          <div className="container">
            <h2 className="section-title join-us-title">Join us</h2>
            <p className="section-descr join-us-descr">
              Take control of your paid subscriptions today!
            </p>
            <form
              action="https://jsonplaceholder.typicode.com/posts"
              method="POST"
              className="form"
            >
              <div className="form-top">
                <div className="form-left">
                  <input
                    type="text"
                    className="form-input"
                    name="name"
                    placeholder="Name"
                    required
                  />
                  <input
                    type="email"
                    className="form-input"
                    name="email"
                    placeholder="E-mail"
                    required
                  />
                  <input
                    type="tel"
                    className="form-input"
                    name="phone"
                    placeholder="Phone"
                    required
                  />
                  <select className="country-form" name="country" defaultValue="">
                    <option value="" disabled>
                      Country
                    </option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="United States">United States</option>
                    <option value="France">France</option>
                    <option value="Germany">Germany</option>
                    <option value="Spain">Spain</option>
                    <option value="Estonia">Estonia</option>
                  </select>
                </div>
                <div className="form-right">
                  <textarea
                    className="form-comment"
                    name="comment"
                    placeholder="Comment"
                  />
                </div>
              </div>
              <button className="btn form-btn btn-reset" type="submit">
                Submit
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer"></footer>
    </>
  );
}