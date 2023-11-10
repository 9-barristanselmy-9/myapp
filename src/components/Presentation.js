import React, { Component } from "react";
import "../App.css";

export default class Presentation extends Component {
  state = {
    titre: "react",
    contact: {
      nom: "Ma societe",
      email: "iset@gmail.com",
      logo: "logo192.png",
    },
    departs: [
      { id: "1", nom: "Commercial" },
      { id: "2", nom: "Developpement" },
      { id: "3", nom: "Maintenance" },
    ],
  };

  render() {
    const display = this.state.departs.map((e, i) => (
      <tr key={i}>
        <td>{e.id}</td>
        <td>{e.nom}</td>
      </tr>
    ));

    return (
      <div>
        <h1>Qui somme nous </h1>
        <div className="box-container ">
          <table className="table">
            <tr>
              <td>
                <img src={this.state.contact.logo} />
              </td>
              <td>
                <ul>
                  <li>{this.state.contact.nom}</li>
                  <li>{this.state.contact.email}</li>
                </ul>
              </td>
            </tr>
          </table>

          <h3>list departement</h3>
          <table className="tab-depart">{display}</table>
        </div>
      </div>
    );
  }
}
