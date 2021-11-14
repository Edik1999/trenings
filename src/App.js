import './App.css';
import Form from './components/Form';
import TreningsList from './components/TreningsList';
import { useState } from 'react';
import shortid from 'shortid';

function App() {

  const [trenings, setTrenings] = useState([{id: '', date: '', distance: ''}]);

  const addHandler = (dateFromInput, distanceFromInput) => {
    if(trenings.filter(filtered => filtered.date === dateFromInput).length !== 0){
      let id = trenings.filter(filtered => filtered.date === dateFromInput)[0].id
      setTrenings(trenings => 
        trenings.map(item => 
          item.id === id ? {...item, distance: Number(item.distance) + Number(distanceFromInput)} : item))
    } else{
      setTrenings(prev => [...prev, {id: shortid.generate(), date: dateFromInput, distance: distanceFromInput}])
    }
  }

  const removeHandler = (id) => {
    setTrenings(prev => prev.filter(filtered => filtered.id !== id))
  }

  return (
    <div className="trenings">
      <Form onAdd={addHandler}/>
      <TreningsList data={trenings} onRemove={removeHandler}/>
    </div>
  );
}

export default App;
