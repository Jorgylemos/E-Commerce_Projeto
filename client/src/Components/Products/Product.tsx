import { useEffect, useState } from "react";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { addItem, delItem } from "../../Redux/actions/index";


import { Button, Col, Container, Row, Spinner } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
// import Skeleton from "react-loading-skeleton";

const Product = () => {

    const { id } = useParams();
    const [product, setProduct] = useState<any>([]);
    const [loading, setLoading] = useState(false);

    // Redux Work
    const dispatch = useDispatch();
    const addProduct = (product: any) => {
        dispatch(addItem(product));
    }

    const delProduct = (product: any) => {
        dispatch(delItem(product));
    }

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const res = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await res.json());
            setLoading(false);
        }

        getProduct();
    }, []);

    const Loading = () => {
        return (
            <>
                <Col md={6}>
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </Col>
            </>
        )
    }

    const ShowProduct = () => {

        return (
            <>
                <Col md={6} style={{ marginTop: '60px' }}>
                    <img src={product.image} alt={product.title} height="400px" width="340px" />
                </Col>
                <Col className="product-custom" md={6} style={{ marginTop: '40px' }}>
                    <h4 className="text-uppercase text-black-50">
                        {product.category}
                    </h4>
                    <h1 className="display-5">{product.title}</h1>
                    <p className="lead fw-bolder">
                        Rating {product.rating && product.rating.rate}{' '}
                        <i className="fa fa-star"></i>
                    </p>
                    <h3 className="display-6 fw-bold my-4">
                        $ {product.price}
                    </h3>
                    <p className="lead">{product.description}</p>

                    <Button variant="" className="product-btn-custom me-2 px-4 py-2"
                        onClick={() => addProduct(product)}>
                        Adicionar ao Carrinho
                    </Button>
                    <Button variant="" className="product-btn-custom_2 me-2 px-4 py-2"
                        onClick={() => delProduct(product)}>
                        Remover do Carrinho
                    </Button>
                    {/**<Link to={"/cart"}>
                        <Button variant="dark" className="ms-2 px-3 py-2">
                            Ir para o Carrinho
                        </Button>
                    </Link>*/}
                </Col>
            </>
        )
    }

    return (
        <div>
            <Container className="py-5">
                <Row className="py-5">
                    {loading ? <Loading /> : <ShowProduct />}
                </Row>
            </Container>
        </div>
    )
}

export default Product