interface IUser {
  username: string;
  age: number;
  city?: string;
}

interface IModerator extends IUser {
  permissions: string[];
  isOnline: boolean;
}

let uploadStatus: "loading" | "success" | "error";
uploadStatus = "loading";

let textFormat: "uppercase" | "lowercase" | "capitalize";
textFormat = "capitalize";

function getSum(firstNumber: number, secondNumber: number): number {
  return firstNumber + secondNumber;
}

console.log(getSum(10, 15));

function formatText(
  text: string,
  format: "uppercase" | "lowercase" | "capitalize"
): string {

  switch (format) {
    case "uppercase":
      return text.toUpperCase();

    case "lowercase":
      return text.toLowerCase();

    case "capitalize":
      return text.charAt(0).toUpperCase() + text.slice(1);

    default:
      return text;
  }
}

console.log(formatText("typescript", "uppercase"));

function deleteSymbol(text: string, symbol: string): string {
  return text.replaceAll(symbol, "");
}

console.log(deleteSymbol("Hello!!!", "!"));

const usersList: IUser[] = [
  {
    username: "Aziz",
    age: 22,
    city: "Dushanbe"
  },
  {
    username: "Bruno",
    age: 17
  },
  {
    username: "Samir",
    age: 25,
    city: "Khujand"
  }
];

const adultUsers = usersList.filter((user) => user.age >= 18);

console.log(adultUsers);

const moderator: IModerator = {
  username: "AdminUser",
  age: 22,
  permissions: ["delete", "edit", "ban"],
  isOnline: true
};

console.log(moderator);