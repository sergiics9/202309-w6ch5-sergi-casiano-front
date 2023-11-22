import './filter.scss';

export function Filter() {
  return (
    <div className="filter-button">
      <label htmlFor="filter">Filter by: </label>
      <select
        // onChange={}
        name="filter"
        id="filter"
        // value={}
      >
        <option value="">All</option>
        <option value="Rifle">Pistols</option>
        <option value="SMG">SMG's</option>
        <option value="Pistol">Rifles</option>
        <option value="Knife">Knifes</option>
        <option value="Glove">Gloves</option>
      </select>
    </div>
  );
}
