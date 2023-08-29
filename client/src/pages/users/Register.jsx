import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

//for default state, declare object with all form values as empty
let emptyForm = {
  username: "",
  password: "",
  email: "",
};

function Register({ setUser }) {
  //redirect after form submission
  const navigate = useNavigate();
  //state variable to control form values
  let [form, setForm] = useState(emptyForm);
  //function to update statee when form changes
  const handleChange = (e) => {
    // spread the form and then edit the relevent keys using bracket object notation
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      //request to create new user
      const authResponse = await axios.post("/auth/register", form);
      //extract token from authResponse
      const token = authResponse.data.token;

      if (!token) {
        setForm(emptyForm);
        return;
      }
      //save token in local storage
      localStorage.setItem("token", token);
      //using token in local storage make request to get user information
      const userResponse = await axios.get("/api/users", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      //save user date in state
      setUser(userResponse.data);
      //redirect to mainpage
      navigate("/posts");
    } catch (err) {
      console.log(err);
      alert(err.response.data.error);
    }
  };

  return (
    <>
      <h1>Register</h1>
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
        <label htmlFor="email">Email:</label>
        <br />
        <input
          type="email"
          id="email"
          name="email"
          onChange={handleChange}
          value={form.email}
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

export default Register;
