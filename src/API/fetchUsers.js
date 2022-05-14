import axios from "axios";

export function fetchUsers() {
  return async function fetchData(dispatch) {
    try {
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
     
      dispatch({ type: 'fetchUsers', payload: data });
      
    } catch (error) {
      console.log(error.message);
    }
  }
}