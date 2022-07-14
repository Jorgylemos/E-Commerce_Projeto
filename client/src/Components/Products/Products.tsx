import { useState, useEffect } from 'react'
import { Button, Container, Row, Col, Card, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
//import './styles/main.scss';

function Products() {

    const [data, setData] = useState<any>([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const res = await fetch("http://52.204.139.5:3000/products");

            if (componentMounted) {
                setData(await res.clone().json());
                setFilter(await res.json());
                setLoading(false);
            };

            return () => {
                componentMounted = false;
            }
        }
        getProducts();
    }, []);

    const Loading = () => {
        return (
            <>
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </>
        )
    }

    const filterProduct = (cat: any) => {
        const updatedList = data.filter((e: any) => e.category === cat);
        setFilter(updatedList);
    }

    const ShowProducts = () => {
        return (
            <>
                <div className="buttons d-flex justify-content-center mb-5 pb-5">
                    <Button variant="outline-dark me-2" size="sm" onClick={() => setFilter(data)}>Todos</Button>
                    <Button variant="outline-dark me-2" size="sm" onClick={() => filterProduct("men's clothing")}>Roupas de homens</Button>
                    <Button variant="outline-dark me-2" size="sm" onClick={() => filterProduct("women's clothing")}>Roupas de mulheres</Button>
                    <Button variant="outline-dark me-2" size="sm" onClick={() => filterProduct("jewelery")}>Jóias</Button>
                    <Button variant="outline-dark me-2" size="sm" onClick={() => filterProduct("electronics")}>Eletronicos</Button>
                </div>
                {filter.map((product: any) => {
                    return (
                        <>
                            <Col md={3} mb={4} className="link-router-custom images-custom">
                                <Card className="h-100 text-center p-4" key={product.id}>
                                    <Link to={`/produtos/${product.id}`}>
                                        <Card.Img className="card-scale" variant="top" src={product.image} alt={product.title} height={"250px"} />
                                        <Card.Body>
                                            <Card.Title className="mb-0">{product.title.substring(0, 12)}...</Card.Title>
                                            <Card.Text >
                                                <p className="lead fw-bolder" style={{ fontStyle: 'italic' }}>
                                                    R$ {product.price}
                                                </p>
                                            </Card.Text>
                                            <Button className="btn btn-dark">
                                                Compre Agora
                                            </Button>
                                        </Card.Body>
                                    </Link>
                                </Card>
                            </Col>
                        </>
                    )
                })}
            </>
        )
    }

    //14:14

    return (
        <Container className="my-5 py-5">
            <Row className="col-12 mb-5">
                <Col>
                    <h1 className="display-6 fw-bolder text-center">
                        Produtos
                    </h1>
                </Col>
            </Row>
            <Row className="justify-content-center">
                {loading ? <Loading /> : <ShowProducts />}
            </Row>
        </Container >
    )
}


export default Products;