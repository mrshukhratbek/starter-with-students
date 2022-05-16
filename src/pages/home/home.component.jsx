import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUsers, deleteUsers, editUser } from 'src/store/actions/users';

export const Home = () => {
  const dispatch = useDispatch();

  const users = useSelector((state) => state.users);
  console.log(users);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => dispatch(getUsers(data)));
  }, []);

  const handleDeleteUser = (id) => {
    dispatch(deleteUsers({ id }));
  };

  const handleEditUser = (id, name) => {
    const newName = prompt("Ismni o'zgartiring", name);
    dispatch(editUser({ id, newName }));
  };
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

      <h1>Home</h1>
      {users.length > 0 && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} <button onClick={handleDeleteUser.bind(null, user.id)}>Delete</button>{' '}
              <button onClick={handleEditUser.bind(null, user.id, user.name)}>Edit</button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
