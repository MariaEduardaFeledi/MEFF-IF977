import React from "react";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Nome do Pokemon..."
          name="nomePokemon"
          value={editFormData.nomePokemon}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Tipo do Pokemon..."
          name="tipoPokemon"
          value={editFormData.tipoPokemon}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Ataque do Pokemon..."
          name="ataquePokemon"
          value={editFormData.ataquePokemon}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="HP do Pokemon..."
          name="HP"
          value={editFormData.HP}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <button type="submit">Salvar</button>
        <button type="button" onClick={handleCancelClick}>
          Cancelar
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;