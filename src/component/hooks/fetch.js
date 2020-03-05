import {useState} from 'react';


const Fetch = (props)=>{
  const [data, setData] = useState({});
  const getAPI = async e =>{
    const api = await fetch('https://api-js401.herokuapp.com/api/v1');
    let  result = await api.json();
    setData(data =>({...data, data: result}));
  };
  return [getAPI];
};

export default Fetch;