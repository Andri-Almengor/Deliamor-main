import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export function Categories() {

    return <section className="categories shadow">
        <h3>Categorías</h3>
        <div className='Cards'>

        <div data-aos="fade-right" data-aos-duration="500">            
            <Card className='card' style={{ width: '18rem' }}>
                <Card.Img className='img-cat' variant="top" src={('https://imgur.com/0db8Lp1.png')}/>
                <Card.Body>
                    <Card.Title className='title'>Lustre mantequilla</Card.Title>
                    <Button className='button'>Ver más</Button>
                </Card.Body>
                </Card>
        </div>

        <div data-aos="fade-right" data-aos-duration="1000">
                <Card style={{ width: '18rem' }}>
                <Card.Img className='img-cat' variant="top" src={('https://imgur.com/0db8Lp1.png')} />
                <Card.Body>
                    <Card.Title className='title'>Fondant</Card.Title>
                    <Button className='button'>Ver más</Button>
                </Card.Body>
                </Card>
        </div>

        <div data-aos="fade-right" data-aos-duration="1500">
                <Card style={{ width: '18rem' }}>
                <Card.Img className='img-cat' variant="top" src={('https://imgur.com/0db8Lp1.png')} />
                <Card.Body>
                    <Card.Title className='title'>Lustre hervido</Card.Title>
                    <Button className='button'>Ver más</Button>
                </Card.Body>
                </Card>
        </div>

        </div>

    </section>
}