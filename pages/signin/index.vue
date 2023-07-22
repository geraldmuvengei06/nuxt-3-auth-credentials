 <script setup>

 const { signIn } = useAuth() // uses the default signIn function provided by nuxt-auth
 const formData = reactive({
     email: '',
     password: '',
 })


 const login = async (e) => {
     try {
         e.preventDefault()
         let res = await signIn(
             { ...formData },
             { callbackUrl: '/home' } // Where the user will be redirected after a successiful login
         )

         console.log("res", res);

     } catch (error) {
         console.log("error", error);
     }
 }

 definePageMeta({
     title: 'Signin',
     layout: 'empty',
     public: true,
     auth: {
         unauthenticatedOnly: true,
         navigateAuthenticatedTo: '/',
     },
 })


 </script>

<template>
    <div>
        <div class="custom-bg mb-14 p-14 text-center text-white">
            <h1>Signin</h1>
        </div>
        <form @submit.prevent="login" class="card custom-card mx-auto w-11/12 max-w-md bg-white p-6 shadow-lg">
            <input type="email" v-model="formData.email" name="email" placeholder="email here.." />
            <input type="password" v-model="formData.password" name="password" />
            <button type="submit">Sign In</button>
        </form>
    </div>
</template>