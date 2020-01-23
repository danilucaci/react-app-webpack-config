export function logger1() {
  console.log("--------------------------------------------------------");
  console.log("Logger 1");
  console.log("--------------------------------------------------------");
}

export function logger2() {
  console.log("--------------------------------------------------------");
  console.log("Logger 2");
  console.log("--------------------------------------------------------");
}

export function logger3() {
  console.log("--------------------------------------------------------");
  console.log("Logger 3");
  console.log("--------------------------------------------------------");
}

export function task(predicate = false) {
  return new Promise((res, rej) => {
    if (predicate) {
      return rej("Ups");
    }
    return res("Cool");
  });
}

export function sayName(name = "Dani") {
  return console.log(`Your name is: ${name}`);
}

export function getRandomNumber({ max = 10, min = 1 } = {}) {
  return Math.floor(Math.random() * (max - min) + min);
}

export function getDate() {
  return new Date().toDateString();
}

export function getTomorrowDate() {
  const date = new Date();

  return new Date(date.setDate(date.getDate() + 1)).toDateString();
}

export function getPastTomorrowDate() {
  const date = new Date();

  return new Date(date.setDate(date.getDate() + 2)).toDateString();
}

export function getDatePlusN(n = 1) {
  const date = new Date();

  return new Date(date.setDate(date.getDate() + n)).toDateString();
}

export function getDatePlus1() {
  const date = new Date();

  return new Date(date.setDate(date.getDate() + 1)).toDateString();
}

export function getDatePlus2() {
  const date = new Date();

  return new Date(date.setDate(date.getDate() + 2)).toDateString();
}

export function getDatePlus3() {
  const date = new Date();

  return new Date(date.setDate(date.getDate() + 3)).toDateString();
}

export function getDatePlus4() {
  const date = new Date();

  return new Date(date.setDate(date.getDate() + 4)).toDateString();
}

export function getDatePlus5() {
  const date = new Date();

  return new Date(date.setDate(date.getDate() + 5)).toDateString();
}

export function getDatePlus6() {
  const date = new Date();

  return new Date(date.setDate(date.getDate() + 6)).toDateString();
}

export function getParagraphs() {
  return [
    {
      id: "69bfe7b8-02b0-4306-b4b5-5dc3ff2f2377",
      text:
        "Et sunt alias id eaque quas. Deserunt placeat impedit officiis qui quia cumque non aut. Commodi omnis eius et deleniti ipsa fugiat necessitatibus atque veniam.",
    },
    {
      id: "4734cd4c-d2a0-4cef-98fa-3b170b01038d",
      text:
        "Ut ipsam dolorem dolorem. Assumenda porro possimus. Qui consequatur est rerum. Perferendis neque qui autem ea est distinctio odit. Ex eveniet voluptatem sit ad qui qui sint. Impedit rem nobis quia.",
    },
    {
      id: "cc0d111f-c3de-4216-a729-a3593babf213",
      text:
        "Qui neque maiores iure harum doloribus culpa unde. Nesciunt exercitationem perspiciatis consequatur beatae atque hic. Et qui quia quae alias possimus qui assumenda ipsum accusantium.",
    },
    {
      id: "527ec671-79a4-4697-9719-34950d1c6518",
      text:
        "Sint dolorem a exercitationem consequatur ut sequi architecto sit doloribus. Adipisci consequatur dolorem eum soluta mollitia at iure quidem. Et in distinctio fugiat. Quisquam est et facere dolores deserunt et rerum eos. Hic sint earum minima culpa.",
    },
    {
      id: "6e76b20d-b79b-4097-875d-a870bc74a5c3",
      text:
        "Officiis nihil praesentium. Molestiae veniam necessitatibus ullam rerum. Dignissimos voluptatem ut et qui aut perspiciatis voluptatem magni velit. Similique harum esse ea dolores et soluta consequatur adipisci quo.",
    },
    {
      id: "b970d902-86c9-435a-b44b-3efd1b54a6a8",
      text:
        "Rerum enim accusantium modi cumque ut nostrum itaque tempora. Ex magni accusamus. Maxime quia voluptatem corporis dolor. Beatae quidem aliquam est repellat et cupiditate laudantium dolore. Hic est id aut commodi incidunt dolorem et totam.",
    },
    {
      id: "32d8116a-58e4-4307-940e-aff3d48310e2",
      text:
        "Illum sit natus nihil enim odio quam deleniti. Praesentium nihil et aut cum ut eligendi ducimus illum. Quos aut aut voluptatem molestiae rerum. Fuga eligendi unde at et fugiat pariatur accusamus. Deserunt voluptatem voluptates voluptatem eius est dolores.",
    },
    {
      id: "d0068797-0e39-4871-b1d1-c9632f82d481",
      text:
        "Iusto praesentium est est. Assumenda aut voluptates sint commodi natus vel et qui velit. Soluta et dolorum quae ipsum rerum voluptatem dolorem assumenda. Amet saepe consequatur nemo ratione aut et explicabo. Aut nihil voluptatem numquam molestiae rerum nobis qui.",
    },
    {
      id: "84a18b5c-f99b-4be7-8f84-f67cd49f6425",
      text:
        "Deleniti aspernatur molestias optio assumenda rerum quis. Occaecati minima sed blanditiis minima beatae. Quos qui non debitis suscipit facilis. Recusandae voluptatibus eos et. Neque facilis animi aut doloribus eos. Quod pariatur nihil voluptatem.",
    },
    {
      id: "a7e73495-a95f-4c2f-84a0-996a0942a316",
      text:
        "Quia possimus qui quo quasi non labore sunt. Modi in neque. Facilis doloribus vel non qui veritatis asperiores quam tempora voluptas. Dolorem omnis facere magnam.",
    },
    {
      id: "9cbe7931-5897-40be-8050-f06cfa7ed444",
      text:
        "A molestias eaque voluptate minima quia. Et vel consectetur quia aliquam eius sit. Ratione quo laboriosam blanditiis.",
    },
    {
      id: "d7c7b8bb-b556-42c7-a804-407ec9c77680",
      text:
        "Assumenda eveniet non. Eligendi ea sint facilis. Aut explicabo hic rerum suscipit necessitatibus.",
    },
    {
      id: "a8cb2c09-b3d1-4eba-9d94-a42488bff7fa",
      text:
        "Quia ad dolor delectus provident ad. Doloremque ipsa eveniet doloribus fugit. Commodi mollitia dicta at dolor occaecati et eum. Eveniet saepe molestiae omnis esse adipisci repellat iste.",
    },
    {
      id: "612b25f0-678b-41db-9edc-443c5d1da707",
      text:
        "Exercitationem amet ex sint consequuntur qui. Dolorum aliquid porro. A voluptas rerum ipsum. In explicabo quod.",
    },
    {
      id: "f20499db-33b7-47a5-8c7b-ec23ae332aca",
      text:
        "Velit quo recusandae iusto quisquam est fugit rem amet delectus. Quibusdam quia exercitationem et nisi. Ipsam cupiditate et repellat molestias dolor repellat est amet. Consequatur neque non omnis error sequi. Neque illum excepturi laudantium. Voluptate neque omnis suscipit tempore magnam.",
    },
    {
      id: "c263bbdf-7dfd-4940-973f-4bf551d758a7",
      text:
        "Rem temporibus et esse temporibus laudantium. Optio accusantium fugiat nisi. Aut inventore et nam aut impedit cupiditate qui qui quis. Corrupti quia autem veniam expedita tempore nobis sequi officia. Eos fugit corrupti. Et magni alias non sint ut in ut.",
    },
    {
      id: "d440528c-ea16-4838-9758-58198f86807e",
      text:
        "Et dolorum repellendus temporibus. Corrupti praesentium illum illum voluptatum. Voluptatem aut beatae non rerum earum architecto blanditiis earum quia. Voluptate voluptatem eius est ullam corporis voluptatem.",
    },
    {
      id: "61136663-2864-4e2b-ad39-53d5c5932938",
      text:
        "Ipsam est dolorem ut asperiores saepe veritatis soluta recusandae. Quam corporis dolor soluta qui veniam culpa. Quis perferendis quae recusandae nesciunt. Id sequi iure impedit fugit.",
    },
    {
      id: "d120a13b-69aa-42a9-9d94-e359e6d2036b",
      text:
        "Ut quo nesciunt possimus. Eos magnam aut. Necessitatibus sint sit sed adipisci nemo.",
    },
    {
      id: "1ab43448-6dd0-46af-ba78-aefd25f4f26d",
      text:
        "Id officia eum id sint id commodi. Amet natus sequi nobis eos impedit. Numquam rerum velit a dolores eum. Repellat vero et modi incidunt harum.",
    },
    {
      id: "059ceeca-fcec-4db8-82ef-8c67f02516ba",
      text:
        "Dolore rerum dolor. Atque reprehenderit omnis et explicabo consectetur omnis ullam molestiae ipsum. Ratione enim facere voluptatem quidem rerum velit quis sit corporis.",
    },
    {
      id: "02be6760-d59f-4aa7-805c-ce36ea38098f",
      text:
        "Iusto nihil officia sunt qui. Sapiente eveniet fuga nam. Corrupti cum nam excepturi. Dolorem neque voluptatem. Est eligendi quae facere corrupti eius. Praesentium enim recusandae voluptatem tempora adipisci necessitatibus ut.",
    },
    {
      id: "83cf1dae-7093-41a9-b3de-f1f648ac8487",
      text:
        "Magni eaque maxime odit occaecati nihil debitis voluptas quidem. Inventore reiciendis necessitatibus. Amet hic omnis quia aut sunt repudiandae neque. Voluptatum nesciunt eaque consectetur. Ut libero culpa pariatur assumenda est et sit.",
    },
    {
      id: "88202e96-7a85-44be-9197-775430ed89ce",
      text:
        "Asperiores ut debitis provident asperiores aut tempora error quam. Officiis reiciendis at. Pariatur accusantium ipsum fuga in iste autem sunt vero.",
    },
    {
      id: "cdb44090-4a14-4b70-ae96-d97ebf7a0b0b",
      text:
        "Ipsam ut quia voluptas. Molestiae vitae soluta et repellendus culpa sed. Deserunt rerum quam itaque ducimus nobis. Blanditiis consequatur nulla impedit et vel dolor voluptas nihil. Distinctio et culpa corporis omnis laborum earum dicta asperiores. Quis qui enim est molestiae omnis aliquid.",
    },
    {
      id: "eb9799a8-b247-4139-aad9-6b5fec54b2ae",
      text:
        "Molestias rerum minima consequuntur. Rerum sunt et. Voluptatem omnis praesentium eveniet molestiae. Corrupti iure voluptatem architecto et repellat officia sit qui. Est vitae voluptatum et commodi est iste esse quasi rem. Velit autem necessitatibus eaque fuga.",
    },
    {
      id: "8d16a745-0b4d-4301-a1c7-fced3767643a",
      text:
        "Dolores veniam culpa consectetur laborum non repellat. Optio quo illo minima voluptates omnis debitis. Aut voluptas distinctio tenetur tenetur cumque illum asperiores.",
    },
    {
      id: "9fac2c10-7682-4740-9a96-716322ae7402",
      text:
        "Ex et ipsum aut quo molestias delectus qui. Laudantium eligendi officiis et. Quam assumenda voluptatem. Qui eligendi laborum earum ut.",
    },
    {
      id: "b4738b63-761b-42b9-9639-1e8fc3bbb7f0",
      text:
        "Voluptates illo dolorem tempore animi quia. Aut ut corrupti sunt aut dolorem laborum qui et qui. Ratione voluptas tenetur consequatur et minus voluptas blanditiis. Repudiandae natus nisi a nisi eos. Earum harum voluptatum voluptate aut.",
    },
    {
      id: "ea413b01-7397-4c7a-a0ff-c3bef8b47905",
      text:
        "Similique corporis tempora qui. Laudantium dolor molestias. Sed voluptas eum culpa.",
    },
    {
      id: "91dad568-cd62-4a14-91ef-b33b2291b5cd",
      text:
        "Eum consequatur eligendi aut aliquid autem ut cum aut tenetur. Recusandae deserunt molestiae officia. Soluta quia non et. Non a commodi autem praesentium dignissimos vero. Repellendus tempore quod.",
    },
    {
      id: "a8a9ffed-6ce1-48e1-ac99-322a993e47e2",
      text:
        "Et consequatur minima ratione voluptatem. Et possimus occaecati vitae. Enim consequuntur voluptatem ut laboriosam corrupti. Est fugiat non laudantium est soluta nihil laudantium quas.",
    },
    {
      id: "a1d88a62-99ba-4be3-b5b7-da2d65324e20",
      text:
        "Nostrum at est eius ea est ullam sit voluptas nihil. Et sit voluptatum nemo officiis. Labore ea eligendi alias quia maxime. Nihil illum non est enim quia.",
    },
    {
      id: "0010a28c-8b33-4197-8bdb-13c0add6963a",
      text:
        "Voluptatem illo eos est. Quam eum qui deserunt dolores est autem provident assumenda. Velit eligendi temporibus quia ea est rerum. Sint eveniet numquam aut consequuntur adipisci adipisci qui. Facere voluptatibus eius. Dolorem nam non consequatur eius occaecati.",
    },
    {
      id: "2ddce247-39d5-4195-a2f0-35eb4c342659",
      text:
        "Distinctio voluptatem ex est voluptas ullam voluptatem. Quia saepe occaecati praesentium neque illo. Est ratione inventore ut vel et.",
    },
    {
      id: "8fc1a01b-b371-43d6-8655-8cb96c0e5eee",
      text:
        "Fuga ea debitis non vel. Consequuntur eligendi sit repellat consequuntur quas. Et odit voluptas fuga maiores autem repellendus doloremque. Eos est omnis est sit quisquam voluptatum incidunt. Ullam dolor omnis quia est earum eius occaecati sit provident. Esse ipsam tempore aut qui nobis nemo.",
    },
    {
      id: "a4db8edf-dec0-46e7-9fba-4955c86dd64d",
      text:
        "Eveniet aperiam ad eligendi in occaecati perspiciatis praesentium. Facere quis commodi rem. Delectus quo voluptatem illo quis perspiciatis perspiciatis quia ducimus.",
    },
    {
      id: "f5216954-6d7b-497f-8b89-f7b6cd875e36",
      text:
        "Quaerat sunt porro ab pariatur est consequatur. Velit maxime magni qui rem quidem consectetur. Asperiores est nulla eum consequuntur. Corrupti atque illum.",
    },
    {
      id: "684cda1f-2862-413b-af4d-8495ee695c49",
      text:
        "Nemo debitis corporis incidunt nam at in nemo rerum. Sint eos quo harum et omnis est quo veniam tenetur. Et nostrum porro est laudantium velit voluptatem. Omnis aliquid dolor et et adipisci dolor. Quos quia esse id.",
    },
    {
      id: "c965a175-fe51-401c-9620-7279322f225d",
      text:
        "Quia voluptas nobis omnis nisi dolorem ea. Atque ea mollitia recusandae repudiandae et fuga corrupti. Et eum quaerat molestias laborum exercitationem. Quas velit et dolorem et. Possimus pariatur iusto sed.",
    },
  ];
}
