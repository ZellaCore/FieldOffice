<template>
<div class="container w-full max-w-full h-auto overflow-auto bg-grey-light font-sans">
<div class="w-full mx-auto pt-8 pb-8 flex justify-between items-end border-b-2 border-purple">
    <div class="text-2xl text-blue-darker">Employees Index</div>
    <div class="bg-purple h-10 pl-6 pr-6 pt-3 mt-6 rounded-full">
        <nav>
            <g-link class="nav__link no-underline hover:underline text-white font-bold" to="/">Home</g-link> 
            <g-link class="nav__link no-underline hover:underline text-white font-bold" to="/employees">Employees</g-link> 
            <g-link class="nav__link no-underline hover:underline text-white font-bold" to="/about">About us</g-link> 

        </nav>
    
    </div>
    <div>
    
    
    </div>


</div>
<!-- Three columns -->
<div class="flex mb-4">
  <div class="w-1/2 bg-grey-light h-68">
    <EmployeesList class="mt-5 mb-5 ml-5"></EmployeesList>
    
  
  </div>
  <div class="w-1/2 bg-grey-light h-68 ml-5">
    

<EmployeeProfile class="mt-5 mb-20"></EmployeeProfile>
  </div>
 
</div>






<footer class='w-full text-center border-t border-grey p-4 pin-b mt-20'>
            VrstanFO&reg
</footer>
</div>
</template>


<script>
import '../../node_modules/tailwindcss/dist/tailwind.min.css';

import EmployeesList from '~/components/employee/EmployeesList.vue';
import EmployeeProfile from '~/components/employee/EmployeeProfile.vue';


export default {
    name: 'Employee',
    data () {
        return {
        name: 'Ian Moncrieffe',
        user:'',
        userId:'',
        employeeModal: false,
        employees: [],
        employee:{
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
        }
        }
    },
  components:{ 
      EmployeesList,
      EmployeeProfile,
            
    
  },
  methods: {
  },
mounted(){
    
  }
}
</script>
