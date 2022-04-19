import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import data from "./mock-data.json";
import ReadOnlyRow from "./components/ReadOnlyRow";
import EditableRow from "./components/EditableRow";

const App = () => {
  const [pokemons, setpokemons] = useState(data);
  const [addFormData, setAddFormData] = useState({
    nomePokemon: "",
    tipoPokemon: "",
    ataquePokemon: "",
    HP: "",
  });

  const [editFormData, setEditFormData] = useState({
    nomePokemon: "",
    tipoPokemon: "",
    ataquePokemon: "",
    HP: "",
  });

  const [editpokemonId, setEditpokemonId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newpokemon = {
      id: nanoid(),
      nomePokemon: addFormData.nomePokemon,
      tipoPokemon: addFormData.tipoPokemon,
      ataquePokemon: addFormData.ataquePokemon,
      HP: addFormData.HP,
    };

    const newpokemons = [...pokemons, newpokemon];
    setpokemons(newpokemons);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedpokemon = {
      id: editpokemonId,
      nomePokemon: editFormData.nomePokemon,
      tipoPokemon: editFormData.tipoPokemon,
      ataquePokemon: editFormData.ataquePokemon,
      HP: editFormData.HP,
    };

    const newpokemons = [...pokemons];

    const index = pokemons.findIndex((pokemon) => pokemon.id === editpokemonId);

    newpokemons[index] = editedpokemon;

    setpokemons(newpokemons);
    setEditpokemonId(null);
  };

  const handleEditClick = (event, pokemon) => {
    event.preventDefault();
    setEditpokemonId(pokemon.id);

    const formValues = {
      nomePokemon: pokemon.nomePokemon,
      tipoPokemon: pokemon.tipoPokemon,
      ataquePokemon: pokemon.ataquePokemon,
      HP: pokemon.HP,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditpokemonId(null);
  };

  const handleDeleteClick = (pokemonId) => {
    const newpokemons = [...pokemons];

    const index = pokemons.findIndex((pokemon) => pokemon.id === pokemonId);

    newpokemons.splice(index, 1);

    setpokemons(newpokemons);
  };

  return (
    <div className="app-container">
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Tipo</th>
              <th>Ataque</th>
              <th>HP</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {pokemons.map((pokemon) => (
              <Fragment>
                {editpokemonId === pokemon.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    pokemon={pokemon}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>

      <h2>Adicionar um Pokemon</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="nomePokemon"
          required="required"
          placeholder="Nome do Pokemon..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="tipoPokemon"
          required="required"
          placeholder="Tipo do Pokemon..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="ataquePokemon"
          required="required"
          placeholder="Ataque do Pokemon..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="HP"
          required="required"
          placeholder="HP do Pokemon..."
          onChange={handleAddFormChange}
        />
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
};

export default App;