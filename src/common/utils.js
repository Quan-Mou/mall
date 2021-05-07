export function debounce(func,delay) {
  let timer = null
  return function(...args) {
    if(timer) clearTimeout(timer)
    timer = setTimeout(() => {
      // console.log(this);
      func.apply(this,args)
      // console.log(args);
    },delay)
  }
}