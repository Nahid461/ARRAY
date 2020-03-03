//collection of Different Data Type
let arrayValueType = [12,"Javascript", true];

for (let value of arrayValueType){
    console.log(typeof(value));
    console.log(value);
}



//User Operation
let userModel1 = new userModel();
 userModel1.firstName = "Sharmila";
 userModel1.lastName = "Poojary";

 let userModel2 = new userModel();
 userModel2.firstName = "Mahesh";
 userModel2.lastName = "Naik";

let userModel3 = new userModel();
 userModel3.firstName = "Kishor";
 userModel3.lastName = "Naik";

 let userModelArrayObj = new Array();

 
let userOperationObj = new userOperation(userModelArrayObj);
userOperationObj.addUsers(userModel1);
userOperationObj.addUsers(userModel2);
userOperationObj.addUsers(userModel3);

userOperationObj.getUsers();

let findUserObj = userOperationObj.findUser("Kishor");
console.log(findUserObj);







let setObj =new Set();
setObj.add(1);
setObj.add(2);
setObj.add(3);
setObj.add(4);
setObj.add(4);



setObj
.forEach(element => {
    console.log(element);
});