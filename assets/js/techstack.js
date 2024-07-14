AOS.init();

//  Tech Stacks cards

const techStackCards = document.querySelector(".techstack-box");
const techStack = [{
        langImage: "assets/images/techstack-page/html.png",
        langName: "HyperText Markup Language",
        langDesc: "<li>The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser</li>",
    },
    {
        langImage: "assets/images/techstack-page/css.png",
        langName: "Cascading Style Sheets",
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
        langImage: "assets/images/techstack-page/Laravel.png",
        langName: "Laravel",
        langDesc: "<li>Laravel is a web application framework with expressive, elegant syntax. It is designed for web artisans to create seamless web applications with a robust and easy-to-understand structure.</li>"
    },
    {
        langImage: "assets/images/techstack-page/arduino.png",
        langName: "Arduino",
        langDesc: "<li>Arduino is an open-source electronics platform based on easy-to-use hardware and software. It is intended for anyone making interactive projects, allowing them to create digital devices and interactive objects that can sense and control objects in the physical world.</li>"
    },
    {
        langImage: "assets/images/techstack-page/xamarin.png",
        langName: "Xamarin",
        langDesc: "<li>Xamarin is an open-source platform for building modern and performant applications for iOS, Android, and Windows with .NET. It allows developers to use a single codebase to create cross-platform applications.</li>"
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