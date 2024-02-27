import { useState } from "react";

import Table from "./table";

function App() {
  const [users, setUsers] = useState(() => [
    {
      name: "Özkan",
      surname: "Büyük",
      email: "ozkanbuyuk@icloud.com",
      age: 26,
    },
    {
      name: "Ali Özkan",
      surname: "Büyük",
      email: "aliozkanbuyuk@icloud.com",
      age: 26,
    },
  ]);

  return (
    <div className="p-4">
      <Table
        searchable={true}
        head={[
          { name: "Name-Surname", sortable: true },
          { name: "Email" },
          { name: "Age", sortable: true },
          { name: "Operations", width: 200 },
        ]}
        body={
          users &&
          users.map((user, key) => [
            <div key={`${user.name} ${user.surname}`}>
              {user.name} {user.surname}
            </div>,
            user.email,
            <div searchableText={`Age ${user.age}`}>{user.age}</div>,
            [
              <button className="h-8 px-4 flex items-center justify-center rounded bg-blue-600 text-white">
                Edit
              </button>,
              <button
                onClick={() => {
                  const tmpUsers = [...users];
                  tmpUsers.splice(key, 1);
                  setUsers(tmpUsers);
                }}
                className="h-8 px-4 flex items-center justify-center rounded bg-red-600 text-white"
              >
                Delete
              </button>,
            ],
          ])
        }
      />
    </div>
  );
}

export default App;
