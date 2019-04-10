<template>
    <div class="container min-h-screen bg-grey-light font-sans ">

    <form class="w-full max-w-xs  mr-5 py-20 absolute pin-t pin-r">
  <div class="flex items-center border-b border-b-2 border-teal py-2">
    <input class="appearance-none bg-transparent border-none w-full text-grey-darker mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Employee's name or Id" aria-label="Full name" v-model="employee_search">
    <button class="flex-no-shrink bg-teal hover:bg-teal-dark border-teal hover:border-teal-dark text-sm border-4 text-white py-1 px-2 rounded" type="button" @click="getEmployee">
      Get Employee
    </button>
    
  </div>
</form>
        <div class="card max-w-full mr-5">
                    
            <div class="flex mb-4">
                <div class="w-1/2 bg-grey h-12">
                  <h1 class="capitalize sm:text-base lg:text-2xl lg:px-10 lg:py-1 sm:text-center sm:py-3">{{getName()}}</h1>
                
                </div>
                <div class="w-1/2 bg-grey h-12">
                   <h1  class="lg:px-20 lg:py-1 sm:text-base sm:px-5 lg:text-2xl sm:text-center sm:py-3">{{employee.eid}}</h1>
                </div>
            </div>

             <div class="flex mb-4">
                <div class="w-1/2 bg-grey h-12">
                
                

              <ul class="list-reset w-full border-r border-r-2 border-teal">
              <li class="bg-grey border-b border-b-2 border-teal p-1 pl-5 text-center text-grey-darker font-bold">Employee Profile</li>

              <li class="bg-blue-lightest border-b border-b-2 border-teal p-1 pl-2"> <img class="rounded lg:ml-10" width="180px" v-bind:src="employee.profile_img"/></li>
             
              
              <li class="bg-blue-lightest border-b border-b-2 border-teal p-1 pl-2">A.K.A <span class="text-sm pl-5  capitalize lg:float-right sm:float-none">{{employee.alias}}</span></li>
               
              <li class="bg-blue-lightest border-b border-b-2 border-teal p-1 pl-2">Sex<span class="text-sm pl-5 lg:float-right sm:float-none capitalize">{{employee.sex}}</span></li>
               <li class="bg-blue-lightest border-b border-b-2 border-teal p-1 pl-2">DOB <span class="text-sm pl-5 lg:float-right sm:float-none" >{{new Date(employee.dob).toLocaleString()}}</span></li>
               <li class="bg-blue-lightest border-b border-b-2 border-teal p-1 pl-2">Age <span class="text-sm pl-5 lg:float-right sm:float-none" >{{getEmployeeAge()}}</span></li>
              <li class="bg-grey border-b border-b-2 border-teal p-1 pl-5 text-center text-grey-darker font-bold">Occupation/ Skills</li>
            <li class="bg-blue-lightest border-b border-b-2 border-teal  p-1 pl-2">Occupation <span class="text-sm pl-5 capitalize lg:float-right sm:float-none" >{{employee.occupation}}</span></li>
             <li class="bg-blue-lightest border-b border-b-2 border-teal  p-1 pl-2">Level <span class="text-sm pl-5 capitalize lg:float-right sm:float-none" >{{employee.skilllevel}}</span></li>
             <li class="bg-blue-lightest border-b border-b-2 border-teal  p-1 pl-2">Other <span class="text-sm pl-5 capitalize lg:float-right sm:float-none" >{{employee.other}}</span></li>
             
               <li class="bg-grey border-b border-b-2 border-teal p-1 pl-5 text-center text-grey-darker font-bold">Location</li>
             <li class="bg-blue-lightest border-b border-b-2 border-teal p-1 pl-2">Address <span class="text-sm pl-5 lg:float-right sm:float-none" >{{employee.address}}</span></li>

             <li class="bg-grey border-b border-b-2 border-teal p-1 pl-5 text-center text-grey-darker font-bold">Employee Contacts</li>
              <li class="bg-blue-lightest border-b border-b-2 border-teal p-1 pl-2">Tel. <span class="text-sm pl-5 lg:float-right sm:float-none" >{{employee.tel}}</span></li>
              <li class="bg-blue-lightest border-b border-b-2 border-teal p-1 pl-2">Email <span class="text-sm pl-5 lg:float-right sm:float-none" >{{employee.email}}</span></li>
              <li class="bg-grey border-b border-b-2 border-teal p-1 pl-5 text-center text-grey-darker font-bold">Employee Banking</li>
               <li class="bg-blue-lightest border-b border-b-2 border-teal p-1 pl-2">Bank <span class="text-sm pl-5 lg:float-right sm:float-none" >{{employee.bankname}}</span></li>
                <li class="bg-blue-lightest border-b border-b-2 border-teal p-1 pl-2">Account <span class="text-sm pl-5 lg:float-right sm:float-none" >{{employee.account}}</span></li>
                  <li class="bg-blue-lightest border-b border-b-2 border-teal p-1 pl-2">Branch <span class="text-sm pl-5 lg:float-right sm:float-none capitalize" >{{employee.branch}}</span></li>
                
            </ul>

                </div>
                  <div class="w-1/2 bg-grey h-12 mb-5 overflow-y:auto ">
              
                <ul class="list-reset">
                  <li class="bg-grey border-b border-b-2 border-teal p-1 pl-5 text-center text-grey-darker font-bold">Gov/ Legal</li>
                   <li class="bg-blue-lightest border-b border-b-2 border-teal p-1 pl-2">Government ID <span class="text-sm pl-5 lg:float-right sm:float-none" >{{employee.govid}}</span></li>
                    <li class="bg-blue-lightest border-b border-b-2 border-teal p-1 pl-2">NIS<span class="text-sm pl-5 lg:float-right sm:float-none" >{{employee.nis}}</span></li>
                     <li class="bg-blue-lightest border-b border-b-2 border-teal p-1 pl-2">TRN<span class="text-sm pl-5 lg:float-right sm:float-none" >{{employee.trn}}</span></li>
                     <li class="bg-grey border-b border-b-2 border-teal p-1 pl-5 text-center text-grey-darker font-bold">Employee Welfare</li>
                      <li class="bg-blue-lightest border-b border-b-2 border-teal p-1 pl-2">Union<span class="text-sm pl-5 lg:float-right sm:float-none" >{{employee.union}}</span></li>
                       <li class="bg-blue-lightest border-b border-b-2 border-teal p-1 pl-2">Pension Scheme <span class="text-sm pl-5 lg:float-right sm:float-none" >{{employee.pension}}</span></li>

                        <li class="bg-grey border-b border-b-2 border-teal p-1 pl-5 text-center text-grey-darker font-bold">Employee Siblings</li>

                       
                        <li class="bg-blue-lightest border-b border-b-2 border-teal p-1 pl-2">Kin <span class="text-sm pl-5 capitalize lg:float-right sm:float-none" >{{employee.kinname}}</span></li>
                   <li class="bg-blue-lightest border-b border-b-2 border-teal p-1 pl-2">Contact <span class="text-sm pl-5 lg:float-right sm:float-none" >{{employee.kinmobile}}</span></li>
                    <li class="bg-blue-lightest border-b border-b-2 border-teal p-1 pl-2"> Email <span class="text-sm pl-5 lg:float-right sm:float-none" >{{employee.kinemail}}</span></li>
                      <li class="bg-blue-lightest border-b border-b-2 border-teal p-1 pl-2"> Relation <span class="text-sm pl-5 lg:float-right sm:float-none capitalize" >{{employee.relation}}</span></li>
                       <li class="bg-grey border-b border-b-2 border-teal p-1 pl-5 text-center text-grey-darker font-bold">Tasks </li>
                       

                </ul>
                  
                     
                <ul class="list-reset" v-for="task in employee.tasks" :key="task.tid">
                   <li class="bg-blue-lightest border-b border-b-2 border-teal p-1 pl-2">{{task.tid}}<span class="text-sm pl-5 lg:float-right sm:float-none" >{{task.title}}</span></li>

                </ul>
                  </div>
             </div>
           

        </div>

    </div>
</template>


<script>
import axios from 'axios';
import store from '../../../gridsome.server.js'



export default {
    name: 'EmployeeProfile',
    
    data () {
        return {
        name: 'Ian Moncrieffe',
        user:'',
        userId:'',
        employeeModal: false,
        employees: [],
        employee_search: '',
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
           
    
  },
  methods: {
      getName(){
          return this.employee.firstname + ' ' + this.employee.lastname;
      },
      async getEmployee(){
        try {

          const response = await axios.get('http://192.168.0.17:15000/api/employee/' + this.employee_search);
          this.employee = response.data;
          const eimgUrl = `http://192.168.0.17:15000/static/images/profile/${this.employee.eid}.png`
          this.employee.profile_img = eimgUrl;
         

        } catch (error) {
          console.error(error);
        }
      },
      getEmployeeAge() {
       
        var bdate = new Date(this.employee.dob);
        var date_diff = Date.now() - bdate;
        var age_dt = new Date(date_diff)

        return Math.abs(age_dt.getUTCFullYear() - 1970);
        
      }
      
  },
mounted(){
 
 
    
  }
}
</script>

<style>

</style>
