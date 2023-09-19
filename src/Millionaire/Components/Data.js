const data = [
  {
    id: 1,
    question: "What does MERN stand for in the context of web development?",
    answer: [
      { text: "MongoDB, Express, React, Node.js", answer: true },
      { text: "MySQL, Ember, React, Nginx", answer: false },
      { text: "Markdown, Express, Ruby, .NET", answer: false },
      { text: "Mongoose, Elm, Redux, NPM", answer: false },
    ],
  },
  {
    id: 2,
    question: "Which technology is primarily used for building the backend of a MERN application?",
    answer: [
      { text: "MongoDB", answer: false },
      { text: "React", answer: false },
      { text: "Node.js", answer: true },
      { text: "Express", answer: false },
    ],
  },
  {
    id: 3,
    question: "Which database is commonly used as the 'M' in MERN stack development?",
    answer: [
      { text: "MySQL", answer: false },
      { text: "MongoDB", answer: true },
      { text: "SQLite", answer: false },
      { text: "PostgreSQL", answer: false },
    ],
  },
  {
    id: 4,
    question: "What is React in the MERN stack known for?",
    answer: [
      { text: "Server-side rendering", answer: false },
      { text: "Backend development", answer: false },
      { text: "User interface (UI) components", answer: true },
      { text: "Database management", answer: false },
    ],
  },
  {
    id: 5,
    question: "Which of the following is NOT a part of the MERN stack?",
    answer: [
      { text: "React", answer: false },
      { text: "Express", answer: false },
      { text: "Angular", answer: true },
      { text: "Node.js", answer: false },
    ],
  },
  {
    id: 6,
    question: "What is Express in the MERN stack primarily used for?",
    answer: [
      { text: "Frontend development", answer: false },
      { text: "Database management", answer: false },
      { text: "Backend development", answer: true },
      { text: "State management", answer: false },
    ],
  },
  {
    id: 7,
    question: "Which programming language is commonly used for server-side scripting in Node.js?",
    answer: [
      { text: "Python", answer: false },
      { text: "JavaScript", answer: true },
      { text: "Java", answer: false },
      { text: "Ruby", answer: false },
    ],
  },
  {
    id: 8,
    question: "What is the purpose of Mongoose in a MERN application?",
    answer: [
      { text: "Frontend routing", answer: false },
      { text: "Database modeling and interaction", answer: true },
      { text: "State management", answer: false },
      { text: "UI component rendering", answer: false },
    ],
  },
  {
    id: 9,
    question: "Which component library is commonly used for building user interfaces in React?",
    answer: [
      { text: "Bootstrap", answer: false },
      { text: "Material-UI", answer: true },
      { text: "Semantic UI", answer: false },
      { text: "Foundation", answer: false },
    ],
  },
  {
    id: 10,
    question: "What is the primary purpose of NPM in a MERN project?",
    answer: [
      { text: "Version control", answer: false },
      { text: "Package management and dependency installation", answer: true },
      { text: "Database management", answer: false },
      { text: "Frontend design", answer: false },
    ],
  },
  {
    id: 11,
    question: "Which tool is commonly used for building and managing a MERN project's dependencies?",
    answer: [
      { text: "Git", answer: false },
      { text: "Webpack", answer: false },
      { text: "Babel", answer: false },
      { text: "npm", answer: true },
    ],
  },
  {
    id: 12,
    question: "What is the primary role of Redux in a React application within the MERN stack?",
    answer: [
      { text: "Server-side rendering", answer: false },
      { text: "Database management", answer: false },
      { text: "State management", answer: true },
      { text: "UI component rendering", answer: false },
    ],
  },
  {
    id: 13,
    question: "Which tool is commonly used for bundling and optimizing JavaScript code in a MERN application?",
    answer: [
      { text: "Gulp", answer: false },
      { text: "Webpack", answer: true },
      { text: "Grunt", answer: false },
      { text: "Parcel", answer: false },
    ],
  },
  {
    id: 14,
    question: "What is the purpose of Babel in the context of MERN development?",
    answer: [
      { text: "Database modeling", answer: false },
      { text: "Transpiling JavaScript code", answer: true },
      { text: "UI component rendering", answer: false },
      { text: "Package management", answer: false },
    ],
  },
  {
    id: 15,
    question: "Which tool is commonly used for testing and debugging MERN applications?",
    answer: [
      { text: "Jest", answer: true },
      { text: "Mocha", answer: false },
      { text: "Jasmine", answer: false },
      { text: "Cypress", answer: false },
    ],
  },
  {
    id: 16,
    question: "Which tool is commonly used for testing and debugging MERN applications?",
    answer: [
      { text: "Jest", answer: true },
      { text: "Mocha", answer: false },
      { text: "Jasmine", answer: false },
      { text: "Cypress", answer: false },
    ],
  }
  
];

const prizeMoney=[
    {id:1,amount:"$ 100"},
    {id:2,amount:"$ 200"},
    {id:3,amount:"$ 400"},
    {id:4,amount:"$ 800"},
    {id:5,amount:"$ 1000"},
    {id:6,amount:"$ 2000"},
    {id:7,amount:"$ 4000"},
    {id:8,amount:"$ 8000"},
    {id:9,amount:"$ 16000"},
    {id:10,amount:"$ 32000"},
    {id:11,amount:"$ 64000"},
    {id:12,amount:"$ 100000"},
    {id:13,amount:"$ 1000000"},
    {id:14,amount:"$ 5000000"},
    {id:15,amount:"$ 10000000"},
    {id:16,amount:""},
].reverse()

export {prizeMoney,data}