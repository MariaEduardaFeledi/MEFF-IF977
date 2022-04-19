import React from "react";

const ReadOnlyRow = ({ pokemon, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{pokemon.nomePokemon}</td>
      <td>{pokemon.tipoPokemon}</td>
      <td>{pokemon.ataquePokemon}</td>
      <td>{pokemon.HP}</td>
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, pokemon)}
        >
          Editar
        </button>
        <button type="button" onClick={() => handleDeleteClick(pokemon.id)}>
          Deletar
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;