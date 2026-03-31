// import { Card } from "../components/Card"
import { ServiceCard } from "../components/ServiceCard";
import { Footer } from "../components/Footer"

import './Services.css';

export function Services() {
    return (
        <>
        <h1>Services</h1>
        <p>Need a simple static website? I got you covered!</p>

        <div className="grid3">

            <ServiceCard color={"var(--green)"}>
                <h2>Basic</h2>
                <ul>
                    <li>1-3 page website</li>
                    <li>4 months of support</li>
                </ul>
                <h2 className="price">CAD $149.99</h2>
            </ServiceCard>

            <ServiceCard color={"var(--pink)"}>
                <h2>EXTREME</h2>
                <ul>
                    <li>3-5 page website</li>
                    <li>Lifetime support</li>
                    <li>Run Google ads and earn revenue</li>
                </ul>
                <h2 className="price">CAD $249.99</h2>
            </ServiceCard>

        </div>

        <p>Not convinced? See the Projects page for examples of my work!</p>

        <Footer/>
        </>
    )
}
