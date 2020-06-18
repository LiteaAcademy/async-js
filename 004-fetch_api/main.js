import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js';


new Vue({
    el: '#app',
    data: {
        users: [],
        userAvatar: ''
    },

    mounted() {
        fetch('https://api.github.com/users')
            .then(response => response.json())
            .then(data => {
                this.users = data;
            });

        // promise.then((response) => {
        //     return response.json();
        // }).then(data => {
        //     console.log(data);
        // });
    },

    methods: {
        loadUserAvatar(user) {
            this.userAvatar = user.avatar_url;
        }
    }
});