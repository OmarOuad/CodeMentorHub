import Field from "./Category/Field";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";
import "./Sidebar.css";

const Sidebar = ({ handleChange }) => {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1>🛒</h1>
        </div>
        <Field handleChange={handleChange} />
        {/*<Price handleChange={handleChange} />*/}
        <Colors handleChange={handleChange} />
      </section>
    </>
  );
};

export default Sidebar;
