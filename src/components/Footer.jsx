import { Typography } from "@material-tailwind/react";

export function FooterWithLogo() {
  return (
    <footer
      className="w-full bg-white p-8"
      style={{ backgroundColor: "#72757E" }}
    >
      <Typography color="blue-gray" className="text-center font-normal">
        &copy; 2023 Kevin Roan
      </Typography>
    </footer>
  );
}
