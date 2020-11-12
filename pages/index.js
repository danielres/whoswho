import { UserList } from "../components/UserList";
import { UserForm } from "../components/UserForm";

const H = ({ children, level = 2 }) => {
  return <h2 className="mb-4 text-xl">{children}</h2>;
};

export default function Home() {
  return (
    <div className="flex -mx-8">
      <div className="w-2/3 px-8">
        <H>Members</H>
        <UserList />
      </div>

      <div className="flex-1 px-8">
        <H>Add member</H>

        <UserForm />
      </div>
    </div>
  );
}
