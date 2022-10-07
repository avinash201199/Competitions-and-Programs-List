// line 3 - 897 contains data for the page
// @DOM_Manipulation and @functionality code starts at @line_901



// structure of the @Object in Array:
// {
//     id: (an number in increasing order, follow the sequence),
//     title: (title of the event / program / competitions same as in the github's README.md file),
//     about: (about  the event),
//     siteUrl: ( official or any other link of the event),
//     Youtube: (link to video of the event on youtube)
// }

// NOTE: All the keys and properties of the @Object are important. @Youtube key is optional, in case if you don't have this. 


const data = [
    {
        
        title: "30 Days of Google Cloud by Google",
        about:
            '30 Days of Google Cloud program will provide you an opportunity to kickstart your career in cloud and get hands-on practice on Google Cloud - the tool that powers apps like Google Search, Gmail and YouTube.Along the way, you will learn & practice concepts like computing, application development, big data & machine learning using cloud & if you get stuck, you will have your "Campus Facilitators" who are specially trained on Google Cloud to help. 😎',
        siteUrl: "https://events.withgoogle.com/30daysofgooglecloud/#content",
        YouTube: "https://www.youtube.com/watch?v=r3qElNn2IZQ",
    },
    {
      
        title: "Adobe Analytics Challenge",
        about:
            "The Adobe Analytics Challenge is a unique analytics-focused business case competition where university students are given the opportunity to use Adobe’s industry-leading analytics products and access to real-world data from leading organizations such as Nike, Major League Baseball, T‑Mobile, Starwood, Lenovo, Condé Nast, Comcast, Overstock.com, Backcountry.com, Sony PlayStation, and MGM Resort International. ",
        siteUrl: "https://www.adobeanalyticschallenge.com/",
        YouTube: "https://www.youtube.com/watch?v=1fNx08ONKkM",
    },
    {
        
        title: "Adobe Express Community",
        about:
            "The Adobe Express community of like-minded business owners, online marketers, and content creators will help you find what it takes to become an expert at Adobe Express. Boost your content confidence with workshops and more for honing your skills in business and design.Empower your community to grow their businesses and stand out with Adobe Express. Tap into rewards from exclusive merchandise to free access to Adobe Express Premium.",
        siteUrl: "https://www.adobe.com/express/ambassadors/",
        YouTube: "https://www.adobe.com/express/ambassadors/list",
    },
    {
        
        title: "Adobe India Women-in-Technology Scholarship",
        about:
            "Adobe India Women-in-Technology Scholarship is for Indian females enrolled in a formal technology program in computer science, computer engineering, or a closely related technical field. The scholarship offered by Adobe Research aims to recognize outstanding female students in the field of technology. The scholarship focuses on creating gender equality in the science and engineering domain by encouraging women to excel in computing and technology.",
        siteUrl:
            "https://research.adobe.com/adobe-india-women-in-technology-scholarship/",
        YouTube: "https://www.youtube.com/watch?v=eF6ek2j5gfE",
    },
    {
        title: "Advent of Code",
        about:
            "Advent of Code is an Advent calendar of small programming puzzles for a variety of skill sets and skill levels that can be solved in any programming language you like. People use them as a speed contest, interview prep, company training, university coursework, practice problems, or to challenge each other.You don't need a computer science background to participate - just a little programming knowledge and some problem solving skills will get you pretty far. Nor do you need a fancy computer; every problem has a solution that completes in at most 15 seconds on ten-year-old hardware. Advent of Code is a registered trademark in the United States.",
        siteUrl: "https://adventofcode.com/",
        YouTube: "https://www.youtube.com/watch?v=QAwQ8eKBpYw",
    },
    {
        title: "Alexa Prize by Amazon",
        about:
            "The Alexa Prize, launched in 2016, is a competition for university students dedicated to advancing the field of conversational AI. Teams are challenged to design socialbots that Alexa customers can interact with via Alexa-enabled devices. Their ultimate goal is to meet the Grand Challenge: earn a composite score of 4.0 or higher (out of 5) from the judges, and have the judges find that at least two-thirds of their conversations with the socialbot in the final round of judging remain coherent and engaging for 20 minutes. ",
        siteUrl: "https://developer.amazon.com/alexaprize",
        YouTube: "https://www.youtube.com/watch?v=nVi-QwX82GI",
    },
    {
        title: "Amazon WOW",
        about:
            "Amazon WoW is a networking platform for all women engineering students in India that connects them to Amazon leaders, recruiters, and the broader Amazon community. The platform provides an opportunity to participate in skill building sessions, utilize available resources, converse with alumni on their career experiences, and be acquainted with the culture at Amazon. The objective is to help women students build long-term career in technology. Amazon WoW is open to all women students across engineering campuses in India. Any women student who is currently pursuing a four-year B.Tech/BE or two-year MCA, M.Tech/ME program or five year Dual Degree can participate.",
        siteUrl: "https://amazonwowindia.splashthat.com/",
        YouTube: "https://www.youtube.com/watch?v=dRAVWI8UZlo",
    },
   
    {
        title: "Atlassian Women in Tech",
        about:
            "Atlassian Women in Tech is a networking platform for all women engineering students that connects them to Atlassian leaders, recruiters, and the broader Atlassian community.This is a wonderful initiative to empower women in tech. It is open to all young women in the country, regardless of their college,thus providing a fair opportunity for everyone.The event was well-planned with informative sessions and Q&As to help to prepare you for a smooth interview process.In this program you learned more about Atlassian's products, values, and assessment tools which helped you better to prepare for your interview.The objective is to help women students build long-term career in technology.",
        siteUrl: "https://womenintech.girlscript.tech/",
        YouTube: "https://www.youtube.com/watch?v=f8VcKV4IvhM",
    },
    {
        title: "Bubble Cup",
        about:
            "Bubble Cup is an international team coding competition aimed at university and high school students. It is a coding contest started by Microsoft Development Center Serbia in 2008 with a purpose of creating a local competition similar to the ACM Collegiate Contest, but soon that idea was overgrown and the vision was expanded to attract talented programmers from the entire region and promote the values of communication, companionship and teamwork. Since Bubble Cup 10 (2017), Bubble Cup is being co-organized by Petlja Foundation. The competition consists of two parts – two online qualifying rounds in the spring and the final round in Belgrade in September.",
        siteUrl: "https://www.bubblecup.org/",
        YouTube: "https://www.youtube.com/watch?v=Jkul-W1KBTk",
    },
    {
        title: "Capgemini Tech Challenge",
        about:
            "Capgemini Tech Challenge is one of the largest hackathons in India. Over 7.5 Lakh people have been a part of this challenge in the last seven years, 35% of them being women. Last year, only the finest lot of the registered participants made it to the finale.In case you are wondering what’s in store for you: There are prizes worth INR 20, 00, 000* A chance to land your dream job* at Capgemini Exclusive mentoring from the tech wizards of Capgemini An opportunity to showcase your tech skills in front of a C- suite jury;n the celebrated leaders from the start - up, academia and IT industry.",
        siteUrl: "https://techchallenge.in.capgemini.com/",
        YouTube: "https://www.youtube.com/watch?v=Q-JFUzGSWT8",
    },
    {
        title: "Code For Good",
        about:
            "Use your coding skills to make a difference At our Code for Good hackathon, you'll collaborate with other coders to develop innovative technology solutions for not-for-profit organizations. You'll also learn about starting a Technology career with us while being guided by the sharpest minds in our industry. ",
        siteUrl:
            "https://careers.jpmorgan.com/in/en/students/programs/code-for-good?search=&tags=location__AsiaPacific__India",
        YouTube: "https://www.youtube.com/watch?v=IIzfQqX4QDo",
    },
    {
        title: "Code Jam by Google",
        about:
            "Google Code Jam is an international programming competition hosted and administered by Google.[2] The competition began in 2003.[3] The competition consists of a set of algorithmic problems which must be solved in a fixed amount of time. Competitors may use any programming language and development environment to obtain their solutions. ",
        siteUrl: "https://codingcompetitions.withgoogle.com/codejam",
        YouTube: "https://www.youtube.com/watch?v=ey5XU4MU6VQ",
    },
    {
        title: "Code Gladiators ",
        about:
            "Code Gladiators is a TechGig hackathon presented by Cognizant. This hackathon continues for 4 months where an individual can write, compile and run code in a live coding environment provided by the application. The total prize pool at Code Gladiators worths Rs 50 Lakh. Due to the pandemic, this hackathon is hosted over a virtual platform. The registration of the TechGig Code Gladiators initiated during summers of every year. After a user completes the registration process 2 coding problems will be available to solve. The highest score regardless of unbound attempts will be considered as the final score. ",
        siteUrl: "https://www.techgig.com/codegladiators",
    },
    {
        title: "Code Jam to I/O for Women",
        about:
            "At Google, we’re committed to building for everyone, and we know that a diversity of voices leads to better outcomes. We’re committed to increasing representation and building community in the online coding contest space and at Google I/O, our largest developer conference. Code Jam to I/O for Women is one way we bring women (students and professionals) from around the globe together, working to solve tough algorithmic challenges in a 2.5 hour, single-round coding competition. The top 150 on the scoreboard will receive a ticket and a stipend to participate in virtual Google I/O. ",
        siteUrl: "https://codingcompetitions.withgoogle.com/codejamio",
        YouTube: "https://www.youtube.com/watch?v=Q_2TwBhqHPg",
    },
    {
        title: "Codechef SnackDown",
        about:
            "SnackDown is a global programming event that invites programmers from all over the world to take part in India’s most prestigious multi-round programming competition. Hosted by CodeChef, SnackDown is open to anyone with a knack for programming and began in the year 2010. SnackDown aims to pit the finest programming brains from different parts of the globe against each other. Everyone from middle/high school to college to working professionals from the industry can attempt to take home the coveted crown of SnackDown champion.",
        siteUrl: "https://snackdown.codechef.com/",
        YouTube: "https://www.youtube.com/watch?v=6GIw04ieGv4",
    },
    {
        title: "Coderita 2.0 by GeeksforGeeks",
        about:
            "Coderita 2.0 is a 1- Day online coding contest that is designed only for the female coders (Yes! only for Women) to appreciate their programming skills.Every year this contest helds on Women's Day.",
        siteUrl:
            "https://www.geeksforgeeks.org/coderita-online-coding-competition-for-women-by-geeksforgeeks/",
    },
    {
        title: " Codiva by Adobe ",
        about: `Codiva is a hackathon conducted by Adobe exclusively for women. Students who are in their final or pre-final years can be a part of this. The top-performing candidates are eligible for an interview for either an internship or full-time employment. And the packages offered by Adobe are going to be a great boost to the overall average package at your college. 
            Prizes
1st prize – iPhone 8

2nd prize – Apple iPad Air 2

3rd prize – Bose Bluetooth Speakers

4th to 20th Place – Online gift vouchers worth Rs. 2000

Top 50 participants – Adobe branded T-shirts

Top 20 contestants will get a chance to interview with Adobe for Internship or Full-time position depending on eligibility

Prizes will be rewarded to only women participants who have given the consent to share their information with Adobe 
            `,
        siteUrl: "https://www.hackerrank.com/adobe-codiva/",
    },
    {
        title: "Cook-off by CodeChef ",
        about:
            "Cook-off is an amazing 2.5 hours long coding competition held by Codechef every month. This competition helps improve your analytical and problem solving skills. ",
        siteUrl: "https://www.codechef.com/COOK134",
        YouTube:
            "https://www.youtube.com/playlist?list=PLQXZIFwMtjoxrJvVaqoGlFYJRwUCHUq1t",
    },
    {
        title: "D.E. Shaw Mentorship Program ",
        about: `DESIS ASCEND EDUCARE is a program for women in tech that focuses on helping participants enhance their skills from D.E. Shaw Private Limited. Those who take part can receive mentorship in various technical and non-technical areas from subject matter experts, and get first-hand industry exposure, networking opportunities, and much more.
            Eligibility Criteria:

- The program is open to women who are:
• In their 3rd year of a full-time 4-year engineering course in Computer Science or related branches (IT, software engineering, etc.).
• In their 2nd year of a full-time 4-year engineering course in Computer Science or related branches (IT, software engineering, etc.).`,
        YouTube: "https://www.youtube.com/watch?v=96AtHaKpilQ&t=533s",
    },
    {
        title: "DevFest India by Google Developers Group",
        about:
            "DevFest India is the annual developer’s fest organized by Google Developers Group.Are you someone who’s looking to enhance your skills, who believes in lifting others as you climb? Are you someone frustrated with fixing bugs ? Or do you just want peer learning? This year, we have a safe space for everything. While learning about different technologies at DevFest India 2021 and getting job-ready, you can enlighten your mind with flash talks, create your profile for peer learning, make your own badges, and win exciting gifts! ",
        siteUrl: "https://devfestindia.com/",
        YouTube: "https://www.youtube.com/watch?v=U8SQZh6rHow",
    },
    {
        title: "Discovery Fellowship",
        about: `Since 2016, the D. E. Shaw group has hosted fellowship programs for students interested in learning from diverse, talented leaders who are at the top of their fields.

Eligibilty: Open to women in their sophomore year of a full- time undergraduate program at a U.S.college or university.`,
        siteUrl: "https://fellowships.deshaw.com/",
    },
    {
        title: "Doodle 4 Google",
        about:
            "Submit a design to Google for a chance to have your artwork appear on millions of computer screens as the Google Logo. Google also provides $30,000 college scholarship and $50,000 technology award for school students",
        siteUrl: "https://doodles.google.com/d4g",
    },
    {
        id: 103,
        title: "Exercism",
        about: "The website differs from other coding platforms by requiring students to download exercises through a command line client, solve the code on their own computers then submit the solution for feedback, at which point they can also view other's solutions to the same problem. A lot of quizes and question based on every difficult levels are available on the exercism website. Also it looks very fancy and enjoyable to code. The Exercism codebase is open source, consisting of over 50 repositories, containing website code, API code, command-line code and over 40 stand-alone repositories for different language tracks. More than 1 Million students practice questions on the website and more than 3 lakh Mentoring Discussions have been made on this website.",
        siteUrl: "https://exercism.org/",
        YouTube: "https://youtu.be/BNfyAYlN8s4",
    },
    {
        id: 23,
        title: "e-Yantra Robotic Competition by IIT Bombay",
        about: `The e-Yantra Robotics Competition (eYRC) is the flagship initiative of the e-Yantra project. The competition is open to students from an engineering or polytechnic background and comprises 2 stages spanning over 6-7 months. The competition comprises 2 stages, from which Stage 1 is open to all and is a Robotics MOOC (Massive Online Open Course). During the competition, the participating teams are allotted “themes" with varying levels of complexity that are abstractions of real- world problems.A selected cohort from Stage 1 is admitted into Stage 2. The leading 5 - 6 teams from Stage 2 are hosted for the National Finals at IIT Bombay in March every year where they demonstrate their projects before a jury.! `,
        siteUrl: "https://portal.e-yantra.org/",
        YouTube: "https://www.youtube.com/watch?v=VXgX-qQnTZU",
    },
    {
        title: "Figma Student Leader",
        about: `They are constantly inspired by students who use Figma both inside and outside of the classroom. We believe creating community while studying is an important part in growing and learning. Their Student Leaders facilitate a space for students to connect, grow, and learn.

If you’re interested in becoming a Student Leader and starting a group at your school, They want to hear from you!
.`,
        siteUrl: "https://friends.figma.com/become-a-student-leader/",
    },
    {
        title: "Flipkart GRiD",
        about: `GRiD is Flipkart’s Flagship Engineering Campus Challenge which provides you the opportunity to apply your technical knowledge and skills, to compete and complete key challenges.It brings Live Problem Statements from the world of E-Commerce.This challenge comprises of total 4 different levels out of which 3 are elimination rounds to test you on your technical, analytical, and ideation skills before the Grand Finale where the Finalists will get to present their solutions to the Panel of Domain Experts at Flipkart.
In the third edition of Flipkart GRiD there were three tracks namely-
1.) Software Development Track
2.) Information Security Track
3.) Robotics Track
One team or student can only register in either Software Development or Information Security Challenge. Robotics Challenge is open for all students and teams including those who have already registered for either Software Development or Information Security Challenge.
Attractive prizes could be won with a cash prize pool of INR 6,00,000. Top Teams from each track get GRiD goodies! PPI opportunities, tech internships and a chance to appear for Flipkart Hiring Process is given to all top-performing students. `,
        siteUrl:
            "https://dare2compete.com/festival/flipkart-grid-30-flipkart-12310",
        YouTube: "https://youtu.be/ZOSH8tXbJao",
    },
    {
        title: "Flipkart Runway",
        about: `Flipkart Runway is Flipkart's early career program for women engineers. It aims at laying an early foundation for women in engineering by giving them early exposure to developmental opportunities through challenging & real-time problem statements, mentoring, and networking opportunities. Open to all women engineers who are in 2nd year of their engineering course. Selected students will get an opportunity to intern with Flipkart . `,
        siteUrl:
            "https://dare2compete.com/competition/flipkart-runway-flipkart-157441",
        YouTube:
            "https://dare2compete.com/competition/flipkart-runway-flipkart-157441",
    },
    {
        title: "Flipr Hackathon",
        about: `Flipr conducts hackathons in android and web frequently. Flipr hackathon has proven to be a simple and effective way for students to upscale their career. All they have to do is code and prove themselves. 10000+ Students have taken the challenge and have been mentored a step forword towards their goal. Upcoming hackathon from flipr is from 12th to 14th November. Registrations has already started. `,
        siteUrl: "https://flipr.ai/",
    },
    {
        title: "Generation Google Scholarship (Aisa Pacific) ",
        about: `Generation Google Scholarship for women in computer science was established to help students pursuing computer science degrees excel in technology and become leaders in the field. Applicable only for 2nd year girls in a Bachelor's degree. Selected students will receive $1,000 USD. Generation Google Scholarship for women in computer science will be awarded based on the strength of each candidate's commitment to diversity, equity and inclusion, innovation and academic performance. The program is open to students who meet all the minimum qualifications and we strongly encourage women interested in computer science to apply.`,
        siteUrl:
            "https://buildyourfuture.withgoogle.com/scholarships/generation-google-scholarship-apac/",
        YouTube: "https://www.youtube.com/watch?v=YzBJxCpPZS8",
    },
    {
        title: "GirlScript Summer of Code",
        about: `GirlScript Summer of Code is the 3 month long Open Source program during summers conducted by GirlScript Foundation, started in 2018, with an aim to help beginners get started with Open Source Development while encouraging diversity. Throughout the program, participants contribute to different projects under guidance of experienced mentors. Top participants get exciting goodies and opportunities.
GirlScript Summer of Code 2020 witnessed overwhelming participation and 2021 edition will carry the legacy forward while promising to be even more impactful and grand. `,
        siteUrl: "https://gssoc.girlscript.tech/",
        YouTube: "https://www.youtube.com/watch?v=1KXH58pcslU",
    },
    {
        title: "GirlScript Winter of Contributing",
        about: `GirlScript Winter of Contributing is a three-month newly established initiative by GirlScript Foundation to be conducted during winters. GWOC encourages individuals to share their knowledge and ideas to develop technical skills and gain valuable experience in the field of tech education. Over the course of the program, participants can contribute to a variety of themes under the guidance of an expert facilitator. and grand. `,
        siteUrl: "https://gwoc.girlscript.tech/",
        YouTube: "https://www.youtube.com/watch?v=LwglfLv5otA",
    },
    {
        title: "Github Campus Expert",
        about: `Campus Experts are student leaders that strive to build diverse and inclusive spaces to learn skills, share their experiences, and build projects together. They can be found across the globe leading in-person and online conferences, meetups, and hackathons, and maintaining open source projects.
Get training and support from GitHub
As local leaders, Campus Experts know the challenges students on their campuses face. With the GitHub Campus Experts training, you’ll learn technical and professional skills—like public speaking, technical writing, community leadership, and software development—that will help you build a strong technical community, teach valuable skills, create new opportunities for your student community, and position your institution within a global community of student leaders. `,
        siteUrl: "https://education.github.com/experts",
        YouTube: "https://www.youtube.com/watch?v=9-h_d-56IXk",
    },
    {
        title: "Github India Externship",
        about: `The GitHub Externship is a 90-day fellowship program for third or pre-final year students of GitHub Campus Partner schools. The initiative provides hands-on learning with practical and on ground experience. It's collaborative, remote, and happens under the guidance of expert mentors. `,
        siteUrl: "https://externship.github.in/",
        YouTube: "https://www.youtube.com/watch?v=34YdIU4GQs4&t=2526s",
    },
    {
        title: "GitKraken Ambassador Program",
        about: `GitKraken Ambassadors are a group of professionals from all around the world who love sharing their knowledge about Git and the GitKraken Git Client. They are passionate about learning and sharing technical expertise by creating articles, videos, and other content.
GitKraken Ambassadors are building their personal brands by creating world-class, technical content to share with a global GitKraken audience. By working with the GitKraken team, you can hone your writing talents, refine your video production abilities, and amplify your reach to millions of software developers.  `,
        siteUrl: "https://www.gitkraken.com/ambassador",
        YouTube: "https://www.youtube.com/watch?v=PJ-2Af-PSGM",
    },
    {
        title: "GitLab Hackathon",
        about: `The Hackathon is a virtual event open to anyone who is interested in contributing code, documentation, translations, UX designs and more to GitLab. By participating in GitLab's Hackathon, you have the opportunity to work on issues that matter to you and advance your skills/experience while joining a global, diverse and inclusive team of contributors and GitLab team members. For this Hackathon, we are introducing the following contribution areas: Website, Security, Front-end, Back-end, Documentation. Prizes are awarded to participants for having Merge Requests (MRs) merged that contribute to the issues/epics linked below on each contribution area.`,
        siteUrl: "https://about.gitlab.com/community/hackathon/",
        YouTube: "https://www.youtube.com/watch?v=4K47L8Q0pwo&t=17s",
    },
    {
        title: "GoogleCloudReady Facilitator Program",
        about: `The GoogleCloudReady Facilitator program will provide you an opportunity to kickstart your career in cloud and get hands on practice on Google Cloud - the tool that powers apps like Google Search, Gmail and YouTube.

Along the way, you will learn & practice concepts like computing, application development, big data & machine learning using cloud & if you get stuck, you will have your "Facilitators" who are specially trained on Google Cloud to help. The program will introduce you to Computing, Application Development, Big Data & Machine Learning using Google Cloud's training platform called Qwiklabs where you will learn each of these topic using self-paced labs that provides you temporary credentials to Google Cloud Platform, so you can learn the cloud using the real thing – no simulations.`,
        siteUrl:
            "https://events.withgoogle.com/googlecloudready-facilitator-program/",
        YouTube: "https://www.youtube.com/watch?v=lIEADL2wD6I",
    },
    {
        title: "Google Capture The Flag",
        about: `The world’s best cyber hacking competition GoogleCTF. This contest consists of two events where the first event is a qualifier round. Here they cover a wide area of security exercises to test the security skills of the participants. From this first round, Google selects a number of teams to participate in the final round that will be held at the on-site location of Google office.

The top 10 teams invited to the finals, compete onsite for a prize pool of more than USD $31,337.
`,
        siteUrl: "https://capturetheflag.withgoogle.com/",
        YouTube: "https://www.youtube.com/watch?v=UL5wWt0Pwp4",
    },
    {
        title: "Google Developer Student Clubs",
        about: `Helping students bridge the gap between theory and practice Google Developer Student Clubs are community groups for college and university students interested in Google developer technologies. Students from all undergraduate or graduate programs with an interest in growing as a developer are welcome. By joining a DSC, students grow their knowledge in a peer-to-peer learning environment and build solutions for local businesses and their community. [What does a lead do?] Start a club Work with your university to start a student club. Select a core team and faculty advisor to support. event_availability [Host workshops] Grow student knowledge on developer products and platforms through hands-on workshops and events. developer_mode [Build projects] Identify local partners to work with and lead project building activities.`,
        siteUrl: "https://developers.google.com/community/dsc/",
        YouTube: "https://www.youtube.com/watch?v=earTjC0iSjg",
    },
    {
        title: "Google Online Challenge",
        about: `Google’s Online Challenge is a platform that presents a fair, unbiased opportunity for you to engage in Google's hiring process. By participating in a timed online challenge, Google gains a better understanding of your skills while also providing you with insight into Google's hiring process. If you’re looking for a place that values your curiosity and desire to learn, seeking colleagues who are big thinkers and you’re eager to take on fresh challenges as a team, Google’s Online Challenge could take you one step closer to becoming a Googler.
`,
        siteUrl: "https://onlinechallenge.withgoogle.com/",
    },
    {
        title: "Google Maps Platform Hackathon",
        about: `Google Maps Platform allows developers to create unique location-based experiences using our APIs & SDKs. Now is your chance to build or expand an existing app to incorporate rich location experiences using the latest APIs and push the boundaries of what is possible with their platform.
In this hackathon they invite you to use Google Maps Platform APIs and SDKs. Build a unique app in one of the following categories.

Map Customization
Use Cloud-based map styling to create custom map styles for real-time updates across all devices and platforms. The new Cloud-based map styling makes it easy to tailor experiences for specific industries or customer needs with hundreds of customization types.

Data Visualization
Let data tell a unique story. Help make decisions and improve overall operational efficiencies by displaying data on your map.

Mobile App
Use Google Maps Platform mobile SDKs to connect your mobile app and the real world. Leverage mobile SDKs to build dynamic, interactive, geospatial experiences for your mobile app.

User Experience
Provide a unique experience for your app users with Google Maps Platform APIs and tools. Whether it’s unique transit information, a delivery game, or beyond, discover the breadth of capabilities Google Maps Platform has to offer.`,
        siteUrl:
            "https://googlemapsplatform.devpost.com/?ref_feature=challenge&ref_medium=discover",
        YouTube: "https://www.youtube.com/watch?v=kA679ERgBV4",
    },
    {
        title: "Google Step Intern",
        about: `STEP (Student Training in Engineering Program), formerly known as Engineering Practicum, is a 12-week internship for first and second-year undergraduate students with a passion for computer science. The internship program has a focus of providing development opportunities to students from groups historically underrepresented in tech, through technical training and professional development. Our unique internship offers the opportunity to work on a software project alongside other STEP interns and full-time Googlers, and provides the chance to bridge the gap between academic understanding and practical professional experience.

There are two program date options (must be available for the entirety of the program): May 25 - August 12, 2022 June 13 - September 2, 2022 For Indian Nationals Applications are out in November.`,
        siteUrl: "https://buildyourfuture.withgoogle.com/programs/step/",
        YouTube: "https://www.youtube.com/watch?v=psDqdNNZMfA",
    },
    {
        title: "Google Kick Start",
        about: `Google Kickstart, formerly known as APAC is a test designed to hire people who are looking for a career in Google. The major difference between its former form and Kickstart is that there will be more testing rounds than before and is targeted to any age group rather than graduating students. `,
        siteUrl: "https://codingcompetitions.withgoogle.com/kickstart/",
    },
    {
        title: "Google Summer of Code by Google",
        about: `Google Summer of Code (GSoC) is a global program that matches students with open source, free software and technology-related organizations to write code and become part of these communities while making some money along the way! The organizations provide mentors who act as guides through the entire process, from learning about the community to contributing code. The idea is to get students involved in and familiar with the open source community and help them to put their summer break to good use.

Accepted students gain exposure to real-world software development and employment opportunities in areas related to their academic pursuits. Participating organizations are able to identify and bring in new developers to their communities who will hopefully stay involved long after their GSoC year ends. Best of all, more source code is created and released for the use and benefit of all; all code produced as part of the program is released under an open source license. The fact that you get to write code that people from all over the world can use - how cool is that! `,
        siteUrl: "https://summerofcode.withgoogle.com/",
        YouTube: "https://www.youtube.com/watch?v=YdqhIScmRVA",
    },
    {
        title: "Google Season of Docs by Google",
        about: `Season of Docs provides support for open source projects to improve their documentation and gives professional technical writers an opportunity to gain experience in open source. Google and students raise awareness of open source, of docs, and of technical writing. `,
        siteUrl: "https://developers.google.com/season-of-docs/",
        YouTube: "https://www.youtube.com/watch?v=fyy2Mr84vNM",
    },
    {
        title: "Global Coding Challenge by Credit Suisse",
        about: `The Global Coding Challenge is an online coding competition between participants across the globe. Around 3 weeks, users will be able to attempt solutions to nine coding problems. Participants can improve their code as many times as they like during the competition. After the completion of the competition, the Leaderboards will lock and the Global Coding Champion will be announced shortly. The competition has been entirely designed, built and run by Credit Suisse TAs.

Competition is split across 7 regions: UK, USA & Canada, Europe, India, Southeast Asia, Switzerland, and the rest of the world.9 original questions, ranging from easy to hard, to be answered using any of 6 popular programming languages.There are prizes for the best individual coder globally, the top 3 coders of all 7 regions.

Don't miss the chance to grab exciting prizes including MacBook Pro, iPhone, iPad Pro and much more! In the past competitions, students who have participated and done well have also joined the Credit Suisse team on a Summer Internship or as Technical Analysts. `,
        siteUrl: "https://www.credit-suisse.com/pwp/hr/en/codingchallenge/#/",
        YouTube: "https://youtu.be/cJgwxMxNDCU",
    },
    {
        title: "HackerCup by Facebook",
        about: `Hacker Cup is Facebook's annual open programming competition. Open to participants around the world, participants are invited to apply problem-solving and algorithmic coding skills to advance through each year’s online rounds, win prizes, and have a chance to make it to the global finals and win the grand prize.`,
        siteUrl: "https://www.facebook.com/codingcompetitions/hacker-cup",
        YouTube: "https://www.youtube.com/watch?v=SA91yNdx_e0",
    },
    {
        title: "HackCbs 5.0 by Hack2Skill",
        about: `hackCBS 5.0, a legacy being carried forward by like-minded individuals aims to collaborate the intellects of programmers, designers, application developers, tech-geeks, and newbies in the world of programming for the intensive development of a hack.
At hackCBS, we help you turn your ideas into reality by providing a comforting and welcoming environment. You’ll have all the freedom to create a product, learn new things, and have hilariously funny moments with your friends. Moreover, we’ll offer you a chance to network with working professionals and hacker community leaders. You will never learn faster than you will at a hackathon. `,
        siteUrl: "https://hack2skill.com/hack/hackcbs",
        YouTube: "https://www.youtube.com/watch?v=tDcEn5Mu6nE",
    },
    {
        title: "HackerRank Contests",
        about: `If you are a beginner and want to develop basic concept then I will suggest you go with this website because they have some good problems for beginners which is sorted level wise i.e. you will get problems in increasing difficulty level. And by applying some basic logic you will able to crack them. And also we can say this is they have a good beginner-friendly environment.

They also divide problems topic wise manner e.g. In case you just completed for loop concept and want to solve the problem on that then you can. And they have some other features like 30 Days of codes or recently they publish a new section i.e. interview preparation where you will get some videos related to technical interview rounds.

The main domain they cover: Algorithms, Mathematics, SQL, Functional programming, AI and more.`,
        siteUrl: "https://www.hackerrank.com/contests",
    },
    {
        title: "Hacktoberfest by DigitalOcean",
        about: `Hacktoberfest is the month-long event held in October, to celebrate open source software. For the past seven years DigitalOcean along with its partners (including DEV) has run the campaign to promote opensource. The first 70,000 participants to complete the challenge will receive a bunch of free SWAG, including a limited edition Hacktoberfest t-shirt as a reward.`,
        siteUrl: "https://hacktoberfest.digitalocean.com/",
        YouTube: "https://www.youtube.com/watch?v=mq_FIHdxmIk",
    },
    {
        title: "HackwithInfy by Infosys",
        about: `HackWithInfy is a coding competition for final-year engineering students across India. This program is specially designed to inculcate a culture of rapid problem-solving and innovative thinking early in academic life. HackWithInfy provides the perfect stepping-stone for students to explore their interest in programming and an opportunity to compete and win exciting prizes.
The top performers also get a chance to work with Infosys. The top three winning teams of HackWithInfy 2021 won a cash prize of INR 200,000, INR 100,000, and INR 50,000 respectively. `,
        siteUrl: "https://www.infosys.com/careers/hackwithinfy.html",
        YouTube: "https://www.youtube.com/watch?v=8qdmvPCrbYU",
    },
    {
        title: "Hash code by Google",
        about: `Hash Code is a team programming competition, organized by Google, for students and professionals around the world. You pick your team and programming language and we pick an engineering problem for you to solve. This year’s contest kicks off with an Online Qualifications, where your team can compete virtually from wherever you’d like, alongside your virtual Hub. Top teams will then be invited to compete from our virtual World Finals.
`,
        siteUrl: "https://codingcompetitions.withgoogle.com/hashcode",
        YouTube: "https://www.youtube.com/watch?v=j5Q7gVtTy3M",
    },
    {
        title: "HP CodeWars",
        about: `Born in the US more than 20 years ago, this initiative was brought to Europe and Barcelona in 2015 and since then, it has been a major success counting on more than 300 students in every edition, adding new schools and talent year after year. This unique experience help students from high school to get inspired by all the things coding and programming allows them to do. With this initiative, HP aims to raise interest in STEM careers among youth, especially among girls! The target is to promote an educational, collaborative, and fun contest. Happening every first Saturday of March, this is an exciting and challenging day for the students to know our company from the within.`,
        siteUrl: "https://hpcodewarsbcn.com/",
        YouTube: "https://www.youtube.com/watch?v=KCCttp-_Qn8",
    },
    {
        title:"Huawei Apps UP",
        about:`The Huawei Global App Innovation Contest ("Apps UP" for short) is a global event held by Huawei that pools the skills of developers from around the world to build an app ecosystem that intelligently connects everything. It aims to inspire developers to innovate, bring together people, devices, and scenarios, and create consistent app experiences`,
        siteUrl:"https://developer.huawei.com/consumer/en/activity/digixActivity/digixdetail/201655277856046898",
        YouTube:"https://www.youtube.com/watch?v=HRBY0Ad_PBI",
    },
    {
        title: "Imagine Cup by Microsoft",
        about: `Imagine Cup is an annual competition sponsored and hosted by Microsoft Corp. which brings together student developers worldwide to help resolve some of the world's toughest challenges.[1] It is considered as "Olympics of Technology" by computer science and engineering and is considered one of the top competitions and awards related to technology and software design. All Imagine Cup competitors create projects that address the Imagine Cup theme: "Imagine a world where technology helps solve the toughest problems". Started in 2003, it has steadily grown, with more than 358,000 competitors representing 183 countries and regions in 2011. `,
        siteUrl: "https://imaginecup.microsoft.com/en-us/Events",
        YouTube: "https://www.youtube.com/watch?v=Mtx8FWqxrMs",
    },
    {
        title: "Github India Externship",
        about: `The GitHub Externship is a 90-day fellowship program for third or pre-final year students of GitHub Campus Partner schools. The initiative provides hands-on learning with practical and on ground experience. It's collaborative, remote, and happens under the guidance of expert mentors. `,
        siteUrl: "https://externship.github.in/",
        YouTube: "https://www.youtube.com/watch?v=34YdIU4GQs4&t=2526s",
    },
    {
        title: " International Collegiate Programming Contest ",
        about: `The International Collegiate Programming Contest is an algorithmic programming contest for college students. Teams of three, representing their university, work to solve the most real-world problems, fostering collaboration, creativity, innovation, and the ability to perform under pressure. Through training and competition, teams challenge each other to raise the bar on the possible. Quite simply, it is the oldest, largest, and most prestigious programming contest in the world.`,
        siteUrl: "https://icpc.global/",
        YouTube: "https://www.youtube.com/watch?v=wyA0cYHmF30",
    },
    {
        title: "International Conference on Functional Programming ",
        about: `1)ICFP Programming Contest has been held annually near June or July since 1998, with results declared at the International Conference on Functional Programming.

2)ICFP is a fun and challenging three-days open programming competition. There is no entry fee or pre-registration.

3)Participants can participate from any location. They may form teams, and there is no size limit for team formation.

4)Participants have 72 hours to complete and submit their entry over the Internet.

5)There is often also a 24-hour challenge called “lightning division.”

6)One of the competition goals is to showcase the programming languages and tools that the contestants admire. The winners boast the right to claim that their language is “the programming tool of choice for discriminatory hackers.

7)Previously, first prize winners have used Haskell, OCaml, C++, Cilk, Java, F#, and Rust..`,
        siteUrl: "https://www.icfpconference.org/",
        YouTube: "https://youtu.be/WfRqE4NBecM",
    },
    {
        title: "International Obfuscated C Code Contest",
        about: "The International Obfuscated C Code Contest (IOCCC) is a computer programming contest for the most creatively obfuscated C code. Described as 'celebrating [C\'s] syntactical opaqueness' this contest is held annually.",
        siteUrl: "https://www.ioccc.org/",
        YouTube: "https://www.youtube.com/watch?v=7F3IHxVEsvk&t=42s"
    },
    {
        title: "Internet Problem Solving Contest ",
        about: `The Internet Problem Solving Contest (IPSC) is an online contest for teams consisting of up to three people. Several problems are published at the beginning of the competition. Some of them are unusual kinds of problems which will test your out of the box thinking.To solve a problem you will have to compute correct output data for the given input data sets. Usually this means that you will write a program that solves the problem, but you may produce the output by hand or in any other way.`,
        siteUrl: "https://ipsc.ksp.sk/",
        YouTube: "https://youtu.be/L90Kw4CVEA8",
    },
    {
        title: " Intuit Augment ",
        about: `Intuit is inviting young women technologists to be part of a mentorship program. This is in line with our commitment to power prosperity amongst young engineers to be industry-ready with guidance from domain experts. The mentorship program is specifically designed to equip budding women engineers to develop core competencies and compliment their career aspirations. Women who are studying 2nd-year B.Tech/B.E and 3rd-year Dual Degree in Computer Science / Information Technology /Maths & Computing and having cgpa 7 or above. Registration happens in January.
`,
        siteUrl: "https://www.surveymonkey.com/r/INTUIT_2020",
    },
{
title:"JGEC Winter Of Code",
about:"JWOC ( JGEC Winter of Code) is an open-source program organized by Developers' JGEC which helps students to plunge into Open Source contribution and get the realm of Software Development. In Google Developer Student Club, Jalpaiguri Govt. Engg College.",
siteUrl:"https://jwoc.tech/"
},
    {
        title: "Kaggle by Google",
        about: `Kaggle, a subsidiary of Google LLC, is an online community of data scientists and machine learning practitioners. Kaggle allows users to find and publish data sets, explore and build models in a web-based data-science environment, work with other data scientists and machine learning engineers, and enter competitions to solve data science challenges. `,
        siteUrl: "https://www.kaggle.com/",
        YouTube: "https://www.youtube.com/watch?v=jbRNGuz3IRM",
    },
    {
        title: "Kick start by Google",
        about: `Kick Start is a global online coding competition, consisting of three-hour rounds of a variety of algorithmic challenges designed by Google engineers. Participants can compete in one or all online rounds held throughout the year, and will have the opportunity to develop and grow their programming abilities while getting a glimpse into the technical skills needed for a career at Google (top participants may be invited to interview at Google).  `,
        siteUrl: "https://codingcompetitions.withgoogle.com/kickstart",
        YouTube: "https://www.youtube.com/watch?v=9wad39LmzPY",
    },

    {
        title: "Learn to Earn Cloud Challenge",
        about: `Google Cloud skills are in demand. 86% of IT leaders report that the shortage of cloud computing skills will slow down their cloud projects.

Luckily, there's an easy way for you to get hands-on practice with core cloud concepts. Build your skills with the Learn to Earn Cloud Challenge. You'll get free access to 32+ hands-on labs, plus an opportunity to earn prizes, grow your network, and showcase your skills. `,
        siteUrl: "https://go.qwiklabs.com/learn-to-earn",
        YouTube: "https://www.youtube.com/watch?v=VZUx4GuCJiM",
    },
    {
        title: "Learn to Earn Cloud Data Challenge",
        about: `The world of sports has never been the same since a certain player named Google Cloud stepped onto the pitch. Be it helping coaches pick up their best players or helping you pick up your best fantasy team or making life easier for broadcasters to show your favorite game live for you to enjoy along with your favorite pizza, Google Cloud has got it all covered!
        Google Cloud is transforming the way sports are played & viewed by monitoring the real-time parameters of athletes to utilize data to improve the team’s performance.
        At the top level of any sport, it’s all about fractional improvements and technology is helping elite personalities power to glory. Google Cloud technology can enable colossal amounts of data to be crunched, analyzed and presented quickly.
Luckily, there's an easy way for you to get hands-on practice with core cloud concepts. Build your skills with the Learn to Earn Cloud Challenge. You'll get free access to 32+ hands-on labs, plus an opportunity to earn prizes, grow your network, and showcase your skills. `,
        siteUrl: "https://www.googlecloudcommunity.com/gc/Community-Blogs/Learn-to-Earn-Cloud-Data-Challenge-Step-up-your-Data-Game/ba-p/437137",
        YouTube: "https://youtu.be/uG5IJML0L0c",
    },
    {
        title: "LFX Mentorship Program",
        about: `LFX Mentorship (previously known as Community Bridge) is a platform developed by the Linux Foundation, which accelerates the adoption, innovation, and sustainability of open source software. LFX Mentorship is actively used by the Cloud Native Computing Foundation as a mentorship platform across the CNCF projects. It is an open-source program where students can contribute to open-source projects and get a minimum stipend of $3000. The goal of a mentorship program is to accelerate the personal and professional development of mentees. This is achieved by providing mentees with guidance, advice and feedback from mentors with more experience than themselves.`,
        siteUrl: 'https://mentorship.lfx.linuxfoundation.org/#projects_all',
        YouTube: 'https://youtu.be/DROr4kSrrY0'
    },
    {
        title: "LiFT Scholar!",
        about: `The Linux Foundation hosts The Linux Foundation Training (LiFT) Scholarship Program to provide opportunities to up-and-coming developers and sysadmins who show promise for helping shape the future of Linux and open source software but do not otherwise have the ability to attend training courses or take certification exams.`,
        siteUrl:
            "https://linuxfoundation.org/diversity-inclusivity/lift-scholarships/",
    },
    {
        title: "Linkedin Wintathon",
        about: `Linkedin Wintathon is a chance for you to turn something you are passionate about into a working prototype of your idea in just 24 hours. During the event, you’ll learn how to network with like-minded individuals from different colleges across India and build an app to solve a real-world problem as a small group. All females who are studying 3rd/4th year Btech/BE or 1st/2nd year Mtech are eligible. The winning team receives a summer internship with Linkedin Bangalore. `,
        siteUrl: "https://wintathon2020.splashthat.com/",
    },
    {
        title: " Lunchtime by Codechef ",
        about: `Lunchtime is an amazing 3 hours long coding competition held at the end of every month to help in improving your analytical and problem solving skills. `,
        siteUrl:
            "https://www.codechef.com/LTIME101?itm_medium=navmenu&itm_campaign=LTIME101",
    },
    {
        title: "Master the Mainframe by IBM",
        about: `Master the Mainframe is the world’s largest student mainframe competition. This unique, virtual contest is open globally to high school and college students to progressively teach mainframe skills in a real-world enterprise computing environment. Employers from around the globe use this contest to seek out candidates for mainframe careers.

Master the Mainframe is a fun way to get hands-on experience across a variety of technologies, to develop valuable skills, and to earn digital badges – with no prior knowledge required!

Part 1: Learn the basics of navigation, files and programs.

Part 2: Practice programming languages, operating systems and technologies.

Part 3: Participate in real-world challenges.

The Student Contest and the Learning System are available worldwide.`,
        siteUrl:
            "https://www.ibm.com/it-infrastructure/z/education/master-the-mainframe",
        YouTube: "https://www.youtube.com/watch?v=lKLkqsKTo3Y",
    },
    {
        title: "Microsoft Codess",
        about: `Codess is a community for female coders initiated by Microsoft. Codess was established to explore ways to promote gender diversity in the engineering field.Codess aims to inspire female coders and help them achieve their professional goals. Through networking events, mentoring and sharing advice and experiences. `,
        siteUrl: "https://careers.microsoft.com/us/en/codess",
    },
    {
        title: "Microsoft Engage Program",
        about: `Microsoft Engage is a student engagement and mentorship program by Microsoft that offers 1:1 mentorship to shortlisted students while working on a project, learning sessions specially curated for Engage students and a sneak peek into Microsoft’s culture and values. Students who have completed their second year(B.Tech/B.E.) or third year(Dual Degree) having 7 above CGPA with no pending backlogs and strong CS Fundamentals and coding principles were eligible to apply. There was no restriction on branch.`,
    },
    {
        title: "Microsoft Imagine Cup",
        about: `The Imagine Cup is full of opportunities to gain new skills, access exclusive training, unlock mentorship opportunities, and have a chance to win great prizes and make a difference in the world. In this you have to solve real world problems and you can win a hige amount of money to implement that plan and start a company`,
        siteUrl: "https://imaginecup.microsoft.com/en-us/Eventsl",
        YouTube: "https://www.youtube.com/watch?v=OX6qRLs0Z9o",
    },
    {
        title: "Microsoft Learn Student Ambassadors ",
        about: `Microsoft Learn Student Ambassadors Program is a program to bring together all the students from all over the world who have the passion for Technology, have the desire and craze to learn more about technology and help the community. The Ambassadors get an opportunity to interact with their peers, mentors, Professionals, learn various Microsoft technologies, and implement it in real world. Eligibility Criteria: To apply for the program:

i) You must be at least 16 years old, have valid identification and be actively enrolled in an accredited, higher education academic institution.

ii) Some experience in coding or technology will definitely be helpful, but do not worry if you don't have much of technical background. Students of all academic backgrounds who are interested in growing their career and tech skills, are encouraged to apply for this program, as all the tools and resources are provided to help you learn more and engage in the program.

What are the benefits of being a Microsoft Learn Student Ambassador? . Access to Microsoft 365, plus TechSmith Snagit and Camtasia screen capture and recording software . Visual Studio Enterprise subscription and $150 monthly Azure credits . Exam certification vouchers . LinkedIn Learning . Free Name.com domain name . Event support . Engagement with Cloud Advocates and Microsoft MVPs . Student Ambassador Milestone badges to highlight program accomplishments on your LinkedIn profile `,
        siteUrl: "https://studentambassadors.microsoft.com/",
        YouTube: "https://www.youtube.com/watch?v=_H65WfXPxuA",
    },
    {
        title: "Mitacs Globalink Research Internship",
        about: `Mitacs Globalink Research Internship is a competitive initiative for international undergraduates from the following countries and regions: Australia, Brazil, China, Colombia, France, Germany, Hong Kong, India, Mexico, Pakistan, Taiwan, Tunisia, Ukraine, United Kingdom and the United States. From May to October of each year, top-ranked applicants participate in a 12-week research internship under the supervision of Canadian university faculty members in a variety of academic disciplines, from science, engineering, and mathematics to the humanities and social sciences. `,
        siteUrl:
            "https://www.mitacs.ca/en/programs/globalink/globalink-research-internship",
        YouTube: "https://www.youtube.com/watch?v=_Ffrgy28H7c",
    },
    {
        title: "MLH Fellowship",
        about: `Major League Hacking Fellowship is a 12-week remote program, where students can participate from their homes. This program has options for full-time and part-time participation. Meanwhile, the full-time program requires students to commit 30-40 hours per week for the full term and the part-time program requires students to commit 10-20 hours per week for the full term. In this program, students will collaborate on Open Source projects that align their personal interests with the general needs of the industry.

The programs offered by MLH are:
1) Explorer
2) Open Source
3) Externship

This program also offers need-based stipends up to $5,000 USD to accepted students who require the stipend in order to participate in the fellowship. `,
        siteUrl: "https://fellowship.mlh.io/",
        YouTube:
            "https://www.geeksforgeeks.org/mlh-fellowship-programs-offered-application-process-benefits/",
    },
    {
        title: "MLH Prep Program",
        about: `The Prep Program is an intensive 3-week experience, during which you'll build out your portfolio of personal projects, experiment with new technologies, and collaborate in small groups during a short, impactful hackathon sprint. The Prep Program is designed to quickly build technical skills and experience for candidates who wish to pursue the full MLH Fellowship in the future. It’s basically a bite-sized version of the Fellowship track, specifically designed to build your technical skills and get you ready for an internship or a future batch of the MLH Fellowship.

And the best news of all: Fellows who successfully complete the Prep Program track will be priority candidates for future Fellowship classes. `,
        siteUrl: "https://fellowship.mlh.io/programs/prep",
        YouTube: "https://www.youtube.com/watch?v=cnltMbvsQUo&t=1s",
    },
    {
        title: "Myntra HackerRamp: WeForShe",
        about: `Myntra HackerRamp is an initiative by Myntra which extends an opportunity for all women coders from engineering colleges across the country to create and innovate through technology.

ELIGIBILITY-
open to female students across engineering colleges in India, who are pursuing:
• B.Tech/ B.E. programs (full-time) and currently in 2nd/ 3rd/ 4th year.
• M.Tech program (full-time) and currently in 1st or 2nd year.
• Dual Degree program (full-time) and currently in 3rd/ 4th/ 5th year.
Students must register in teams of 2 to 3 members.

PRIZES-
The top 3 winners receive a handsome prize money.
Pre-Placement Opportunities are offered to the teams that make it to the pre finale.

This challenge is conducted in 4 phases.
The first being the ideation phase, second being the implementation phase ,third being the Pre- Finale followed by the Finale.`,
        siteUrl:
            "https://codingcompetitions.withgoogle.com/kickstarthttps://dare2compete.com/hackathon/myntra-hackerramp-weforshe-myntra-151942",
        YouTube: "https://youtu.be/YTeck476Wzc",
    },
    {
        title: "Kick start by Google",
        about: `Kick Start is a global online coding competition, consisting of three-hour rounds of a variety of algorithmic challenges designed by Google engineers. Participants can compete in one or all online rounds held throughout the year, and will have the opportunity to develop and grow their programming abilities while getting a glimpse into the technical skills needed for a career at Google (top participants may be invited to interview at Google).  `,
        siteUrl: "https://codingcompetitions.withgoogle.com/kickstart",
        YouTube: "https://www.youtube.com/watch?v=9wad39LmzPY",
    },
    {
        title: " Nanyang Technological University (NTU) – India Connect",
        about: `Kick Start is a global online coding competition, consisting of three-hour rounds of a variety of algorithmic challenges designed by Google engineers. Participants can compete in one or all online rounds held throughout the year, and will have the opportunity to develop and grow their programming abilities while getting a glimpse into the technical skills needed for a career at Google (top participants may be invited to interview at Google). The India Connect @ntu office (IC@N) is proud to take a leading role in fostering partnerships with Indian institutes of higher learning and industrial organizations. The flagship programme of IC@N is the Visiting Research Student Programme for 2 to 6 months for undergraduate and Master’s level graduate students from India – so far more than 400 students have benefited from the programme. This research programme was introduced in 2016 to enable students of Indian universities to pursue their research interests at NTU by working under the supervision of NTU faculty, developing a strong research expertise in specific research areas, experiencing a multicultural life, developing a strong network of friends and a better understanding of Singapore. `,
        siteUrl:
            "https://www.ntu.edu.sg/education/student-exchanges/india-connect@ntu",
        YouTube: "https://www.youtube.com/watch?v=P-l0DaAiMw8",
    },
    {
        title: "NASA - CalTech Summer Undergraduate Research Fellowship (SURF) ",
        about: `The Caltech Summer Undergraduate Research Fellowship, or SURF, provides undergraduate students pursing degrees in science, technology, engineering and mathematics with an introduction to the research process under the guidance of seasoned mentors at JPL and Caltech. As part of the program, students collaborate with potential mentors to define and develop a research project and write a proposal. A faculty committee reviews the proposal and recommends awards, then students carry out their research over a 10-week summer internship. `,
        siteUrl: "https://www.jpl.nasa.gov/edu/intern/apply/caltech-summer-undergraduate-research-fellowship",
        YouTube: "https://www.youtube.com/watch?v=Ix0rMUXbj7s",
    },
    {
        title: "Nutanix Heart Women in Technology Scholarships ",
        about: `Nutanix believes in the power of diversity and realizes that a key component to driving innovation is cultivating diverse teams. Nutanix Advancing Women in Technology Scholarship program help future tech leaders to pursue and complete their education goals. They offer up to eleven scholarships to students in the United States, India, United Kingdom, Serbia and Australia who want to apply their passion for technology while advancing women in the field to make a positive impact on the industry and the planet.`,
        siteUrl: "https://www.nutanix.com/scholarships",
        YouTube: "https://www.youtube.com/watch?v=xiV7DZ8cK4g",
    },
    {
        title: "OnePlus Student Program",
        about: `OnePlus Student Ambassador Program is a campus-marketing program that aims to form a community of individuals who want to make a difference in the world through technology and have fun while doing it

The program facilitates and nurtures the skills to contribute to your career growth. We want to empower and strengthen selected students across India who will serve as OnePlus community specialists and brand evangelists in their respective institutions`,
        siteUrl:
            "https://www.oneplus.in/campus#:~:text=What%20is%20the%20OnePlus%20Student,prosper%20in%20your%20respective%20fields.",
    },
    {
        id: 76,
        title: "Outreachy Program",
        about: `Outreachy is a diversity initiative that provides paid, remote internships to people subject to systemic bias and impacted by underrepresentation in the technical industry where they are living.

Outreachy provides internships to work on open source. Our internships are:

💵 Paid - $6,000 USD total internship stipend

🌍 Remote - both interns and mentors work remotely

🕰 3 months - internships run May to August, or December to March `,
        siteUrl: "https://www.outreachy.org/",
        YouTube: "https://www.youtube.com/watch?v=2C6lJorOYfA&t=1s",
    },
    {
        title: "Open Mainframe Project Mentorship Program",
        about: `Open Mainframe Project also has its own open-source program and the mentees will be able to expand their knowledge on the mainframe technology. So, if you’re interested in the mainframe and all these things you can definitely check that out. You’ll also help in contributing to open source projects which will make it easier for infrastructure applications to run on the mainframe. So, it is an overwhelming fact that the application or the code that you’re writing is actually being used by a lot of people.

Timeline: February-September`,
        siteUrl:
            "https://www.openmainframeproject.org/all-projects/mentorship-program",
    },
    {
        title: " Redox OS Summer of Code",
        about: `Redox is a general-purpose operating system written in pure Rust. The Redox OS Summer of Code is the primary use of donations to the Redox OS project. Here, the students who have already demonstrated a desire and ability to contribute to Redox OS get selected.   `,
        siteUrl: "https://www.redox-os.org/rsoc/",
    },
    {
        title: "Reply Challenges",
        about: `The Reply Code challenge was created in 2019. A team of coding experts from Reply (the Reply Code Masters), entered a few competitions. Based on their experiences, they decided to design a challenge powered by Reply aimed at Replyers first and then to students and professionals.
        Now, over four intense hours, participants from all over the world come together each year to solve algorithm-based problems, using any programming language.
        
        The Standard Edition is for students and professionals aged 16 or older. It involves solving logical mathematical problems by writing an algorithm in any programming language. You can train with the past problems and see if the level of the challenge fits for you.
        
        If you're a teen students aged between 14 and 19, you can play on the Teen Edition!`,
        siteUrl: "https://challenges.reply.com/tamtamy/home.action",
    },
    {
        title: "SheCodes by Accolite Digital ",
        about: `Transforming the Future with Women Technologists, believe diversity creates an inclusive environment that fuels innovation and creativity. And are committed to attracting and retaining women technologists who can lead the way, achieve their career goals, and deliver value to teams and our clients.`,
        siteUrl: "https://www.accolite.com/careers/shecodes",
    },
    {
        title: "Smart India Hackthon by Govt. of India ",
        about: `Smart India Hackathon is a nationwide initiative to provide students a platform to solve some of pressing problems we face in our daily lives, and thus inculcate a culture of product innovation and a mindset of problem solving.

The last edition of the hackathon saw over 5 million+ students from various engineering colleges compete for the top prize at 35+ locations.

In SIH, the students would also have the opportunity to work on challenges faced within the private sector organisations and create world class solutions for some of the top companies in the world, thus helping the Private sector hire the best minds from across the nation. `,
        siteUrl: "https://www.sih.gov.in/",
        YouTube: "https://www.youtube.com/watch?v=nRjwazPk8S4",
    },
    {
        title: "Script Winter of Code ",
        about: `Script Winter of Code is an open-source program envisioned by the Script Foundation. It aims to bring students into the world of open source development and see the power of unified problem-solving in real time. The students will be guided by experienced mentors throughout their journey. They will learn the skills essential in the world of programming, all the while developing a deep appreciation for the world of open-source. Registrations has started and will close on 10th November `,
        siteUrl: "https://swoc.scriptindia.org/#/",
    },
    {
        title: "Social Summer of Code ",
        about: `SSOC is a 3 Month Open Source Program Organized By Social. It is aimed to promote open source with new age technologies & want everyone to get the right path & gudience through SSOC. `,
        siteUrl: "https://ssoc.devfolio.co/",
    },
    {
        title: "Solution Challenge ",
        about: `The mission of the 2022 Solution Challenge is to solve for one or more of the United Nations 17 Sustainable Development Goals using Google technology. The Solution Challenge is open to members of Google Developer Student Clubs. Join a Google Developer Student Club (GDSC) on the GDSC community page. The last date to apply for the Solution Challenge 2022 is 31st March, 2022. `,
        siteUrl: "https://developers.google.com/community/gdsc-solution-challenge",
        YouTube: "https://youtu.be/EuEZ83VAfgQ",
    },
    {
        title: "Summer of Bitcoin",
        about: `A global summer internship program focused on introducing university students to bitcoin and open-source development.The organizations provide mentors who act as guides through the entire process, from learning about the community to contributing.Students get involved in and become familiar with the bitcoin open source community and put their summer break to good use.The last date to apply for Summer of Bitcoin program is March 5, 2022. `,
        siteUrl: "https://www.summerofbitcoin.org",
        YouTube: "https://youtu.be/GwpTNKCsgSc",
    },
    {
        title: "Technica",
        about: `Technica is the world’s largest hackathon for underrepresented genders, hosted over the duration of 24 hours each fall by students at the University of Maryland and online. This year’s theme is "Reach New Heights!" This year, we want to help all of our hackers rise to the next level in their tech journey, whether that means tackling challenging new projects or writing your first line of code. We encourage you to be open-minded, be curious, and find your space in tech. Explore your untapped potential — the sky's the limit at Technica! Whether we serve as a push in the right direction or as a place for you to explore your curiosities, we hope that you are able to #ReachNewHeights! `,
        siteUrl: "https://gotechnica.org/",
        YouTube: "https://www.youtube.com/watch?v=zzIGwnKOkyw",
    },
    {
        title: "TopCoder Open",
        about: `The Topcoder Open (TCO) is an annual online and onsite tournament to celebrate and reward the community. TCO encompasses every day competitions at Topcoder and adds points to them. While you’re competing, you’re earning TCO points and more potential prizes as well as trips to the TCO Finals held in the United States! `,
        siteUrl: "https://tco21.topcoder.com/",
        YouTube: "https://www.youtube.com/watch?v=qS59Yy_IK_8",
    },
    {
        title: "TCS CodeVita ",
        about: `TCS CodeVita, the largest global computer programming competition, is a 24-hour online programming contest where a participant can log in from anywhere, any time. Coding enthusiasts can sharpen their programming skills through a series of intriguing real-life challenges across a stretch of 3 Rounds and an opportunity to win the coveted "World's Best Coder" title along with prize money of $10000. `,
        siteUrl: "https://www.tcscodevita.com/",
        YouTube: "https://youtu.be/5Ma4V_rsyGw",
    },
    {
        title: "Uber HackTag",
        about: `Uber HackTag is organized by Uber Technologies. In this competition both students and professionals can participate.
The competition consists of a total of three rounds, the first round is Online coding round, the second round is Prototyping and the final round is building a demoable outcome on their prototype.
Uber HackTag is open to all working professionals and engineering students pursuing a full-time B.Tech./ B.E./ M.Tech./ M.E. (all years) degrees across branches.

• Participants must register for this competition on the Dare2Compete platform in teams with an upper limit of 3 people per team.
• Cross-college and cross-organization teams are allowed.
• Cross track teams are not allowed i.e. working professionals and students can't make a team together.
PRIZES-
• Cash prizes of INR 2,00,000 (winning team), INR 1,00,000 (team in second place), and INR 50,000 (team in third place) for working professionals
• Cash prizes of INR 1,20,000 (winning team), INR 60,000 (team in second place), and INR 30,000 (team in third place) for students
• An opportunity to be a part of a prestigious cohort who receive industry-relevant mentorship from experts at Uber.`,
        siteUrl:
            "https://dare2compete.com/competition/uber-hacktag-uber-technologies-inc-148162",
        YouTube: "https://www.youtube.com/watch?v=sBo7rCu1XYY",
    },
    {
        title: "Uplift Project",
        about: `The Uplift Project is a global-remote initiative by GirlScript Foundation
for people worldwide who want to talk about something fruitful.
The program created to help people who cannot find like-minded friends or mentors.
It aims to help everyone from English learning to Machine Learning.

• Eligibility: Interseted students from any fields can apply.
• It offers training programs in technical skills, eg. AI, ML, Full Stack Dev.
• It offers training programs in soft skills, eg. Public Speaking, Leadership.
• Anyone can either participate as a participant or as a mentor.
• Registrations, normally, open around the month of May and the contribution period ends in late september.`,
        siteUrl: "https://uplift.girlscript.tech/",
        YouTube: "https://youtu.be/5cV6sWG_EWc",
    },
    {
        title: "Venkat Panchapakesan Scholarship Progarm",
        about: `The Venkat Panchapakesan Memorial Scholarship (India) award of $2,500 USD must be spent on tuition, fees, books, supplies and equipment required for the students' classes at their primary university. Scholarship recipients must be enrolled as full-time students for the academic years 2022-2023.`,
        siteUrl:
            "https://buildyourfuture.withgoogle.com/scholarships/venkat-panchapakesan-memorial-scholarship",
    },
    {
        title: "Visa Code UR Way",
        about: `Everyone at Visa works with one goal in mind – making sure that Visa is the best way to pay and be paid, for everyone everywhere. This is our global vision and the common purpose that unites the entire Visa team.

Join Visa Code UR Way to solve algorithm coding challenges, win exciting prizes and stand a chance to win an all-expenses-paid trip to meet to Visa team in Bangalore! Visa is recruiting students for internship and new graduate engineering opportunities.

Job role: Software Engineers - Full-Time and Summer Internships | Job Location: Bangalore

Intern Opportunities

Visa’s internship program is a great way to learn and explore the world of digital payments. During this 10-12-week program, you will be immersed in a team, working on important projects. We benefit from the experience you bring, and you get to work on strategic initiatives, meet brilliant peers, and gain executive exposure. At Visa, we'll help you make your mark as you kick-start your career.

New College Graduate Opportunities

Visa provides a wide range of full-time opportunities for new college graduates across the organization. If you have ambition, focus, and drive, and are interested in joining a global team focused on changing the way the world pays and is paid, we want to talk to you.

Eligibility:

Pre-final & Final year women students only Graduating year - 2020 & 2021 Only from the selected list of engineering colleges in India (check your college) Study discipline – B.E/B.Tech, M.Tech/Dual Degree Study branch – All branches allowed Challenge format:

5 Programming questions (Based upon the concepts of Data Structures & Algorithms)`,
        siteUrl:
            "https://assessment.hackerearth.com/challenges/hiring/visa-code-your-way-2019/",
        YouTube: "https://www.youtube.com/watch?v=AA7we1OR0Y4",
    },
    {
        title: "Women Engineers Program",
        about: `The Women Engineers program is a program offered by TalentSprint and supported by Google. This program provides opportunity to talented and motivated women students to excel in the global tech industry. To address gender disparity in the tech industry, this program nurtures promising women student to rapidly advance their expertise for the evolving tech industry.

• This is an intensive 2-year program.
• Eligibility : First year engineering girls students pursuing CS/IT/ECE/EEE or equivalent studies.
• The applications generally come in the February and March.
• Selection Process : In 2021, there were 3 rounds of assessment tests:

       1. The Logical Reasoning and the Aptitude test
       2. The Versant English test
       3. The Final Coding round

• An opportunity to be a part of a prestigious cohort who receive industry-relevant mentorship from experts at Google and Talensprint.`,
        siteUrl: "https://we.talentsprint.com/",
        YouTube: "https://youtu.be/yhGu9lxfs-g",
    },
    {
        title: "IEEEXtream",
        about: `IEEEXtreme is a global challenge in which teams of IEEE Student members – advised and proctored by an IEEE member, and often supported by an IEEE Student Branch – compete in a 24-hour time span against each other to solve a set of programming problems.

It takes place on 22 October, 2022 and registrations will close by 12 October, 2022. `,
        siteUrl: "https://ieeextreme.org/#REGISTRATION",
    },
    {
        title: "Zuno Fellowship Program",
        about: `The idea behind the Zuno Fellowship Program is to be the largest Fellowship Program in India. Candidates will stand a chance to win rewards worth over $1M annually and also have a chance to Upskill, add Premium Internship tag, win Cash & Brand Goodies.All candidates between the age of 17 - 25 years who are pursuing their UG or PG courses. It takes place on 17 December, 04:00 PM - 07:00 PM `,
        siteUrl:
            "https://www.monsterindia.com/zuno/fellowship?utm_source=september_fellowship&utm_medium=retention_zunoseptember&utm_campaign=fellowship_email&utm_id=zuno_ia",
    },
    {
        title: "IBM zStudent Contest",
        about: `HackerEarth brings you IBM zStudent Contest, sponsored by IBM Z Xplore, a thrilling coding contest centered around sustainable energy that will teach you computing skills used to power some of today’s largest enterprise companies. Along the way, you will learn JCL, z/OS, SQL, COBOL, Python, APIs, Unix and more.

Through completion of Fundamentals and Concepts levels (how you earn the Concepts Badge), contestants will have skills in:

VS Code JCL Files and Members Unix System Services (USS) REXX Python `,
        siteUrl:
            "https://www.hackerearth.com/challenges/hackathon/ibm-z-student-contest-2022/?utm_source=arsh&utm_medium=instagram_story&utm_campaign=IBMz",
    },
    {
        title: "Cosmos and Chaos",
        about: `“Curiosity creates innovation. Innovation fuels success.”

Astronomy Club brings Cosmos and Chaos- a 3-hour rendition of a multi-dimensional treasure hunt, spanning 5 phases. Our aim? To allow our participants to channel their inner Sherlock Holmes, and challenge the limits of their cognitive and creative abilities in a limited time frame.

The event will be based on the theme of astronomy. There will be 5 phases or levels that the participants have to complete. A team can progress to higher levels as soon as they are approved for completion of a prior level. They can collaboratively work as a team of 2-4 members to find answers.`,
        siteUrl:
            "https://unstop.com/competition/cosmos-and-chaos-uphoria-x-zenevia-bennett-university-bu-greater-noida-440498",
    },
    {
        title: "MLH Global Hack Week, October 23-30, 2022",
        about: `Global Hack Week October is their beginner-friendly hacker festival. You can expect to complete challenges, chat at hacker hangouts, enjoy fun live sessions, build technical projects, and make new memories.

Global Hack Weeks are attended by hackers from all over the globe. Whether this is your first time coding or you're a seasoned expert, we will have events here for you. Our last Global Hack Week included hackers from over 90 countries around the world! If you're a first-time hacker, there will be beginner-focused activities for you. `,
        siteUrl: "https://ghw.mlh.io/oct",
    }, {
        title: "LinkedIn Coachin, March, 2023",
        about: `Mock interviews and tests scheduled based on Data Structures and Algorithms
Speaker sessions where senior and junior engineers from Linkedin spoke on various topics and gave us a lot of insights on what is happening in the industry currently
A great community of like-minded individuals! We are a group of 40 young women constantly empowering each other and taking inspiration from each other `,
        siteUrl: "https://coachin2021.splashthat.com/",
    },
     {
        id: 97,
        title: "Amazon ML Summer School",
        about:
            "Amazon ML Summer School aims at providing students the opportunity to gain Machine Learning (ML) skills which is the first step in becoming ready to build a career in ML. This program is an intensive course on key ML topics and is a great opportunity to learn from and interact with Scientists at Amazon who have immense knowledge in their ML domain. After a successful pilot in 2021, Amazon ML Summer School is being expanded to include students enrolled in any Indian campus and will see a bigger class size.",
        siteUrl: "https://amazonmlsummerschoolindia.splashthat.com/",
        YouTube: "https://youtu.be/0QedVNGvZlQ",
    },
     {
        id: 98,
        title: "Hyperledger mentorship program",
        about:
            "The Hyperledger mentorship program is aimed at creating a structured hands-on learning opportunity for new developers who may otherwise lack the opportunity to gain exposure to Hyperledger open source development and entry to the technical community. Mentees will be eligible to receive a stipend. For Indian students, Total Stipend Amount will 3000 USD",
        siteUrl: "https://wiki.hyperledger.org/display/INTERN/Hyperledger+Mentorship+Program",
        
    },
];

// --------------------------------------------------------------------------------------------------------------------

const Accordion_wrapper = document.querySelector(".accordion_wrapper");

Accordion_wrapper.innerHTML = data
    .map((item) => {
        return `<div class="accordion_container">
                    <div class="accordion_title">
                        <i class="fa-solid fa-caret-right arrow_icon"></i>
                        <h5>${item.title}</h5>
                    </div>
                    <div class="accordion_content">
                        <h5>About</h5>
                        <section>${item.about}</section>

                        <h5>Official Website</h5>
                        <a href=${item.siteUrl}>${item.siteUrl}</a>

                        <h5>Explanation on Youtube</h5>
                        <a href=${item.YouTube}>${item.YouTube}</a>
                    </div>
                </div>`;
    })
    .join("");



const accordion_content = () => document.getElementsByClassName("accordion_content"); 
const accordion_title = () => document.getElementsByClassName("accordion_title"); 
const arrow_icon = () => document.getElementsByClassName("arrow_icon"); 


for (let i = 0; i < accordion_content().length; i++){
        accordion_title()[i].onclick = function () {
        accordion_content()[i].classList.toggle("active");
        arrow_icon()[i].classList.toggle("open");
    };
}


