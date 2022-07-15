import React from 'react';
import axios from 'axios';

const UseEffectDemo = () => {

  console.log('i am rendering');

  const [count, setCount] = React.useState(0);
  const [search, setSearch] = React.useState('');
  const [ingredients, setIngredients] = React.useState([]);

  React.useEffect(() => {
    console.log('updating document title');
    document.title = `${count}: You clicked this many times.`;
  },[count]);

  React.useEffect(
    () => {
      console.log('start an interval');
      const intervalReference = setInterval(() => {
        console.log('i am alive!');
      },555);
      return () => {
        console.log('i am cleaning up the interval');
        clearInterval(intervalReference);
      };
    }
  , []); // an empty dependency array means that this callback will run once and only once.

    React.useEffect(() => {
      axios
        .get('https://my-json-server.typicode.com/andydlindsay/chef-andy/ingredients')
        .then((res) => {
          console.log(res);
          setIngredients(res.data);
        });
    },[]);

//
// the logic of this component
//

  console.log('i am still rendering');
  return (
    <div>
      <h1>UseEffectDemo</h1>

      <div>
        <h3>Count: {count}</h3>
        <button onClick={ () => setCount(count + 1) }>Increment</button>
      </div>

      <div>
        <label htmlFor="search"></label>
        <input
          type="text"
          id="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <h3>Search term: {search}</h3>
      </div>

      <div>
        <h4>Ingredients</h4>
        { ingredients.map((item,index) => {return <p key={index} >{item.name}</p>}) }
      </div>

    </div>
  );

};

export default UseEffectDemo;