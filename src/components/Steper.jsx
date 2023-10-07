import React from "react";
import { Stepper, Step, Button } from "@material-tailwind/react";
import { HomeIcon, CogIcon, UserIcon } from "@heroicons/react/24/outline";

export function StepperWithIcon() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);

  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  return (
    <div className="w-full py-4 px-8 fixed">
      <Stepper
        activeStep={activeStep}
        isLastStep={(value) => setIsLastStep(value)}
        isFirstStep={(value) => setIsFirstStep(value)}
      >
        <Step onClick={() => setActiveStep(0)}>
          <i class="fa-solid fa-address-card"></i>
        </Step>
        <Step onClick={() => setActiveStep(1)}>
          <i class="fa-solid fa-paperclip"></i>
        </Step>
        <Step onClick={() => setActiveStep(2)}>
          <i class="fa-solid fa-gears"></i>
        </Step>
        <Step onClick={() => setActiveStep(2)}>
          <i class="fa-solid fa-paper-plane"></i>
        </Step>
      </Stepper>
      <div className="mt-16 flex justify-between"></div>
    </div>
  );
}
