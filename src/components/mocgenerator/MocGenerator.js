import React, { useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import { namesData } from "../../data/nameData";
import { phoneNumbers } from "../../data/phoneNumbers";
import { postalCodes } from "../../data/postalZipData";
import { generateEmailAddresses } from "../../data/emailData";
import { countriesFullData } from "../../data/CounriesFullData";
import { UserProfessions } from "../../data/professions";
import { Hobbies } from "../../data/hobbies";
import { Dishes } from "../../data/dishes";
import { CuisineTypes } from "../../data/cuisineTypes";
import { Ingredients } from "../../data/ingredients";
import { PlantTypes, PlantNames, Origins, CareTips } from "../../data/plantsDetails";
import { CarsData } from "../../data/carDetails";


const MocGenerator = () => {
  const uuid = uuidv4();
  //  useEffect(()=>{
  //    console.log(UserProfessions)
  //  })

  const generateMockData = () => {
    const createRecord = (recordId) => {
      const name = namesData[Math.floor(Math.random() * namesData.length)]
      const userRandomMails = generateEmailAddresses(name)
      const country = countriesFullData[Math.floor(Math.random() * countriesFullData.length)]
      const stateProvinces =
        country.stateProvinces && country.stateProvinces.length > 0
          ? country.stateProvinces[Math.floor(Math.random() * country.stateProvinces.length)].name
          : null;
      const userCarData = CarsData[Math.floor(Math.random() * CarsData.length)]
      return {
        _id: `ObjectId(${uuid})`,
        id: Number(recordId),
        name: name,
        phone: `${country.phone}-${phoneNumbers[Math.floor(Math.random() * phoneNumbers.length)]}`,
        postalZip: `${postalCodes[Math.floor(Math.random() * postalCodes.length)]}`,
        country: country.name,
        stateProvinces: stateProvinces,
        email: userRandomMails[Math.floor(Math.random() * userRandomMails.length)],
        address: `${Math.floor(Math.random() * 9000 + 100)} Street`,
        salary: Number((Math.random() * 10000 + 1).toFixed(2)),
        currencySymbol: `${country.symbol}`,
        profession: UserProfessions[Math.floor(Math.random() * UserProfessions.length)],
        hobbies: Hobbies[Math.floor(Math.random() * Hobbies.length)],
        userPreferences: [
          {
            dishesDetails:
            {
              favoriteDish: Dishes[Math.floor(Math.random() * Dishes.length)],
              cuisineType: CuisineTypes[Math.floor(Math.random() * CuisineTypes.length)],
              cookingTime: `${Math.floor(Math.random() * 90 + 10)} minutes`,
              ingredients: [Ingredients[Math.floor(Math.random() * 3)], Ingredients[Math.floor(Math.random() * 3)],],
            }
            ,
            plantDetails:
            {
              plantType: PlantTypes[Math.floor(Math.random() * PlantTypes.length)],
              name: PlantNames[Math.floor(Math.random() * PlantNames.length)],
              careTips: CareTips[Math.floor(Math.random() * CareTips.length)],
              origin: Origins[Math.floor(Math.random() * Origins.length)],
              indoorFriendly: Math.random() < 0.5,
            },

            carDetails:
            {
              carBrand: Object.keys(userCarData)[0],
              model: userCarData[Object.keys(userCarData)[0]]['models'][Math.floor(
                Math.random() * userCarData[Object.keys(userCarData)[0]]['models'].length
              )],
              year: userCarData[Object.keys(userCarData)[0]]['years'][Math.floor(
                Math.random() * userCarData[Object.keys(userCarData)[0]]['years'].length
              )],
              features: [
                userCarData[Object.keys(userCarData)[0]]['features'][Math.floor(
                  Math.random() * userCarData[Object.keys(userCarData)[0]]['features'].length
                )],
                userCarData[Object.keys(userCarData)[0]]['features'][Math.floor(
                  Math.random() * userCarData[Object.keys(userCarData)[0]]['features'].length
                )],
              ],
              electric: Math.random() < 0.5,
            },

          },

        ],
      };
    };
    // Generate 10,000 records
    const data = [];
    for (let i = 1; i <= 1000; i++) {
      data.push(createRecord(i));
    }
// console.log(data[0])

    // Save the data to a file
    const json = JSON.stringify(data, null, 2);
    const blob = new Blob([json], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "mock_data.json";
    link.click();
  };

  return (
    <div className="col-12 d-flex justify-content-center   vh-100">
      <div className="my-5 d-flex flex-column align-items-center">
        <h1>Generate Mock JSON Data</h1>
        <button onClick={generateMockData}>Generate and Download JSON</button>
      </div>

    </div>
  )
}

export default MocGenerator