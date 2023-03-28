import express from 'express'

import {
  findAllBlogsModel,
  findBlogDetailModel,
  findBlogSortModel,
  findObscureBlogModel,
  insertBlogModel
} from '../models/blogs.js'

import { findAllSwiperModel } from '../models/swipers.js'

import {
  findUserModel,
  updateAvatarModel,
  updateUserInfoModel
} from '../models/users.js'

import { findAllProjectModel, insertProjectModel } from '../models/projects.js'

import { findAllTagsModel } from '../models/tags.js'

const router = express.Router()

// 获取轮播图接口
router.get('/swiper', async (req, res) => {
  const result = await findAllSwiperModel()
  if (result) {
    res.send({
      code: 200,
      msg: '获取数据成功！',
      data: result
    })
  } else {
    res.send({
      code: 201,
      msg: '获取数据失败！',
      data: null
    })
  }
})

// 获取分类列表
router.get('/tags', async (req, res) => {
  const result = await findAllTagsModel()
  if (result) {
    res.send({
      code: 200,
      msg: '获取数据成功！',
      data: result
    })
  } else {
    res.send({
      code: 201,
      msg: '获取数据失败！',
      data: null
    })
  }
})

// 获取blog列表接口
router.get('/blogs', async (req, res) => {
  const result = await findAllBlogsModel()
  if (result) {
    res.send({
      code: 200,
      msg: '获取数据成功！',
      data: result
    })
  } else {
    res.send({
      code: 201,
      msg: '获取数据失败！',
      data: null
    })
  }
})
// 获取排序blog
router.get('/blogsSort', async (req, res) => {
  const result = await findBlogSortModel()
  if (result) {
    res.send({
      code: 200,
      msg: '获取数据成功！',
      data: result
    })
  } else {
    res.send({
      code: 201,
      msg: '获取数据失败！',
      data: null
    })
  }
})
// 获取blog详情接口
router.get('/blogDetail', async (req, res) => {
  const { blog_id } = req.query
  if (!blog_id) {
    return res.send({
      code: 201,
      msg: '请填写需要获取blog详情的id!',
      data: null
    })
  } else {
    const result = await findBlogDetailModel(blog_id)
    if (result) {
      res.send({
        code: 200,
        msg: '获取数据成功！',
        data: result
      })
    } else {
      res.send({
        code: 201,
        msg: '获取数据失败！',
        data: null
      })
    }
  }
})
// 获取blog模糊查询
router.get('/blogsObscure', async (req, res) => {
  const keyword = req.query.keyword
  const result = await findObscureBlogModel(keyword)
  if (result) {
    res.send({
      code: 200,
      msg: '获取数据成功！',
      data: result
    })
  } else {
    res.send({
      code: 201,
      msg: '获取数据失败！',
      data: null
    })
  }
})
// 发布blog接口
router.post('/publicBlog', async (req, res) => {
  const blogInfo = req.body
  if (
    !blogInfo.blog_id ||
    !blogInfo.author ||
    !blogInfo.tag ||
    !blogInfo.title ||
    !blogInfo.summary ||
    !blogInfo.detail
  ) {
    return res.send({
      code: 201,
      msg: '请填写完整信息！',
      data: null
    })
  } else {
    const result = await insertBlogModel(blogInfo)
    if (result) {
      res.send({
        code: 200,
        msg: '发布blog成功！',
        data: null
      })
    } else {
      res.send({
        code: 201,
        msg: '发布blog失败！',
        data: null
      })
    }
  }
})

// 获取用户信息接口
router.get('/user', async (req, res) => {
  const result = await findUserModel()
  if (result) {
    res.send({
      code: 200,
      msg: '获取数据成功！',
      data: result
    })
  } else {
    res.send({
      code: 201,
      msg: '获取数据失败！',
      data: null
    })
  }
})
// 更换头像接口
router.post('/updateAvatar', async (req, res) => {
  const avatar = req.body.avatar
  if (!avatar) {
    return res.send({
      code: 201,
      msg: '请选择要上传的头像！',
      data: null
    })
  } else {
    const result = await updateAvatarModel(avatar)
    if (result) {
      res.send({
        code: 200,
        msg: '更新头像成功！',
        data: null
      })
    } else {
      res.send({
        code: 201,
        msg: '更新头像失败！',
        data: null
      })
    }
  }
})
// 更新用户信息接口
router.post('/updateUserInfo', async (req, res) => {
  const userInfo = req.body
  if (!userInfo.uname || !userInfo.desc1 || !userInfo.desc2) {
    return res.send({
      code: 201,
      msg: '请填写完整的信息！',
      data: null
    })
  } else {
    const result = await updateUserInfoModel(userInfo)
    if (result) {
      res.send({
        code: 200,
        msg: '更新数据成功！',
        data: null
      })
    } else {
      res.send({
        code: 201,
        msg: '更新数据失败！',
        data: null
      })
    }
  }
})

// 获取项目列表接口
router.get('/projects', async (req, res) => {
  const result = await findAllProjectModel()
  if (result) {
    res.send({
      code: 200,
      msg: '获取数据成功！',
      data: result
    })
  } else {
    res.send({
      code: 201,
      msg: '获取数据失败！',
      data: null
    })
  }
})
// 发布项目接口
router.post('/publicProject', async (req, res) => {
  const projectInfo = req.body
  if (
    !projectInfo.project_id ||
    !projectInfo.project_name ||
    !projectInfo.github_address ||
    !projectInfo.project_info ||
    !projectInfo.project_cover
  ) {
    return res.send({
      code: 201,
      msg: '发布项目失败,请填写完整信息！',
      data: null
    })
  } else {
    const result = await insertProjectModel(projectInfo)
    if (result) {
      res.send({
        code: 200,
        msg: '发布项目成功！',
        data: null
      })
    } else {
      res.send({
        code: 201,
        msg: '发布项目失败！',
        data: null
      })
    }
  }
})

export default router
