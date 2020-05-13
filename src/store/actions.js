const setMix = payload => ({
  type: 'SET_MIX',
  payload
})

const addMix = payload => ({
  type: 'ADD_MIX', 
  payload
})

//export all our actions creators
export default {
  setMix,
  addMix
}
