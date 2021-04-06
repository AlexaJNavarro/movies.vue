<template>
    <div>
        {{$route.params.id}}
        <vs-button icon>
            <box-icon name="rocket"></box-icon>
            <box-icon type='solid' name='virus-block'></box-icon> 
        </vs-button>
    </div>
</template>
<script>
export default{
    name: 'Movie',
}
</script>

