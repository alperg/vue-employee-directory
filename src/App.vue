<template>
  <div id="app">
    <Header  @changed="onSearchChanged"/>
    <EmployeeList :employees="employees" :fields="fields" />
  </div>
</template>

<script>
  import Header from './components/Header.vue';
  import EmployeeList from './components/EmployeeList.vue';
  import API from './services/API';
  import * as moment from 'moment';

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
          { key: 'daysPassed', label: 'Days Worked'}
        ],
        employees: [],
        allEmployees: []
      }
    },
    created() {
      this.fetchEmployees();
    },
    methods: {
      fetchEmployees() {
        API.getEmployees().then(data => {
          const newData = data.map(emp => {
            const empStartDate = moment(emp.date, 'M/D/YYYY');
            emp.daysPassed = `${moment().diff(empStartDate, 'days')} days`;
            return emp;
          });
          this.employees = newData;
          this.allEmployees = newData;
        });
      },
      onSearchChanged(searchTerm) {
        if (searchTerm === "") {
          this.fetchEmployees();
        } else {
          const filteredData = this.allEmployees.filter(emp =>
            emp.firstName.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
          this.employees = filteredData;
        }
      }
    },
    name: 'app',
    components: {
      Header,
      EmployeeList
    }
  }
</script>
