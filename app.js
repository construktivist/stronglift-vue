new Vue({
    el: '#app',
    data() {
        return {
            performanceRep: '',
            reps: 0,
            timer: '0:00',
            items: [
                'squats',
                'overhead press',
                'bench press',
                'barbell row',
                'deadlift'
            ]
        }
    },
    methods: {
        setInterval() {
            let delta = Date.now() - this.timerStart;
            let output = Math.floor(delta / 1000);
            return new Date(output).toUTCString();
        }
    }
})