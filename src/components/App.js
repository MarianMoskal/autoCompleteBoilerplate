import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import s from './App.module.css';


const App = () => {
  const [search, setSearch] = useState('');
  const [matches, setMatches] = useState([]);

  const { users } = useSelector((state) => state);
  const userNames = users.map(u => u.username);

  useEffect(() => {
    if (search !== '') {
      const names = userNames.filter(n =>
        n.toLowerCase().substring(0, search.length) === search
      )
      
      setMatches(names);
    }
  }, [search])
  

  const handleChange = (e) => {
    setSearch(e.target.value.trim().toLowerCase())
  }

  const handleClick = (e) => {
    setSearch(e.currentTarget.textContent)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`You entered ${search.toUpperCase()} name`)
    e.target.input.value = '';
  }

  const rule = userNames.length !== 0 ;
  const rule2 = matches.length > 0 && search !== '';
  
  return (
    <>
    <h1>Autocomplete</h1>
    <p className={s.paragraf}>Start typing:</p>
    {rule &&
      <p> Possible user names to autocomplete: {userNames.sort().join(', ')}</p>
    }
    
    <form className={s.form} onSubmit={handleSubmit}>
      <div className={s.container}>
        <input
          type="text"
          id='input'
          required={true}
          value={search} 
          autoComplete='off'
          placeholder='Enter user name'
          onChange={handleChange}
          className={s.input} 
        />
      
        <div className={s.optionsContainer}>
            {rule2 && matches.map(i => {
              let sub, rest;
              
              if (i.toLowerCase().substring(0, search.length) === search) {
                sub = i.slice(0, search.length);
                rest = i.slice(search.length);
              }

              return (
                <div id='option' key={i}
                  onClick={handleClick}
                  className={s.subInput}
                >
                  <b>{sub}</b>{rest}
                </div>)
            })
          }
        </div>
      </div>
      
      <button className={s.button} type='submit'>Submit</button>
    </form>
    
      <hr />
      <div className={s.footer}>
        Made by <b>Marian Moskal</b>. <br/> Have a nice code review
      </div>
    </>
  );
}

export default App;
