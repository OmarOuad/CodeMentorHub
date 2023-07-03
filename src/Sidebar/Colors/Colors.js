import "./Colors.css";
import Input from "../../components/Input";

const Colors = ({ handleChange }) => {
  return (
    <>
      <div>
        <h2 className="sidebar-title color-title">Languages</h2>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test1" />
          <span className="checkmark all"></span>
          All
        </label>

        <Input
          handleChange={handleChange}
          value="C++"
          title="C++"
          name="test1"
        />

        <Input
          handleChange={handleChange}
          value="Java"
          title="Java"
          name="test1"
        />

        <Input
          handleChange={handleChange}
          value="Python"
          title="Python"
          name="test1"
        />

        <Input
          handleChange={handleChange}
          value="Javascript"
          title="Javascript"
          name="test1"
        />

        
      </div>
    </>
  );
};

export default Colors;
