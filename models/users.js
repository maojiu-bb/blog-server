import db from '../db/index.js'

const model = db.model('user', {
  uid: Number,
  uname: String,
  avatar: String,
  desc1: String,
  desc2: String
})

export const findUserModel = async () => {
  try {
    const res = await model.find().exec()
    return res
  } catch (error) {
    return {}
  }
}

export const updateAvatarModel = async (avatar) => {
  try {
    const res = await model.updateOne({ uid: 1 }, { $set: { avatar: avatar } })
    return res
  } catch (error) {
    return false
  }
}

export const updateUserInfoModel = async (userinfo) => {
  try {
    const { uname, desc1, desc2 } = userinfo
    const res = await model.updateOne(
      { uid: 1 },
      { $set: { uname: uname, desc1: desc1, desc2: desc2 } }
    )
    return res
  } catch (error) {
    return false
  }
}
