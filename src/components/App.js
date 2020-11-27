import React, { Component, useState } from "react";
import "./../styles/App.css";

// Do not alter the states const and values inside it.
const states = [
  {
    name: "Madhya Pradesh",
    cities: [
      {
        name: "Indore",
        towns: [
          {
            name: "Mhow",
          },
          {
            name: "Dewas",
          },
        ],
      },
      {
        name: "Bhopal",
        towns: [
          {
            name: "Manit",
          },
          {
            name: "Berasia",
          },
        ],
      },
      {
        name: "Gwalior",
        towns: [
          {
            name: "Ajaypur",
          },
        ],
      },
    ],
  },
  {
    name: "Jharkhand",
    cities: [
      {
        name: "Dhanbad",
        towns: [
          {
            name: "IIT(ISM) Dhanbad",
          },
          {
            name: "Hirapur",
          },
        ],
      },
      {
        name: "Wasseypur",
        towns: [
          {
            name: "Sardar khan's",
          },
          {
            name: "Faizal khan's",
          },
        ],
      },
      {
        name: "Mirzapur",
        towns: [
          {
            name: "Kaleen bhaiya's",
          },
          {
            name: "Guddu bhaiya's",
          },
        ],
      },
    ],
  },
  {
    name: "Assam",
    cities: [
      {
        name: "Guwhati",
        towns: [
          {
            name: "Amin",
          },
          {
            name: "Jalah",
          },
        ],
      },
      {
        name: "Jungle1",
        towns: [
          {
            name: "Tiger found at IIT Guwahati",
          },
          {
            name: "Leopard found in IIT Guwahati",
          },
        ],
      },
      {
        name: "Tezpur",
        towns: [
          {
            name: "Dibrugarh",
          },
          {
            name: "Silchar",
          },
        ],
      },
    ],
  },
  {
    name: "Bihar",
    cities: [
      {
        name: "Patna",
        towns: [
          {
            name: "Sonpur",
          },
          {
            name: "Maner",
          },
        ],
      },
      {
        name: "Gaya",
        towns: [
          {
            name: "Bakraur",
          },
          {
            name: "Barachatti",
          },
        ],
      },
      {
        name: "Darbhanga",
        towns: [
          {
            name: "Singhwara",
          },
          {
            name: "Jale",
          },
        ],
      },
    ],
  },
];

function App() {
  const [inputState, setInputState] = React.useState({
    states: [...states],
    cities: [],
    towns: [],
    isStateClicked: false,
    isCityClicked: false
  });

  const handelClick = (index, key, parent, clicked) => {
    let inputStateCopy = { ...inputState };
    inputStateCopy[key] = inputStateCopy[parent][index][key];
    inputStateCopy[`${clicked}`] = true;

    setInputState(inputStateCopy);
  };

  return (
    <div id="main">
      {/* <label for="states">States</label> */}
      <ol>
        {inputState.states.map((state, index) => (
          <div
            id={`state${index + 1}`}
            key={state.name}
            onClick={() =>
              handelClick(index, "cities", "states", "isStateClicked")
            }
          >
            <li>{state.name}</li>
          </div>
        ))}
      </ol>

      {/* {inputState.isStateClicked && ( */}
        <ol>
          {inputState.cities.map((city, index) => (
            <div
              id={`city${index + 1}`}
              key={city.name}
              onClick={() =>
                handelClick(index, "towns", "cities", "isCityClicked")
              }
            >
              <li>{city.name}</li>
            </div>
          ))}
        </ol>
      {/* )} */}

      {/* {inputState.isCityClicked && ( */}
        <ol>
          {inputState.towns.map((town, index) => (
            <div id={`town${index + 1}`} key={town.name}>
              <li>{town.name}</li>
            </div>
          ))}
        </ol>
      {/* )} */}
    </div>
  );
}

export default App;