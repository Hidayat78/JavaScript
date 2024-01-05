// const tinderUser = new Object()   // sinle ton object
const tinderUser = {}     // non ton object
tinderUser.id= "123abc"
tinderUser.name= "Hidayat"
tinderUser.isLoggedIn= false

// console.log(tinderUser);

const reularUser ={
    email:'mdhidihdws@yahoo.com',
    fullName:{
        userFullname:{
            firstName:"Md",
            LastName:"Hidayat"
        }
    }
}
// console.log(reularUser.fullName.userFullname.LastName);
const obj1={
    1:"a",
    2:'b',
}
const obj2={
    3:'A',
    4:'B'
}
const obj4={
    5:'K',
    6:'P'
}
// const obj3 = Object.assign({},obj1,obj2,obj4)
const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3);
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "Js in hindi",
    price: "1999",
    courseInstructor: "hidayat"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hidayat",
//     "coursename": "Js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]