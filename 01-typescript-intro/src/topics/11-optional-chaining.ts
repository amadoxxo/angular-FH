export interface Passenger {
  name: string;
  children?: string[];
}

const passenger1: Passenger = {
  name: "Elian",
};

const passenger2: Passenger = {
  name: "Catalina",
  children: ["Sofia", "Gabriela"],
};

const returnChildrenNumber = (passenger: Passenger) => {
  const howManyChildren = passenger.children?.length || 0;
  //   const howManyChildren = passenger.children!.length;

  console.log(passenger.name, howManyChildren);

  return howManyChildren;
};

returnChildrenNumber(passenger1);
