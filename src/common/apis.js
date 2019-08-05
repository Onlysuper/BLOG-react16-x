import fetch from './service'
export function getAriticle( data) {
  return fetch({
    url: '/mock/5d428ffe08579358b0d0db02/lm/HomeArticle',
    method: 'get',
    data,
  })
}
export function getUsers( data) {
  return fetch({
    url: '/mock/5d428ffe08579358b0d0db02/lm/getUsers',
    method: 'get',
    data,
  })
}