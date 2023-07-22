<script setup>
const { signOut, token } = useAuth()
async function _signOut() {
    try {
        await signOut({
            callbackUrl: '/account/signin/',
            redirect: true
        })
        // Add after logout logic here, could be removing the session data from localstorage or whatever
    } catch (error) { 
        console.log('error', error);
        
    }
}
</script>
<template>
    <button @click="_signOut()">
        Sign Out
    </button>
</template>