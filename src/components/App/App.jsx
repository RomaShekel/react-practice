// src/components/App.jsx

import { useEffect, useState } from "react";
import Modal from "../Modal/Modal";

const LOCAL_STORAGE_KEY = "viskas";
export default function App() {
const [modal, setModal] = useState(false);
const [clicks, setClicks] = useState(() => {
const obj = localStorage.getItem(LOCAL_STORAGE_KEY);
if (obj !== null) {
  return JSON.parse(obj);
}
return {  clicks1: 0,
  clicks2: 0,}
});



useEffect(() => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(clicks))
},[clicks])

const handleModal = (evt) => {
  console.log(evt.target);
  setModal(!modal);
  console.log(modal)
}

const handleClicks = (type) => {
  setClicks({
    ...clicks,
    [type]: clicks[type] + 1,
  })
}

  return (
    <div>
      <Modal
        handleModal={handleModal}
        state={modal}
        handleClicks={handleClicks}
        clicks={clicks}
        />
    </div>
  );
}

