import { Card } from "../components/Card"
import { Footer } from "../components/Footer"

import './Services.css'

export function Services() {
    return (
        <>
        <h1>Services</h1>
        <p>Need a simple website? I got you covered!</p>
        <div className="grid3">
            <Card color={"var(--blue)"}>
                <div class="vstack">
                    <h2>Basic</h2>
                    <ul>
                        <li>dogs</li>
                    </ul>
                    <h2>$150</h2>
                </div>
            </Card>

            <Card color={"var(--pink)"}>
                <div class="vstack">
                    <h2>Basic</h2>
                    <p>a</p>
                    <h2>$100</h2>
                </div>
            </Card>

            <Card color={"var(--yellow)"}>
                <div class="vstack">
                    <h2>Basic</h2>
                    <p>a</p>
                    <h2>$100</h2>
                </div>
            </Card>
        </div>

        <Footer/>
        </>
    )
}
