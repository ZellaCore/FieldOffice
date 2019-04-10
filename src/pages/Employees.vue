<template>
 <Layout>
 
  <div class="card">
   
   <h2 class="bg-purple mt-2  mb-2 text-white rounded-full px-10 p-3">Vrstan Employees</h2>
    <h6 class="bg-grey p-1">Current User: </h6>
    {{ message }}
    <button @click="onClick">
      Change
    </button>
  
      <div class="flex md:flex-row-reverse flex-wrap">
          <div class="w-full md:w-3/4 bg-grey p-4 text-center text-grey-lighter"> 

            <table class="bg-white text-grey p-5">
              <thead class="bg-teal h-12 text-center text-white">
              <tr>
                      <th>Profile</th>
                      <th>Id.</th>        
                      <th>Name</th>
                      <th>Occupation</th>
                      <th>Address</th>
                      <th>Tel/Mbl.</th>                    
                      <th>                         
                              <svg class="fill-current text-grey-light w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                              </svg>                             
                      </th>
                      <th></th>
              </tr>
              </thead>
              <tbody v-for="employee in employees" :key="employee.eid">
                <div>
                    <tr class="border border-grey text-sm text-grey-dark">                      
                      <td class="p-2"><img class="rounded-full" width="50px" height="50px" v-bind:src="employee.profile_img"/></td>
                      <td>{{ employee.eid }}</td>
                      <td>{{ employee.firstname }} {{ employee.lastname }}</td>
                     
                      <td v-if="employee.occupation=='mason'" class="bg-teal-lightest">{{ employee.occupation }}</td>
                      <td v-else>{{ employee.occupation }}</td>
                     
                      <td>{{ employee.address }}</td>

                      <td v-if="employee.tel">{{ employee.tel }}</td>
                      <td v-else>{{ employee.mobile }}</td> 
                                         
                      <td> <button class="bg-transparent hover:bg-blue text-blue-dark hover:text-white ml-2 mr-2 p-2 rounded">
                        Edit</button>
                    </td>
                    <td> <button class="bg-transparent hover:bg-red text-blue-dark hover:text-white  ml-2 mr-2 p-2 rounded"
                      @click="deleteEmployee">
                      Delete</button>
                  </td>
                </tr>
              </div>
                    
              </tbody>
            </table>           
          </div>

          <div class="w-full md:w-1/4 bg-grey-light p-4 text-center text-grey-darker">
            <link rel="preload" href="<%= BASE_URL %>favicon.ico">           
            <button @click="modalActions()"  class="bg-teal text-white font-bold px-4 py-2 mt-5 ml-5 rounded-full">New employee</button>   
            
            <div class="bg-white shadow w-64 my-2">
            <h6 id="username">Ian</h6> <h6 id="user-id">1</h6>
              <ul class="list-reset">
                <li >
                  <a href="#" class="block p-4 text-grey-darker font-bold border-purple hover:bg-grey-lighter border-r-4">Home</a>
                </li>
                <li >
                  <a href="#" class="block p-4 text-grey-darker font-bold border-grey-lighter hover:border-purple-light hover:bg-grey-lighter border-r-4">About us</a>
                </li>
                <li >
                  <a href="#" class="block p-4 text-grey-darker font-bold border-grey-lighter hover:border-purple-light hover:bg-grey-lighter border-r-4">Services</a>
                </li>
                <li >
                  <a href="#" class="block p-4 text-grey-darker font-bold border-grey-lighter hover:border-purple-light hover:bg-grey-lighter border-r-4">Contact us</a>
                </li>
              </ul>
            </div>

            </div>
      </div>

  <transition name="fade">
      <div v-if="employeeModal" class="bg-smoke absolute pin-t pin-l h-screen w-full flex items-center justify-center">
         
          <div class="bg-white p-4 rounded w-1/2 text-center">
              <h2 class="bg-teal rounded text-white h-10">New Employee</h2>

              <form class="w-full max-w-md">
                <!--.........................Employee Identification......................-->
                  <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-1 mt-5" for="grid-first-name">
                        First Name
                      </label>
                      <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Employee First Name..." v-model="employee.firstname" autocomplete="on">
                      <p class="text-red text-xs italic">Please fill out this field.</p>
                    </div>

                    <div class="w-full md:w-1/2 px-3">
                      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-1 mt-5" for="grid-last-name">
                        Last Name
                      </label>
                      <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey" id="grid-last-name" type="text" placeholder="Employee Last Name..." v-model="employee.lastname" autocomplete="on">
                    </div>
                  </div>
                 
                  <div class="flex flex-wrap -mx-3 mb-6">
                      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-1" for="grid-alias">
                          A.K.A
                        </label>
                        <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-alias" type="text" placeholder="Also Known as..." v-model="employee.alias" autocomplete="on">
                       
                      </div>
  
                      <div class="w-full md:w-1/4 px-3">
                        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-1" for="grid-dob">
                          D.O.B
                        </label>
                        <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey" id="grid-dob" type="date" v-model="employee.dob">
                      </div>
                      <div class="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-1" for="grid-sex">
                          Sex
                        </label>
                        <div class="relative">
                          <select class="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-grey" id="grid-sex">
                            <option>Sex</option>
                            <option>Female</option>
                            <option>Male</option>
                            <option>Other...</option>
                          </select>
                          <div class="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                          </div>                          
                        </div>

                      </div>


                    </div>
                   <!--.........................Employee Location......................-->
                


                  <div class="flex flex-wrap -mx-3 mb-2">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-1" for="grid-address">
                        Address
                      </label>
                      <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey" id="grid-address" type="text" placeholder="Address..." v-model="employee.address">
                    </div>

                    <div class="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-1" for="grid-occupation">
                        Occupation
                      </label>
                      <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey" id="grid-occupation" type="text" placeholder="Occupation..." v-model="employee.occupation">
                      </div>
                      <div class="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-1" for="grid-occupation">
                          Other Skill
                        </label>
                        <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey" id="grid-occupation" type="text" placeholder="Other Skill..." v-model="employee.other">
                        </div>
                    </div>


                  <div class="flex flex-wrap -mx-3 mb-2">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-1" for="grid-email">
                        Email
                      </label>
                      <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey" id="grid-address" type="text" placeholder="Email..." v-model="employee.email">
                    </div>

                    <div class="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-1" for="grid-telephone">
                        Telephone
                      </label>
                      <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey" id="grid-occupation" type="text" placeholder="Telephone..." v-model="employee.tel">
                      </div>
                      <div class="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-1" for="grid-mobile">
                          Mobile
                        </label>
                        <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey" id="grid-mobile" type="text" placeholder="Mobile..." v-model="employee.mobile">
                        </div>
                    </div>
                   
                   

                    <button @click="modalActions()" class="bg-grey text-white font-bold px-4 py-2 mt-5 ml-5 rounded-full">Cancel</button>
                    <button-- @click="createEmployee()" class="bg-teal text-white font-bold px-4 py-2 mt-5 ml-5 rounded-full cursor-pointer">Create employee</button-->

                
                </form>
             
             

          </div>

      </div>
  </transition>
 
      
   
    
  </div>
   </Layout>
</template>

<script>
import '../../node_modules/tailwindcss/dist/tailwind.min.css'
import axios from 'axios';

export default {
  name: 'Employees',
  data () {
    return {
      message: 'Try change me!',
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
      
    'employee-modal':{
      
      template: '<h6>EMPLOYEE MODAL<h6>'
      }
  },
  methods: {
    onClick () {
      this.message = 'Here you go :)'
    },
    setUser(){
        const currentUser = document.getElementById('username').innerText; 
          currentUserId = document.getElementById('user-id').innerText;
          this.user = currentUser;
          this.userId =  currentUserId;

      },
      modalActions(){
          
        if(this.employeeModal == false){
            this.employeeModal = true
        }else{
            this.employeeModal = false
        }
      },
      createEmployee(){
        this.addNewEmployee();
        this.employeeModal = false

      },
      addNewEmployee(){
        
        this.employee.author_id = this.userId;

        this.employees.push(this.employee); 
                 
        console.log(`Employee ${this.employee.firstname} Created!`);
      },
      deleteEmployee(index){
        const employee = this.employees[index];
        this.employees.splice(index, 1);
        
        console.log(`Employee ${employee.firstname} Deleted!`)
      },
      saveNewEmployee(index){
        const employee = this.employees[index];
        console.log(employee);
        
      },
      async getEmployees(){
        try {

          const response = await axios.get('http://192.168.0.17:15000/api/employee');
          const employeesData = response.data.objects;
          const employees = this.employees;
          employeesData.forEach(function(employee) {
            // construct employee image url
            employee.imgs = [];
            const eimgUrl = `http://192.168.0.17:15000/static/images/profile/${employee.eid}.png`
            employee.imgs.push(eimgUrl);
            employee.profile_img = eimgUrl;

            employees.push(employee);
            console.log(employee.profile_img);
          });
          
         
        } catch (error) {
          console.error(error);
        }
      }
        
  },
  mounted(){
    this.getEmployees();
    this.setUser();
  }
}
</script>

<style>

.card {
  padding: 20px;
  background: #FFF;
}
 .bg-smoke {
      background-color: rgba(0,0,0,.4);
  }
  h4 {
      
      color: #a89ba8;
  }
  /* Enter and leave animations can use different */
  /* durations and timing functions.              */
  .fade-enter-active, .fade-leave-active {
      transition: opacity .7s ease;
    }
    .fade-enter, .fade-leave-to
    /* .slide-fade-leave-active below version 2.1.8 */ {
      opacity: 0;
    }
</style>
