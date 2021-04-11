<template>
    <div>
        <v-container>
            <v-row>
                <v-col>
                    <div class="center content-inputs">
                        <vs-input v-model="name" placeholder="Name"/><br>
                        <vs-input v-model="description" placeholder="Description" /><br>
                        <vs-input v-model="stars" placeholder="Stars" /><br>
                        <vs-input v-model="image" placeholder="Image" /><br>
                        <vs-button @click="Update"> Update </vs-button>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default{
    name: 'Movie',
    data(){
        return{
            name:'',
            description:'',
            stars:0,
            image:'',
            movies:[],
 
        }
    },
    methods:{
        async Update(){
            const data={
                "name":this.name,
                "description":this.description,
                "stars":this.stars,
                "image":this.image
            }

            const response= await this.axios.put(`http://localhost:8080/movies/${this.$route.params.id}`,data)
            console.log(response.data)
        }
    },
    async created(){
        const response= await this.axios.get('http://localhost:8080/movies/')
        this.movies=response.data
        this.movies.forEach(m => {
            if(m.id==this.$route.params.id){
                this.name=m.name
                this.description=m.description
                this.stars=m.stars
                this.image=m.image
            }
            
        });
    }
}
</script>

