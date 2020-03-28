export default {
  getEmployees: function() {
    return fetch('https://alper.dev/employees')
      .then((response) => response.json())
  }
};
