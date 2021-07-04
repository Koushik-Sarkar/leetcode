// google
/** 
*******************

* You have a data structure of employee information, which includes the employee's unique id, their importance value, and their direct subordinates' id.
*
* You are given an array of employees employees where:
* 
* employees[i].id is the ID of the ith employee.
* employees[i].importance is the importance value of the ith employee.
* employees[i].subordinates is a list of the IDs of the subordinates of the ith employee.
* Given an integer id that represents the ID of an employee, return the total importance value of this employee and all their subordinates.

* Input: employees = [[1,5,[2,3]],[2,3,[4]],[3,4,[]],[4,1,[]]], id = 1
* Output: 13

* Constraints:
*
* 1 <= employees.length <= 2000
* 1 <= employees[i].id <= 2000
* All employees[i].id are unique.
* -100 <= employees[i].importance <= 100
* One employee has at most one direct leader and may have several subordinates.
* id is guaranteed to be a valid employee id.
*******************
*/


/**
 * Definition for Employee.
 * class Employee {
 *     id: number
 *     importance: number
 *     subordinates: number
 *     constructor(id: number, importance: number, subordinates: number[]) {
 *         this.id = (id === undefined) ? 0 : id;
 *         this.importance = (importance === undefined) ? 0 : importance;
 *         this.subordinates = (subordinates === undefined) ? [] : subordinates;
 *     }
 * }
 */

interface employeeDetails {
    importance: number,
    subordinates : number[]
}

function getImportance(employees: Employee[], id: number): number {
    const employeeDetailsMap : Map<number, employeeDetails> = new Map();
    let employeeSubordinates: number[];
    let totalImportance = 0;
    employees.forEach((employee) => {
        employeeDetailsMap.set(employee.id, {
                                    importance: employee.importance,
                                    subordinates: employee.subordinates });
    } );
    totalImportance += employeeDetailsMap.get(id).importance;
    employeeSubordinates = employeeDetailsMap.get(id).subordinates;
    let eachSub = 0;
    while(eachSub < employeeSubordinates.length) {
        const subDetails = employeeDetailsMap.get(employeeSubordinates[eachSub]);
        totalImportance += subDetails.importance;
        if(subDetails.subordinates && subDetails.subordinates.length) {
            employeeSubordinates = [...employeeSubordinates, ...subDetails.subordinates]    
        }
        eachSub++;
    }
    return totalImportance;
};
