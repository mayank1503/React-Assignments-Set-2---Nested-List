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
  const [cities, setCities] = useState([]);
  const [towns, setTowns] = useState([]);

  const handleState = (indexReceived) => {
    let citiesRetrieved = [];
    states.forEach((state, index) => {
      if (index === indexReceived) {
        citiesRetrieved = state.cities;
      }
    });
    if (cities.length !== 0 && cities[0].name === citiesRetrieved[0].name) {
      setCities([]);
      setTowns([]);
      return;
    }
    setCities(citiesRetrieved);
    setTowns([]);
  };
  const handleCity = (cityReceived) => {
    let townsRetrieved = [];
    cities.forEach((city) => {
      if (city.name === cityReceived) {
        townsRetrieved = city.towns;
      }
    });
    if (towns.length !== 0 && towns[0].name === townsRetrieved[0].name) {
      setTowns([]);
      return;
    }
    setTowns(townsRetrieved);
  };
  return (
    <div id="main">
      <h1>States</h1>
      {states.map((state, index) => (
        <button
          key={state.name}
          id={`state${index + 1}`}
          onClick={() => handleState(index)}
        >
          {state.name}
        </button>
      ))}
      <h1>Cities</h1>
      {cities.map((city, index) => (
        <button
          key={city.name}
          id={`city${index + 1}`}
          onClick={() => handleCity(city.name)}
        >
          {city.name}
        </button>
      ))}
      <h1>Towns</h1>
      {towns.map((town, index) => (
        <div key={town.name} id={`town${index + 1}`}>
          {town.name}
        </div>
      ))}
    </div>
  );
}

export default App;