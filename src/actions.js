export const ADD_API = 'ADD_API'
export const REMOVE_API = 'REMOVE_API'
export const UPDATE_API = 'UPDATE_API'
export const CHANGE_API_STATUS = 'CHANGE_API_STATUS'

export function addApi(api) {
  return {
    type: ADD_API,
    api
  }
}

export function removeApi(apiId) {
  return {
    type: REMOVE_API,
    apiId
  }
}
