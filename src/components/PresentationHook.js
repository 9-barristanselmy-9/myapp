import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

export default function PresentationHook() {
  const [titre, setTitre] = useState({
    titre: "react",
  });

  const [contact, setContact] = useState({
    nom: "Societe",
    email: "iset@gmail.com",
    logo: (
      <img src="logo192.png" className="rounded mx-auto d-block" alt="..." />
    ),
  });

  const [depart, setDepart] = useState([
    { id: "1", nom: "Commercial" },
    { id: "2", nom: "Developpement" },
    { id: "3", nom: "Maintenance" },
  ]);

  const [newDepart, setNewDepart] = useState("");
  const [editDepartId, setEditDepartId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    let newDepartObject;

    if (editDepartId !== null) {
      const update = depart.map((e) =>
        e.id === editDepartId ? { ...e, nom: newDepart } : e
      );
      setDepart(update);
      setEditDepartId(null);
    } else {
      if (newDepart === "") {
        alert("not empty string");
      } else {
        newDepartObject = {
          id: (depart.length + 1).toString(),
          nom: newDepart,
        };
        setDepart([...depart, newDepartObject]);
      }
    }

    setNewDepart("");
  };

  const handelDelete = (id) => {
    const newDepart = depart.filter((depart) => depart.id !== id);
    setDepart(newDepart);
  };

  const handelEdite = (id) => {
    const editDepart = depart.find((e) => e.id === id);
    if (editDepart) {
      setEditDepartId(id);
      setNewDepart(editDepart.nom);
    } else {
      console.error("departement not found with id ${id}");
    }
  };

  return (
    <>
      <h1>Qui somme nous </h1>
      <div className="box-container ">
        <table className="table table-striped">
          <tr>
            <td>{contact.logo}</td>
            <td>
              <ul>
                <li>{contact.nom}</li>
                <li>{contact.email}</li>
              </ul>
            </td>
          </tr>
        </table>

        <h3>List departement</h3>
        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Nouveau departement"
              value={newDepart}
              onChange={(e) => setNewDepart(e.target.value)}
            />
            <button>
              {editDepartId !== null ? "Modifier" : "Ajouter"} departement
            </button>
          </form>
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Departement</th>
            </tr>
          </thead>

          {depart.map((e, i) => (
            <tr key={i}>
              {console.log("all the id" + i)}
              <td>{e.id}</td>
              <td>{e.nom}</td>
              <td>
                <button onClick={() => handelEdite(e.id)}>Editer</button>
              </td>
              <td>
                <button onClick={() => handelDelete(e.id)}>X</button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
}
