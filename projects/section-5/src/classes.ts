console.log("section 5");

abstract class Department {
  static fiscalYear = 2020;
  // private name: string;
  protected employees: string[] = [];

  constructor(protected readonly id: number, public name: string) {
    // this.name = n;
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  // abstract describe(this: Department) {
  //   console.log(`Department: ${this.id}: ${this.name}`);
  // }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeesInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  describe() {
    console.log("This is the IT Department, we are the number 0 ID");
  }
  constructor(id: number, public admins: string[]) {
    super(id, "IT");
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid report");
    }
    this.addReport(value);
  }

  private constructor(id: number, private reports: string[]) {
    super(id, "ACCOUNTING");
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (AccountingDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment(5, []);
    return this.instance;
  }

  describe() {
    console.log("Accointing Department ID - 2");
  }

  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }

    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

const employee1 = Department.createEmployee("Maxxxx");
console.log(employee1, Department.fiscalYear);

// const accounting = new Department(1, "Accounting");
const it = new ITDepartment(1, ["Max"]);

// const accounting = new AccountingDepartment(2, []);
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();
console.log(accounting);
console.log(accounting2);

accounting.mostRecentReport = "Your report was perfect!";
accounting.addReport("Sorry we found an error");
console.log(accounting.mostRecentReport);

accounting.printReports();

accounting.addEmployee("Max");
accounting.addEmployee("Manu");

console.log(it);
it.describe();
// accounting.printEmployeesInformation();

// accounting.describe();

// const accountingCopy = { name: "s", describe: accounting.describe };

// accountingCopy.describe(); // returns undefined
