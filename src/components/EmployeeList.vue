<template>
  <div>
    <b-table striped hover :items="employees" :fields="fields">
      <!-- A custom formatted column -->
      <template v-slot:cell(avatar)="data">
        <img :src="data.value">
      </template>
    </b-table>
  </div>
</template>

<script>
  export default {
    name: 'EmployeeList',
    props: {
      employees: {
        type: Array
      },
      fields: Array
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
