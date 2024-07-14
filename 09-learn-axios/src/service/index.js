import axios from "axios"
// import { reject, resolve } from "core-js/fn/promise"

class HYRequest {
  constructor(baseURL, timeout=10000) {
    this.instance = axios.create({
      baseURL,
      timeout
    })
  }


  request(config) {
    return new Promise((resolve, reject) => {
      this.instance.request(config).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  }

  get(config) {
    return this.request({ ...config, method: "get" })
  }

  post(config) {
    return this.request({ ...config, method: "post" })
  }
}

// const hyRequest1 = new HYRequest("http://123.207.32.32:9001")
const hyRequest2 = new HYRequest("http://123.207.32.32:8000")

export default new HYRequest()
