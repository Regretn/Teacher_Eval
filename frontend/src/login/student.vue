<script>
export default {components:{
    setup() {      
    },
    
}}
</script>


<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    color: #303433;
}

.login {
    min-height: 100vh;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
}

section {
    display: flex;
    justify-content: center;
    align-items: center;
}

section.side {
    background: url(./images/bk.png) no-repeat;
    background-size: 100% 102%;
}

.side img {
    width: 100%;
    max-width: 100%;
}

.login-container {
    max-width: 450px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.title {
    text-transform: uppercase;
    font-size: 3em;
    font-weight: bold;
    text-align: center;
    letter-spacing: 1px;
}

.separator {
    width: 150px;
    height: 4px;
    background-color: #843bc7;
    margin: 24px;
}

.welcome-message {
    text-align: center;
    font-size: 1.1em;
    line-height: 28px;
    margin-bottom: 30px;
    color: #696969;
}

.login-form {
    width: 100%;
    display: flex;
    flex-direction: column;
}

.form-control {
    width: 100%;
    position: relative;
    margin-bottom: 24px;
}

input,
button {
    border: none;
    outline: none;
    border-radius: 30px;
    font-size: 1.1em;
}

input {
    width: 100%;
    background: #e6e6e6;
    color: #333;
    letter-spacing: 0.5px;
    padding: 14px 64px;
}

input~i {
    position: absolute;
    left: 32px;
    top: 50%;
    transform: translateY(-50%);
    color: #888;
    transition: color 0.4s;
}

input:focus~i {
    color: #843bc7;
}

button.submit {
    color: #fff;
    padding: 14px 64px;
    margin: 32px auto;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: bold;
    background-image: linear-gradient(to right, #8b33c5, #15a0e1);
    cursor: pointer;
    transition: opacity 0.4s;
}

button.submit:hover {
    opacity: 0.9;
}


/* ----  Responsiveness   ----  */

@media (max-width: 780px) {
    body {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .side {
        display: none;
    }
}
</style>

<template>
    



<body class="login">
    <section class="side">
        <img src="../assets/teacher.png" alt="">
    </section>

    <section class="main">
        <div class="login-container">
            <p class="title">Welcome to TES</p>
            <div class="separator"></div>
            <p class="welcome-message">Teacher`s Evaluation System</p>

			<form method="post" name="login">
                <div class="form-control">
                    <input type="text" placeholder="Username" name="user_name">
                    <i class="fas fa-user"></i>
                </div>
                <div class="form-control">
                    <input type="password" placeholder="Password" name="password">
                    <i class="fas fa-lock"></i>
                </div>

                <button class="submit">Login</button>
            </form>
        </div>
    </section>

</body>

</template>