import { Container } from "react-bootstrap";
import { BsInstagram, BsFacebook, BsTwitter } from 'react-icons/bs';

const Footer = () => {
    return ( 
        <Container fluid>
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div className="col-md-4 d-flex align-items-center">
                    <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                    </a>
                    <span className="text-muted">&copy; 2022 Farah Arquitectura y Construcción</span>
                </div>

                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3"><BsInstagram className="text-muted" /></li>
                    <li className="ms-3"><BsTwitter className="text-muted" /></li>
                </ul>
            </footer>
        </Container>
     );
}
export default Footer;