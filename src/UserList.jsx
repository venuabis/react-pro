import { User } from './User';

export function UserList() {
  const users = [
    {
      name: "Ashok",
      pic: "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      name: "Latha",
      pic: "https://i.pinimg.com/236x/db/1f/9a/db1f9a3eaca4758faae5f83947fa807c.jpg",
    },
    {
      // name: "Vicky",
      pic: "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
    },
  ];

  return (
    <section className="user-list-container">
      {users.map((user) => (
        //  <User name={user.name} pic={user.pic} />
        // Key name == Prop name
        <User name="N/A" {...user} />
      ))}
    </section>
  );
}
