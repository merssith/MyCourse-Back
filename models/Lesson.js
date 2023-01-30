const S = require("sequelize");
const db = require("../config/db");
const LessonComment = require("./LessonComment");

class Lesson extends S.Model {}

Lesson.init(
  {
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
    video: {
      type: S.STRING,
      allowNull: false,
    },
    files: {
      type: S.ARRAY(S.JSON),
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "lesson" }
);

Lesson.LessonComment = Lesson.hasMany(LessonComment);
module.exports = Lesson;
