import bcrypt from "bcryptjs";

const users = [
  {
    name: "safwan hasan",
    email: "admin@proshop.com",
    password: bcrypt.hashSync(test1234, 10),
    isAdmin: true,
  },
  {
    name: "dummy userone",
    email: "duone@gmail.com",
    password: bcrypt.hashSync(test1234, 10),
    isAdmin: false,
  },
  {
    name: "dummy usertwo",
    email: "dutwo@gmail.com",
    password: bcrypt.hashSync(test1234, 10),
    isAdmin: false,
  },
];

export default users;
