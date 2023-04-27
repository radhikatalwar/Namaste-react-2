// ReactElement -> object

const heading1 = React.createElement(
  "h1",
  { id: "heading", key: "head1" },
  "Heading 1"
);
console.log(heading1);

// JSX
// Rendering JSX - root.render(heading);

const heading = (
  <h1 key="heading" id="title">
    Radhika Talwar
  </h1>
);
console.log(heading);

// Functional Components -> Function Returning JSX
// Rendering Functional Components - root.render(<FunctionalComponentSingleLine/>);

const FunctionalComponentSingleLine = () => {
  return <h1>FunctionalFunctionalComponentComponent</h1>;
};

const FunctionalComponentMultiLine = () => {
  return (
    <div>
      <h1>FunctionalComponentMultiLine</h1>
    </div>
  );
};

/** Inline Style */
const FunctionalComponentMultiLineWithoutReturn = () => (
  <div style={{ backgroundColor: "yellow" }}>
    <h1>FunctionalComponentMultiLineWithoutReturn</h1>
  </div>
);

const styleObj = {
  backgroundColor: "red",
};

const FunctionalComponentMultiLineWithFunction = function () {
  return (
    <div style={styleObj}>
      <h1>FunctionalComponentMultiLineWithFunction</h1>
    </div>
  );
};

const xyz = 10;
const Main = () => {
  return (
    <>
      {/* {/ We are written any piece of Javascript code in this paranthesis /} */}
      {xyz}
      {1 + 2}
      {console.log(xyz)}
      {/* {/ Calling JSX  /} */}
      {heading}
      {/* {/ Below Both are same as it is just a function /} */}
      <FunctionalComponentMultiLine />
      {FunctionalComponentMultiLine()}
      <FunctionalComponentMultiLineWithFunction />
      <FunctionalComponentMultiLineWithoutReturn />
      <FunctionalComponentSingleLine />
      {
        // IN REACT
        /**
         *
         * Is JSX Mandatory? - No
         * Is TS Mandatory? - No
         * Is ES6 Mandatory? - No
         */
      }
    </>
  );
};
