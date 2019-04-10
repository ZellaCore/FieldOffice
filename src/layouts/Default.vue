<template>
  <div class="layout">
  
    <header class="header">
      
        <div class="container">

          <nav class="flex items-center justify-between flex-wrap bg-teal p-4">
              <div class="flex items-center flex-no-shrink mr-3">
              <g-link class="nav__link" to="/">         
                <span class="font-semibold text-xl text-white tracking-tight">{{ $static.metaData.siteName }}</span>
                </g-link>
              </div>
              <div class="block lg:hidden">
                <button class="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
                  <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
              </div>
              <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div class="text-sm lg:flex-grow">
                  <g-link class="nav__link text-white" to="/employees">Employees
                  </g-link>
                  <g-link class="nav__link text-white" to="/employee-index">Employee Index
                  </g-link>                  
                  <g-link class="nav__link text-white" to="/about">About
                  </g-link>
                   <g-link class="nav__link text-white" to="/jir">Industrial Rates
                  </g-link>
                  <!--g-link class="nav__link text-white" to="/carouse">Courses</g-link-->
                </div>
                <div >
                
                  <h4 id="user-id" hidden ></h4>
                  <h4 class="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white" >Hi! </h4>
                
                
                    <h4 id="username" class="block mt-4 mr-2 lg:inline-block lg:mt-0 text-white hover:teal-lighter" ></h4>
                
                </div>


                <div>
                  <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal hover:bg-white mt-4 lg:mt-0">Download</a>
                </div>
              </div>
            </nav>
            </div>
          




          
          </header>
          
            <slot/>
        <footer class='w-full text-center border-t border-grey p-4'>
             VrstanFO&reg
        </footer>
        </div>
        
</template>

<script>
//import '../../node_modules/tailwindcss/dist/tailwind.min.css'
</script>

<static-query>


query {
  metaData {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
  bg: grey-lightest;
}

.layout {
  max-width: 100%;
  margin: 0 auto;
  padding-left: 5px;
  padding-right: 5px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  height: 80px;
}

.nav__link {
  margin-left: 5px;
}


</style>
