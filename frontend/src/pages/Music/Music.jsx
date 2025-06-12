import BackArrow from "../../components/Backarrow/Backarrow";
import ScrollToTop from "../../components/Scrolltotop/ScrollToTop";
import "./Music.css";
import ReactPlayer from "react-player";
const Music = () => {
  return (
    <div className="music-wrapper">
      <ScrollToTop />
      <BackArrow />
      <h2>120 DEN</h2>
      <figure>
        <img src="\images\DSC05275_3_web.jpg" alt="" />
        <figcaption>
          <b>120 DEN</b> by Jörg Obergfell, Kölner Zoo / sculptorscoop
        </figcaption>
      </figure>
      <div className="table-item">
        <p>2019</p>
        <p>
          founding member of <b>120 DEN</b>{" "}
          <a href="www.120den.de">(www.120den.de)</a>, the Cologne-based women's
          quartet plays with modified mannequin legs, which become independent
          electronic instruments through guitar strings, contact microphones and
          built-in synthesizer elements
        </p>
      </div>
      <div className="table-item">
        <p>2023</p>
        <p>
          Konzertraum 674.fm, Cologne // Concert for the award ceremony of the
          Heinrich Böll Prize 2023 to Kathrin Röggla, Historic Town Hall of the
          city of Cologne
        </p>
      </div>
      <div className="table-item">
        <p>2022</p>
        <p>
          Soundings, Academy of Media Arts, Cologne // mex im Künstlerhaus,
          Dortmund // anachronism, MS Stubnitz, Hamburg // anachronism,
          Schwankhalle, Bremen // Festival for self-made music, Holzmarkt,
          Berlin // future now festival, Utopiastadt, Wuppertal // Econore Noise
          Festival, Kunstverein Mönchengladbach
        </p>
      </div>
      <div className="table-item">
        <p>2021</p>
        <p>
          EWCA, House of Music, Raketenstation Hombroich, Neuss // Lab 30,
          Augsburg // shiny toys festival, Ringlokschuppen, Mülheim a.d. Ruhr
        </p>
      </div>
      <div className="table-item">
        <p>2020</p>
        <p>
          shiny toys festival, macroscop, Mülheim a.d. Ruhr // Galerie Martin
          Kudlek, Cologne // NIME 2020, Birmingham, Great Britain ( Corona
          online)
        </p>
      </div>
      <div className="table-item">
        <p>2019</p>
        <p>containerklang festival #extensions, arttheater, Cologne </p>
      </div>
      <div className="video-wrapper">
        <ReactPlayer
          url="https://vimeo.com/787829368"
          controls={true}
          width="100%"
          height="auto"
        />
      </div>
    </div>
  );
};

export default Music;
