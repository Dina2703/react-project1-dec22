import { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isAgreed: false,
  });
  console.log(formData);

  function handleChange(e) {
    const { name, value, checked, type } = e.target;
    console.log(e.target);
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  return (
    <div>
      <h1>Form</h1>
      <form>
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
        <div>
          <input
            type="checkbox"
            checked={formData.isAgreed}
            name="isAgreed"
            id="isAgreed"
            onChange={handleChange}
          />
          <label htmlFor="isAgreed">Agree</label>
        </div>

        <button>submit</button>
      </form>
    </div>
  );
}

export default Form;
