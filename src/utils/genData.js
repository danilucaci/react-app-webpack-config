import faker from "faker";

function genData() {
  let data = Array.from({ length: 40 }, function getFakeData() {
    return {
      id: faker.random.uuid(),
      text: faker.lorem.paragraph(),
    };
  });

  return data;
}

export default genData;
