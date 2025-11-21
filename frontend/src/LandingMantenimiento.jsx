import './LandingMantenimiento.css'
import logo from './assets/logo.png'

function LandingMantenimiento() {
  return (
    <div className="landing-container">
      <div className="landing-overlay" />

      <div className="landing-content">
        
        {/* LOGO */}
        <img
          src={logo}
          alt="Logo Instituto Puente"
          className="landing-logo-image"
        />

        {/* BADGE */}
        <span className="landing-badge">En mantenimiento</span>

        {/* TEXTO PRINCIPAL */}
        <main className="landing-main">
          <h1 className="landing-title">Campus Virtual</h1>
          <h2 className="landing-subtitle">Instituto Puente</h2>
          <p className="landing-text">
            Estamos trabajando para ofrecerte una experiencia mejor,
            más estable y totalmente renovada.
          </p>
        </main>

        {/* FOOTER */}
        <footer className="landing-footer">
          <p>
            &copy; {new Date().getFullYear()} Instituto Puente — Todos los derechos reservados.
          </p>
        </footer>
      </div>
    </div>
  )
}

export default LandingMantenimiento
