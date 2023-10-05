import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import project from "../assets/images/projects/project.png";

export function BookingCard() {
  return (
    <Card
      className="w-full max-w-[26rem] shadow-lg m-1 "
      style={{ backgroundColor: "#282C34" }}
    >
      <CardHeader floated={false} color="blue-gray">
        <img src={project} alt="project_image" style={{ height: "250px" }} />
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
      </CardHeader>
      <CardBody>
        <div className="mb-3 flex items-center justify-between">
          <Typography
            variant="h5"
            style={{ color: "#7f5af0" }}
            className="font-medium"
          >
            Wooden House, Florida
          </Typography>
        </div>
        <Typography style={{ color: "#94a1b2" }}>
          Enter a freshly updated and thoughtfully furnished peaceful home
          surrounded by ancient trees, stone walls, and open meadows.
        </Typography>
      </CardBody>
      <CardFooter className="pt-3 ">
        <Button
          size="lg"
          color="lime"
          style={{ width: "47%", marginRight: "3px" }}
        >
          <i class="fa-brands fa-chrome"></i> Preview
        </Button>
        <Button size="lg" color="pink" style={{ width: "50%" }}>
          <i class="fa-brands fa-github"></i> Source
        </Button>
      </CardFooter>
    </Card>
  );
}
