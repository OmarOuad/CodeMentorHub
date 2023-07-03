import "./Category.css";
import Input from "../../components/Input";

function Field({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="Frontend"
          title="Frontend"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Backend"
          title="backend"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Mobile Dev"
          title="Mobile Dev"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="DevOps"
          title="DevOps"
          name="test"
        />
      </div>
    </div>
  );
}

export default Field;
