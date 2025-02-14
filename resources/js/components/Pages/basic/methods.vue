<template>
    <div>
<h2>the number is : {{ counter }}</h2>
<button @click="increment">Increment</button>
<button @click="decrement">Decrement</button>
<br>
<br>
<br>
<div>
<h2>My Blogs</h2>
<ul v-for="(blog,i) in blogs" :key="i">
    <h3>{{ blog.title }}</h3>
    <p>{{ blog.post }}</p>
    <br>

</ul>
</div>

<br>

<div>

 <h2 v-if="showItem">showItem = true</h2>
 <h2 v-else="">showItem = false</h2>

</div>
<button @click="toggleitem()"> change bool</button>
</div>

    
</template>

<script>

export default{

data(){
    return{
        counter:0,
        blogs:[],
        showItem:false,
    }
},
methods:{
    increment(){
        this.counter++;
    },
    decrement(){
        this.counter--;
    },
    toggleitem(){
    this.showItem = !this.showItem;

},
   
},
created(){
    this.counter = 100;

    let posts = [
        {title: 'My journey with Vue', post: 'This is a blog post about my journey with Vue'},
        {title: 'Blogging with Vue', post: 'Another great post about Vue'},
        {title: 'Why Vue is so fun', post: 'This is a blog post about why Vue is so fun'},
    ];

    this.blogs = posts;

}
}

</script>