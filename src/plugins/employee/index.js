// Employees Data Source Plugin
import pouchdb from 'pouchdb';
import axios from 'axios';
import store from '../../../gridsome.server.js'

export default {
    name: 'Employee',
    
    data () {
        return {
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

const state = {
  employees: []
};

const getters = {
  allEmployees: state => state.employees
};

const actions = {
  async fetchTodos({ commit }) {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/todos'
    );

    commit('setTodos', response.data);
  },
  async addTodo({ commit }, title) {
    const response = await axios.post(
      'https://jsonplaceholder.typicode.com/todos',
      { title, completed: false }
    );

    commit('newTodo', response.data);
  },
  async deleteTodo({ commit }, id) {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);

    commit('removeTodo', id);
  },
  async filterTodos({ commit }, e) {
    // Get selected number
    const limit = parseInt(
      e.target.options[e.target.options.selectedIndex].innerText
    );

    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/todos?_limit=${limit}`
    );

    commit('setTodos', response.data);
  },
  async updateTodo({ commit }, updTodo) {
    const response = await axios.put(
      `https://jsonplaceholder.typicode.com/todos/${updTodo.id}`,
      updTodo
    );

    console.log(response.data);

    commit('updateTodo', response.data);
  }
};

const mutations = {
  setTodos: (state, todos) => (state.todos = todos),
  newTodo: (state, todo) => state.todos.unshift(todo),
  removeTodo: (state, id) =>
    (state.todos = state.todos.filter(todo => todo.id !== id)),
  updateTodo: (state, updTodo) => {
    const index = state.todos.findIndex(todo => todo.id === updTodo.id);
    if (index !== -1) {
      state.todos.splice(index, 1, updTodo);
    }
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};





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
module.exports = function (api) {
  api.loadSource(async store => {
    const { data } = await axios.get('http://192.168.0.17:15000/api/employee')

    const contentType = store.addContentType({
      typeName: 'Employee',
      route: '/remote_employee/:eid'
    })
    console.log(data)
    for (const item in data.objects) {
      let path = `/remote_employee/${item.id}`;
      contentType.addNode({
        id: item.id,
        eid: item.eid,
        firstname: item.firstname,
        lastname: item.lastname,
        occupation: item.occupation,
        path
       
        
      })
    }
    
  })
}


