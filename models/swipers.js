import db from '../db/index.js'
import { Schema } from 'mongoose'
import { nanoid } from 'nanoid'

const model = db.model('swiper', {
  // s_id: Number,
  s_id: Schema.Types.Mixed,
  s_url: String
})

export const findAllSwiperModel = async () => {
  try {
    const res = await model.find().exec()
    return res
  } catch (error) {
    return {}
  }
}

export const addSwiperModel = async (url) => {
  try {
    const data = {
      s_id: nanoid(),
      s_url: url
    }
    const res = await new model(data).save()
    return res
  } catch (error) {
    return false
  }
}

export const deleteSwiperModel = async (swiper_id) => {
  try {
    const res = await model.deleteOne({ s_id: swiper_id })
    return res
  } catch (error) {
    return false
  }
}
