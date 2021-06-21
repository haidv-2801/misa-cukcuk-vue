import BaseAPI from "../base/BaseAPI"

class EmployeeAPI extends BaseAPI {
    constructor(){
        super();
        this.controler = "http://cukcuk.manhnv.net/v1/Employees";
    }
}

export default new EmployeeAPI();