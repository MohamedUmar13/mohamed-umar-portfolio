import html from "./assets/html.png";
import css from "./assets/css.png";
import firebase from "./assets/firebase.png";
import react from "./assets/react.png";
import flutter from "./assets/flutter.png";
import github from "./assets/github.png";
import mongodb from "./assets/mongodb.png";
import js from "./assets/js.png";
import Marquee from "react-fast-marquee";

export default function SkillsSection() {
    const skills = [html, css, js, firebase, react, flutter, mongodb, github];

    return (
        <div className="bg-black py-20">
            <Marquee speed={50} gradient={false} pauseOnHover={true}>
                {
                    skills.map((skill, index) => (
                        <>
                            <img key={index} src={skill} className="h-16 mx-10" />
                        </>
                    ))
                }
            </Marquee>
        </div>
    );
}