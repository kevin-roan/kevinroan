import { Button, Carousel, Typography } from "@material-tailwind/react";
import kevinRoan from "../assets/images/projects/kevinroan.png";
import blogSite from "../assets/images/projects/blog-site.png";
import restoHub from "../assets/images/projects/restohub.png";
import educationSite from "../assets/images/projects/education-site.png";

const projects = [
  {
    src: restoHub,
    name: "RestoHub - React FrontEnd Website",
    date: "2023 August",
    demo: "https://kevinroan.github.io/restohub",
    source: "https://github.com/kevin-roan/restohub",
  },
  {
    src: kevinRoan,
    name: "PortFolio- You are currently looking at it.",
    date: "2023 August",
    demo: "https://kevinroan.vercel.app",
    source: "https://github.com/kevin-roan/kevinroan",
  },
  {
    src: blogSite,
    name: "My Bloging Site - React FrontEnd Website",
    date: "2023 July",
    demo: "https://kevinroan.github.io/blog-site",
    source: "https://github.com/kevin-roan/blog-site",
  },
  {
    src: educationSite,
    name: "EduTech- React FrontEnd Website",
    date: "2023 Jun",
    demo: "https://kevinroan.github.io/education-site",
    source: "https://github.com/kevin-roan/education-site",
  },
];

export function CarouselCustomNavigation() {
  return (
    <Carousel
      className="rounded-xl"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      {projects.map((project, index) => (
        <>
          <img
            src={project.src}
            alt={project.name}
            className="h-full w-full object-cover"
          />
          <Figure
            projectname={project.name}
            date={project.date}
            demo={project.demo}
            source={project.source}
          />
        </>
      ))}
    </Carousel>
  );
}

export const Figure = ({ projectname, date, demo, source }) => {
  return (
    <div>
      <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
        <div>
          <Typography variant="h5" color="blue-gray">
            {projectname}
          </Typography>
          <Typography color="gray" className="mt-2 font-normal">
            {date}
          </Typography>
        </div>
        <Typography variant="h5" color="blue-gray">
          <a href={demo}>
            <Button style={{ margin: "10px", width: "100px" }}>Demo</Button>
          </a>
          <a href={source}>
            <Button style={{ margin: "10px", width: "100px" }}>Source</Button>
          </a>
        </Typography>
      </figcaption>
    </div>
  );
};
