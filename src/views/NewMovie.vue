<template>
    <div>
        <div class="center content-inputs">
            <vs-input v-model="name" placeholder="Name" />
            <vs-input v-model="description" placeholder="description" />
            <vs-input v-model="stars" placeholder="stars" />
            <vs-button @click="Create"> Enviar </vs-button>
         </div>
    </div>
    
</template>
<script>

export default {
    name:'NewMovie',
    data(){
        return{
            name:'',
            description:'',
            stars:0
        }
    },
    methods:{
        async Create(){
            const data={
                "name": this.name,
                "description": this.description,
                "stars": this.stars
            }
            const response = await this.axios.post('http://localhost:8080/movies',data)
            console.log(response)
        }
    }

}
</script>
