export default function createIteratorObject(report) {
  const employeesIterator = {
    departments: Object.keys(report.allEmployees),
    currentDepartmentIndex: 0,
    currentEmployeeIndex: 0,

    [Symbol.iterator]() {
      return this;
    },

    next() {
      const currentDepartment = this.departments[this.currentDepartmentIndex];
      const currentEmployees = report.allEmployees[currentDepartment];

      if (this.currentEmployeeIndex >= currentEmployees.length) {
        this.currentEmployeeIndex = 0;
        this.currentDepartmentIndex++;
      }

      if (this.currentDepartmentIndex >= this.departments.length) {
        return { done: true };
      }

      const employee = currentEmployees[this.currentEmployeeIndex];
      this.currentEmployeeIndex++;
      
      return { value: employee, done: false };
    },
  };

  return employeesIterator;
}

