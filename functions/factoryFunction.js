function createName(fName, lName) {
  return {
    fName,
    lName,
    getFullName() {
      console.log(`${fName} ${lName}`);
    },
  };
}

// Calling
var name = createName('Manam', 'Navaneeswar');
name.getFullName();
