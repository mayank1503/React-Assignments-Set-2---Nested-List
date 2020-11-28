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
  console.log(states);
  return (
    <div id="main">
      <StateList states={states} />
    </div>
  );
}

function StateList(props) {
  const { states } = props;
  console.log(states);
  const stateClickStatus = Array(states.length).fill(false);
  // console.log(stateClickStatus);
  const [clickedStates, setClickedStates] = useState(stateClickStatus);

  return (
    <>
      {states.map((state, index) => (
        <ul key={index}>
          <h3
            id={`state${index + 1}`}
            key={index}
            onClick={(event) => {
              event.preventDefault();
              let copyClickedStates = [...clickedStates];
              copyClickedStates[index] = !copyClickedStates[index];
              setClickedStates(copyClickedStates);
            }}
          >
            {state.name}
            <br />
          </h3>
          <CitiyList cities={state.cities} isVisible={clickedStates[index]} />
        </ul>
      ))}
    </>
  );
}

function CitiyList(props) {
  const { cities, isVisible } = props;
  const cityClickStatus = Array(states.length).fill(false);
  const [cityClick, setCityClick] = useState(cityClickStatus);
  //console.log(cityClick);

  return (
    <>
      {" "}
      {isVisible
        ? cities.map((city, index) => (
          <ul key={`${index}${city.name}`}>
            <li
              key={index}
              id={`city${index + 1}`}
              onClick={(event) => {
                event.preventDefault();
                const copyOfClicked = [...cityClick];
                copyOfClicked[index] = !copyOfClicked[index];
                setCityClick(copyOfClicked);
              }}
            >
              {" "}
              <h4>{city.name}</h4>
              <ul>
              {cityClick[index]
                ? city.towns.map((town, index) => (
                    <li key={`${town.name}`} id={`twon${index + 1}`}>
                      <h5>{town.name}</h5>
                    </li>
                  ))
                : null}</ul>
            </li>
            </ul>
          ))
        : null}
    </>
  );
}

export default App;