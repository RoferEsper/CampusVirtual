import './LandingMantenimiento.css'

function LandingMantenimiento() {
  return (
    <div className="landing-container">
      <div className="landing-overlay" />
      <div className="landing-content">
        <header className="landing-header">
          <div className="landing-logo-placeholder">
            {/* Reemplaza este div por una etiqueta <img /> con tu logo */}
            <span>Logo Instituto Puente</span>
          </div>
          <span className="landing-badge">En mantenimiento</span>
        </header>

        <main className="landing-main">
          <h1 className="landing-title">Campus Virtual</h1>
          <h2 className="landing-subtitle">Instituto Puente</h2>
          <p className="landing-text">
            Estamos trabajando para ofrecerte una experiencia mejor y más moderna.
            <br />
            
          </p>
        </main>

        <footer className="landing-footer">
          <p>
            &copy; {new Date().getFullYear()} Instituto Puente &mdash; Todos los derechos reservados.
          </p>
        </footer>
      </div>
    </div>
  )
}

export default LandingMantenimiento
