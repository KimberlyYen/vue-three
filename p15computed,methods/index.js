Vue.createApp({
    /* options */
    data() {
        return {
            msg: "i love u"
        }
    },
    computed: {
        result() {
            // return this.msg
            return this.getDateTime()
        }
    },
    methods: {
        getResult() {
            return this.msg
        },
        getDateTime() {
            now = new Date()
            return "00:" + now.getMinutes() + ":" + now.getSeconds()
        },
        btnClick() {
            console.log("this.result", this.result)
            console.log("this.getDateTime()", this.getDateTime())
        }
    }
}).mount('#hello-vue')