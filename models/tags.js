import db from '../db/index.js'

const model = db.model('tag', {
  tag_id: Number,
  tag: String
})

export const findAllTagsModel = async () => {
  try {
    const res = await model.find().exec()
    return res
  } catch (error) {
    return {}
  }
}
