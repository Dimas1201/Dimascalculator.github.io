new Vue({
    el: '#app',
    data: {
        input1: '',
        input2: '',
        result: 0
    },
    methods: {
        calculate(operator) {
            const num1 = parseFloat(this.input1);
            const num2 = parseFloat(this.input2);

            if (!isNaN(num1) && !isNaN(num2)) {
                switch (operator) {
                    case '+':
                        this.result = num1 + num2;
                        break;
                    case '-':
                        this.result = num1 - num2;
                        break;
                    case '*':
                        this.result = num1 * num2;
                        break;
                    case '/':
                        this.result = num1 / num2;
                        break;
                    default:
                        this.result = 0;
                }
            } else {
                this.result = 0;
            }
        }
    }
});
