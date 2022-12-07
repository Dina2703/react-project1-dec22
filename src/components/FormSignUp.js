import { useState } from "react";

function FormSignUp() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    passwordComform: "",
    newseller: false,
  });
  // console.log(formData);

  function handleChange(e) {
    //destructure props of e.target object
    const { name, type, value, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(
      formData.password === formData.passwordComform
        ? "Succesfully signed up "
        : "passwords do not mutch"
    );
    formData.newseller &&
      console.log("Thanks for signing up for our newseller!");
    console.log(formData);
  }

  return (
    <div>
      <form style={{ height: "300px" }} onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="email"
        />
        <input
          type="password"
          onChange={handleChange}
          name="password"
          value={formData.password}
          placeholder="password"
        />
        <input
          type="password"
          placeholder="Confirm password"
          name="passwordComform"
          value={formData.passwordComform}
          onChange={handleChange}
        />
        <div>
          <input
            type="checkbox"
            name="newseller"
            id="newseller"
            checked={formData.newseller}
            onChange={handleChange}
          />
          <label htmlFor="newseller">I want to join the newseller</label>
        </div>
        <button>Sign up</button>
      </form>
    </div>
  );
}

export default FormSignUp;
