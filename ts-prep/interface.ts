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

interface ID {
  id: string;
}

interface UserId extends ID {}

const userID: UserId = {
  id: "sdf",
};

interface A {
  id: number;
}
interface A {
  age: number;
}

interface Logger {
  log(message: string): void;
  error(message: string): void;
}

class User implements Logger {
  log(message: string): void {
    console.log(message + "hello");
  }
  error(message: string): void {
    console.log(message + "error");
  }
}
