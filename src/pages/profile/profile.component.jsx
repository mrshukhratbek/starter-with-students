import { Link } from 'react-router-dom';

export const Profile = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>

      <h1>Profile</h1>
    </>
  );
};
