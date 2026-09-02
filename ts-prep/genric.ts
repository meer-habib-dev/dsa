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
