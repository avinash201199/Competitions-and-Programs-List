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
    title: "Cook-off by CodeChef ",
    about:
      "Cook-off is an amazing 2.5 hours long coding competition held by Codechef every month. This competition helps improve your analytical and problem solving skills. ",
    siteUrl: "https://www.codechef.com/COOK134",
    YouTube:
      "https://www.youtube.com/playlist?list=PLQXZIFwMtjoxrJvVaqoGlFYJRwUCHUq1t",
  },
  {
    title: "Code Jam to I/O for Women",
    about:
      "At Google, we’re committed to building for everyone, and we know that a diversity of voices leads to better outcomes. We’re committed to increasing representation and building community in the online coding contest space and at Google I/O, our largest developer conference. Code Jam to I/O for Women is one way we bring women (students and professionals) from around the globe together, working to solve tough algorithmic challenges in a 2.5 hour, single-round coding competition. The top 150 on the scoreboard will receive a ticket and a stipend to participate in virtual Google I/O. ",
    siteUrl: "https://codingcompetitions.withgoogle.com/codejamio",
    YouTube: "https://www.youtube.com/watch?v=Q_2TwBhqHPg",
  },
  
  {
    title: "Code Gladiators",
    about:
      "Code Gladiators is an annual coding competition by TechGig, that draws the best and the brightest coding talent from all parts of India. With multiple contests in emerging technologies and the coveted title of Code Gladiators up for grabs, the competition sees enthusiastic participation and has grown from strength to strength with each passing year.The last date to register in this contest is June 20,2022.",
    siteUrl: "https://www.techgig.com/codegladiators",
    YouTube: "https://youtu.be/fzymgR7EdUs",
  },
  
   
  {
    title: "Google Code Jam",
    about:
      "Google Code Jam is conducted by Google from 2003.The competition consists of a set of algorithmic problems which must be solved in a fixed amount of time.The winner is awarded $15000 and there are smaller prizes for the runner ups.",
    siteUrl: "https://codingcompetitions.withgoogle.com/codejam",
    YouTube: "https://www.youtube.com/watch?v=cpguolx2oms",
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
