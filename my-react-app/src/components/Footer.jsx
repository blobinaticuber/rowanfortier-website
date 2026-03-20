import './Footer.css'
import { Card } from "./Card"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export function Footer() {
    return (
        <footer>
            <Card color="#3300FF">
                <div className="hstack" >
                    <a href="https://github.com/blobinaticuber" target="_blank">
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/rowan-fortier-b53261354/" target="_blank">
                        <FaLinkedin />
                    </a>
                    <a href="https://www.youtube.com/@RowanFortier" target="_blank">
                        <FaYoutube />
                    </a>
                </div>
                <p>© 2026 Rowan Fortier</p>
            </Card>
        </footer>
    )
}
