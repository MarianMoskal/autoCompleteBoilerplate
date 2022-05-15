import { useSelector } from 'react-redux';
import s from './App.module.css';
import Form from './Form/Form';
import React from 'react';

export default function App () {
  const { users } = useSelector((state) => state);
  const userNames = users.map(u => u.username);

  const rule = userNames.length !== 0 ;
  
  return (
    <>
      <h1>Autocomplete</h1>
      <p className={s.paragraf}>Start typing:</p>
      {rule &&
        <p> Possible user names to autocomplete: {userNames.sort().join(', ')}</p>
      }
      
      <Form userNames={userNames} />
    
      <hr />
      <div className={s.footer}>
        Made by <b>Marian Moskal</b>. <br/> Have a nice code review
      </div>
    </>
  );
}
