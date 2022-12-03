import { reactive } from 'vue';
export const store = reactive({
    isAuthenticated: false,
    token: null,
    authLogin(token) {
        this.token = token;
        this.isAuthenticated = true;
        axios.defaults.headers.common['Authorization'] = "token " + this.token['auth_token'];
    },
});