//定義自己的數據對象
const mydata = { a :10 }
const vm = Vue.createApp({ /*options*/
    data() {
        // App返回自定義的數據對象
        return mydata
    }
}).mount('#hello-vue')
// //打印數據
// console.log(vm.a)
// console.log(vm.$data)
// console.log(mydata)
// //改變數據的值
// vm.a = 100
// console.log(vm.a)
// console.log(vm.$data)
// console.log(mydata)
