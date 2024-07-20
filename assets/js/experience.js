AOS.init();

//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [{
        title: "Internship",
        cardImage: "assets/images/experience-page/SANTAROSA.png",
        place: "City Government of Santa Rosa",
        time: "HTML, CSS, JAVASCRIPT, BOOTSTRAP",
        desp: "Developed a government vaccination page aimed at facilitating the vaccination process for citizens, leveraging PHP and SQL to create dynamic forms that fetch and display real-time data from databases. The system records HPV, flu, pneumonia vaccines, with flexibility to add more types as needed, and includes tracking logs in the admin dashboard. Each vaccine type and dose is managed in separate database tables. The practicum project focuses on registration and data management for vaccinations, excluding features like appointment scheduling and integration with existing government systems",
    },
    {
        title: "Capstone",
        cardImage: "assets/images/experience-page/gg.png",
        place: "Green Guardian",
        time: "HTML, CSS, JAVASCRIPT, BOOTSTRAP, MYSQL, IOT",
        desp: "The project aims to design and implement an IT infrastructure incorporating IoT technology for real-time monitoring and detection of open plastic combustion in Barangay San Francisco and CENRO. It focuses on optimizing the digital citizen complaint process involving barangay and CENRO personnel in Binan's Barangay San Francisco community. Primary users include barangay personnel, CENRO personnel, and citizens. ",
    },
    {
        title: "Machine Problem",
        cardImage: "assets/images/experience-page/CSHARP.png",
        place: "Temperature and Humidity Calibration Monitoring System",
        time: "C#, ASP.NET, XAMARIN, MYSQL, IOT",
        desp: "A smart system utilizes IoT technology to track variations in temperature and humidity. It features LEDs that display the status of the machine, and includes a button that, when pressed, stabilizes the environment in response to detected changes.",
    },

];

const showCards2 = () => {
    let output = "";
    exp.forEach(
        ({ title, cardImage, place, time, desp }) =>
        (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
    );
    experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [{
        "title": "Aseprite",
        "cardImage": "assets/images/experience-page/aseprite.png",
        "description": "A powerful sprite editor for pixel art, game development, and animation, providing tools for creating detailed and vibrant designs."
    },
    {
        "title": "VS Code",
        "cardImage": "assets/images/experience-page/vscode.png",
        "description": "A popular, open-source code editor developed by Microsoft, known for its versatility, extensions, and robust debugging capabilities."
    },
    {
        "title": "Figma",
        "cardImage": "assets/images/experience-page/figma.png",
        "description": "A collaborative interface design tool that allows multiple users to design and prototype in real-time, streamlining the design workflow."
    },
    {
        "title": "Canva",
        "cardImage": "assets/images/experience-page/canva.png",
        "description": "An intuitive online graphic design platform that enables users to create stunning visuals, from social media posts to presentations, with ease."
    },
    {
        "title": "Adobe Photoshop",
        "cardImage": "assets/images/experience-page/adobeps.png",
        "description": "The industry-standard software for photo editing and graphic design, offering a wide range of tools for image manipulation and digital art creation."
    },
    {
        "title": "Adobe Premiere Pro",
        "cardImage": "assets/images/experience-page/adobepr.png",
        "description": "A leading video editing software used by professionals, providing advanced tools for editing, color correction, and video production."
    }
];

const showCards = () => {
    let output = "";
    volunteershipcards.forEach(
        ({ title, cardImage, description }) =>
        (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
    );
    volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [{
        title: "CompTIA Labs / Certificate",
        subtitle: "IT Fundamentals",
        image: "assets/images/experience-page/COMPTIA.png",
        desp: "Gain a solid foundation in essential IT concepts and skills with the CompTIA IT Fundamentals certification. This course covers basic computing, software development, database use, and IT infrastructure, preparing you for further studies or entry-level IT roles.",
        href: "assets/images/experience-page/compTIA proof.jpg"
    },
    {
        title: "NSE 1 / Certificate",
        subtitle: "Network Security Associate",
        image: "assets/images/experience-page/Fortinet.png",
        desp: "is an entry-level certification providing essential knowledge in network security. It covers basics like security policies, threat analysis, firewall operation, and key technologies, ideal for beginners in the field.",
        href: "assets/images/experience-page/Course_Completion_Certificate_NSE1.pdf"
    },
    {
        title: "NSE 2 / Certificate",
        subtitle: "Network Secuirty Associate 2",
        image: "assets/images/experience-page/Fortinet.png",
        desp: "advances skills in network security with topics like secure networking, VPNs, content filtering, and IPS. It targets professionals seeking to deepen their knowledge in implementing and managing robust network security solutions.",
        href: "assets/images/experience-page/Course_Completion_Certificate_NSE2.pdf"
    },
    {
        title: "NSE 2 / Certificate",
        subtitle: "Network Secuirty Associate 2",
        image: "assets/images/experience-page/Fortinet.png",
        desp: "advances skills in network security with topics like secure networking, VPNs, content filtering, and IPS. It targets professionals seeking to deepen their knowledge in implementing and managing robust network security solutions.",
        href: "assets/images/experience-page/Course_Completion_Certificate_NSE2.pdf"
    },
    {
        title: "Xaltius / Seminar",
        subtitle: "Cyber Security Webinar",
        image: "assets/images/experience-page/xaltius.png",
        desp: "Responsible for guiding 100s of participants globally in their first steps towards Applied Data Science and building end-to-end machine learning projects.",
        href: "assets/images/experience-page/xaltiusatt.jpg"
    },
    {
        title: "Goldstone Education / Seminar",
        subtitle: "A.I. Webinar",
        image: "assets/images/experience-page/goldstone.jpg",
        desp: "Hosted a webinar focused on Artificial Intelligence, providing insights and knowledge to participants on the latest AI technologies and their applications.",
        href: "assets/images/experience-page/goldstoneatt.jpg"
    },
];

const showCards3 = () => {
    let output = "";
    mentor.forEach(
        ({ title, image, subtitle, desp, href }) =>
        (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${href}" class="blog-slider__button">View</a>   
        </div>
      </div>
      `)
    );
    hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);