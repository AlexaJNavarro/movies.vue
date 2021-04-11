<template>
    <div>
        <v-container>
            <v-row>
                <v-col>
                    <div class="center content-inputs">
                        <vs-input v-model="name" placeholder="Name" /><br>
                        <vs-input v-model="description" placeholder="Description" /><br>
                        <vs-input v-model="stars" placeholder="Stars" /><br>
                        <vs-input v-model="image" placeholder="Image" /><br>
                        <vs-button @click="Create"> Enviar </vs-button>
                    </div>
                </v-col>
            </v-row>
        </v-container>
        
    </div>
    
</template>
<script>

export default {
    name:'NewMovie',
    data(){
        return{
            name:'',
            description:'',
            stars:0,
            image:''
        }
    },
    methods:{
        async Create(){
            const data={
                "name": this.name,
                "description": this.description,
                "stars": this.stars,
                "image": this.image
            }
            const response = await this.axios.post('http://localhost:8080/movies',data)
            console.log(response)
            this.Clean()
        },
        Clean(){
            this.name=''
            this.description='',
            this.stars=0,
            this.image=''

        }
    }

}
</script>
