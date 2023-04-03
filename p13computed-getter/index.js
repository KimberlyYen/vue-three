Vue.createApp({
    data() {
        return {
            games: [
                'xx1' ,
                'xx2' ,
                'xx3',
                'xx4' ,
            ]
        }
    },    
    computed: {
        playedGameCount() {
            return this.games.length
        }
    }
}).mount('#hello-vue')