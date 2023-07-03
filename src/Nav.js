import { Link } from "react-router-dom";

const Navbar = () => {
  const title = "CodeMentorHub";
  return (
    <nav className="navbar">
      <Link to='/home'>
        <h1>{title}</h1>
      </Link>
      
      <div className="links">
          <Link to='/home'>Home</Link>
          <Link to='/courses'>Courses</Link>
          <Link to='/our teams'>Our teams</Link>
          <Link to='/discussions'>Discussions</Link>
    


        <a href="/create" style={{ 
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px' 
        }}>Login</a>
      </div>
    </nav>
  );
}


 
export default Navbar;