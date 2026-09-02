type ApiResponse<T> = {
  data: T;
  status: number;
  message: string;
};

const response: ApiResponse<{ name: string }> = {
  data: { name: "meer" },
  status: 200,
  message: "success",
};

const response2: ApiResponse<{ name: string }[]> = {
  data: [{ name: "meer" }, { name: "meer" }],
  status: 200,
  message: "success",
};

function identity<T>(value: T): T {
  return value;
}

identity<string>("meer");
identity<number>(30);
identity<{ name: string }>({ name: "meer" });

type hasId = {
  id: string;
};

function getById<T extends hasId>(value: T): T {
  return value;
}

getById({ id: "1", name: "meer" });

function createPair<K, V>(key: K, value: V): [K, V] {
  return [key, value];
}

createPair<string, number>("meer", 30);
createPair<number, number>(30, 30);
createPair<{ name: string }, { age: number }>({ name: "meer" }, { age: 30 });

function mergeObjects<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

mergeObjects({ name: "meer" }, { age: 30 });
mergeObjects({ name: "meer" }, { age: 30 });

function getProperty<T, k extends keyof T>(obj: T, key: k): T[k] {
  return obj[key];
}

const user = {
  name: "meer",
  age: 30,
};

getProperty<typeof user, "name">(user, "name");

const roles = {
  admin: "admin",
  user: "user",
  guest: "guest",
};

type rolesType = keyof typeof roles;
