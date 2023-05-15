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
        btnOperation(operation){
            if(this.operation){
                this.secondNumber = Number(this.displayNumber)
                this.makeOperation();
                this.firstNumber = Number(this.displayNumber)
                this.secondNumber = null
                this.operation = operation
            }else if(this.firstNumber){
                this.operation = operation
                this.secondNumber = Number(this.displayNumber)
                this.makeOperation();
                this.firstNumber = Number(this.displayNumber)
                this.secondNumber = null
            }else{
                this.operation = operation
                this.firstNumber = Number(this.displayNumber)
            }
            this.clearDisplay = true
        },
        btnPlusPressed(){
            this.btnOperation("plus");
        },
        btnMinusPressed(){
            this.btnOperation("minus");
        },
        btnMultiplyPressed(){
            this.btnOperation("multiply");
        },
        btnDividePressed(){
            this.btnOperation("divide");
        },
        btnPercentagePressed(){
            this.btnOperation("percentage");
        },
        btnSquareRootPressed(){
            //this.btnOperation("square_root");
            if(!this.isOn || this.displayNumber == "0") return;
            this.displayNumber = String(Math.sqrt( this.displayNumber ));
            this.clearDisplay = true;
        },
        btnMusicPressed(){},
        btnDotPressed(){},
        btnEqualPressed(){
            this.secondNumber = Number(this.displayNumber);
            this.makeOperation()
            this.clearDisplay = true;
            this.resetVariables();
        },
        makeOperation(){
            switch(this.operation){
                case "plus":
                    this.displayNumber = String(this.firstNumber + this.secondNumber);
                    break;
                case "minus":
                    this.displayNumber = String(this.firstNumber - this.secondNumber);
                    break;
                case "multiply":
                    this.displayNumber = String(this.firstNumber * this.secondNumber);
                    break;
                case "divide":
                    this.displayNumber = String(this.firstNumber / this.secondNumber);
                    break;
                case "percentage":
                    this.displayNumber = String((this.firstNumber * this.secondNumber) / 100);
                    break;
                case "square_root":
                    this.displayNumber = String(this.firstNumber + this.secondNumber);
                    break;
            }
        },
        resetVariables(){
            this.firstNumber = null;
            this.secondNumber = null;
            this.operation = null;
        }
    }
})

app.mount('#calculator');