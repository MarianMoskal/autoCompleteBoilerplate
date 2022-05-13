import React from 'react';

const style = { textAlign: 'center', marginTop: '50px' };
const inputStyle = { height: '35px', width: '300px'}

const App = () => {

  const handleChange = () => {
    
  }

  return (
    <div style={style}>
      <input
        type="text"
        placeholder='User name'
        onChange={handleChange}
        style={inputStyle} />
      {/* <button>Submit</button> */}
    </div>
  );
}

export default App;
// connect(mapStateToProps, mapDispatchToProps, mergeProps, options)(App);