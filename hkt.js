let heroInfo = {
    name: "Minh Cường",
    job: "freelance react developer",
    imgUrl: "https://picsum.photos/200/300",
  };
  
  let personalDetail = {
    name: "Minh Cường",
    dob: "06 June 1995",
    spokenLanguages: ["English", "France", "German"],
    nationality: "Vietnam",
    interest: ["Music", "Reading", "Journey"],
    techs: [
      {
        id: 1,
        imgUrl: "https://i.postimg.cc/cHdfNH2Z/android.png",
        techName: "Android",
        exp: 2,
      },
      {
        id: 2,
        imgUrl: "https://i.postimg.cc/nrCjHQk8/Angular.png",
        techName: "Angular",
        exp: 1,
      },
      {
        id: 3,
        imgUrl: "https://i.postimg.cc/G3VJ4csP/bootstrap.png",
        techName: "Bootstrap",
        exp: 3,
      },
      {
        id: 4,
        imgUrl: "https://i.postimg.cc/dt91z6v7/vue.png",
        techName: "Vue",
        exp: 2,
      },
      {
        id: 5,
        imgUrl: "https://i.postimg.cc/XNdXg3zk/react.png",
        techName: "React",
        exp: 2 / 3,
      },
      {
        id: 6,
        imgUrl: "https://i.postimg.cc/PfgYt2B2/mongodb.png",
        techName: "Mongodb",
        exp: 0.25,
      },
      {
        id: 7,
        imgUrl: "https://i.postimg.cc/RZzFYYjx/laravel.png",
        techName: "Laravel",
        exp: 1,
      },
      {
        id: 8,
        imgUrl: "https://i.postimg.cc/X7N3ybSJ/nodejs-icon.png",
        techName: "Node.js",
        exp: 5 / 6,
      },
    ],
  };
  
  let projects = [
    {
      id: 1,
      imgUrl: "https://i.postimg.cc/nrCjHQk8/Angular.png",
      projectName: "Auto Drive Project",
      link: "https://abcd-example.com",
      tags: ["Angular", "React", "Jquery"],
    },
    {
      id: 2,
      imgUrl: "https://i.postimg.cc/G3VJ4csP/bootstrap.png",
      projectName: "Ecommerce Project",
      link: "https://abcd-example.com",
      tags: ["Bootstrap", "CSS", "Javascript"],
    },
    {
      id: 3,
      imgUrl: "https://i.postimg.cc/PfgYt2B2/mongodb.png",
      projectName: "Chat Application",
      link: "https://abcd-example.com",
      tags: ["MongoDB", "Javascript"],
    },
    {
      id: 4,
      imgUrl: "https://i.postimg.cc/dt91z6v7/vue.png",
      projectName: "Social Media Platform",
      link: "https://abcd-example.com",
      tags: ["Vue", "Javascript"],
    },
    {
      id: 5,
      imgUrl: "https://i.postimg.cc/XNdXg3zk/react.png",
      projectName: "Image Sharing Platform",
      link: "https://abcd-example.com",
      tags: ["React", "Javascript"],
    },
  ];
localStorage.setItem('heroInfo', JSON.stringify(heroInfo));
localStorage.setItem('personalDetail', JSON.stringify(personalDetail));
localStorage.setItem('projects', JSON.stringify(projects));


const storedHeroInfo = JSON.parse(localStorage.getItem("heroInfo"));
const storedPersonalDetail = JSON.parse(localStorage.getItem("personalDetail"));
const storedProjects = JSON.parse(localStorage.getItem("projects"));

document.getElementById("header").innerHTML = `
    <h1>${storedHeroInfo.name}</h1>
    <p>${storedHeroInfo.job}</p>
    <img src="${storedHeroInfo.imgUrl}" alt="Hero Image">
`;

document.getElementById("personal-details").innerHTML = `
    <h2>${storedPersonalDetail.name}</h2>
    <p>Date of Birth: ${storedPersonalDetail.dob}</p>
    <p>Spoken Languages: ${storedPersonalDetail.spokenLanguages.join(", ")}</p>
    <p>Nationality: ${storedPersonalDetail.nationality}</p>
    <p>Interests: ${storedPersonalDetail.interest.join(", ")}</p>
`;

const projectsContainer = document.getElementById("my-projects");
storedProjects.forEach((project) => {
    const projectElement = document.createElement("div");
    projectElement.innerHTML = `
        <img src="${project.imgUrl}" alt="${project.projectName} Image">
        <h3>${project.projectName}</h3>
        <p><a href="${project.link}" target="_blank">Project Link</a></p>
        <p>Tags: ${project.tags.join(", ")}</p>
    `;
    projectsContainer.appendChild(projectElement);
});
