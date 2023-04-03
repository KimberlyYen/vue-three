Vue.createApp({
    data() {
        return {
            message: '中國足球沒戲了!',
            rawHtml: '<b class=text-danger> 恆大衰弱了 </b>',
            isDisableButton: false
        }
    },    
}).mount('#hello-vue')