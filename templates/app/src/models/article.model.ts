import mongoose, {Schema} from 'mongoose'

const schema = new Schema(
  {
    title: {type: String, required: true},
  },
  {
    timestamps: true,
  }
)

export default mongoose.model('article', schema)
