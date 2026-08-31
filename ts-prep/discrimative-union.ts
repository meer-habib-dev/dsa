type UserState =
  | {
      status: "idle";
    }
  | {
      status: "loading";
    }
  | {
      status: "success";
      data: Array<string>;
    }
  | {
      status: "error";
      error: Error;
    };
// Better design

function assertError(state: never) {
  new Error("this is an error", state);
}
function getUser(state: UserState) {
  switch (state.status) {
    case "idle":
      return console.log("idle");
    case "loading":
      return console.log("loading");
    case "success":
      return console.log("success", state.data);
    case "error":
      return console.log("error", state.error.message);
    default:
      assertError(state);
  }
}
