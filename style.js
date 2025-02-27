/* Resetting some default browser styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html, body {
    height: 100%;
    margin: 0;
    font-family: 'Doto', sans-serif;
    scroll-behavior: smooth;
}

#particleCanvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -1; /* Behind all content */
}

/* Basic styles */
body {
    font-weight: 300;
    background-color: #0e0e0e;
    color: #cc9460;
    line-height: 1.6;
}

/* Styling the Header */
header {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    height: 100vh;
    position: relative;
    color: #BF40BF;
    text-align: right;
    z-index: 1;
    padding-bottom: 10vh;
    transition: background-color 0.5s ease-in-out;
}

header::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('images/darlene_transparent.png') no-repeat center center;
    background-size: 80%;
    margin-right: 700px;
    z-index: -1;
}

header .header-content {
    z-index: 10;
    margin-left: 50vw;
    margin-top:6vw;
    max-width: 50%;
    text-align: right;
    pointer-events: none;
}

@keyframes glow {
    0%, 100% {
        text-shadow: 0 0 5px #702963, 0 0 20px #702963, 0 0 50px #702963;
    }
    50% {
        text-shadow: 0 0 20px #702963, 0 0 30px #702963, 0 0 40px #702963;
    }
}

header h1 {
    font-family: 'Doto', serif;
    font-size: 10vw;
    font-weight: bold;
    letter-spacing: 1px;
    margin: -7vw;
    color: #BF40BF;
    animation: glow 2.5s ease-in-out infinite;
}

/* Navigation Styles */
.hamburger {
    position: fixed;
    top: 40px;
    right: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 35px;
    height: 30px;
    cursor: pointer;
    z-index: 11;
}

.hamburger .line {
    width: 100%;
    height: 4px;
    background-color: #BF40BF;
    border-radius: 5px;
    opacity: 0.7;
}

/* Nav Menu */
.mobile-nav {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    width: 350px;
    height: 300px;
    background: url('images/window.png') no-repeat center center;
    background-size: cover;
    background-color: grey;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.7);
    padding: 50px 20px;
    text-align: center;
    z-index: 1000;
    transition: transform 0.3s ease-in-out;
    opacity: 0.8;
    visibility: hidden;

}


.mobile-nav.active {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.8;
    visibility: visible;
}


.nav-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    opacity: 1;
    visibility: hidden;
    transition: opacity 0.3s ease-in-out;
    z-index: 999;
}

.nav-overlay.active {
    opacity: 1;
    visibility: visible;
}

.close-btn {
    position: absolute;
    top: 10px;
    right: 50px;
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
    cursor: pointer;
    font-family: 'Doto';
}

.mobile-nav ul {
    list-style-type: none;
}

.mobile-nav a {
    color: white;
    text-decoration: none;
    font-size: 1.2vw;
    font-weight: bold;
    display: block;
    transition: color 0.3s ease;
    opacity: 1;
    font-family: 'Doto';
    text-transform: lowercase;
}

.mobile-nav a:hover {
    color: #BF40BF;
}

/* Responsive Design for Nav Menu */
@media (max-width: 768px) {
    .hamburger {
        display: flex;
    }
    header .header-content {
        padding: 20px;
        text-align: center;
        max-width: 100%;
    }
}

/* About Section */
#about {
    position: relative;
    height: 100vh; 
    display: flex;
    flex-direction: column; 
    align-items: left;
    margin-left: 9vw;
}

#about::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('/Users/darlenecheong/Desktop/html/images/circles.png');
    background-size: 35%;
    background-position: bottom left;
    background-repeat: no-repeat;
    filter: blur(200px);
    z-index: -1;
}

#about h2 {
    font-size: 5vw;
    font-weight: bold;
    color: #BF40BF;
    text-transform: lowercase;
    text-align: left;
    margin-bottom: 20px;
    letter-spacing: 2px;
    position: relative; /* Remove absolute positioning */
    animation: glow 2.5s ease-in-out infinite;
}

#about p {
    font-family: 'Roboto Mono';
    color: white;
    font-size: 1vw;
    max-width: 600px; /* Keeps paragraphs readable */
    line-height: 1.8;
    margin-bottom: 20px; /* Adds spacing between paragraphs */
    text-align: left;
}

#about a {
    color: #BF40BF; /* Change to your desired color */
    text-decoration: none; /* Optional: Removes underline */
}

#about a:hover {
    color: darkorange; /* Optional: Change color on hover */
    text-decoration: underline; /* Optional: Adds underline on hover */
}

.about-container {
    display: flex;
    align-items: center; /* Aligns text and image vertically */
    justify-content: space-between; /* Pushes text left and image right */
    gap: 150px; /* Adds space between text and image */
    max-width: 80%;
    margin: 0 auto; /* Centers the section */
}

/* Ensure text takes up some space */
.about-text {
    flex: 1; /* Takes up remaining space */
}

/* Image Styles */
.about-image-container {
    flex-shrink: 0; /* Prevents image from resizing */
}

.about-image {
    width: 250px; 
    height: 250px; 
    border-radius: 50%; /* Makes the image circular */
    border: 2px darkgrey solid;
    object-fit: cover; /* Ensures the image fills the circle */
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.2); /* Optional shadow effect */
}

@media (max-width: 768px) {
    .about-container {
        flex-direction: column;
        text-align: center; /* Centers text when stacked */
    }

    .about-image-container {
        margin-top: 20px; /* Adds spacing when stacked */
    }
}


/* Work Section */

#work {
    display: flex;
    flex-direction: column;
    align-items: left;
    text-align: left;
    max-width: 80%;
    margin: auto;
    padding: 50px 20px;
    height: 100vh;
}

.work-header {
    margin-bottom: 30px;
}

.work-header h2 {
    font-size: 5vw;
    font-weight: bold;
    color: #BF40BF;
    text-transform: lowercase;
    animation: glow 2.5s ease-in-out infinite;
}

.work-header p {
    font-family: 'Roboto Mono';
    color: white;
    font-size: 1vw;
    max-width: 800px;
    line-height: 1.8;
    margin-top: 10px;
}
.work-gallery {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px; /* Space between items */
    padding: 20px;
}

.work-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #444;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease-in-out;
    text-decoration: none;
    color: inherit;
    max-width: 350px; /* Prevents huge panels */
    text-align: center;
}

.work-item img {
    width: 100%;
    max-height: 270px; /* Keeps images proportional */
    object-fit: cover;
}

.work-item h3 {
    font-size: 0.9vw;
    margin-top: 10px;
    font-family: 'Roboto Mono';
}

.work-item p {
    font-size: 0.9vw;
    color: #bbb;
    font-family: 'Roboto Mono';
}

.work-item:hover {
    transform: translateY(-5px);
}



@media (max-width: 768px) {
    .work-gallery {
        flex-direction: column;
    }
}


/* Resume Section */
#resume {
    position:   relative;
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: left;
    text-align: left;
    max-width: 80%;
    margin: auto;
    height: 100vh;
}

.resume-container {
    display: flex;
    align-items: center;
    gap: 200px;
}

.resume-text {
    max-width: 500px;
}

.resume-text h2 {
    font-size: 5vw;
    font-weight: bold;
    color: #BF40BF;
    text-transform: lowercase;
    animation: glow 2.5s ease-in-out infinite;
}

.resume-text p {
    font-family: 'Roboto Mono';
    color: white;
    font-size: 1vw;
    line-height: 1.8;
    margin-top: 10px;
}

.resume-btn {
    display: inline-block;
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 14px;
    color: white;
    background-color: #BF40BF;
    border-radius: 5px;
    text-decoration: none;
    transition: 0.3s;
    opacity: 0.8;
    font-family: 'Roboto Mono';
}

.resume-btn:hover {
    background-color: #A030A0;
}

.resume-iframe {
    max-width: 600vh;
    flex: 1;
}

.resume-iframe {
    max-width: 600px;
    flex: 1;
}

.resume-iframe iframe {
    width: 120%;
    height: 600px;
    border: none;
    border-radius: 8px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}


@media (max-width: 768px) {
    .resume-container {
        flex-direction: column;
        text-align: center;
    }

    .resume-image img {
        max-width: 100%;
    }
}

/* Contact Icons */
.contact-icons {
    position: absolute; 
    top: 50%; 
    left: 11%; 
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    gap: 15px;
    z-index: 1000; 
    opacity: 0.3; 
}

.contact-icons a {
    display: inline-block;
    font-size: 30px;
    color: #BF40BF;
    transition: transform 0.3s ease-in-out, color 0.3s;
}

.contact-icons a:hover {
    color: white;
    transform: scale(1.2);
}


/* Contact Me Section */
#contact {
    
    display: flex;
  
    justify-content: left;
    align-items: left;
    text-align: left;
    max-width: 80%;
    height: 100vh;
}


#contact h2 {
    font-size: 5vw;
    font-weight: bold;
    color: #BF40BF;
    text-transform: lowercase;
    animation: glow 2.5s ease-in-out infinite;
}

#contact p {
    font-family: 'Roboto Mono';
    color: white;
    font-size: 1vw;
    max-width: 800px; 
    line-height: 1.8;
    margin-bottom: 20px;
    text-align: left;
    font-weight: 200;
}

.contact-container {
    max-width: 600px;
    margin: 0 auto;
}

#contact-form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    font-family: "Roboto Mono", monospace;
    text-transform: lowercase;
}

#contact-form input,
#contact-form textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-family: "Roboto Mono", monospace;
}

#contact-form button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
    font-family: "Roboto Mono", monospace;
}

#contact-form button:hover {
    background-color: #0056b3;
}
