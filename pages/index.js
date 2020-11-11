import { UserForm } from "components/UserForm";
import { UserList } from "components/UserList";

export default function Home() {
  return (
    <div>
      <UserList />
      <UserForm />
    </div>
  );
}
