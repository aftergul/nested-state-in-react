import { Button, CircularProgress } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { ResFromServer } from "../data";
import _ from "lodash";

import NewCarePlanCustomAccordion from "./NewCarePlanCustomAccordion";
import useStyles from "./styles";

const Delimeter='|';
const Tab = ({ isSelected, children }) => (isSelected ? <>{children}</> : null);

const CustomTab = () => {
  const classes = useStyles();
  const [selected, setSelected] = useState("Observation");
  const tabSelected = (tab) => setSelected(tab);
  const carePlanDetails = ResFromServer;

  const [carePlanDetailsInfo, setCarePlanDetailsInfo] = useState(
    carePlanDetails
  );
  const tabs = carePlanDetails?.workflowBody?.sections.map((each) => each.name);

const handleSelection = (data) => {
    // logic goes here
  console.log(data); //sectionId|questionId|itemId
  const ids=data.split(Delimeter);  
  
  const sectionIndex=carePlanDetailsInfo.workflowBody.sections.findIndex((x)=>x.id===ids[0]);  
  const questionIndex=carePlanDetailsInfo.workflowBody.sections[sectionIndex].questions.findIndex((x)=>x.id===ids[1]);   
  const itemIndex=carePlanDetailsInfo.workflowBody.sections[sectionIndex].questions[questionIndex].items.findIndex((x)=>x.id===ids[2]);  

  //deep copy
  const newState = _.cloneDeep(carePlanDetailsInfo);  
  const questionObj=newState.workflowBody.sections[sectionIndex].questions[questionIndex];
  
  if(!questionObj.items[itemIndex].isSelected && questionObj.answerType==="single" )  
    questionObj.items.map(x=>x.isSelected=false);      
  questionObj.items[itemIndex].isSelected=!questionObj.items[itemIndex].isSelected;
  setCarePlanDetailsInfo(newState);
   
};

  const handleSubmit = () => {};

  function TabNav({ selected, children, setSelected }) {
    const classes = useStyles();
    return (
      <> 
        <div className={classes.root}>
          {carePlanDetails?.workflowBody?.sections?.map((section) => {
            return (
              <button
                key={section.name}
                className={`${
                  selected === section.name ? classes.active : ""
                } ${classes.common} customTabBtn`}
                onClick={() => setSelected(section.name)}
              >
                {section.name}
              </button>
            );
          })}
        </div>
        {children}
      </>
    );
  }

  return (
    <>
    {carePlanDetails?.carePlanType}
      <div className={classes.root1}>
        <TabNav tabs={tabs} selected={selected} setSelected={tabSelected}>
          {carePlanDetailsInfo?.workflowBody?.sections.map((section) => (
            <Tab isSelected={selected === section.name} key={section.name}>
              <NewCarePlanCustomAccordion
                key={section.id}
                sectionId={section.id}
                sectionData={section}
                handleSelection={handleSelection}
                setCarePlanDetailsInfo={setCarePlanDetailsInfo}
                carePlanDetailsInfo={carePlanDetailsInfo}
              />
            </Tab>
          ))}
          <div className={classes.btnSaveAll}>
            <Button
              type="submit"
              variant="contained"
              className={`${classes.myBtn}`}
              onClick={handleSubmit}
            >
              SAVE
              {/* <CircularProgress
                color="#fff"
                size={20}
                style={{ marginLeft: "8px" }}
              /> */}
            </Button>
          </div>
        </TabNav>
      </div>
    </>
  );
};

export default CustomTab;
