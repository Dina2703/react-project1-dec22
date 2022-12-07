import { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isAgreed: false,
    employment: "",
    favColor: "",
  });

  function handleChange(e) {
    const { name, value, checked, type } = e.target;
    // console.log(e.target);
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleSubmit(e) {
    //to stop refreshing the page
    e.preventDefault();
    console.log(formData);
  }

  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          name="firstName"
          onChange={handleChange}
          value={formData.firstName}
        />
        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          onChange={handleChange}
          value={formData.lastName}
        />
        <input
          type="email"
          placeholder="email"
          name="email"
          onChange={handleChange}
          value={formData.email}
        />
        <textarea
          value={formData.comments}
          onChange={handleChange}
          placeholder="comments"
          rows="4"
          name="comments"
        />
        <fieldset>
          <legend>
            <small>Current employment status</small>
          </legend>
          <div className="radio">
            <input
              type="radio"
              name="employment"
              id="unemployed"
              value="unemployed"
              onChange={handleChange}
              checked={formData.employment === "unemployed"}
            />
            <label htmlFor="unemployed">Unemployed</label>
          </div>
          <div className="radio">
            <input
              type="radio"
              name="employment"
              id="part-time"
              value="part-time"
              onChange={handleChange}
              checked={formData.employment === "part-time"}
            />
            <label htmlFor="part-time">Part-time</label>
          </div>
          <div className="radio">
            <input
              type="radio"
              name="employment"
              id="full-time"
              value="full-time"
              onChange={handleChange}
              checked={formData.employment === "full-part"}
            />
            <label htmlFor="full-time">Full-time</label>
          </div>
        </fieldset>
        <div className="agreed">
          <input
            type="checkbox"
            checked={formData.isAgreed}
            name="isAgreed"
            id="isAgreed"
            onChange={handleChange}
          />
          <label htmlFor="isAgreed">Agree</label>
        </div>
        <label htmlFor="favColor">What is your favorite color?</label>

        <select
          name="favColor"
          id="favColor"
          value={formData.favColor}
          onChange={handleChange}
        >
          <option value="" disabled>
            --Choose--
          </option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
        </select>
        <button>submit</button>
      </form>
    </div>
  );
}

export default Form;
