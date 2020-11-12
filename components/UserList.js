import formatDistance from "date-fns/formatDistance";
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
        <ul className="list-none p-0 m-auto text-gray-900">
          {users.map((user) => (
            <li className="inline-block flex justify-between items-center pb-4">
              <div className="flex items-start w-2/5">
                <div className="w-10 h-10 rounded mr-3">
                  <div className="rounded-full h-10 w-10 bg-gray-300 m-auto"></div>
                </div>

                <div className="flex-1 overflow-hidden">
                  <div>
                    <span className="font-bold">{user.name}</span>
                  </div>
                  <p className="text-black leading-normal text-sm text-gray-500">
                    {formatDistance(new Date(user.createdAt), new Date(), {
                      addSuffix: true,
                    })}
                  </p>
                </div>
              </div>

              <p className="w-2/5">{user.email}</p>

              <label for="status" className="font-bold w-1/5 text-right">
                Active
              </label>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
