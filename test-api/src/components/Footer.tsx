import footerStyles from "../css/footerStyles.module.css"

function Footer() {
  return (
    <div className={footerStyles.footer}>
      <div className={footerStyles.footerTrack}>
        <p>
          <span style={{ fontWeight: "bold" }}>JustWatch </span>Vodič kroz
          platforme za streaming
        </p>
        <p>
          © 2022 JustWatch — All external content remains the property of the
          rightful owner.{" "}
          <span style={{ color: "var(--dark-grey)" }}>(3.3.3)</span>
        </p>
      </div>

      <div className={footerStyles.footerLinksDiv}>
        <div className={footerStyles.footerLinks}>
          <h4>Top 5 noviteta na pružatelju usluge</h4>
          <a
            href="https://www.justwatch.com/hr/pru%C5%BEatelj-usluge/netflix/novo"
            target="_blank"
            rel="noreferrer"
          >
            Što je novo na platformi Netflix
          </a>
          <a
            href="https://www.justwatch.com/hr/pru%C5%BEatelj-usluge/amazon-prime-video/novo"
            target="_blank"
            rel="noreferrer"
          >
            Što je novo na platformi Amazon Prime Video
          </a>
          <a
            href="https://www.justwatch.com/hr/pru%C5%BEatelj-usluge/ivi/novo"
            target="_blank"
            rel="noreferrer"
          >
            Što je novo na platformi Ivi
          </a>
        </div>

        <div className={footerStyles.footerLinks}>
          <h4>Top 5 platformi</h4>
          <a
            href="https://www.justwatch.com/hr/pru%C5%BEatelj-usluge/netflix"
            target="_blank"
            rel="noreferrer"
          >
            Netflix
          </a>
          <a
            href="https://www.justwatch.com/hr/pru%C5%BEatelj-usluge/amazon-prime-video"
            target="_blank"
            rel="noreferrer"
          >
            Amazon Prime Video
          </a>
          <a
            href="https://www.justwatch.com/hr/pru%C5%BEatelj-usluge/ivi"
            target="_blank"
            rel="noreferrer"
          >
            Ivi
          </a>
        </div>

        {
          // NAPOMENA: Vrijednosti hrefova za linkove ispod su hardkodirani kako ne bih gubio previše vremena na povlačenje tih pet preko API-ja. Fetching preko API-ja pokazan je u cijelom nizu primjera kroz ovu aplikaciju pa nema potrebe to odrađivati i ovdje (ovaj footer nije niti dio zadatka pa nije niti bitan).
        }

        <div className={footerStyles.footerLinksDiv}>
          <div className={footerStyles.footerLinks}>
            <h4>5 najgledanijih serija</h4>
            <a
              href="https://www.justwatch.com/hr/serija/smallville"
              target="_blank"
              rel="noreferrer"
            >
              Smallville
            </a>
            <a
              href="https://www.justwatch.com/hr/serija/spider-man"
              target="_blank"
              rel="noreferrer"
            >
              Spiderman
            </a>
            <a
              href="https://www.justwatch.com/hr/serija/parks-and-recreation"
              target="_blank"
              rel="noreferrer"
            >
              Parks and recreation
            </a>
            <a
              href="https://www.justwatch.com/hr/serija/hawkeye"
              target="_blank"
              rel="noreferrer"
            >
              Hawkeye
            </a>
            <a
              href="https://www.justwatch.com/hr/serija/the-bear"
              target="_blank"
              rel="noreferrer"
            >
              The Bear
            </a>
          </div>
        </div>

        {
          // NAPOMENA: Vrijednosti hrefova za linkove ispod su hardkodirani kako ne bih gubio previše vremena na povlačenje tih pet preko API-ja. Fetching preko API-ja pokazan je u cijelom nizu primjera kroz ovu aplikaciju pa nema potrebe to odrađivati i ovdje (ovaj footer nije niti dio zadatka pa nije niti bitan).
        }

        <div className={footerStyles.footerLinksDiv}>
          <div className={footerStyles.footerLinks}>
            <h4>Top 5 najgledanijih filmova</h4>
            <a
              href="https://www.justwatch.com/hr/film/spider-man-no-way-home"
              target="_blank"
              rel="noreferrer"
            >
              Spiderman: Put bez povratka
            </a>
            <a
              href="https://www.justwatch.com/hr/film/nightmare-alley"
              target="_blank"
              rel="noreferrer"
            >
              Ulica noćnih mora
            </a>
            <a
              href="https://www.justwatch.com/hr/film/tomb-raider"
              target="_blank"
              rel="noreferrer"
            >
              Tomb Raider
            </a>
            <a
              href="https://www.justwatch.com/hr/film/vesper"
              target="_blank"
              rel="noreferrer"
            >
              Top Gun
            </a>
            <a
              href="https://www.justwatch.com/hr/film/prazni-covjek"
              target="_blank"
              rel="noreferrer"
            >
              Prazni čovjek
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
