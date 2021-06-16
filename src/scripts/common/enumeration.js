//các eum dùng chung
var Enumeration = Enumeration || {};

//Các mode formdetail
Enumeration.FormMode = {
    Add: 1,
    Edit: 2,
    Delete: 3,
};

//Giới tính
Enumeration.Gender = {
    Female: 0, //Nữ
    Male: 1,    //Nam
    Other: 2,   //Khác
};

//Tinh trang
Enumeration.WorkStatus = {
    Active: 0, //Dang lam viec
    Intern: 1,    //Dang thu viec
    Retired: 2,   //Nghi viec
};


//Giới tính
Enumeration.Keyboard = {
    Enter: 13,
    Esc: 27,
    ArrawUp: 38,
    ArrawDown: 40
};

export default Enumeration

