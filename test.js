// function test(a) {
//   return new Promise((resolve, reject) => {
//     if (a === 1) {
//       resolve(a)
//     } else {
//       throw new Error('error')
//       reject('errrrr')
//     }
//   })
// }

// // test(1).then(val => {
// //   console.log(val)
// // })

// test(2).then(val => {
//   console.log(val)
// })
// console.log('12344')

const a = new Promise((resolve, reject) => {
  resolve(111)
}).then(val => {
  throw new Error('error1')
  return val
}).then(val => {
  console.log(val)
  throw new Error('error2')
}).catch(err => {
  console.log(err)
})
