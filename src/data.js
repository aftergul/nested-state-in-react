export const ResFromServer = {
  carePlanType: "COVID",
  patientId: "62f570045bce43c8ced4ca12",
  isActive: true,
  wizard: false,
  dateStart: "2022-09-10T00:00:00.000Z",
  dateEnd: "2022-09-16T00:00:00.000Z",
  siteName: "Second-Sute",
  name: "SecondCarePlan",
  workflowBody: {
    workflowId: "62cf44656853de8d77e221d4",
    sections: [
      {
        id: "1",
        name: "Observation",
        questions: [
          {
            id: "1",
            name: "COVID Vaccination Status",
            subtext: null,
            isViewable: true,
            answerType: "single",
            items: [
              {
                id: "1",
                name: "Fully vaccinated with booster",
                relatedToQuestion: null,
                isSelected: false
              },
              {
                id: "2",
                name: "Partially vaccinated",
                relatedToQuestion: null,
                isSelected: false
              },
              {
                id: "3",
                name: "Unhnown",
                relatedToQuestion: null,
                isSelected: false
              },
              {
                id: "4",
                name: "Patient Declined to Answer",
                relatedToQuestion: null,
                isSelected: false
              },
              {
                id: "5",
                name: "Completed Primary Vaccination Protocol",
                relatedToQuestion: null,
                isSelected: false
              },
              {
                id: "6",
                name: "Not Vaccinated",
                relatedToQuestion: null,
                isSelected: false
              }
            ]
          },
          {
            id: "2",
            name: "COVID Vaccination History",
            subtext: "It stands for <B>Undetectable=Untrasmissable</B>",
            isViewable: true,
            answerType: "multiple",
            items: [
              {
                id: "1",
                name: "Moderna",
                relatedToQuestion: null,
                isSelected: false
              },
              {
                id: "2",
                name: "Janssen",
                relatedToQuestion: null,
                isSelected: false
              },
              {
                id: "3",
                name: "Pfizer-BioNTech",
                relatedToQuestion: null,
                isSelected: false
              },
              {
                id: "4",
                name: "Unknown",
                relatedToQuestion: null,
                isSelected: false
              },
              {
                id: "5",
                name: "Other / Non-US COVID-19 Vaccine",
                relatedToQuestion: null,
                isSelected: false
              }
            ]
          },
          {
            id: "3",
            name: "Vaccine Hesitancy",
            subtext: null,
            isViewable: true,
            answerType: "multiple",
            items: [
              {
                id: "1",
                name: "Interested, but not read",
                relatedToQuestion: null,
                isSelected: false
              },
              {
                id: "2",
                name: "Religious Objections",
                relatedToQuestion: null,
                isSelected: false
              },
              {
                id: "3",
                name: "Group Pressure (Familial, Political, etc)",
                relatedToQuestion: null,
                isSelected: false
              },
              {
                id: "4",
                name: "Don’t Trust Vaccine Source/ Health System",
                relatedToQuestion: null,
                isSelected: false
              },
              {
                id: "5",
                name: "Vaccine Safety Concerns",
                relatedToQuestion: null,
                isSelected: false
              },
              {
                id: "6",
                name: "Needs More Information",
                relatedToQuestion: null,
                isSelected: false
              },
              {
                id: "7",
                name: "Not Willing to Discuss",
                relatedToQuestion: null,
                isSelected: false
              },
              {
                id: "8",
                name: "Other",
                relatedToQuestion: null,
                isSelected: false
              }
            ]
          }
        ]
      },
      {
        id: "2",
        name: "Goals",
        questions: [
          {
            id: "1",
            name: "Patient's Goal",
            subtext: null,
            isViewable: true,
            answerType: "text",
            answerValue: null,
            items: [
              {
                isSelected: true
              }
            ]
          },
          {
            id: "2",
            name: "Goal",
            subtext: null,
            isViewable: true,
            answerType: "single",
            items: [
              {
                id: "1",
                name:
                  "Develop COVID-19 Prevention Knowledge, Skills and Abilities",
                relatedToQuestion: null,
                isSelected: false
              },
              {
                id: "2",
                name: "Advance COVID Vaccination",
                relatedToQuestion: null,
                isSelected: false
              },
              {
                id: "3",
                name: "Avoid COVID-19 Infection or Spread",
                relatedToQuestion: null,
                isSelected: false
              }
            ]
          }
        ]
      },
      {
        id: "3",
        name: "Intervention",
        questions: [
          {
            id: "1",
            name: "Vaccination",
            subtext: null,
            isViewable: true,
            answerType: "single",
            answerValue: null,
            items: [
              {
                id: "1",
                name: "Pfizer-BioNTech (30µg / 0.3mL)",
                relatedToQuestion: null,
                isSelected: false
              },
              {
                id: "2",
                name: "Pfizer-BioNTech (10µg / 0.2mL) Pediatric Ages 5-11",
                relatedToQuestion: null,
                isSelected: false
              },
              {
                id: "3",
                name: "Moderna (100µg / 0.5mL)",
                relatedToQuestion: null,
                isSelected: false
              },
              {
                id: "4",
                name: "Moderna Booster (50µg / 0.25mL)",
                relatedToQuestion: null,
                isSelected: false
              },
              {
                id: "5",
                name: "Janssen (5×10^10 viral particles / 0.5mL)",
                relatedToQuestion: null,
                isSelected: false
              },
              {
                id: "6",
                name: "Unknown",
                relatedToQuestion: null,
                isSelected: false
              }
            ]
          },
          {
            id: "2",
            name: "Education, Referrals, Scheduling and PPE",
            subtext: null,
            isViewable: true,
            answerType: "multiple",
            answerValue: null,
            items: [
              {
                id: "1",
                name:
                  "Education: Explanation of Federal / State / Local Policies and Regulations on vaccines",
                relatedToQuestion: null,
                isSelected: false
              },
              {
                id: "2",
                name:
                  "Education: Importance of Adult Immunizations and Clinical Recommendations",
                relatedToQuestion: null,
                isSelected: false
              },
              {
                id: "3",
                name:
                  "Education: Addressing Vaccine Myths and Building Vaccine Confidence",
                relatedToQuestion: null,
                isSelected: false
              },
              {
                id: "4",
                name:
                  "Education: Vaccine Safety Principles and Risk Reduction Methods (e.g., PPE, distancing, handwashing, etc.)",
                relatedToQuestion: null,
                isSelected: false
              },
              {
                id: "5",
                name: "Referral to health center testing program",
                relatedToQuestion: null,
                isSelected: false
              },
              {
                id: "6",
                name: "Referral to health center mask program",
                relatedToQuestion: null,
                isSelected: false
              },
              {
                id: "7",
                name: "Provided masks to patient at this encounter",
                relatedToQuestion: null,
                isSelected: false
              },
              {
                id: "8",
                name: "Provided tests to patient at this encounter",
                relatedToQuestion: null,
                isSelected: false
              },
              {
                id: "9",
                name:
                  "Referral to vaccine confidence session: group or individual engagement",
                relatedToQuestion: null,
                isSelected: false
              }
            ]
          },
          {
            id: "3",
            name: "Patient’s Insurance",
            subtext: null,
            isViewable: true,
            answerType: "text",
            answerValue: null,
            items: [
              {
                isSelected: true
              }
            ]
          }
        ]
      },
      {
        id: "4",
        name: "Follow Up",
        questions: [
          {
            id: "1",
            name: "Encounter Type",
            subtext: null,
            isViewable: true,
            answerType: "single",
            answerValue: null,
            items: [
              {
                id: "1",
                name: "Vaccine Clinic",
                relatedToQuestion: null,
                isSelected: false
              },
              {
                id: "2",
                name: "Covid Test",
                relatedToQuestion: null,
                isSelected: false
              },
              {
                id: "3",
                name: "STD Test / Prevention",
                relatedToQuestion: null,
                isSelected: false
              },
              {
                id: "4",
                name: "STD Test / Prevention",
                relatedToQuestion: null,
                isSelected: false
              },
              {
                id: "5",
                name: "SUD Tx",
                relatedToQuestion: null,
                isSelected: false
              },
              {
                id: "6",
                name: "Enrollment",
                relatedToQuestion: null,
                isSelected: false
              },
              {
                id: "7",
                name: "Medical",
                relatedToQuestion: null,
                isSelected: false
              },
              {
                id: "8",
                name: "Other",
                relatedToQuestion: null,
                isSelected: false
              }
            ]
          },
          {
            id: "2",
            name: "Next Visit/ Follow Up",
            subtext: null,
            isViewable: true,
            answerType: "single",
            answerValue: null,
            items: [
              {
                id: "1",
                name: "In person visit (mobile)",
                relatedToQuestion: null,
                isSelected: false
              },
              {
                id: "2",
                name: "In person visit (health center)",
                relatedToQuestion: null,
                isSelected: false
              },
              {
                id: "3",
                name: "In person visit (social service agency)",
                relatedToQuestion: null,
                isSelected: false
              },
              {
                id: "4",
                name: "Electronic messaging (email, patient portal, etc)",
                relatedToQuestion: null,
                isSelected: false
              },
              {
                id: "5",
                name: "Phone encounter",
                relatedToQuestion: null,
                isSelected: false
              },
              {
                id: "6",
                name: "As needed",
                relatedToQuestion: null,
                isSelected: false
              },
              {
                id: "7",
                name: "No planned follow up",
                relatedToQuestion: null,
                isSelected: false
              }
            ]
          },
          {
            id: "3",
            name: "Next Follow Up Session",
            subtext: null,
            isViewable: true,
            answerType: "date",
            answerValue: null,
            items: [
              {
                isSelected: true
              }
            ]
          },
          {
            id: "4",
            name: "Vaccine Next Dose Due",
            subtext: null,
            isViewable: true,
            answerType: "date",
            answerValue: null,
            items: [
              {
                isSelected: true
              }
            ]
          },
          {
            id: "5",
            name: "Referral",
            subtext: "Referral to other services",
            isViewable: true,
            answerType: "text",
            answerValue: null,
            items: [
              {
                isSelected: true
              }
            ]
          }
        ]
      }
    ]
  },
  answeredSectionsCount: 0
};
