function userOperation(userModelArray){
    
    //let _userModelArray = [];
    let _userModelArray = userModelArray;

    //Push
    this.addUsers =function(userModel){
          _userModelArray.push(userModel);
    }
}

//ForEach

 this.getUsers = function (){

    for(let _userModelObj of _userModelArray){
        this.console.log(`${_userModelObj.firstName} ${_userModelObj.lastName}`);

    }

    _userModelArray
    .forEach((element) => {
        console.log(`${element.firstName} ${element.lastName}`);
    });

}

//Find
this.findUser = function (strName){
    
    var findUserData = _userModelArray
       .find((element) => element.firstName === strName);
    
       return findUserData;

}

function foreachDemo(arrayObj, funcForeach){

    for(let _value of arrayObj){
        funcForeach(_value);
    }
}

let arrayObj = [1, 2, 3, 4, 5, 6, 7, 8];

foreachDemo(arrayObj,(element) =>{
    if(element % 2 === 0){
        console.log(element);
    }
})

foreachDemo(arrayObj,(element) =>{
    if(element % 2 != 0){
        console.log(element);
    }
})