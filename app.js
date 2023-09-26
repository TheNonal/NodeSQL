const { Sequelize, Op } = require("sequelize");

const StudentInitiator = require("./models/Student");

const sequelize = new Sequelize("postgres", "postgres", "123456789", {
  host: "localhost",
  dialect: "postgres",
});

const newStudents = [
  {
    firstName: "John",
    lastName: "Doe",
    age: 17,
    group: "IS 1.20"
  },
  {
    firstName: "Joji",
    lastName: "Mot",
    age: 14,
    group: "IS 1.20"
  },
  {
    firstName: "Moto",
    lastName: "Moto",
    age: 71,
    group: "IS 2.20"
  },
  {
    firstName: "Ded",
    lastName: "Pustovoi",
    age: 1700,
    group: "IS 1.20"
  },
  {
    firstName: "Zhoomart",
    lastName: "Oskonbaev",
    age: 19,
    group: "IS 1.20"
  },
  {
    firstName: "Vova",
    lastName: "Bova",
    age: 22,
    group: "PM 1.19"
  },
  {
    firstName: "Alla",
    lastName: "Ol",
    age: 37,
    group: "RE 2.20"
  },
  {
    firstName: "Nina",
    lastName: "Affa",
    age: 17,
    group: "IS 1.20"
  },
  {
    firstName: "Mama",
    lastName: "Papa",
    age: 26,
    group: "LA 1.8"
  },
  {
    firstName: "Lola",
    lastName: "Dis",
    age: 18,
    group: "IS 2.20"
  },

];


// Выполняем асинхронную проверку подключения
try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

const Student = StudentInitiator(sequelize);

sequelize.sync();


// Add students
// for (let i = 0; i < newStudents.length; i++) {
//   Student.create(newStudents[i])
//     .then((student) => {
//     console.log("Пользователь создан:", student.id);
//   })
//     .catch((err) => {
//     console.log("Ошибка создания пользователя:", err);
//   });
// }


// Delet students
// let studentId = 1;
// Student.findByPk(studentId)
//   .then(student => {
//     student.destroy(); 
//   })
//   .catch(err => {
//     console.log('Ошибка удаления пользователя:', err);
//   });


// Find all students >= 18 years old
// (async () => {
//   const students = await Student.findAll({
//     where: {
//       age: {
//         [Op.gt]: 17,
//       },
//     },
//   });
//   console.log(students);
// })();

// Delet all students < 18 years old
// (async () => {
//   const students = await Student.destroy({
//     where: {
//       age: {
//         [Op.lt]: 18,
//       },
//     },
//   });
// })();
