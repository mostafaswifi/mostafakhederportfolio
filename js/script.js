let navIt = document.querySelectorAll(".nav-link");
navIt.forEach((nav) => {
  nav.addEventListener("click", (e) => {
    navIt.forEach((nav) => {
      nav.classList.remove("active", "activeColor");
    });
    e.target.classList.add("active", "activeColor");
  });
});

let slideMaker = () => {
  const slide = document.querySelectorAll(".observer");
  const h = document.querySelectorAll(".observed");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        h.forEach((e) => {
          console.log(e);
          let me = e.getAttribute("data");
          e.classList.add("newWidth");
          e.style.width = `${me}%`;
          console.log(me);
        });
      } else {
        h.forEach((e) => {
          e.classList.remove("newWidth");
        });
      }
    });
  });

  slide.forEach((s) => {
    observer.observe(s);
  });
};

slideMaker();

const sectionNav = document.getElementById("myNav");
const sectionHero = document.getElementById("myHero");
const sectionAbout = document.getElementById("about");
const sectionResume = document.getElementById("resume");
const sectionServices = document.getElementById("services");
const sectionProjects = document.getElementById("projects");
const sectionContacts = document.getElementById("contacts");

const obs = new IntersectionObserver((entries) => {
  const firstEntry = entries[0];
  if (firstEntry.isIntersecting) {
    sectionNav.classList.add("animate__animated", "animate__flash");
  }
});
obs.observe(sectionNav);

const obs2 = new IntersectionObserver((entries) => {
  const firstEntry = entries[0];
  if (firstEntry.isIntersecting) {
    sectionHero.classList.add(
      "animate__animated",
      "animate__pulse",
      "animate__2",
      "animate__delay-1s"
    );
  }
});
obs2.observe(sectionHero);

const obs3 = new IntersectionObserver((entries) => {
  const firstEntry = entries[0];
  if (firstEntry.isIntersecting) {
    sectionAbout.classList.add(
      "animate__animated",
      "animate__fadeIn",
      "animate__delay-1s"
    );
  }
});
obs3.observe(sectionAbout);

const obs4 = new IntersectionObserver((entries) => {
  const firstEntry = entries[0];
  if (firstEntry.isIntersecting) {
    sectionResume.classList.add(
      "animate__animated",
      "animate__fadeIn",
      "animate__delay-1s"
    );
  }
});
obs4.observe(sectionResume);

const obs5 = new IntersectionObserver((entries) => {
  const firstEntry = entries[0];
  if (firstEntry.isIntersecting) {
    sectionServices.classList.add(
      "animate__animated",
      "animate__fadeIn",
      "animate__delay-1s"
    );
  }
});
obs5.observe(sectionServices);

const obs6 = new IntersectionObserver((entries) => {
  const firstEntry = entries[0];
  if (firstEntry.isIntersecting) {
    sectionProjects.classList.add(
      "animate__animated",
      "animate__fadeIn",
      "animate__delay-1s"
    );
  }
});
obs6.observe(sectionProjects);

const obs7 = new IntersectionObserver((entries) => {
  const firstEntry = entries[0];
  if (firstEntry.isIntersecting) {
    sectionContacts.classList.add(
      "animate__animated",
      "animate__fadeIn",
      "animate__delay-1s"
    );
  }
});
obs7.observe(sectionContacts);
