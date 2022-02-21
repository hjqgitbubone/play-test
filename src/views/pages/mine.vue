<template>
<div>
    <p>
        用户名: {{ valLogin}}
    </p>
   
</div>
</template>

<script>
import {mapState} from 'vuex'
export default {
components: {},
props: {},
data() {
return {

}
},
computed: {
    ...mapState('user',['valLogin'])
},
methods: {

},
created() {
    
},
mounted() {

},
}
</script>
<style scoped>

</style>