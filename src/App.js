import "./App.scss";
import PlusIcon from "./components/Mobile/PlusIcon";
import MobileCard from "./components/User/MobileCard";
import Title from "./components/Title/Title";
import Main from "./components/Input/Main";
import User from "./components/User/Main";
import context from "./components/context";
import { useEffect, useState } from "react";
function App() {
  const [contact, setContacts] = useState();
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, [width]);
  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("contactList"));
    console.log(typeof data);
    setContacts(data);
  }, []);
  const searchData = (e) => {
    let data = JSON.parse(localStorage.getItem("contactList"));
    const filteredArray = data.filter((element, index) => {
      return element.name.toUpperCase().includes(e.target.value.toUpperCase());
    });
    setContacts(filteredArray);
  };
  return (
    <>
      <context.Provider value={{ contact, setContacts, width }}>
        <Title text="React Contacts List App" />

        {width <= 920 && <PlusIcon />}
        <Main searchData={searchData} />
        <User />
      </context.Provider>
    </>
  );
}

export default App;
