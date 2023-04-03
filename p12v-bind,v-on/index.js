Vue.createApp({
    data() {
        return {
            komavideo: 'https://komavideo.com/',
        }
    },    
    methods: {
        buyPS5(val) {
            val == 1 ? alert('買買買'):alert('不買不買不買') 
        }
    }
}).mount('#hello-vue')