<template>
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
    <!--img class="w-full" src="https://tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains"-->
    <div class="px-6 py-2">
        <div class="font-bold text-xl mb-2">Your Workers</div>
        <p class="text-grey-darker text-base">
        This is an Index of All Your Employees.
        </p>
    </div>
    <div class="container bg-grey-lightest p-4 overflow-y-auto h-64 text-blue-darker">
        <ul class="list-reset" v-for="yemployee in employees">
            <li v-if="yemployee.status=='active'" class="bg-green-lighter rounded mb-1 p-2 text-sm font-semibold font-mono">VE. <span class="bg-green">{{yemployee.eid}}</span> {{yemployee.firstname}} {{yemployee.lastname}} {{yemployee.sex}} <span class="bg-green-light p-1 pl-2 pr-2 rounded-full hover:shadow">{{yemployee.occupation}}</span><p class="text-xs text-grey-darker"> {{yemployee.address}}</p></li> 
              <li v-else-if="yemployee.status=='engaged'" class="bg-blue-lighter rounded mb-1 p-2 text-sm font-semibold font-mono">VE. <span class="bg-blue">{{yemployee.eid}}</span> {{yemployee.firstname}} {{yemployee.lastname}} {{yemployee.sex}}  <span class="bg-blue-light p-1 pl-2 pr-2 rounded-full">{{yemployee.occupation}}</span><p class="text-xs text-grey-darker"> {{yemployee.address}}</p></li>   
               <li v-else-if="yemployee.status=='idle'" class="bg-yellow-lighter rounded mb-1 p-2 text-sm font-semibold font-mono">VE. <span class="bg-yellow">{{yemployee.eid}}</span> {{yemployee.firstname}} {{yemployee.lastname}} {{yemployee.sex}}  <span class="bg-yellow  p-1 pl-2 pr-2 rounded-full">{{yemployee.occupation}}</span><p class="text-xs text-grey-darker"> {{yemployee.address}}</p></li>  
             <li v-else class="bg-grey-light rounded mb-1 p-2 text-sm font-semibold font-mono">VE. <span>{{yemployee.eid}}</span> {{yemployee.firstname}} {{yemployee.lastname}} {{yemployee.sex}}  <span class="bg-grey p-1 pl-2 pr-2 rounded-full">{{yemployee.occupation}}</span><p class="text-xs text-grey-darker"> {{yemployee.address}}</p></li>           
        </ul>
    
    </div>
    <div class="px-2 py-4 leading-tight">
        <span class="inline-block bg-green-lighter rounded-full px-3 py-1 text-xs font-semibold text-grey-darker mr-2">
        <input class="checkbox w-2 h-2 mr-1 toggle cursor-pointer">        
        Active<span class="bg-green rounded-full ml-2 p-1">{{numActive}}</span></span>
        <span class="inline-block bg-blue-lighter rounded-full px-3 py-1 text-xs font-semibold text-grey-darker mr-2">
        <input class="checkbox w-2 h-2 mr-1 toggle cursor-pointer">
        Engaged <span class="bg-blue-light rounded-full ml-2 p-1">{{numEngaged}}</span></span>
        <span class="inline-block bg-yellow-lighter rounded-full px-3 py-1 text-xs font-semibold text-grey-darker mr-2">
        <input class="checkbox w-2 h-2 mr-1 toggle cursor-pointer">
        Idle<span class="bg-yellow-dark rounded-full ml-2 p-1">{{numIdle}}</span></span>
         <span class="inline-block bg-grey rounded-full px-3 py-1 text-xs font-semibold text-grey-darker mr-2"><input class="checkbox w-2 h-2 mr-1 toggle cursor-pointer">
         Inactive<span class="bg-grey-light rounded-full ml-2 p-1">{{numInactive}}</span></span>
    </div>
    
    </div>

</template>

<script>
import axios from 'axios';
export default {
   
    metaInfo: {
        title: 'Employees Index',
    },
    data() {
        return {
            name: 'Ian Moncrieffe',
            employee: {
                firstname: '',
                lastname:'',
                alias: '',
                dob: '',
                sex: '',
                occupation:'',
                address: '',
                timestamp: Date(),
                author:'',
                imgs (){
                    return {
                        images:[]
                    }
                }
            },
            employees: [
                {
                    eid: 'PB55678',
                    firstname:"Paul",
                    lastname:'Browser',
                    alias: 'browser',
                    sex: 'Male',
                    occupation: 'Plumber',
                    address: '234 Summit Drive, Lincon, St. Mary',
                    status:'engaged',
                    timestamp: Date(),                   
                   
                },
                {
                    eid: 'DH76390',
                    firstname:"Dennis",
                    lastname:'Hamstead',
                    alias: 'hamhead',
                    sex: 'Male',
                    occupation: 'Carpenter',
                    address: '5 Perth Road, Mandeville, Manchester',
                    status:'active',
                    timestamp: Date(),                   
                   
                },
                 {
                    eid: 'WF64633',
                    firstname:"Wayne",
                    lastname:'Furgerson',
                    alias: 'fergy',
                    sex: 'Male',
                    occupation: 'Driver',
                    address: '20 Greenvale Rd, Mandeville, Manchester',
                    status:'active',
                    timestamp: Date(),                   
                   
                },
                 {
                    eid: 'WF779453',
                    firstname:"Wilbert",
                    lastname:'Folkner',
                    alias: 'foey',
                    sex: 'Male',
                    occupation: 'Mason',
                    address: '23 Greenvale Rd, Mandeville, Manchester',
                    status:'idle',
                    timestamp: Date(),                   
                   
                },
                 {
                    eid: 'AM38833',
                    firstname:"Andrea",
                    lastname:'Mullins',
                    alias: 'annie',
                    sex: 'Female',
                    occupation: 'Tiler',
                    address: '112 Dover Way, Mulvania, Trelawney',
                    status:'active',
                    timestamp: Date(),                   
                   
                }
                ]
            
            }
    },
    
    computed: {
        // a computed getter
        numActive: function () {
            var count = 0;
            for(var e in this.employees){
                if (this.employees[e].status == 'active') {
                    count += 1;
                }
               
                
            }
            return count;
            
            // `this` points to the vm instance
            //this.employees.count(status=='active')
        },
         numInactive: function () {
            var count = 0;
            for(var e in this.employees){
                if (this.employees[e].status == 'inactive') {
                    count += 1;
                }
               
                
            }
            return count;
            
            // `this` points to the vm instance
            //this.employees.count(status=='active')
        },
         numEngaged: function () {
              var count = 0;
               for(var e in this.employees){
                if (this.employees[e].status == 'engaged') {
                    count += 1;
                }
               
                
            }
            
            // `this` points to the vm instance
            return count;
        },
         numIdle: function () {
              var count = 0;
               for(var e in this.employees){
                if (this.employees[e].status == 'idle') {
                    count += 1;
                }
               
                
            }
            
            // `this` points to the vm instance
            return count;
        }
    }
 

}

</script>

<style>

</style>