const { createApp } = Vue

createApp(
    {
        data() {
            return {
                message: 'Hello Word!',
                image: `https://picsum.photos/100/100/`,
                counter: 100,
            }
        },

        mounted() {
            console.log(this.image);
            this.counter = this.counter;

        },

        methods: {
            send() {
                if (this.counter < 100){
                    this.counter = 100
                }
                console.log('reload image size');
                this.image = `https://picsum.photos/${this.counter}/${this.counter}/`
            }
        }

    }
).mount('#app')

