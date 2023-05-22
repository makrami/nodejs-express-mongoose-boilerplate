import mongoose, { Schema } from 'mongoose';
import paginate from 'mongoose-paginate-v2';
import aggregatePaginate from 'mongoose-aggregate-paginate-v2';
import mongooseDelete from 'mongoose-delete';

const testSchema = new Schema(
  {
    username: { type: String, trim: true, required: true },
  },
  { timestamps: true, skipVersioning: true }
);

testSchema.methods.toJSON = function () {
  var obj = this.toObject();
  delete obj.createdAt;
  return obj;
};

// plugins
// testSchema.plugin(mongoosePaginate);
// testSchema.plugin(aggregatePaginate);
// testSchema.plugin(mongoose_delete, { deletedAt: true, overrideMethods: true });

const Test = mongoose.model('Auth', testSchema);

export default Test;
