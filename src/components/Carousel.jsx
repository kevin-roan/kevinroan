import { Button, Carousel, Typography } from "@material-tailwind/react";
import kevinRoan from "../assets/images/projects/kevinroan.png";
// import blogSite from "../assets/images/projects/blog-site.png";
import restoHub from "../assets/images/projects/restohub.png";
// import educationSite from "../assets/images/projects/education-site.png";

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
      <img
        src={restoHub}
        alt="image 1"
        className="h-full w-full object-cover"
      />
      {/*
      <img
        src={blogSite}
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src={educationSite}
        alt="image 3"
        className="h-full w-full object-cover"
      />
      <img
        src={kevinRoan}
        alt="image 4"
        className="4-full w-full object-cover"
      />
     */}
      <Figure />
    </Carousel>
  );
}

export const Figure = () => {
  return (
    <div>
      <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
        <div>
          <Typography variant="h5" color="blue-gray">
            RestHUB - React Restorant Website
          </Typography>
          <Typography color="gray" className="mt-2 font-normal">
            20 July 2022
          </Typography>
        </div>
        <Typography variant="h5" color="blue-gray">
          <Button style={{ margin: "10px", width: "100px" }}>Demo</Button>
          <Button style={{ margin: "10px", width: "100px" }}>Source</Button>
        </Typography>
      </figcaption>
    </div>
  );
};
