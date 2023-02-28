import axios from "axios";
import React, { useEffect, useState } from "react";

const Crudoperation = () => {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);
  const [user, setUser] = useState({});
  const [edit, setEdit] = useState({});

  const handleUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleEdit = (e) => {
    setEdit({ ...edit, [e.target.name]: e.target.value });
  };

  const getApiData = async () => {
    const result = await axios.get("http://localhost:3000/todo");
    setData(result.data);
    console.log(result.data);
  };

  const handleSubmit = async () => {
    const resp = await axios.post(`http://localhost:3000/todo`, user);
    getApiData();
  };

  const delet =async(id)=>{
    const resp = await axios.delete(`http://localhost:3000/todo/${id}`);
    getApiData();
  };

  const edithandle =async(id) => {
const resp = await axios.put(`http://localhost:3000/todo/${id}`,edit );
getApiData();
  }

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <div>
      <input type="text" name="firstname" onChange={handleUser} />
      <input type="text" name="lastname" onChange={handleUser} />
      <button onClick={handleSubmit}>sumbit</button>
      <h1>ar</h1>
      {data.map((item, index) => {
        return (
          <div>
            <h2>FirstName: {item.firstname}</h2>
            <h2>LastName: {item.lastname}</h2>
            <button onClick={() => delet(item.id)}>delet</button>
            <input type="text" name="firstname" onChange={handleEdit} />
            <input type="text" name="lastname" onChange={handleEdit} />
            <button onClick={()=> edithandle(item.id)}>Edit</button>
          </div>
        );
      })}
    </div>
  );
};

export default Crudoperation;
