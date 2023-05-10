import { Fragment } from "react";
function ListGroup() {
  let cities = ["new york", "new delhi", "london", "nairobi", "tokyo"];
  return (
    <Fragment>
      <h1>List</h1>
      {/* {cities.length === 0 ? <p>Nothing in the cities group</p> : null} */}
      {cities.length === 0 && <p>Nothing in the cities group</p>}
      <ul className="list-group">
        {cities.map((city) => (
          <li
            key={city}
            className="list-group-item"
            onClick={() => console.log("you clicked me ", city)}
          >
            {city}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
