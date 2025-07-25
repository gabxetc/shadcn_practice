"use client"
import './globals.css'; 
import { albumCovers, drawCard, topArtists, topSongs} from "@/app/components/music";
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import React from "react";
import Image from "next/image";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from "@radix-ui/react-navigation-menu";
import { NavBar } from "./components/navBar";

// _______________________________________________________________________________________________________\\

// const titles = [<><p><strong>Day:</strong> {topArtists.day.join(", ")}</p>, <p><strong>Month:</strong> {topArtists.month.join(", ")}</p>,<p><strong>Year:</strong> {topArtists.year.join(", ")}</p></>]
            

const portfolioPage = () => {
const [currentIndex, setCurrentIndex] = React.useState(0);
const song = topSongs[currentIndex]; // or choose however you want to match songs to albums

const goToNextAlbum = () => {
setCurrentIndex((prev) => (prev + 1) % albumCovers.length)
}

const goToNextTitle = () => {
setCurrentIndex((prev) => (prev + 1) % albumCovers.length)
}

const goToPreviousAlbum = () => {
setCurrentIndex((prev) => (prev - 1 + albumCovers.length) % albumCovers.length)
}

const currentAlbum = albumCovers[currentIndex]

return (
<main className="p-6 space-y-8 flex flex-col items-center">
    <div className="w-full flex justify-between items-center mb-8">
        <div>
        <h1 className="text-3xl font-bold mt-10">Welcome to My Portfolio</h1>
        </div>
        <div className = "mr-5">
        <NavBar/>
        </div>
    </div>
    {/* About Me */}
    <h1 className="text-3xl font-bold">Hi! My Name is Gaby,</h1>
    <p className="max-w-prose mx-auto px-4 sm:px-6 lg:px-8 text-gray-700 leading-relaxed text-center">
        And I'm a photographer, poet, and aspiring programmer from Johannesburg, South Africa. 
        My work blends creativity and problem-solving—
        I capture human stories through my lens and 
        build digital solutions that serve communities. 
        With over five years of photography experience, 
        I’ve covered weddings, events, and personal projects that celebrate identity, 
        resilience, and connection. Alongside my art, I’m passionate about 
        front-end development and using technology to solve real-world problems, 
        especially in healthcare and public services. Everything 
        I create—whether visual or digital—is rooted in 
        storytelling, empathy, and a drive to make a meaningful impact.
    </p>
    <h1 className="text-3xl font-bold">Get To Know Me</h1>
    
    {/* Music Stuff */}

    <h1 className="text-2xl font-bold">Here's What I've Been Listening To!</h1>
    <section>
    <h2 className="text-xl font-semibold">Top Artists</h2>
    <div className="w-full max-w-xs mx-auto text-center">
        <Card className="rounded-xl overflow-hidden">
        <CardContent className="flex aspect-square items-center justify-center p-5.5 fill rounded-xl">
            <Image
            src={currentAlbum.image}
            alt={currentAlbum.title}
            className="w-full h-full object-cover rounded-xl"
            width={300}
            height={500}
            />
        </CardContent>
        </Card>
        <div className="mt-4 space-y-1">
        <p className="text-lg font-semibold">{currentAlbum.title}</p>
        <p className="text-gray-700">{currentAlbum.artist}</p>
        <p className="text-sm text-gray-500">{currentAlbum.description}</p>
        </div>
        <div className="flex justify-between mt-4">
        <Button onClick={goToPreviousAlbum}>Previous</Button>
        <Button onClick={goToNextAlbum}>Next</Button>
        </div>
    </div>
    </section>
</main>
);
};

export default portfolioPage;