import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const list = ['apple', 'banana', 'mango'];
  const [listItems, setListItems] = useState(list);
  const [value, setValue] = useState('');
  const handleChange = (e) => {
    setValue(e.target.value);

    const filterList = list.filter((item) => {
      return item.includes(e.target.value);
    });
    setListItems(filterList);
  };

  return (
    <>
      <div>
        <h1>Search</h1>
        <input onChange={handleChange} value={value} />
        <ol>
          {listItems.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ol>
      </div>
    </>
  );
}

export default App;
