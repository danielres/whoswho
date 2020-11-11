import { useEffect, useState } from "react";
import { User } from "src/ui/queries";

export const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    User.list().then(setUsers);
  }, []);

  return (
    <>
      {users && (
        <ul>
          {users.map((user) => (
            <li key={user.email}>
              {user.name} {user.email}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
