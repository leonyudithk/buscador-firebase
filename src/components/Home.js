import React from 'react';
import { Carousel } from 'react-bootstrap';

const Home = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://res.cloudinary.com/danimel/image/upload/v1641933600/food_frtbji.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Vive en Salud</h3>
                        <p>Cuando la dieta es incorrecta la medicina no srive para nada</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://res.cloudinary.com/danimel/image/upload/v1641933600/Hibiscus_Jalape%C3%B1o_Quick_Pickled_Veggies_Artful_Desperado_icfulx.jpg"
                        alt="Second slide"
                        hei
                    />

                    <Carousel.Caption>
                        <h3>El Comienzo de la Salud es Nutrición</h3>
                        <p>Qu los alimentos sean tu medicina, y que la medicina sea tus alimentos</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://res.cloudinary.com/danimel/image/upload/v1641933600/Kuttu_Ki_Roti___Buckwheat_Flour_Flatbread_xy28va.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Haz de ti una prioridad</h3>
                        <p>Amante a ti mismo lo suficiente, como para vivir un estilo de vida saludable</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
    );
};

export default Home;