import db from '../db/index.js'

const model = db.model('project', {
  project_id: Number,
  project_name: String,
  github_address: String,
  project_info: String,
  project_cover: Array
})

export const findAllProjectModel = async () => {
  try {
    const res = await model.find().exec()
    return res
  } catch (error) {
    return false
  }
}

export const insertProjectModel = async (projectInfo) => {
  try {
    const res = await new model(projectInfo).save()
    return res
  } catch (error) {
    return false
  }
}

export const deleteProjectModel = async (project_id) => {
  try {
    const res = await model.deleteOne({ project_id })
    return res
  } catch (error) {
    return false
  }
}
