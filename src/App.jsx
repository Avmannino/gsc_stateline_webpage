import { useState } from "react";
import "./App.css";
import Footer from "./Footer.jsx";

/*
=========================================================
IMAGE SETTINGS
=========================================================

When you have the final Stateline Hawks photos:

1. Put the image files inside:

   public/images/

2. Enter the filename below.

Example:

hero: "images/stateline-hero.jpg",

If a value is left blank, the webpage will automatically
display a styled image placeholder instead.

=========================================================
*/

const IMAGE_FILES = {
  hero: "images/stateline-hero.png",
  story: "images/stateline-team.png",
};

function ImageSlot({
  src,
  alt,
  label,
  className = "",
  position = "center",
}) {
  const [failed, setFailed] = useState(false);

  const hasImage = Boolean(src) && !failed;

  const imageUrl = hasImage
    ? `${import.meta.env.BASE_URL}${src}`
    : "";

  return (
    <div
      className={`image-slot ${className} ${
        hasImage ? "image-slot--loaded" : ""
      }`}
    >
      {hasImage ? (
        <img
          src={imageUrl}
          alt={alt}
          style={{ objectPosition: position }}
          onError={() => setFailed(true)}
        />
      ) : (
        <div
          className="image-placeholder"
          role="img"
          aria-label={alt}
        >
          <span>{label}</span>

          <small>
            Add photo to public/images
          </small>
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <>
    <main className="stateline-page">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="hero-section">
        <div className="hero-layout">

          <ImageSlot
            src={IMAGE_FILES.hero}
            alt="Stateline Hawks girls hockey players"
            label="HERO TEAM PHOTO"
            className="hero-image"
            position="center"
          />

          <div className="hero-content">
            <div className="hero-accent" />

            <p className="hero-category">
              Girls Hockey
            </p>

            <h1>
              Stateline
              <span className="hero-hawks-line">
                Hawks
                <img
                  src={`${import.meta.env.BASE_URL}images/stateline-logo.png`}
                  alt="Stateline Hawks logo"
                  className="hero-logo"
                />
              </span>
            </h1>
          </div>

        </div>
      </section>


      {/* =====================================================
          PROGRAM STORY
      ====================================================== */}

      <section className="story-section">

        <div className="story-layout">

          <div className="story-image-column">
            <ImageSlot
              src={IMAGE_FILES.story}
              alt="Stateline Hawks hockey players and team"
              label="PROGRAM PHOTO"
              className="story-image"
              position="center"
            />

            <div className="story-number">
              <span>EST.</span>
              <strong>2022</strong>
            </div>
          </div>

          <div className="story-content">

            <img
              src={`${import.meta.env.BASE_URL}images/mamaroneck-logo.png`}
              alt="Mamaroneck logo"
              className="story-logo"
            />

            <div className="section-line section-line--light" />

            <h2>
              How It
              <span>Started</span>
            </h2>

            <p>
              The Stateline Hawks girls hockey program was
              formed in Spring 2022 through a merger between
              the Greenwich Skating Club and Mamaroneck
              programs.
            </p>

            <p>
              Players predominantly come from Westchester and
              Fairfield counties, but also reach out to Long
              Island as well as Putnam, Rockland, and Dutchess
              counties.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          MISSION
      ====================================================== */}

      <section className="mission-section">
        <div className="mission-layout">

          <div className="mission-heading">
            <div className="section-line" />

            <h2>
              Our
              <span>Mission</span>
            </h2>
          </div>

          <div className="mission-content">
            <p>
              Stateline Hawks is a non-profit girls’ hockey
              program dedicated to providing an exceptional
              athletic and educational experience for our
              female players to improve their hockey skills,
              expand their knowledge of the game, and pursue
              a future in the sport if desired.
            </p>

            <p>
              Our goal is to promote team play, a competitive
              spirit, and good sportsmanship in all facets of
              the game, starting with our learn to play and
              culminating with our 19U teams.
            </p>

            <p>
              Stateline believes that our players thrive under
              strong mentorship and coaching, and that is why
              we are dedicated to hiring professional coaches
              and having our teams be tournament-bound members
              of highly competitive leagues.
            </p>
          </div>

        </div>

        <div className="mission-image-wrap">
          <div className="image-slot mission-image">
            <iframe
              title="vimeo-player"
              src="https://player.vimeo.com/video/917184799?h=0ebb576810"
              frameBorder="0"
              referrerPolicy="strict-origin-when-cross-origin"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              allowFullScreen
            />
          </div>

          <div className="mission-image-accent" />
        </div>
      </section>

    </main>

    <Footer />
    </>
  );
}

export default App;