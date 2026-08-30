let nam = "string";

nam = "20";

const str: string[] = ["a", "b"];
const strr: Array<string> = ["a", "b"];

const value: (string | number)[] = ["a", 2, "t"];

const userEntry: [number, string, boolean] = [0, "s", true]; //tuples

let direction: "left" | "right" | "up" | "down"; //literal union type

type Rating = 1 | 2 | 3;

const rating: Rating = 3;

type UserData = {
  readonly id: string;
  name: string;
};

const userData: UserData = {
  id: "1",
  name: "meer",
};

userData.name = "habib";

type Random = {
  readonly user: {
    readonly name: string;
  };
};

const random: Random = {
  user: {
    name: "meer",
  },
};

random.user.name = "hi";

type Usr = {
  id: string;
};

type Adn = User & {
  id: number;
};

const userId: Adn = "d";

// type A = {};
// type A = {};
