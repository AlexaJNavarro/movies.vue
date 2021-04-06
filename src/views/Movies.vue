<template>
    <div> 
        <!-- <button class="btn btn-primay">hola</button>
        <h1>Movie</h1>
        <ul v-for="movie of movies" :key="movie.id">
            <li>
                {{movie.name}}
                <router-link :to="{name:'Movie', params:{id:movie.id}}"> 
                    <button>ver</button>
                </router-link>
            </li>
        </ul> -->
        <div v-for="movie of movies" :key="movie.id">
            <div class="row" >
                <div class="col-sm-4">
                    <div class="card">
                    <div class="card-body" >
                        <img :src='movie.image' class="card-img-top">
                        <h5 class="card-title">{{movie.name}}</h5>
                        <p class="card-text">{{movie.description}}</p>
                        <router-link :to="{name:'Movie', params:{id:movie.id}}">
                            <button class="btn btn-danger">Eliminar</button>
                        </router-link>
                        <router-link :to="{name:'Movie', params:{id:movie.id}}">
                            <button class="btn btn-dark">Actualizar</button>
                        </router-link>
                    </div>
                    </div>
                </div>
            </div><br>
        </div>

    </div>
</template>
<script>
export default {
    name:'Movie',
    data(){
        return{
            movies:[]
        }
    },
    async created(){
        const response= await this.axios.get('http://localhost:8080/movies/')
        console.log(response.data)
        this.movies= response.data
    }
}
</script>