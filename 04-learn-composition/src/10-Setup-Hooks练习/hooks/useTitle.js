import { ref, watch } from "vue"

export default function useTitle(titleValue) {
  // document.title = title

  // 定义一个ref的引入的数据
  const title = ref(titleValue)

  // 监听title的改变
  watch(title, (newValue) => {
    document.title = newValue
  },{
    immediate: true
  })

  // 返回ref的值
  return title
}