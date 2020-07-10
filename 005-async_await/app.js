import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js';

const getDemoUsers = () => {
    // if (Math.random() > 0.5) {
    //     throw new Error('Unlucky error has happened...');
    // }

    return new Promise((resolve, reject) => {
        axios.get('https://api.github.com/users')
            .then(response => {
                setTimeout(() => {
                    resolve(response.data);
                }, 3000);
            })
            .catch(reject);
    });

    // return [
    //     { id: 1, login: 'John Doe' },
    //     { id: 2, login: 'Billy Blue' },
    //     { id: 3, login: 'Alex Morgan' },
    //     { id: 4, login: 'Victor Norman' }
    // ]
}

new Vue({
    el: '#app',

    data: {
        users: [],
        errorMessage: null
    },

    async mounted() {
        const value = await this.loadGithubUsers()

        console.log(value);
    },

    methods: {
        async loadGithubUsers() {
            this.errorMessage = null;

            // getDemoUsers()
            //     .then(data => this.users = data)
            //     .catch(message => this.errorMessage = message);

                // okamžitě...

            // try {
            //     getDemoUsers()
            //         .then(data => this.users = data)
            //         .catch(message => this.errorMessage = message);
            // } catch (e) {
            //     this.errorMessage = `Při načítání uživatelů došlo k chybě: ${e.message}`
            // }

            // getDemoUsers().then((data) => this.users = data);

            // console.log(this.users);

            // setTimeout(() => {
            //     console.log(this.users);
            // }, 1000);

            // try {
            //     this.users = await new Promise((resolve, reject) => {
            //         setTimeout(() => {
            //             resolve([
            //                 { id: 1, login: 'Dan Charousek' }
            //             ]);
            //         }, 1000)
            //     });
            // } catch (e) {
            //     this.errorMessage = e.message;
            // }

            return 10;
        }
    }
});