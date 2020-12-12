import mongoose, {Schema} from 'mongoose'
const schema = new Schema(
  {
    email: {type: String, unique: true, lowercase: true},
    name: {type: String},
    password: {type: String},
  },
  {
    timestamps: true,
  }
)
export default mongoose.model('user', schema)
