import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const batchTransaction = async () => {
  const createUser = prisma.user.create({
    data: {
      username: "humayun506034",
      email: "humayun@gmail.com",
    },
  });

  const updateUser = prisma.user.update({
    where: {
      id: 1,
    },
    data: {
      age: 30,
    },
  });

  const [userData, updateUserData] = await prisma.$transaction([
    createUser,
    updateUser,
  ]);

  console.log(userData, updateUserData);
};

batchTransaction();
