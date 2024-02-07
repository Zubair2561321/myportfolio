export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Zubair</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Front-end</span> <br />
            Developer
          </h1>
          <p className="hero--section-description">
            I bring expertise in React.js and Next.js development, crafting
            seamless user interfaces and making them dynamic by integrating
            API's.
            <br /> Committed to delivering high-quality code and exceptional
            user experiences, I thrive in creating innovative web applications.
          </p>
          <p className="hero--section-description">
            <br /> Always willing to learn new technologies and keep myself
            updated with the treds and learning Node.js for backend.
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/mainimg.png" alt="Hero Section" />
      </div>
    </section>
  );
}
