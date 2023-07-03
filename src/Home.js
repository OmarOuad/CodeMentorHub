import Navbar from "./Nav"
import bannerBackground from ".//assets/programmer.png"

export default function(){
    return (
        <>
            <Navbar />
            <div class="flex justify-center items-center home-banner-container grid lg:grid-cols-2">
            <div class="home-banner-container-image w-100">
                <img src={bannerBackground} alt="banner image" />
            </div>
            <div class="home-text-section w-100">
                <h1>
                    CodeMentorHub
                </h1>
                <h2>
                    Made for students by students
                </h2>
            </div>
        </div>
        
        </>
    ) 
    





}