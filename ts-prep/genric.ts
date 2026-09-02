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
