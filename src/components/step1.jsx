import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import WorkingHoursStep from "./WorkingHoursStep";
import Services from "./ServiceStep";
import Customize from "./Customize";
import { Informations } from "./Informations";
import Swal from 'sweetalert2';

export default function HorizontalLinearStepper() {
  const defaultUserData = {
    companyName: "",
    slug: "",
    Categories: "",
    services: [],
    WorkingHours: [],
  };

  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const [userData, setUserData] = React.useState(defaultUserData);
  const [isDisabledNext, setIsDisabledNext] = React.useState(false);
  const [completedSteps, setCompletedSteps] = React.useState(new Set());

  const steps = [
    "Informations",
    "Working Hours",
    "Services",
    "Customize Portal",
  ];

  const stepsData = [
    {
      title: "Informations",
      component: (
        <Informations
          data={userData}
          setData={setUserData}
          setIsNextDisabled={(status) => setIsDisabledNext(status)}
        />
      ),
    },
    {
      title: "Working Hours",
      component: (
        <WorkingHoursStep
          data={userData}
          setData={setUserData}
          setIsNextDisabled={setIsDisabledNext}
        />
      ),
    },
    {
      title: "Services",
      component: (
        <Services
          data={userData}
          setData={setUserData}
          setIsNextDisabled={setIsDisabledNext}
        />
      ),
    },
    {
      title: "Customize Portal",
      component: (
        <Customize
          data={userData}
          setIsNextDisabled={setIsDisabledNext}
        />
      ),
    },
  ];

  const isStepOptional = (step) => step === 1 || step === 2;
  const isStepSkipped = (step) => skipped.has(step);

  const handleNext = () => {
    const allPreviousCompleted = Array.from({ length: activeStep }).every(
      (_, i) => completedSteps.has(i)
    );

    if (!allPreviousCompleted && activeStep !== 0) {
      Swal.fire("Please complete previous steps.");
      return;
    }

    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setCompletedSteps((prev) => new Set(prev).add(activeStep));
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }

    setCompletedSteps((prev) => new Set(prev).add(activeStep));
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompletedSteps(new Set());
    setSkipped(new Set());
  };

  const renderStepContent = (step) => {
    return stepsData[step]?.component;
  };

  return (
    <div>
      <Box sx={{ marginLeft: "40px" }}>
        <img
          src="./assets/logo.png"
          alt="Logo"
          style={{
            width: "100px",
            marginBottom: "15px",
            marginTop: "20px",
            marginLeft: "20px",
          }}
        />
      </Box>

      <div className="d-flex justify-content-center mt-0">
        <Box sx={{ width: "40%", marginTop: "20px" }}>
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};

              if (isStepSkipped(index)) {
                stepProps.completed = false;
              }

              return (
                <Step key={label} {...stepProps}>
                  <StepLabel
                    {...labelProps}
                    onClick={() => {
                      const allPreviousCompleted = Array.from({ length: index }).every(
                        (_, i) => completedSteps.has(i)
                      );

                      if (allPreviousCompleted || index === 0) {
                        setActiveStep(index);
                      } else {
                        Swal.fire("Please complete previous steps first.");
                      }
                    }}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      cursor: "pointer",
                      "& .MuiStepLabel-iconContainer": {
                        paddingBottom: "4px",
                      },
                      "& .MuiStepLabel-label": {
                        fontSize: "0.75rem",
                        marginTop: "4px",
                        color: activeStep === index ? "#D8282F" : "#9e9e9e",
                        textAlign: "center",
                      },
                      "& .MuiStepIcon-root.Mui-active": {
                        color: "#D8282F",
                      },
                      "& .MuiStepIcon-root.Mui-completed": {
                        color: "#D8282F",
                      },
                    }}
                  >
                    {label}
                  </StepLabel>
                </Step>
              );
            })}
          </Stepper>

          {renderStepContent(activeStep)}

          {activeStep === steps.length ? (
            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "flex-end", pt: 5 }}>
              <Button onClick={handleReset} className="text-dark rounded-5 me-2">
                Back
              </Button>

              <Button
                onClick={async () => {
                  try {
                    const user = JSON.parse(localStorage.getItem("user"));
                    const userId = user?.user?.id;
                    const token = user?.jwt;

                    if (!userId) {
                      throw new Error("Utilisateur non identifié.");
                    }

                    const services = userData.services;

                    for (const service of services) {
                      console.log("TOKEN = ", token);
                      const response = await fetch("http://localhost:1337/api/services", {
                        method: "POST",
                        headers: {
                          "Content-Type": "application/json",
                          Authorization: `Bearer ${token}`,
                        },
                        body: JSON.stringify({
                          data: {
                            name: service.serviceName,
                            duration: parseInt(service.duration),
                            user: userId,
                            business_id: 1,
                            category_id: 1
                          }
                        }),
                        
                      });
                      

                      if (!response.ok) {
                        throw new Error(`Erreur lors de l'ajout du service ${service.serviceName}`);
                      }
                    }

                    Swal.fire("Succès", "Les services ont été enregistrés avec succès", "success");
                    localStorage.setItem("userData", JSON.stringify(userData));
                    handleReset();
                    window.location.href = "/Site";
                  } catch (error) {
                    console.error("Erreur API Strapi :", error);
                    Swal.fire("Erreur", error.message, "error");
                  }
                }}
                className="bg-danger text-white rounded-5"
              >
                Finalize
              </Button>
            </Box>
          ) : (
            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "flex-end", mt: 5 }}>
              {(activeStep === 1 || activeStep === 2) && (
                <Button
                  onClick={handleSkip}
                  className="me-2 border-light text-dark rounded-5 mb-5"
                  variant="outlined"
                >
                  Skip this part
                </Button>
              )}
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className="me-2 rounded-5 bg-muted"
                sx={{
                  backgroundColor: "#EDEDED",
                  color: "#000",
                  marginBottom: "50px",
                }}
              >
                Back
              </Button>
              <Button
                onClick={handleNext}
                className="bg-danger text-white rounded-5 px-4 mb-5"
                disabled={isDisabledNext}
              >
                {activeStep === steps.length - 1 ? "Finalize" : "Next"}
              </Button>
            </Box>
          )}
        </Box>
      </div>
    </div>
  );
}
