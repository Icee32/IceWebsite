AOS.init();

//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [{
        title: "Practicum",
        cardImage: "assets/images/experience-page/SANTAROSA.png",
        place: "Software Development",
        time: "(April 22, 2024 - present)",
        desp: "<li>Developed a vaccination page for the government, aimed at facilitating the vaccination process for the citizens.</li> <li>Leveraged PHP and SQL to create dynamic forms that seamlessly fetch and display relevant data from the database, enabling real-time updates and efficient data management.</li>",
    },
    {
        title: "Practicum",
        cardImage: "assets/images/experience-page/SANTAROSA.png",
        place: "Scope and Limitations",
        time: "(April 22, 2024 - present)",
        desp: "<li>Focuses on registration and data management. </li> <li>Excludes features like appointment scheduling or integration with existing government systems.</li> ",
    },
    {
        title: "Capstone",
        cardImage: "assets/images/experience-page/gg.png",
        place: "Software Development",
        time: "(April 22, 2024 - present)",
        desp: "<li>We aim to design, develop, and integrate an IT infrastructure equipped with IoT-based system for the real-time monitoring, management, and detection of open plastic combustion location detection within Barangay San Francisco and CENRO.</li> ",
    },
    {
        title: "Capstone",
        cardImage: "assets/images/experience-page/gg.png",
        place: "Scope and Limitations",
        time: "(April 22, 2024 - present)",
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
const volunteershipcards = [
    /*{
            title: "GirlScript Summer Of Code 2020",
            cardImage: "assets/images/experience-page/1.jpg",
            description: "Responsible for handling the projects GirlScript App and GirlScript Website Boilerplate.",
        },
        {
            title: "StudentCode-in 2020",
            cardImage: "assets/images/experience-page/2.jpg",
            description: "Responsible for handling open source contributions for the project Awesome Developer Portfolio.",
        },
        {
            title: "PClub Summer Of Code 2020",
            cardImage: "assets/images/experience-page/3.jpg",
            description: "Mentoring for the projects Deep Pixel, AutoVaidya, Just Resume and Doc2pen.",
        },
        {
            title: "Hakin-Codes",
            cardImage: "assets/images/experience-page/4.jpg",
            description: "Mentoring for the open source projects Deeppixel, Awesome Developer Portfolios and Doc2Pen.",
        },*/
    {
        "title": "Front-end Web-Developer",
        "cardImage": "assets/images/experience-page/Santarosa.png",
        "description": "Designed and implemented user-friendly web interfaces, ensuring seamless user experience and responsiveness."
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
    /*{
        title: "WaffleHacks",
        subtitle: "Judge",
        image: "assets/images/experience-page/wafflehacks.png",
        desp: "WaffleHacks 2021 is an upcoming 48-hour student-organized hackathon with an aim to bring technical solutions to local communities and small businesses.",
        href: "https://wafflehacks.org/",
    },*/
    /*{
        title: "Elevate Tech",
        subtitle: "Judge",
        image: "assets/images/experience-page/elevate.png",
        desp: "Elevate Hacks is an upcoming all-female virtual hackathon coming from AUGUST 14th to 15th.",
        href: "https://elevatetech.codes/",
    },*/
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