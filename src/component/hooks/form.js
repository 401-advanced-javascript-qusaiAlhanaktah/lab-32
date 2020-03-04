import {useState} from 'react';

const useForm = cb =>{
  const [values, setValues] = useState({});
  const handelSubmit = e =>{
    if (e) e.preventDefault();
    callback(values);
  };
  const handelChange = e =>{
    e.persist();
    setValues(values =>{})
  };
};
