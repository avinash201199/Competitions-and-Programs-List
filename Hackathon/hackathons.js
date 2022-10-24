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
];

// --------------------------------------------------------------------------------------------------------------------

const Accordion_wrapper = document.querySelector(".accordion_wrapper");

const accordion = (title, about, siteUrl, YouTube) => {
  return `<div class="accordion_container">
                      <div class="accordion_title">
                          <i class="fa-solid fa-caret-right arrow_icon"></i>
                          <h5>${title}</h5>
                      </div>
                      <div class="accordion_content">
                          <h5>About</h5>
                          <section>${about}</section>
  
                          <h5>Official Website</h5>
                          <a href=${siteUrl}>${siteUrl}</a>
  
                          <h5>Explanation on Youtube</h5>
                          <a href=${YouTube}>${YouTube}</a>
                      </div>
                  </div>`;
};

const insert_accordion_classes = () => {
  const accordion_content = () =>
    document.getElementsByClassName("accordion_content");
  const accordion_title = () =>
    document.getElementsByClassName("accordion_title");
  const arrow_icon = () => document.getElementsByClassName("arrow_icon");

  for (let i = 0; i < accordion_content().length; i++) {
    accordion_title()[i].onclick = function () {
      accordion_content()[i].classList.toggle("active");
      arrow_icon()[i].classList.toggle("open");
    };
  }
};

Accordion_wrapper.innerHTML = data
  .map((item) => {
    return accordion(item.title, item.about, item.siteUrl, item.YouTube);
  })
  .join("");
insert_accordion_classes();

// Search Bar Functionality
const search_input = document.querySelector("#search-input");
const search_form = document.querySelector("#search-form");

search_form.addEventListener("submit", (e) => {
  let inputVal = search_input.value.toLowerCase();
  e.preventDefault();

  Accordion_wrapper.innerHTML = data
    .map((item) => {
      if (item.title.toLowerCase().includes(inputVal)) {
        return accordion(item.title, item.about, item.siteUrl, item.YouTube);
      }
    })
    .join("");

  insert_accordion_classes();
});

// Navbar Functionality

const nav_bar = document.querySelector(".nav-ul");
const href = window.location.href;

for (let i = 0; i < nav_bar.children.length; i++) {
  if (nav_bar.children[i].children[0].href === href) {
    nav_bar.children[i].children[0].classList.add("active");
  }
}
