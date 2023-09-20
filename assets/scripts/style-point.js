let points = [
  {
    id: 1,
    title: "authenticity",
    text: "Through tattooing, I pay tribute to tradition. I tell your personal story and represent a commitment to roots, ideals and spiritual values",
  },
  {
    id: 2,
    title: "naturalness",
    text: "With ornaments , I emphasize the natural beauty of the body. I try to fit the image as anatomically as possible. I often use freehand for this purpose",
  },
  {
    id: 3,
    title: "minimalism",
    text: "With time and experience I have come to the conclusion that the simpler the better. I do tattoos so that even from a distance of several meters they still emphasize your beauty and complete the image",
  },
];

const stylePoint = document.getElementById("point");

stylePoint.addEventListener("scroll", fillData(points));

function fillData() {
  for (let i = 0, l = points.length; i < l; i++) {
    let heading = document.querySelector(".style-point__title");
    let description = document.querySelector(".style-point__text");

    heading.innerHTML = points[i].title;
    description.innerHTML = points[i].text;
  }
}
