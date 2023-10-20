const myJson = [{"name":"Priyanka", 
                "age":26, 
                "course":"FSD"},
                {"name":"Dheepikka", 
                "age":23, 
                "course":"Testing"},
                {"name":"Archana", 
                "age":23, 
                "course":"Visual Arts"},
                {"name":"Thiru", 
                "age":28, 
                "course":"Mentor"}];               
 
// for loop                
for(i =0; i< myJson.length;i++){
    console.log(myJson[i].name);
}

// for in
for(let i in myJson){
    console.log(myJson[i].course)
}

//for of
for(let x of myJson){
    console.log(x.age)
} 

// for each

myJson.forEach((ele)=>console.log(ele.name));






