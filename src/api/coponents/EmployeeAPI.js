import BaseAPI from "../base/BaseAPI";
import BaseAPIConfig from "../base/BaseAPIConfig";

class EmployeeAPI extends BaseAPI {
  constructor() {
    super();
    this.controler = "/v1/Employees";
  }

  /**
   * Get new employee code
   * DVHAI 21/06/2021
   */
  getNewEmployeecode() {
    let urlFull = this.controler + "/NewEmployeeCode";
    return BaseAPIConfig.get(urlFull);
  }

  /**
   * Get new employee code
   * DVHAI 21/06/2021
   */
  filter(pageSize, pageNumber, employeeFilter) {
    let urlFull =
      this.controler +
      `/employeeFilter?pageSize=${pageSize}&pageNumber=${pageNumber}&employeeFilter=${employeeFilter}`;
    return BaseAPIConfig.get(urlFull);
  }

  /**
   * Get employee by code
   * DVHAI 21/06/2021
   */

  getEmployeeBycode(pageSize, pageNumber, id) {
    let urlFull = `${this.controler}/Filter?pageSize=${pageSize}&pageNumber=${pageNumber}&employeeCode=${id}`;
    return BaseAPIConfig.get(urlFull);
  }
}

export default new EmployeeAPI();
