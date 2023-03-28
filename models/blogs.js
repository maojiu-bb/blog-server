import db from '../db/index.js'
import moment from 'moment/moment.js'

const model = db.model('bloglist', {
  blog_id: Number,
  author: String,
  public_date: String,
  view: Number,
  comment_count: Number,
  star: Number,
  tag: Array,
  title: String,
  summary: String,
  comments: Array,
  cover: String,
  detail: String
})

export const findAllBlogsModel = async () => {
  try {
    const res = await model.find().exec()
    return res
  } catch (error) {
    return {}
  }
}

export const findBlogSortModel = async () => {
  try {
    const res = await model.find().sort({ star: -1 }).exec()
    return res
  } catch (error) {
    return {}
  }
}

export const findBlogDetailModel = async (id) => {
  try {
    const res = await model.find({ blog_id: id }).exec()
    return res
  } catch (error) {
    return {}
  }
}

export const findObscureBlogModel = async (keyword) => {
  try {
    const reg = new RegExp(`${keyword}`, 'i')
    const res = await model.find({ summary: { $regex: reg } }).exec()
    return res
  } catch (error) {
    return {}
  }
}

export const insertBlogModel = async (blogInfo) => {
  try {
    const insertBlogInfo = {
      blog_id: blogInfo.blog_id,
      author: blogInfo.author,
      public_date: moment(new Date()).format('YYYY-MM-DD hh:mm'),
      view: 0,
      comment_count: 0,
      star: 0,
      tag: blogInfo.tag,
      title: blogInfo.title,
      summary: blogInfo.summary,
      comments: [],
      cover:
        blogInfo.cover ||
        'https://tse1-mm.cn.bing.net/th/id/OIP-C.ztxiQQGHL02R1Y94LFE-gAHaEK?w=292&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      detail: blogInfo.detail
    }
    const res = await new model(insertBlogInfo).save()
    return res
  } catch (error) {
    return false
  }
}
