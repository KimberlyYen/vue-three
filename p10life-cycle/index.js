// 每個VUE實例在創建時都會經歷一謝列初始化步驟例如，他需要設置數據觀察，編譯模板，將實例安裝到DOM 以及在數據實例更改時更新DOM。在此過程中，他還要運行生命週期勾子函數，使用戶有機會在特定階段添加自己的代碼。

Vue.createApp({
    data() {
        return {
            x: 10,
            y: 20,
        }
    },
    created() {
        // 組建生成時
        console.log('x + y is: '+ (this.x + this.y) )
    }
    
}).mount('#hello-vue')