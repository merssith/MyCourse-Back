const S = require("sequelize");
const db = require("../config/db");

class LessonCommentReply extends S.Model {}

LessonCommentReply.init(
  {
    authorId: {
      type: S.INTEGER,
      allowNull: false,
    },
    message: {
      type: S.TEXT("long"),
      allowNull: false,
    },
    approved: {
      type: S.BOOLEAN,
      defaultValue: false,
    },
  },
  { sequelize: db, modelName: "lesson-comment-reply" }
);

module.exports = LessonCommentReply;
