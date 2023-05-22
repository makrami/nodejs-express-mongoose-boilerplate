import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema(
  {
    username: { type: String, trim: true, required: true, unique: true },
  },
  { timestamps: true }
);

userSchema.methods.toJSON = function () {
  var obj = this.toObject();
  delete obj.createdAt;
  delete obj.__v;
  return obj;
};

const User = mongoose.model('User', userSchema);

export default User;
