import './index.css'
import { H1 } from './styles';

function Video(){
    return(
        <>
            <section className='video-section'>
                <H1>Assista no YouTube</H1>
                <div className="video-container">
                    <iframe
                        className="youtube-video"
                        src="https://www.youtube.com/embed/WFrKouaXM1o"
                        title="Video do projeto"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </section>
        </>
    );
}

export default Video;