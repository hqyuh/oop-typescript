/* eslint-disable padding-line-between-statements */
// When you are not sure about what type you can assign? => Use unknown
const ah: unknown = 2;

// ------------------------------------------------

// combining a base with additional properties

// "intersection"
type TUserProps = {
  name: string;
  age: number;
};

type TAdminProps = TUserProps & {
  role: string;
};

// "extending"
interface IUserProps {
  name: string;
  age: number;
}

interface IAdminProps extends IUserProps {
  role: string;
}

// ------------------------------------------------
// "interface" can only describe object
// "type" alias can describe object AND everything else (e.g. primitive types such as string, number, boolean, union types, etc.)
interface IAddress {
  street: string;
}

type TAddress = string | string[];
const address: TAddress = ["123 Main St"];

// ------------------------------------------------
// type alias can easily use utility types
// interface can too but only with ugly syntax
type StaffProps = {
  name: string;
  country: string;
  createdAt: Date;
};

type TGuestProps = Omit<StaffProps, "name" | "country">;
interface IGuestProps extends Omit<StaffProps, "name" | "country"> {}

// ------------------------------------------------
// type alias can easily describe tuples
// interface can too but only with ugly syntax
type TAppProps = [string, number];
interface IAppProps extends Array<string | number> {}
const app: IAppProps = ["name", 1];

// ------------------------------------------------
// extracting type from something else
const project = {
  code: 100,
  specification: {
    areaSize: 100,
    rooms: 3,
  },
} as const;

type Specification = (typeof project)["specification"];

const cca: Specification = {
  areaSize: 100,
  rooms: 3,
};
console.log("🐔 =>  cca:", cca);

// ------------------------------------------------
// interfaces can be merged
// "interface are open" and "type alias are closed"
interface Street {
  name: string;
}

interface Street {
  location: string;
}

const street: Street = {
  name: "Main St",
  location: "Downtown",
};

// type error: Duplicate identifier 'BB'
/*
type BB = {
    name: string;
}

type BB = {
    name: string;
}
*/

// ------------------------------------------------
// type alias can be use for classes too
type TUser = {
  name: string;
  age: number;
};

class UserBB implements TUser {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
