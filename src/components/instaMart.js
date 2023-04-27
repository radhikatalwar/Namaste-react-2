import { useState } from "react";

const Section = ({ title, desc, isVisible, setIsVisible }) => {
  return (
    <div
      className="border border-black p-2 m-2 cursor-pointer"
      onClick={() => setIsVisible()}
    >
      <h1 className="text-2xl p-1 m-1 font-bold">{title}</h1>
      {isVisible && <p className="p-1 mx-1">{desc}</p>}
    </div>
  );
};

// THIS CODE IS NOT MAINTAINABLE SO WE NEED TO WRITE BETTER CODE

// const Instamart = () => {
//   const [sectionConfig, setSectionConfig] = useState({
//     showAbout: false,
//     showTeam: false,
//     showCareer: false,
//   });
//   return (
//     <div>
//       <h1 className="p-1 mx-1">Insta Mart</h1>
//       <h1 className="p-1 mx-1">Hundreds of components inside it.</h1>
//       <Section
//         title={"About Instamart"}
//         desc={"This is About Instamart"}
//         isVisible={sectionConfig.showAbout}
//         setIsVisible={() => {
//           setSectionConfig({
//             showAbout: true,
//             showTeam: false,
//             showCareer: false,
//           });
//         }}
//       />
//       <Section
//         title={"Team Instamart"}
//         desc={"This is Team Instamart"}
//         isVisible={sectionConfig.showTeam}
//         setIsVisible={() => {
//           setSectionConfig({
//             showAbout: false,
//             showTeam: true,
//             showCareer: false,
//           });
//         }}
//       />
//       <Section
//         title={"Career Instamart"}
//         desc={"This is Career Instamart"}
//         isVisible={sectionConfig.showCareer}
//         setIsVisible={() => {
//           setSectionConfig({
//             showAbout: false,
//             showTeam: false,
//             showCareer: true,
//           });
//         }}
//       />
//     </div>
//   );
// };

const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState("about");
  return (
    <div>
      <h1 className="p-1 mx-1">Insta Mart</h1>
      <h1 className="p-1 mx-1">Hundreds of components inside it.</h1>
      <Section
        title={"About Instamart"}
        desc={"This is About Instamart"}
        isVisible={visibleSection === "about"}
        setIsVisible={() => setVisibleSection("about")}
      />
      <Section
        title={"Team Instamart"}
        desc={"This is Team Instamart"}
        isVisible={visibleSection === "team"}
        setIsVisible={() => setVisibleSection("team")}
      />
      <Section
        title={"Career Instamart"}
        desc={"This is Career Instamart"}
        isVisible={visibleSection === "career"}
        setIsVisible={() => setVisibleSection("career")}
      />
    </div>
  );
};

export default Instamart;
