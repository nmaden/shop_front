<!-- template -->
<template>
        <div class="sign__page">

            <p class="sign__page__title">KENES SHOP</p>
            <form class="sign__page__block" @submit.prevent="login_sign">
                <input type="text" placeholder="Логин" v-model="login" >
                <input type="text" placeholder="Пароль" v-model="password" >
                <button type="submit"><p>Войти</p></button>
            </form>

        </div>                   
</template>

<!-- scripts -->
<script>
    import { mapActions } from 'vuex'
    export default {
      data() {
          return {
            login: '',
            password: '',
            user: {
                role: ''
            }
          }
      },
      mounted() {
        
      },
      methods: {
        ...mapActions([
            'SIGN_IN_USER',
        ]),
        login_sign() {
              let obj = {
                    email: this.login,
                    password: this.password
              }
              this.$http.post('/login',
               obj 
              )
              .then(res => {
                  localStorage.setItem("access_token",res.data.token);

                  // let data__profile = {
                  //     token: res.data.token,
                  //     type: true,
                  // }
                  // this.SIGN_IN_USER(data__profile)
                  this.token = localStorage.getItem("access_token");
                  this.get_profile();
              })
           

        },
        get_profile() {
      
            this.$http.post('/get/user/me', 
            {
        
            }, 
            {
                headers: {
                    'Authorization': `Bearer ${this.token}` 
                }
            }
            )
            .then(res => { 
                this.user.role = res.data.name
                if(this.user.role == "Администратор системы") {
                    this.$router.push("/admin");
                }else {
                    this.$router.push("/404");
                }
            });
        }
      }
    };
</script>

<style scoped lang="scss"> 

    .sign__page {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 70vh;

      @media only screen and (max-width: 764px) {
        width: 100%;
      }
      .sign__page__title {
        font-weight: bold;
        font-size: 26px;
        margin-bottom: 20px;
        color: #333;
      }
      .sign__page__block {
        display: flex;
        flex-direction: column;
        input {
          width: 300px;
          padding: 20px;
          margin-bottom: 20px;
          border: 1px solid #ccc;
          @media only screen and (max-width: 764px) {
             width: 200px;
          }
        }
        ::placeholder {
          color: #333;
        }
        button {
          cursor: pointer;
          text-transform: uppercase;
          width: 300px;
          outline: none;
          border: none;
          background-color: cornflowerblue;
          padding: 20px;
          @media only screen and (max-width: 764px) {
             width: 250px;
          }
          p {
            color: white;
            font-weight: bold;
            margin-bottom: 0;
            
          }
        }
        button:hover {
          background-color: #285bb6;
        }
      }
      
    }
</style>