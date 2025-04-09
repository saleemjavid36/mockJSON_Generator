import React, { useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import { namesData } from "../../data/nameData";
import { phoneNumbers } from "../../data/phoneNumbers";
import { postalCodes } from "../../data/postalZipData";
import { countries } from "../../data/countriesData";
import { generateEmailAddresses } from "../../data/emailData";
import { countriesFullData } from "../../data/CounriesFullData";

const MocGenerator = () => {
     const uuid= uuidv4();
     useEffect(()=>{
        // console.log(phoneNumbers)
      })

    const generateMockData = () => {
        const createRecord = (recordId) => {
          const name = namesData[Math.floor(Math.random() * namesData.length)]
          const userRandomMails = generateEmailAddresses(name)
          const country= countriesFullData[Math.floor(Math.random() * countriesFullData.length)]
          const stateProvinces =
            country.stateProvinces && country.stateProvinces.length > 0
            ? country.stateProvinces[Math.floor(Math.random() * country.stateProvinces.length)].name
            : null;
          return {
            _id: `ObjectId(${uuid})`,
            id:recordId,
            name: name,
            phone:`${country.phone}-${phoneNumbers[Math.floor(Math.random()*phoneNumbers.length)]}`,
            postalZip: `${postalCodes[Math.floor(Math.random()*postalCodes.length)]}`,
            country: country.name,
            symbol:``,
            stateProvinces: stateProvinces,
            email:userRandomMails[Math.floor(Math.random() * userRandomMails.length)],
            address: `${Math.floor(Math.random() * 9000 + 100)} Random Street`,
            salary: `${(Math.random() * 10000 + 1).toFixed(2)}`,
            currencySymbol:`${country.symbol}`,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            numberrange: Math.floor(Math.random() * 10 + 1),
            guid: `${recordId}-GUID-${Math.floor(Math.random() * 99999)}`,
            weightedlist: Math.floor(Math.random() * 10 + 1),
            descendants: [
              {
                favoriteDish: ["Spaghetti", "Pizza", "Burger"][
                  Math.floor(Math.random() * 3)
                ],
                recipeUrl: `www.recipes${recordId}.com/dish`,
                cuisineType: ["Italian", "American", "Mexican"][
                  Math.floor(Math.random() * 3)
                ],
                cookingTime: `${Math.floor(Math.random() * 50 + 10)} minutes`,
                ingredients: [
                  ["Tomato", "Cheese", "Chicken"][Math.floor(Math.random() * 3)],
                  ["Pasta", "Bread", "Rice"][Math.floor(Math.random() * 3)],
                ],
                descendants: [
                  {
                    carBrand: ["Tesla", "Ford", "BMW"][Math.floor(Math.random() * 3)],
                    model: ["Model S", "Mustang", "X5"][Math.floor(Math.random() * 3)],
                    year: Math.floor(Math.random() * 24 + 2000),
                    electric: Math.random() < 0.5,
                    features: [
                      ["Autopilot", "Sunroof", "Leather Seats"][
                      Math.floor(Math.random() * 3)
                      ],
                      ["GPS", "Heated Seats", "Bluetooth"][
                      Math.floor(Math.random() * 3)
                      ],
                    ],
                    descendants: [
                      {
                        plantType: ["Succulent", "Fern", "Cactus"][
                          Math.floor(Math.random() * 3)
                        ],
                        name: ["Echeveria", "Boston Fern", "Golden Barrel"][
                          Math.floor(Math.random() * 3)
                        ],
                        careTips: "Needs sunlight and occasional watering.",
                        origin: ["Mexico", "USA", "Australia"][
                          Math.floor(Math.random() * 3)
                        ],
                        indoorFriendly: Math.random() < 0.5,
                        descendants: [],
                      },
                    ],
                  },
                ],
              },
            ],
          };
        };
        // Generate 10,000 records
        const data = [];
        for (let i = 1; i <= 1; i++) {
          data.push(createRecord(i));
        }
        console.log(data[0])
    
        // Save the data to a file
        // const json = JSON.stringify(data, null, 2);
        // const blob = new Blob([json], { type: "application/json" });
        // const link = document.createElement("a");
        // link.href = URL.createObjectURL(blob);
        // link.download = "mock_data.json";
        // link.click();
      };
    
  return (
    <div className="col-12 d-flex justify-content-center   vh-100">
    <div  className="my-5 d-flex flex-column align-items-center">
      <h1>Generate Mock JSON Data</h1>
      <button onClick={generateMockData}>Generate and Download JSON</button>
    </div>

  </div>
  )
}

export default MocGenerator