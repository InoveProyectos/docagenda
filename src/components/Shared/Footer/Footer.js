import React from 'react';
import FooterDetail from './FooterDetail';
import './Footer.css';

const Footer = () => {
    const noNamed = [
        { name: "Tratamientos personales", link: "/#" },
        { name: "Check Up", link: "/checkup" },
        { name: "Treatment of Personal Diseases", link: "/personal-treatment" },
        { name: "Tooth Extraction", link: "/tooth-extract" },
        { name: "Check Up", link: "/checkup" },
    ]
    const ourAddress = [
        { name: "Balcarce 574 – Villa Mercedes – San Luis, Argentina.", link: "#" },

    ]
    const oralHealth = [
        { name: "Otros servicios", link: "/#" },
    ]
    const services = [
        { name: "Otros servicios", link: "/#" },
    ]

    return (
        <footer className="footer-area clear-both sm-pe-5">
            <div className="container pt-5">
                <div className="row md-py-5 footer-content">
                    {/* <FooterDetail key={1} menuTitle={"."} menuItems={noNamed} /> */}
                    <FooterDetail key={2} menuTitle="Servicios" menuItems={services} />
                    <FooterDetail key={3} menuTitle="Otros servicios" menuItems={oralHealth} />
                    <FooterDetail key={4} menuTitle="Contacto" menuItems={ourAddress}>
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="!#"></a></li>
                            <li className="list-inline-item"><a href="!#"></a></li>
                            <li className="list-inline-item"><a href="!#"></a></li>
                        </ul>
                        <div className="md-mt-5">
                            <h6>¡Contactanos!</h6>
                            <button className="btn btn-brand">+549 011 2154-4777</button>
                        </div>
                    </FooterDetail>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} Todos los derechos reservados</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;