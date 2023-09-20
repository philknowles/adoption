import { useState } from 'react';

const SearchParams = () => {
  const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

  const [location, setLocation] = useState("");
  const [animal, updateAnimal] = useState("");

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">Location</label>
        <input onChange={(e) => setLocation(e.target.value)} id="location" value={location} placeholder="Location" />
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => {
              updateAnimal(e.target.value);
              updateBreed("");
            }}
            onBlur={(e) => {
              updateAnimal(e.target.value);
              updateBreed("");
            }}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>

    </div>
  )
}

export default SearchParams;