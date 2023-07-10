import { Link } from "react-router-dom";

const Navbar = () => {
  const title = "CodeMentorHub";
  return (
    <nav className="navbar">
      <Link to='/CodeMentorHub/home'>
        <h1>{title}</h1>
      </Link>
      
      <div className="links">
          <Link to='/CodeMentorHub/home'>Home</Link>
          <Link to='/CodeMentorHub/courses'>Courses</Link>
          <Link to='/CodeMentorHub/tests'>Tests</Link>
          <Link to='/CodeMentorHub/ourteams'>Our teams</Link>
          <Link to='/CodeMentorHub/discussions'>Discussions</Link>
          
    


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