import './About.css'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">About</span>
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="about-grid">
          <div className="about-text">
            <p>
              I am an MS in Information Management student at the University of Illinois
              Urbana-Champaign. I work across
              machine learning, data engineering, business intelligence, and AI, with experience
              translating complex business problems into analytical solutions.
            </p>
            <p>
              Previously, I worked as a Decision Analytics Associate at ZS Associates, where I
              developed forecasting, classification, segmentation, and analytics solutions for
              healthcare and life sciences clients. I currently work as a Data &amp; AI Intern at
              UIF, working across SQL, Power BI, DAX, reporting, data validation, and AI-enabled
              analytics.
            </p>
            <p>
              I enjoy working at the intersection of technology, analytics, and product thinking.
            </p>
          </div>

          <div className="about-highlights">
            <div className="card about-highlight">
              <div className="about-highlight-label">Focus</div>
              <div className="about-highlight-value">Data Analytics, Product &amp; AI</div>
            </div>
            <div className="card about-highlight">
              <div className="about-highlight-label">Currently</div>
              <div className="about-highlight-value">Data &amp; AI Intern at UIF</div>
            </div>
            <div className="card about-highlight">
              <div className="about-highlight-label">Studying</div>
              <div className="about-highlight-value">MS in Information Management, UIUC</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
