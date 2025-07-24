"use client"
import './globals.css'; 
import { albumCovers, drawCard, topArtists, topSongs} from "@/app/resources";
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
<main className="p-6 space-y-8">
    <NavBar />
    <h1 className="text-3xl font-bold mt-10">Welcome to My Portfolio</h1>

    {/* Music Stuff */}
    <h1 className="text-3xl font-bold">Here Are My Top Listens</h1>
    <section>
    <h2 className="text-xl font-semibold">Top Artists</h2>
    <div className="w-full max-w-xs mx-auto text-center">
        <Card className="rounded-xl overflow-hidden">
        <CardContent className="flex aspect-square items-center justify-center p-0 overflow-hidden rounded-xl">
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
