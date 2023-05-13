const app = Vue.createApp({
    data() {
        return {
            displayNumber: "0",
            sound: true
        }
    },
    computed: {
        isOn(){
            return this.displayNumber != ""
        }
    },
    methods: {
        numberPressed(number){
            if(!this.isOn) return;
            if(this.displayNumber == "0"){
                this.displayNumber = String(number);
            }else{
                this.displayNumber = this.displayNumber + String(number);
            }
            console.log(number);
        },
        CEPressed(){
            if(!this.isOn) return;
            this.displayNumber = "0";
        },
        OFFPressed(){
            if(this.isOn) this.displayNumber = ""
        },
        ONPressed(){
            if(!this.isOn) this.displayNumber = "0"
        },
        plusMinusPressed(){
            if(!this.isOn || this.displayNumber == "0") return;
            this.displayNumber = String(-1 * Number(this.displayNumber))
        }
    }
})

app.mount('#calculator');