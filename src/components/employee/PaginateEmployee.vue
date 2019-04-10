<template>
    <div class="container">
        <div class="list">
        <h1 class="bg-white p-5">{{name}}</h1>

           <p>
            <input class="appearance-none bg-transparent border-none w-full text-grey-darker mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Search..." aria-label="Full name" v-model="searchKey">
         </p>
            <table class="w-full border-b border-b-2 border-teal">
                <tr>
                    <th v-for="column in columns" :key="column.id">{{column.label}}

                    </th>
                </tr>
                <tr v-for="r in mdata" :key="r.id">
                     <td v-for="item in r" :key="item.id">{{item}}</td>
                </tr>
            </table>
           

            <button class="bg-teal hover:bg-teal-dark  text-sm text-white py-1 px-2 rounded" type="button" @click="setPage(currentPageIndex-1)">
            Prev
            </button>
            <span v-for="i in pages" @click="setPage(i)" :key="i" v-bind:class="{'current':currentPageIndex === i}">{{i+1}}</span>
             <button class="bg-teal hover:bg-teal-dark  text-sm text-white py-1 px-2 rounded" type="button" @click="setPage(currentPageIndex+1)">
            Next
            </button>
           
         
        
        </div>
    </div>
</template>


<script>
import Vue from 'vue';

export default {
    name:'PaginatorEmployee',
    props: ['data', 'columns', 'perpage'],
    data(){

        return {
            name: 'Vrstan Paginator',
            mdata:[
                {
                id: 1,
                name: 'Mavis',
                age: 20,
                length: 180
                },
                 {
                     id: 2,
                name: 'Marva',
                age: 22,
                length: 280
                },
                 {
                     id: 3,
                name: 'Vis',
                age: 20,
                length: 180
                },
                 {
                     id: 4,
                name: 'Avis',
                age: 20,
                length: 180
                },
                 {
                     id: 5,
                name: 'Mav',
                age: 20,
                length: 180
                },
                 {
                     id: 6,
                name: 'Mavi',
                age: 42,
                length: 1800
                }      
            ],
            columns: [
                 {
                 id:100,
                label: 'Id',
                key: 'id'
                },
                {
                 id:10,
                label: 'Name',
                key: 'name'
                },
                {
                 id:20,
                label: 'Age',
                key: 'age'
                },
                {
                id:30,
                label: 'Length',
                key: 'length'
                }
            ],
            perpage: 3,
            searchFunction: {
                    searchKey: '',
                    currentPageIndex: 0,
                    orderKey: 'age'
                }
                
            
        }
    },
    methods:{
        setPage: function(index) {
        if (index >= 0 && index < this.pages) {
          this.currentPageIndex = index;   
        }        
      }

    },
    computed: {
      pages: function() {
        var filterBy = this.$options.filters.filterBy;       
        var filteredData = filterBy(this.data, this.searchKey);
        return Math.ceil(filteredData.length / this.perpage);
      },
      offset: function() {
        console.log(this.currentPageIndex, this.perpage);
        return this.currentPageIndex * this.perpage;
      }
    },
  
    watch: {
      searchKey: function() {
        if (this.currentPageIndex + 1 > this.pages)
          this.currentPageIndex = this.pages - 1;
        }
    },
  
    ready: function() {

    }

};


Vue.filter('limit', function (arr, limit) {
  if ( ! Array.isArray(arr)) return false;
  return arr.slice(0, limit);
});

Vue.filter('offset', function (arr, offset) {
  if ( ! Array.isArray(arr)) return false;
  return arr.slice(offset, arr.length)
});

</script>

<style>


</style>