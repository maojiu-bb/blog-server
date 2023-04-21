import { Schema } from 'mongoose'
import db from '../db/index.js'
import { nanoid } from 'nanoid'

const model = db.model('tag', {
  // tag_id: Number || String,
  tag_id: Schema.Types.Mixed,
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

export const addTagModel = async (tag) => {
  const data = {
    tag_id: nanoid(),
    tag
  }
  try {
    const res = await new model(data).save()
    return res
  } catch (error) {
    return false
  }
}

export const deleteTagModel = async (id) => {
  try {
    const res = await model.deleteOne({ tag_id: id })
    return res
  } catch (error) {
    return false
  }
}
