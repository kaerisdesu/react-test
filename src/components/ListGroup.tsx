import {useState } from "react";

function ListGroup() {
  let items = ['Moscow','Krasnogorsk','Tomsk','Ufa'];
  const[selectedIndex, setSelectedIndex] = useState(-1);
  
  const getMassage = () => {
    return items.length === 0 ? <p>Не найдено предметов!</p> : null
  }

  return (
  <>
    <h1>List</h1>
    {getMassage()}
    <ul className="list-group">
      {items.map((item, index) => 
        <li 
            className={ selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
            key={item} 
            onClick={() => {setSelectedIndex(index);}}
        >
          {item}
        </li>
        )}
    </ul>
  </>
  );
}

export default ListGroup;