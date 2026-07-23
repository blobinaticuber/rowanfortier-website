import { BoxedLink } from "@/components/BoxedLink.tsx";
import { Card, CardContent } from "@/components/ui/card.tsx";
import { ImageCard } from "@/components/ui/image-card.tsx";
import { FaGithub, FaLinkedin, FaTrophy, FaYoutube } from 'react-icons/fa'


export function Cubing() {
    return (
        <>
            <h1 className="text-3xl pb-6">Cubing</h1>
            <div className="flex flex-col md:flex-row justify-evenly gap-4">
                <BoxedLink
                    url="https://www.worldcubeassociation.org/persons/2016FORT03"
                    name="WCA Profile"
                    handle="2016FORT03"
                    imageurl="https://assets.worldcubeassociation.org/assets/7c6601d/assets/WCA%20Logo-4ef000323c6a9a407cdf07647a31c0ef4dc847f2352a9a136ef3e809e95bdeab.svg"
                />
                <BoxedLink
                    url="https://cubepb.com/user?id=643&expand=0"
                    name="cubepb.com"
                    handle="2016FORT03"
                    icon={<FaTrophy/>}
                />
                <BoxedLink
                    url="http://www.thecubicle.com"
                    name="thecubicle.com"
                    handle="Code Rowan for 5% off"
                    imageurl="/cubing/cubicle.png"
                />
            </div>

            <h1 className="text-xl pt-6 pb-6">History</h1>


    <p>Some time in January 2016 I saw my mom playing with a Rubik's Cube, and we had a few little competitions to see who could build a side of a single colour the fastest. She always won, so one day I looked up a full tutorial on how to solve the cube, and pretended like I had figured it out myself to show off to my mom. My first ever timed solve was about 10 minutes.</p>

    <div className="flex">
        <div>
            <h1 className="text-lg pt-6 pb-6">January 2016</h1>
            <p>Some time in January 2016 I saw my mom playing with a Rubik's Cube, and we had a few little competitions to see who could build a side of a single colour the fastest. She always won</p>
        </div>
            <ImageCard
            caption="Puzzle collection as of August 2016"
            imageUrl='/cubing/collection_2016.JPG'
            className="w-full md:w-1/2"
        />

    </div>

    <h2>Speedsolving</h2>
    <p>I've competed in 11 official competitions, and spectated at the 2025 World Championships. Check out my <a href="https://www.worldcubeassociation.org/persons/2016FORT03">World Cube Association</a> profile to see my official results and rankings! Below is a graph of my personal best times on the standard 3x3x3 Rubik's Cube.</p>

    <div>
      <canvas id="pbChart"></canvas>
    </div>

    <h2>Method Development</h2>

    <a href="https://docs.google.com/document/d/14hz6NX0lf-BN6ATcUMg8H_GJQ0TR4xP7jh-v640zAJg/edit?usp=sharing" target="_blank">
        <div >
            <img src="images/projects/2xyz.png"/>
            <div>
                <h3>2xyz Method</h3>
                <p>This method is a legit technique that technically reduces a 3x3x3 into a 2x2x2. It is not intended to be used for speedsolving or fewest moves purposes due to the fact that it has a very large average movecount.</p>
            </div>
        </div>
    </a>

    <a href="https://www.youtube.com/watch?v=_cyhfD_waVI" target="_blank">
        <div>
            <img src="images/projects/ECPcube.png"/>
            <div>
                <h3>ECP Method</h3>
                <p>ECP is a method that was invented for Athefre's Method Development Competition January 2021 by team Kübirz (which I was a part of). It is designed to use inspection to do an intuitive step, in order to get to algorithmic steps as quickly as possible. </p>
            </div>
        </div>
    </a>

    <h2>Hypercubing</h2>
    <p>In 2021, I learned about the 4-dimensional Rubik's Cube. It took me a week to solve it by following a written guide online. Since then I have held several speedsolving world records, helped create the hypercubing.xyz wiki, solved the 5D and 6D cubes, and fostered the community on the Discord server.</p>
        </>
    )
}
