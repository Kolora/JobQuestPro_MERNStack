import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
//for default state, declare object with all form values as empty
let emptyForm = {
  username: "",
  password: "",
  email: "",
};
function Login({ setUser }) {
  //to redirect after form submission
  const navigate = useNavigate();
  //state variable to control form values
  let [form, setForm] = useState(emptyForm);

  //function to update state when form changes
  const handleChange = (e) => {
    //spread form and edit relevant keys using bracket object notation
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); //prevents reloading form

    try {
      //make request to login
      const authResponse = await axios.post("/auth/login", form);
      //extract tokem from login response
      const token = authResponse.data.token;
      //if no token reset form and stop function
      if (!token) {
        setForm(emptyForm);
        return;
      }
      //save token in localstorage
      localStorage.setItem("token", token);
      //using token in localstorage we request to get user info
      const userResponse = await axios.get("/api/users", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      //save userdate in state
      setUser(userResponse.data);
      //redirect to login page
      navigate("/posts");
    } catch (err) {
      console.log(err);
      alert(err.response.data.error);
    }
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <br />
        <input
          type="text"
          id="username"
          name="username"
          onChange={handleChange}
          value={form.username}
        />
        <br />
        <br />
        <label htmlFor="password">Password:</label>
        <br />
        <input
          type="password"
          id="password"
          name="password"
          onChange={handleChange}
          value={form.password}
        />
        <br />
        <br />
        <button>Submit</button>
      </form>
    </>
  );
}

export default Login;
