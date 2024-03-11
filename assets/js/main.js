const { createApp } = Vue

createApp(
    {
        data() {
            return {
                message: 'Hello Word!',
                image: "https://picsum.photos/500/500/"
            }
        }
    }
).mount('#app')

