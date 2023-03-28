import db from '../db/index.js'

const model = db.model('swiper', {
  s_id: Number,
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
