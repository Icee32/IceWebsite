AOS.init();

//  Tech Stacks cards

const techStackCards = document.querySelector(".techstack-box");
const techStack = [{
        langImage: "assets/images/techstack-page/webdev.png", // Replace with appropriate image
        langName: "Web Developer",
        langDesc: "<li>Builds interactive websites and applications using HTML, CSS, PHP, and JavaScript and Focuses on user experience and website performance.</li>"
    },
    {
        langImage: "assets/images/techstack-page/gamecon.png", // Replace with game development icon
        langName: "Aspiring Game Developer",
        langDesc: "<li>Enthusiastic about creating immersive game worlds.</li><li>Learning game development tools and engines and Passionate about storytelling and character development.</li>"
    },
    {
        langImage: "assets/images/techstack-page/pixelart.png", // Replace with pixel art icon
        langName: "Pixel Artist",
        langDesc: "<li>Creates detailed and visually appealing pixel art graphics.</li><li>Skilled in using pixel art software and tools and Passionate about retro-style and indie game aesthetics.</li>"
    },
    {
        langImage: "assets/images/techstack-page/ior.png", // Replace with IoT icon
        langName: "IoT Enthusiast",
        langDesc: "<li>Exploring the potential of IoT in various applications and Learning about hardware and software integration.</li>"
    },
    {
        langImage: "assets/images/techstack-page/html.png",
        langName: "HyperText Markup Language / HTML",
        langDesc: "<li>The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser</li>",
    },
    {
        langImage: "assets/images/techstack-page/css.png",
        langName: "Cascading Style Sheets / CSS",
        langDesc: "<li>Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML</li>",
    },
    {
        langImage: "assets/images/techstack-page/java.png",
        langName: "Java",
        langDesc: "<li>Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.</li>",
    },
    {
        langImage: "assets/images/techstack-page/javascript.png",
        langName: "JavaScript",
        langDesc: "<li>JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS</li>",
    },
    {
        langImage: "assets/images/techstack-page/PHP.png",
        langName: "PHP",
        langDesc: "<li>PHP is a popular general-purpose scripting language that is especially suited to web development. It is fast, flexible, and pragmatic, powering everything from blogs to the most popular websites in the world.</li>",
    },
    {
        langImage: "assets/images/techstack-page/python.png",
        langName: "Python",
        langDesc: "<li>Python is an interpreted high-level general-purpose programming language</li>",
    },
    {
        langImage: "assets/images/techstack-page/csharp.png",
        langName: "C#",
        langDesc: "<li>C# (C-sharp) is a modern, object-oriented programming language developed by Microsoft that runs on the .NET Framework. It is designed for building a variety of applications that run on the .NET Framework.</li>",
    },
    {
        langImage: "assets/images/techstack-page/cpp.png",
        langName: "C++",
        langDesc: "<li>C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language, or C with Classes</li>",
    },
    {
        langImage: "assets/images/techstack-page/bootstrap.png",
        langName: "Bootstrap",
        langDesc: "<li>Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development</li>",
    },
    {
        langImage: "assets/images/techstack-page/git.png",
        langName: "Git",
        langDesc: "<li>Git is software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development.</li>",
    },
];

const displayTechStacksCards = () => {
    const entireCardTemplate =
        techStack.map((stack) => {
            return `        
    <div class="row page-content techstackcards" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="0" data-aos-duration="400"> 
        <div class="tech_card">
            <div class="card_img">
                <img src ="${stack.langImage}" class="featured_image">
            </div>
            <div class="card_header">
                <header>
                    <div class="text-center langName">
                        <h4>${stack.langName}</h4>
                    </div>
                </header>
                <ul class="description">
                ${stack.langDesc}
            </ul>
            </div>
        </div>
    </div>
      `
        }).join('');
    techStackCards.innerHTML = entireCardTemplate;
};
// displayTechStacksCards(techStack)
document.addEventListener("DOMContentLoaded", displayTechStacksCards);