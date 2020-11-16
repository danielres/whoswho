import { UserList } from "../components/UserList";
import { UserForm } from "../components/UserForm";

const H = ({ children, level = 2 }) => {
  return <h2 className="mb-4 text-xl">{children}</h2>;
};

export default function Home() {
  return (
    <div>
      <div class="flex flex-col text-center w-full">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-8 text-gray-900">
          Members
        </h1>
      </div>

      <div className="w-1/2 mx-auto">
        <div className="mb-16">
          <H>Add member</H>
          <UserForm />
        </div>
      </div>
      <UserList />
    </div>
  );
}
