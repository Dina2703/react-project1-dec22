import FormJob from "./FormJob";
import FormSignUp from "./FormSignUp";

function Form() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", marginLeft: "40px" }}
    >
      <h1 style={{ textAlign: "center", margin: "20px 0" }}>Forms</h1>
      <FormJob />
      <FormSignUp />
    </div>
  );
}
export default Form;
