import { Card } from "../components/Card"
import { ServiceCard } from "../components/ServiceCard";
import { Footer } from "../components/Footer"

import { FaLock } from "react-icons/fa6";
import { FaMobileScreenButton } from "react-icons/fa6";
import { TbRobotOff } from "react-icons/tb";
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";

import './Services.css';

export function Services() {
    return (
        <>
        <h1>Services</h1>
        <p>Need a simple static website like this? I got you covered!</p>

        <div className="grid2">

            <ServiceCard color={"var(--green)"}>
                <h2>Basic</h2>
                <div className="service-grid">
                    <p>1-3 page website</p>
                    <FaCheck />
                    <p>6 months of support</p>
                    <FaCheck />
                    <p>Custom domain</p>
                    <FaCheck />
                    <p>Google Ads support</p>
                    <ImCross />
                </div>
                <div className="price">
                    <h2>CAD $174.99</h2>
                    <p>monthly</p>
                </div>

            </ServiceCard>

            <ServiceCard color={"var(--green)"}>
                <h2>Advanced</h2>
                <div className="service-grid">
                    <p>3-5 page website</p>
                    <FaCheck />
                    <p>Lifetime support</p>
                    <FaCheck />
                    <p>Custom domain</p>
                    <FaCheck />
                    <p>Google Ads support</p>
                    <FaCheck />
                </div>
                <div className="price">
                    <h2>CAD $324.99</h2>
                    <p>monthly</p>
                </div>
            </ServiceCard>

        </div>

        <p>Tired of website builders like Wix or WordPress charging a fortune and adding watermarks to your website? Hiring a student developer to make a static site has the following benefits:</p>
        <div className="grid3">

            <Card color={"var(--gray)"}>
                <div className="vstack">
                    <FaMobileScreenButton />
                    <h3>Responsive</h3>
                    <p>The website will look amazing on all devices, whether that's a tablet, phone, or computer.</p>
                </div>
            </Card>

            <Card color={"var(--gray)"}>
                <div className="vstack">
                    <FaLock />
                    <h3>Secure</h3>
                    <p>Site is not able to be hacked due to its simplicity. No database leaks or security issues.</p>
                </div>
            </Card>

            <Card color={"var(--gray)"}>
                <div className="vstack">
                    <TbRobotOff />
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
