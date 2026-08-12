export interface IUser {
  _id: string;
  name: string;
  username: string;
  email: string;
  age: number;
  role: string;
}
const UserCard = ({ age, role, email, name }: IUser) => {
  return (
    <div className="bg-amber-100 p-3 rounded-md  text-center">
      <h2 className="text-lg font-bold">{name}</h2>

      <h2>
        Age: <span className="text-red-500">{age}</span>
      </h2>
      <h2>{role}</h2>
      <h2>{email}</h2>
    </div>
  );
};

export default UserCard;
