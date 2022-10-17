import Router from 'next/router'

const Users = ({ data }) => {
  return (
    <ul className="list-group">
      {data.data.map((user) => (
        <li
        onClick={e => Router.push('/users/[id]', `/users/${user.id}`)}
          key={user.id}
          className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
        >
          <div>
            <h5>
              {user.first_name} {user.last_name}
            </h5>
            <p>{user.email}</p>
          </div>
          <img
            src={user.avatar}
            alt={user.first_name}
            style={{ borderRadius: "50%" }}
          ></img>
        </li>
      ))}
    </ul>
  );
};

export default Users;
