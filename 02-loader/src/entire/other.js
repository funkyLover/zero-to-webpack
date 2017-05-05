
export default async () => {
  console.log(Promise)
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, 1000)
  })
  alert('alert after 1s')
}
