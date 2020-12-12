// import axios from 'axios'
import rooms from '../../data'

export default {
// GET_DATA_FROM_API ({ commit }) {
// return axios('http://localhost:3000/rooms', { method: 'GET' })
//   .then((rooms) => {
//     commit('SET_ROOMS_TO_STATE', rooms.data)
//     return products
//   })
//   .catch((error) => {
//     console.log(error)
//     return error
//   })
// }

  GET_DATA_FROM_API ({ commit }) {
    const featuredRooms = []

    for (let i = 0; i < rooms.length; i++) {
      if (rooms[i].fields.featured) {
        featuredRooms.push(rooms[i].fields.images.map(image => image.fields.file.url))
      }
      // else messages.push(res[i])
    }
    console.log(featuredRooms)
    commit('SET_FEATURED_ROOMS_TO_STATE', featuredRooms)
  }
}
