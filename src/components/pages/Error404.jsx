import error404 from '../../assets/error404.png'
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

const Error404 = () => {
    return (
        <section className="mainSection text-center mt-3">
        <div className='text-center'>
           <img src={error404} alt="imagen error 404" className='img-fluid'/> 
        </div>
        <div className='d-flex justify-content-center mb-5'>
        <Button variant="success" as={Link} to='/'>Volver al inicio</Button>
        </div>
        </section>
    );
};

export default Error404;