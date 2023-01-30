const S = require("sequelize");
const db = require("../config/db");

class LessonCompleted extends S.Model {}

LessonCompleted.init(
  {
    lessonId: {
      type: S.INTEGER,
      allowNull: false,
    },
    completed: {
      type: S.BOOLEAN,
      defaultValue: false,
    },
  },
  { sequelize: db, modelName: "lesson-completed" }
);

module.exports = LessonCompleted;
