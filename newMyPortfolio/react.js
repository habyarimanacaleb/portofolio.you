import React from "react";
import { createRoot } from "react-dom/client";

const container = document.getElementById("app");
const root = createRoot(container);
// Write code here:
 const myList= (
    <ul>
      <li>Hello, family!</li>
    <li>Goodbye, dad!</li>
    <li>Ahoy, man!</li>
    </ul>
 );
 root.render(myList);

// new way of jsx.

const math = <h1>2 + 3 = {2 + 3}</h1>;
root.render(math);

// \IMAGE RENDERING\

const goose = 'https://content.codecademy.com/courses/React/react_photo-goose.jpg';
// Declare new variable here:
const gooseImg = <img src = {goose} />;
root.render(gooseImg);

// event lesseners in react jsx

function makeDoggy(e) {
  // Call this extremely useful function on an <img>.
  // The <img> will become a picture of a doggy.
  e.target.setAttribute(
    "src",
    "https://content.codecademy.com/courses/React/react_photo-puppy.jpeg"
  );
  e.target.setAttribute("alt", "doggy");
}
const kitty = (
  <img
    onClick={makeDoggy}
    src="https://content.codecademy.com/courses/React/react_photo-kitty.jpg"
    alt="kitty"
  />
);
root.render(kitty);

//   condition and if statement in react js

function coinToss () {
    // Randomly return either 'heads' or 'tails'.
    return Math.random() < 0.5 ? 'heads' : 'tails';
  }
  const pics = {
    kitty: 'https://content.codecademy.com/courses/React/react_photo-kitty.jpg',
    doggy: 'https://content.codecademy.com/courses/React/react_photo-puppy.jpeg'
  };
  // const img = <img src={pics[x ? y : z]} />;

  const img = <img src={pics[coinToss() === 'heads' ? 'kitty' : 'doggy']} />;
  root.render(img);

// UAING .MAP() IN Jsx

import React from "react";
import { createRoot } from "react-dom/client";

const container = document.getElementById("app");
const root = createRoot(container);
const people = ["Rowe", "Prevost", "Gare"];

const peopleList = people.map(
  (person, i) => (
    // expression goes here:
    <li key={"person_" + i}>{person}</li>
  ) //adding key in listed items
);
// root.render goes here:
root.render(<ul>{peopleList}</ul>);

// React FOR Create Element

const element = createElement(type, props, ...children)
// example number one

const myPar =createElement("div",null,"hello,world"); // this how you can create new element in JSX

// example two

import { createElement } from 'react';

function Greeting({ name }) {
  return createElement(
    'h1',
    { className: 'greeting' },
    'Hello ',
    createElement('i', null, name),
    '. Welcome!'
  );
}

export default function App() {
  return createElement(
    Greeting,
    { name: 'Taylor' }
  );
}

// other way 

function Greeting({ name }) {
  return (
    <h1 className="greeting">
      Hello <i>{name}</i>. Welcome!
    </h1>
  );
}

export default function App() {
  return <Greeting name="Taylor" />;
}