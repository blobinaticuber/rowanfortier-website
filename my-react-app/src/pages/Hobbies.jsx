import { Footer } from "../components/Footer"
import { Card } from "../components/Card"
import { ImageShape } from "../components/ImageShape"
import './Hobbies.css'

export function Hobbies() {
    return (
        <>
        <h1>Hobbies</h1>

        <div className="hobbies-list">

            <p>A horrible list of my awful hobbies. I'm sorry everyone</p>

            <Card color="var(--red)">
                <details name="hobby">
                    <summary>YouTube</summary>
                    <p>Creating unique videos on various channels since 2013. My main channel currently has over 18,000 subscribers, including 3 videos with over 100,000 views.</p>
                </details>
            </Card>

            <Card color="var(--blue)">
                <details name="hobby">
                    <summary>Rubik's Cube</summary>
                    <p>Speedsolver, method developer, and puzzle enthusiast. Competed in 11 official competitions, and spectated at the 2025 World Championships.</p>
                </details>
            </Card>

        </div>




        <Footer/>
        </>
    )
}
