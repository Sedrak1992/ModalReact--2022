import Model from "./components/Model.jsx";

import { useState } from "react";
import "./App.css";

function App() {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  function handleToggle() {
   setOpen(!open)
  }

  return (
    <div className="App">
      <button onClick={handleToggle}>add modal</button>

      <Model open={open} handleClose={handleClose}></Model>
    </div>
  );
}

export default App;

// import React, { useState } from "react";

// function App() {
//   const [showModal, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//     <div>
//       <div
//         className="d-flex align-items-center justify-content-center"
//         style={{ height: "100vh" }}
//       >
//         <button variant="primary" onClick={handleShow}>
//           Launch demo modal
//         </button>
//       </div>
//       <div show={showModal} onHide={handleClose}>
//         <div>
//           <button variant="secondary" onClick={handleClose}>
//             Close
//           </button>
//           <button variant="primary" onClick={handleClose}>
//             Save Changes
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// // export default App;
