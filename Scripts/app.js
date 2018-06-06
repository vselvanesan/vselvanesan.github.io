/* Custom JS goes here */

// IIFE - Immediately Invoked Function Expression
// anonymous self executing function
let app = (function () {
    "use strict"
 
    function AboutButtonOver(event) {
        event.currentTarget.style.opacity = 0.3;
    }

    function AboutButtonOut(event) {
        event.currentTarget.style.opacity = 1.0;
    }

    function BioContent() {


        var Heading = document.getElementsByClassName("display-4");
        Heading[0].innerHTML = "Biography";
        var Mission = document.getElementsByClassName("lead");
        Mission[0].innerHTML = "My Personal Mission Statement";
        var MyMissionStatement = document.getElementsByClassName("mission-statement");
        MyMissionStatement[0].innerHTML = "To learn, develop and grow in Software Engineering by contributing my skills, experience, and knowledge through enthusiasm, dedication, and passion.";
        let myBioHeading = document.getElementById("educationBio");
        myBioHeading.innerHTML = "Education Biography :";

        let myBioThingsList = [
            "Studying Software Engineering Technology - CENTENNIAL COLLEGE",
            "Bachelor of Education, Intermediate/Senior (Mathematics, Physics & Computer )-UNIVERSITY OF TORONTO",
            "Bachelor of Engineering, Electrical Degree-UNIVERSITY OF TORONTO"
        ];

        // "hook into" a ul that is empty that has an id of "myBioThings"
        let myBioList = document.getElementById("myBioThings");
        for (let index = 0; index < myBioThingsList.length; index++) {
            let newItem = document.createElement("li");
            newItem.textContent = myBioThingsList[index];
            console.log(index);
            myBioList.appendChild(newItem);
        }
    }

    function ProjectContent() {
        var Heading = document.getElementsByClassName("display-6");
        Heading[0].innerHTML = "My Projects:";
        let myProjectsThingsList = [
            "Traffic Light Controller - Digital Electronics : All traffics are controlled with advanced futures.",
            "Temperature Measurement - Micro Controller : Temperature is measured in digital and giving warning messages to help users.",
            "TTC Application - Software Engineering : It allows passengers to help to travel with more advanced futures."
        ];

        let myProjectList = document.getElementById("myProjectThings");
        for (let index = 0; index < myProjectsThingsList.length; index++) {
            let newItem = document.createElement("li");
            newItem.textContent = myProjectsThingsList[index];
            myProjectList.appendChild(newItem);
        }
    }

    function ContactContent() {
        // does nothing right now
    }

    function Start() {
        // local variable
        let title = document.title;
        try {           
            switch (title) {
                case "COMP125 - Assignment One - Biography":
                    BioContent();
                    break;

                case "COMP125 - Assignment One Projects":
                    ProjectContent();
                    break;

                case "COMP125 - Assignmnet One-Contact":
                    ContactContent();
                    break;

                default:
                    throw ("Title not Defined");
                    break;
            }
        } catch {
            console.warn("Something went wrong when switching pages");
        }
    }

   window.onload = Start;
    return {
        title: document.title
    }

})();