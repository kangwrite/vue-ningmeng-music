/**
 * Created by 96004 on 2017/7/14.
 */
import jsonp from 'common/js/jsonp'
import { commonParams, options } from './config'

export function getSinger () {
  const url = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg'
  const data = Object.assign({}, commonParams, {
    channel: 'singer',
    page: 'list',
    key: 'all_all_all',
    pagesize: 100,
    pagenum: 1,
    loginUin: 0,
    hostUin: 0,
    format: 'jsonp',
    platform: 'yqq',
    needNewCode: 0
  })
  return jsonp(url, data, options)
}
export function getSingerDetial (id) {
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg'
  const data = Object.assign({}, commonParams, {
    order: 'listen',
    begin: 0,
    num: 100,
    uin: 0,
    format: 'jsonp',
    needNewCode: 0,
    platform: 'yqq',
    singermid: id
  })
  return jsonp(url, data, options)
}
