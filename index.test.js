const { beforeEach } = require("@jest/globals");
const { users, addUser } = require("./index");

const mockUser = { id: 1, name: "Maxi" };

describe("addUser", () => {

  test("Deberia agregar un usuario", () => {

    expect(addUser(mockUser)).toEqual([mockUser]);
  
  });

  test("No deberia agregar un usuario con id existente", () => {

    expect(addUser(mockUser)).toEqual([mockUser]);
  
  });

  test("Deberia agregar un usuario con id inexistente en el array", () => {

    expect(addUser({... mockUser, id: 2})).toEqual([mockUser,{... mockUser, id: 2}]);
  
  });

});
