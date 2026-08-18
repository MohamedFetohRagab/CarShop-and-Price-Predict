import { useState } from "react";
import UserCard, { IUser } from "../UI/UserCard";
const Users = () => {
  const [users, setUsers] = useState<IUser[]>([
    {
      _id: "1",
      age: 20,
      email: "mohammedfetoh@gmil.com",
      name: "Mohammed",
      role: "admin",
      username: "a7a",
    },
  ]);
  const renderallUsers = users.map((user: IUser) => (
    <UserCard key={user._id} {...user} />
  ));

  return (
    <div className="flex gap-2.5 flex-wrap justify-center items-center">
      {renderallUsers}
    </div>
  );
};

export default Users;
