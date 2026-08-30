interface User {
  name: string;
  age: number;
}

interface TimeStamp {
  createdAt: string;
  updatedAt: string;
}

interface Admin extends User, TimeStamp {
  hasPermission: boolean;
}

const admin: Admin = {
  hasPermission: false,
  name: "meer",
  age: 30,
  createdAt: "10",
  updatedAt: "10",
};
