// 一些通用的工具函数
import {Params} from '../services/feathers.class'

// 去除指定对象中某些字段的前后空格
export function trimFields(obj: any, ...fields: any) {
  fields.forEach((k: string) => {
    const v = obj[k]
    if (v && typeof v === 'string') obj[k] = v.trim()
  })
}

// 合并所有多余的空格为单个空格
export function trimAll(input: any) {
  return input.toString()
    .replace(/[\s\r\n]+/sg, ' ')
    .trim()
}

// 通过关键词查询
export function handleKeyword(params: Params, field: string) {
  const {query = {}} = params
  const {keyword = ''} = query
  const q = keyword.trim()
  if (q) {
    query[field] = new RegExp(q)
  }
  delete query.keyword
}

// 提取对象 _id 字符串
export function getId(input: any) {
  if (!input) return
  if (!input._id) return input.toString()
  return input._id.toString()
}

// 批量提取 _id 字符串
export function getIds(...args: any) {
  const ids: Array<string> = []
  args.forEach((input: any) => ids.push(getId(input)))
  return ids
}

// 检查是否为有效的bulk
export function isValidBulk(bulk: any) {
  return bulk
    && bulk.s
    && bulk.s.currentBatch
    && bulk.s.currentBatch.operations
    && bulk.s.currentBatch.operations.length > 0
}

// 用字符串获取对象深度属性值，避免undefined错误
export function deepGet(obj: any, key: string, opt?: any) {
  if (typeof opt !== 'object' || opt === null) opt = {defaultValue: opt}
  if (!obj) return opt.defaultValue
  if (!key) return obj
  const result = key.split('.')
    .reduce((it, key) => (it && typeof it === 'object') ? it[key] : opt.defaultValue, obj)
  if (result === undefined) return opt.defaultValue
  if (opt.stringify && result && result.toString) return result.toString()
  return result
}

// 判断字符串是否为 ObjectId
export function isObjectId(str: string = '') {
  return /^[a-fA-F0-9]{24}$/.test(str)
}
