import Video from '../images/Video.mp4'
import '../CSS/About.css'

export default function About() {
  return (
    <>
      <section className="about">
        <div className="row">
          <div className="col-12 ">
            <video  controls
              src={Video}
              className="object-fit-cover img-fluid"
              autoPlay
              muted
              loop
            ></video>
          </div>
        </div>
      </section>
  

        </>
    )
}