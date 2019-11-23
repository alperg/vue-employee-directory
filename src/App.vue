<template>
  <div id="app">
    <Header />
    <EmployeeList :employees="employees" :fields="fields" />
  </div>
</template>

<script>
  import Header from './components/Header.vue';
  import EmployeeList from './components/EmployeeList.vue';
  import API from './services/API';

  export default {
    data() {
      return {
        fields: [
          { key: 'id', label: '#' },
          { key: 'avatar', label: '', cell: '<img src="">' },
          { key: 'firstName', label: 'First Name' },
          { key: 'lastName', label: 'Last Name' },
          { key: 'email', label: 'Email' },
          { key: 'gender', label: 'Gender' },
          { key: 'department', label: 'Department' },
          { key: 'date', label: 'Start Date' },
        ],
        employees: []
      }
    },
    created() {
      API.getEmployees().then(data => {
        this.employees = data;
      });
    },
    name: 'app',
    components: {
      Header,
      EmployeeList
    }
  }
</script>
