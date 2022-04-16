import { NavLink } from "react-router-dom";

const SignedInLinks = () => {
  return (
    <ul className="right">
      <li><NavLink to='/create'>New Project</NavLink></li>
      <li><NavLink to='/'>Log Out</NavLink></li>
      <li><NavLink to='/' className='btn btn-floating green lighten-1'>HA</NavLink></li>
    </ul>
  );
}

export default SignedInLinks;