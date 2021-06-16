var employee = employee || {};

employee.column = [
    {
        fieldName: 'EmployeeCode',
        displayName: 'Mã nhân viên',
        dataType: '',
        displayType: ''
    },
    {
        fieldName: 'FullName',
        displayName: 'Tên nhân viên',
        dataType: '',
        displayType: ''
    },
    {
        fieldName: 'Gender',
        displayName: 'Giới tính',
        dataType: 'Enum',
        displayType: 'Gender'
        
    },
    {
        fieldName: 'DateOfBirth',
        displayName: 'Ngày sinh',
        dataType: 'Date',
        displayType: ''
    },
    {
        fieldName: 'PhoneNumber',
        displayName: 'Số điện thoại',
        dataType: 'Number',
        displayType: ''
    },
    {
        fieldName: 'Email',
        displayName: 'Email',
        dataType: '',
        displayType: ''
    },
    {
        fieldName: 'Address',
        displayName: 'Địa chỉ',
        dataType: '',
        displayType: ''
    },
    {
        fieldName: 'IdentityNumber',
        displayName: 'CMND/CCCD',
        dataType: 'Number',
        displayType: ''
    },
    {
      fieldName: 'DepartmentName',
      displayName: 'Phòng ban',
      dataType: '',
      displayType: ''
    },
    {
        fieldName: 'PositionName',
        displayName: 'Vị trí',
        dataType: '',
        displayType: ''
    },
    {
        fieldName: 'Salary',
        displayName: 'Lương',
        dataType: 'Number',
        displayType: 'Money'
    },
    {
        fieldName: 'WorkStatus',
        displayName: 'Tình trạng',
        dataType: 'Enum',
        displayType: 'WorkStatus'
    },
]

employee.data = []

export default employee