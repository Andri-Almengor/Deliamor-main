import Button from 'react-bootstrap/Button';
import { NavLink } from "react-router-dom"; 
export function Story() {

    return <div className="story" >
        <div className="content-story">
            <div className='inside-story' data-aos="fade-right" data-aos-duration="500">
                <img src={('https://i.imgur.com/HU3q40M.png')} alt="full-logo" height={250} className="full-logon"/>
                <div className="beneath">                
                    <h2>¿Quiere saber más de nosotros?</h2>
                    <p>Conozca la historia de DeliAmor</p>
                    <NavLink to={'/historia'} className='button'>Ver más</NavLink>
                </div>

                </div>
        </div>
    </div>
}