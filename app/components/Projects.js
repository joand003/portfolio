import React from "react";
import Card from "./Card";

export default function Projects() {
    return (
        <div id="Projects" className="w-full">
            <div className="py-5 w-full my-12">
            <h1 className="text-center my-10">Projects</h1>
            <div className="">
                <div className="flex flex-col md:flex-row justify-center items-center md:items-start md:justify-evenly">
                    <div>
                    <Card title='Workout App' description='This app is used to track a workout routine.' image='/workoutapp.png' alt='Image of my workout app' link="/workout"/>
                    </div>
                    <div className="mt-16 md:mt-0">
                    <Card title='Diving App' description='This app is used to track scores froma diving meet.' image='/divingapp.png' alt='Image of my diving app' link="/diving"/>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}
