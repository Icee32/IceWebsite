AOS.init();

//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [{
        title: "Practicum",
        cardImage: "assets/images/experience-page/SANTAROSA.png",
        place: "City Government of Santa Rosa",
        time: "Software Development",
        desp: "developed a government vaccination page aimed at facilitating the vaccination process for citizens, leveraging PHP and SQL to create dynamic forms that fetch and display real-time data from databases. The system records HPV, flu, pneumonia vaccines, with flexibility to add more types as needed, and includes tracking logs in the admin dashboard. Each vaccine type and dose is managed in separate database tables. The practicum project focuses on registration and data management for vaccinations, excluding features like appointment scheduling and integration with existing government systems",
    },
    {
        title: "Capstone",
        cardImage: "assets/images/experience-page/gg.png",
        place: "Green Guardian",
        time: "Software Development",
        desp: "The project aims to design and implement an IT infrastructure incorporating IoT technology for real-time monitoring and detection of open plastic combustion in Barangay San Francisco and CENRO. It focuses on optimizing the digital citizen complaint process involving barangay and CENRO personnel in Binan's Barangay San Francisco community. Primary users include barangay personnel, CENRO personnel, and citizens. ",
    },
    {
        title: "Capstone",
        cardImage: "assets/images/experience-page/gg.png",
        place: "Scope and Limitations",
        time: "( )",
        desp: "<li>This study focuses on the digital optimization of the citizen complaint process involving barangay personnel and CENRO in the community of Barangay San Francisco, Binan. The primary users are the barangay personnel, CENRO personnel and Citizens.</li> ",
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
        "title": "Front-end Web-Developer",
        "cardImage": "assets/images/experience-page/Santarosa.png",
        "description": "Designed and implemented user-friendly web interfaces, ensuring seamless user experience and responsiveness."
    },
    {
        "title": "Back-end Web-Developer",
        "cardImage": "assets/images/experience-page/Santarosa.png",
        "description": "Developed and maintained server-side logic, and database management"
    },
    {
        "title": "Front-end Web-Developer",
        "cardImage": "assets/images/experience-page/gg.png",
        "description": "Developed and maintained server-side logic, and database management"
    },
    {
        "title": "Back-end Web-Developer",
        "cardImage": "assets/images/experience-page/gg.png",
        "description": "Developed and maintained server-side logic, and database management"
    },
    {
        "title": "Back-end Web-Developer",
        "cardImage": "assets/images/experience-page/Santarosa.png",
        "description": "Developed and maintained server-side logic, and database management"
    },
    {
        "title": "Back-end Web-Developer",
        "cardImage": "assets/images/experience-page/Santarosa.png",
        "description": "Developed and maintained server-side logic, and database management"
    },
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
        title: "NSE 1",
        subtitle: "Network Security Associate",
        image: "assets/images/experience-page/Fortinet.png",
        desp: "is an entry-level certification providing essential knowledge in network security. It covers basics like security policies, threat analysis, firewall operation, and key technologies, ideal for beginners in the field.",
        href: "assets/images/Course_Completion_Certificate_NSE1"
    },
    {
        title: "NSE 2",
        subtitle: "Network Secuirty Associate 2",
        image: "assets/images/experience-page/Fortinet.png",
        desp: "advances skills in network security with topics like secure networking, VPNs, content filtering, and IPS. It targets professionals seeking to deepen their knowledge in implementing and managing robust network security solutions.",
        href: "assets/images/Course_Completion_Certificate_NSE2"
    },
    {
        title: "Xaltius",
        subtitle: "Cyber Security Webinar",
        image: "assets/images/experience-page/xaltius.png",
        desp: "Responsible for guiding 100s of participants globally in their first steps towards Applied Data Science and building end-to-end machine learning projects.",
        href: "https://xaltius.tech"
    },
    {
        title: "Goldstone Education",
        subtitle: "A.I. Webinar",
        image: "assets/images/experience-page/goldstone.jpg",
        desp: "Hosted a webinar focused on Artificial Intelligence, providing insights and knowledge to participants on the latest AI technologies and their applications.",
        href: "https://www.facebook.com/goldstoneEDU?fref=mentions&paipv=0&eav=AfYWMWtYrfLN9XnLP6RyURuOEySbke6zpXOTj4ILRMKaBZ9E7c2hq-VZ7sZwhH7m9As&_rdr"
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
          <a href="${href}" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
    );
    hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);