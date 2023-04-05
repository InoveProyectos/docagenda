import React from 'react';
import ema from '../../../images/ema.png';
import john from '../../../images/john.png';
import watson from '../../../images/watson.png';
import BlogDetail from './BlogDetail';
import './Blog.css';

const blogData = [
    {
        title: 'Realiza un control anual',
        description: 'Es importante el cuidado dental, al menos realiza un control anual. En lo posible un control semestral.',
        author: 'Dr. Cudi',
        authorImg: ema,
        date: '23 April 2022'
    },
    {
        title: 'Rutina de lavado de los dientes',
        description: 'Al menos cepillarse los dientes dos o tres veces por días, durante dos minutos.',
        author: 'Dr. Sinthia',
        authorImg: watson,
        date: '23 April 2022'
    },
    {
        title: 'El hilo dental',
        description: 'Utiliza el hilo dental para remover los restos de comida entre dientes, con cuidado de no lastimar la encía',
        author: 'Dr. Cudi',
        authorImg: john,
        date: '23 April 2022'
    },
]



const Blog = () => {
    return (
        <section className="blogs my-5" id="BlogContaint">
            <div className="container">
                <div className="section-header text-center">
                    <h5 className="brand-color text-uppercase">Nuestro blog</h5>
                    <h1>Novedades</h1>
                </div>
                <div className="card-deck">
                    <div className="mt-5 d-flex justify-content-center">
                        <div className="row w-80">
                            {
                                blogData.map(blog => <BlogDetail key={blog.title} blog={blog}></BlogDetail>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;