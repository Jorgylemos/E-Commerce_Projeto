/**@Librarys */
import { Container, Card, Image } from 'react-bootstrap';

/** @Middlewares */


/**@Others imports */
import '../../../../assets/styles/main.scss';
import Background from '../../../../assets/images/bg.jpg';

function Home() {

    const rel = {
        rel: 'nakaridore'
    }

    return (
        <>
            <Image src={Background} alt='Background' className='card-img' {...rel} />
            <Card.ImgOverlay className='text-white d-flex flex-column justify-content-center'>
                <Card className='text-black border-0 card-custom'>
                    <Container>
                        <Card.Title className='display-3 fw-bolder mb-0'>NOVA LOJA</Card.Title>
                        <Card.Text className='lead fs-3 col-6'>
                            <p>
                                Procurando compras seguras?<br />
                                Melhores preços do mercado?<br />
                                Promoções e tudo mais?<br />
                            </p>
                            <p className='fw-bolder'>
                                Veio ao lugar certo!
                            </p>
                        </Card.Text>
                    </Container>
                </Card>
            </Card.ImgOverlay>
        </>

    )
}

export default Home