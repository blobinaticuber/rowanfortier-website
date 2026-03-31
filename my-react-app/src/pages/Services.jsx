import { Card } from "../components/Card"
import { ServiceCard } from "../components/ServiceCard";
import { Footer } from "../components/Footer"

import './Services.css';

export function Services() {
    return (
        <>
        <h1>Services</h1>
        <p>Need a simple static website like this? I got you covered!</p>

        <div className="grid2">

            <ServiceCard color={"var(--green)"}>
                <h2>Basic</h2>
                <ul>
                    <li>1-3 page website</li>
                    <li>6 months of support</li>
                </ul>
                <h2 className="price">CAD $149.99</h2>
            </ServiceCard>

            <ServiceCard color={"var(--blue)"}>
                <h2>Advanced</h2>
                <ul>
                    <li>3-5 page website</li>
                    <li>Lifetime support</li>
                    <li>Run Google ads and earn revenue</li>
                </ul>
                <h2 className="price">CAD $249.99</h2>
            </ServiceCard>

        </div>

        <p>Tired of website builders like Wix or WordPress charging a fortune and adding watermarks to your website? Hiring a student developer to make a static site has the following benefits:</p>
        <div className="grid3">

            <Card color={"var(--gray)"}>
                <div className="vstack">
                    <h3>Responsive</h3>
                    <p>I work to make sure the site looks great on all devices.</p>
                </div>
            </Card>

            <Card color={"var(--gray)"}>
                <div className="vstack">
                    <h3>Security</h3>
                    <p>Site is not able to be hacked due to its simplicity. No database leaks</p>
                </div>
            </Card>

            <Card color={"var(--gray)"}>
                <div className="vstack">
                    <h3>No AI slop</h3>
                    <p>Hand-written code by a passionate web developer gives character to your website in a world of slop.</p>
                </div>
            </Card>

        </div>
        <p>Not convinced? See the Projects page for examples of my work!</p>

        <Footer/>
        </>
    )
}
