const S = require("sequelize");
const db = require("../config/db");
const LessonCommentReply = require("./LessonCommentReply");

class LessonComment extends S.Model {}

LessonComment.init(
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
  { sequelize: db, modelName: "lesson-comment" }
);

LessonComment.LessonCommentReply = LessonComment.hasMany(LessonCommentReply);
module.exports = LessonComment;
