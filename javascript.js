const app = Vue.createApp({
    data() {
        return {
            displayNumber: "0",
            sound: true,
            operation: null,
            firstNumber: null,
            secondNumber: null,
            clearDisplay: false
        }
    },
    computed: {
        isOn(){
            return this.displayNumber != ""
        }
    },
    methods: {
        btnNumberPressed(number){
            if(!this.isOn) return;
            if(this.displayNumber == "0" || this.clearDisplay){
                this.displayNumber = String(number);
                this.clearDisplay = false;
            }else{
                this.displayNumber = this.displayNumber + String(number);
            }
            console.log(number);
        },
        CEPressed(){
            if(!this.isOn) return;
            this.displayNumber = "0";
            this.resetVariables();
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
        },
        btnPlusPressed(){
            this.operation = "plus"
            this.firstNumber = Number(this.displayNumber)
            this.clearDisplay = true
        },
        btnMinusPressed(){
            this.operation = "minus"
        },
        btnMultiplyPressed(){
            this.operation = "multiply"
        },
        btnDividePressed(){
            this.operation = "divide"
        },
        btnPercentagePressed(){
            this.operation = "percentage"
        },
        btnSquareRootPressed(){
            this.operation = "square_root"
        },
        btnMusicPressed(){},
        btnDotPressed(){},
        btnEqualPressed(){
            this.secondNumber = Number(this.displayNumber);

            switch(this.operation){
                case "plus":
                    this.displayNumber = String(this.firstNumber + this.secondNumber);
            }

            this.clearDisplay = true;
            this.resetVariables();
        },
        resetVariables(){
            this.firstNumber = null;
            this.secondNumber = null;
            this.operation = null;
        }
    }
})

app.mount('#calculator');