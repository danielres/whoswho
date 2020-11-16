import formatDistance from "date-fns/formatDistance";
import { useEffect, useState } from "react";
import { User } from "src/ui/queries";

export const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    User.list().then((users) => {
      setUsers(users);
      setLoading(false);
    });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (!users.length) return <div>No members, please invite some people!</div>;
  return <ProfilePreviews users={users} />;
};

const ProfilePreviews = ({ users }) => {
  return (
    <section class="text-gray-700">
      <div class="flex flex-wrap -m-2">
        {users.map((user) => (
          <ProfilePreview user={user} />
        ))}
      </div>
    </section>
  );
};

const ProfilePreview = ({ user }) => {
  return (
    <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
      <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
        <img
          alt="Profile picture"
          class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
          src="https://dummyimage.com/104x94"
        />

        <div class="flex-grow">
          <h2 class="text-gray-900 title-font font-medium">{user.name}</h2>
          <p class="text-gray-500">{user.email}</p>
          <p class="text-gray-500">
            {formatDistance(new Date(user.createdAt), new Date(), {
              addSuffix: true,
            })}
          </p>
        </div>
      </div>
    </div>
  );
};
