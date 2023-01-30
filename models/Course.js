const S = require("sequelize");
const db = require("../config/db");
const Lesson = require("./Lesson");

class Course extends S.Model {}

Course.init(
  {
    ownerId: {
      type: S.INTEGER,
      allowNull: false,
    },
    name: {
      type: S.STRING,
      allowNull: false,
    },
    description: {
      type: S.TEXT("long"),
      allowNull: false,
    },
    image: {
      type: S.STRING,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "course" }
);

Course.Lesson = Course.hasMany(Lesson);
module.exports = Course;
