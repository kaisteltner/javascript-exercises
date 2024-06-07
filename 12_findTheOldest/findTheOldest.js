const findTheOldest = function (people) {
  const sortedPeople = people
    .map((person) => {
      person.age = Object.hasOwn(person, 'yearOfDeath')
        ? person.yearOfDeath - person.yearOfBirth
        : new Date().getFullYear() - person.yearOfBirth;
      return person;
    })
    .sort((a, b) => {
      return b.age - a.age;
    });
  return sortedPeople[0];
};

// Do not edit below this line
module.exports = findTheOldest;
