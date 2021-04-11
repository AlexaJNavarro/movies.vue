<template>
        <v-container>
            <v-row>
                <v-col cols="12" sm="6" v-for="movie of movies" :key="movie.id">
                    <vs-card type="5">
                            <template #title>
                                <h3>{{movie.name}}</h3>
                            </template>
                            <template #img>
                                <img :src='movie.image'>
                            </template>
                            <template #text>
                                <p>{{movie.description}}</p>
                                <p><b>{{movie.stars}}</b></p>
                            </template>
                            <template #interactions>
                                <vs-button danger border:active="active == 2" @click="Delete(movie.id)">Delete</vs-button>
                                <router-link :to="{name:'Movie',params:{id:movie.id}}"><vs-button color="rgb(59,222,200)" gradient:active="active == 6">Update</vs-button></router-link>
                            </template>
                        </vs-card>
                </v-col>      
            </v-row>
        </v-container>
</template>

<script>
export default {
    name:'Movie',
    data(){
        return{
            movies:[]
        }
    },
    methods:{
        async Delete(id){
            if(window.confirm("Desea Eliminar?")){
                const response = await this.axios.delete(`http://localhost:8080/movies/${id}`)
                console.log(response)
                this.Start()
            }
            
        },

        async Start(){
            const response= await this.axios.get('http://localhost:8080/movies/')
            console.log(response.data)
            this.movies= response.data
        }
    },
    async created(){
        this.Start()
    }
}
</script>