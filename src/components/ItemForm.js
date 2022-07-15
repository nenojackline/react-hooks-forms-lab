import React, {useState} from "react";
import { v4 as uuid } from "uuid"; // creates a uunique key

function ItemForm({onItemSubmission}) {
  const [name, setName] = useState("")
  const [category, setCategory] = useState("Produce")

  function handleNameChange(event){
    setName(event.target.value)
  }

  function handleCategoryChange(event) {
    setCategory(event.target.value)
  }

  function handleSubmitData(event){
    event.preventDefault();
    onItemSubmission({
      id: uuid(),
      name,
      category
    }) // back in app,js newitem is an object so onItemSubmission has to be an object
  }}

{
  return (
    <form className="NewItem" onSubmit={handleSubmitData}>
      <label>
        Name:
        <input type="text" name="name" value={name} onChange={handleNameChange} />
      </label>

      <label>
        Category:
        <select name="category" value={category} onChange={handleCategoryChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
  }

export default ItemForm;
