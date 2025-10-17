import mapLogo from "../assets/Fill 219.svg"
import "./Entry.css"
export default function Entry({ travel: { img, country, googleMapsLink, title, dates, text } }) {
  return (
    <article className="journal-entry">
      <div className="main-image-container">
        <img className="main-image" src={img.src} alt={img.alt} />
      </div>
      <div className="info-container">
        <img src={mapLogo} alt="marker" />
        <span className="country">{country}</span>
        <a href={googleMapsLink}>View on Google Maps</a>
        <h2 className="entry-title">{title}</h2>
        <p className="trip-dates">{dates}</p>
        <p className="entry-text">{text}</p>
      </div>
    </article>
  )
}