// import React, { createContext, useState } from "react";

// // Create the context
// interface MyContextProps {
//   theme: string;
//   activeSection: string;
//   setSection: (sectionData: string) => void;
//   updateData: (newData: string) => void;
// }

// const MyContext = createContext<MyContextProps | null>(null);

// // Create a provider component
// function AppProvider({ children }: any) {
//   const [theme, setData] = useState("Initial data");
//   const [activeSection, setActiveSection] = useState("");

//   const updateData = (newData: string) => {
//     setData(newData);
//   };
//   const setSection = (sectionData: string) => {
//     setActiveSection(sectionData);
//   };
//   return (
//     <MyContext.Provider
//       value={{ theme, updateData, activeSection, setSection }}
//     >
//       {children}
//     </MyContext.Provider>
//   );
// }

// //const myContextData = useContext(MyContext);

// export { MyContext, AppProvider };

import React, { createContext, useState } from "react";

// Create the context
interface MyContextProps {
  theme: string;
  activeSection: string;
  setSection: (sectionData: string) => void;
  updateData: (newData: string) => void;
}

const MyContext = createContext<MyContextProps | null>(null);

// Create a provider component
function AppProvider({ children }: any) {
  const [theme, setTheme] = useState("light");
  const [activeSection, setActiveSection] = useState("home");

  const updateData = (newData: string) => {
    setTheme(newData);
  };

  const setSection = (sectionData: string) => {
    setActiveSection(sectionData);
  };

  return (
    <MyContext.Provider
      value={{ theme, activeSection, setSection, updateData }}
    >
      {children}
    </MyContext.Provider>
  );
}

export { MyContext, AppProvider };
