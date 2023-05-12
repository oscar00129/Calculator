const app = Vue.createApp({
    data() {
        return {
            displayNumber: "0.",
            sound: true
        }
    },
    methods: {
        numberPressed(number){
            console.log(number);
        }
    }
})

app.mount('#calculator');