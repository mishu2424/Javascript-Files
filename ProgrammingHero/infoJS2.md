Primitive Vs Non-Primitive type data type
```
Primitive type data types are -> String, Integer, Boolean.
Non-primitive type data types-> Array, Object.
Note-> In case of non-primitive type data types, it holds the reference of Object, meaning when you refer to an object to an another object, whatever changes you make on any of the object, will change the value for both Object.
Example->
const x={
    name:"Mishu"
}

const y=x;
y.status="Married";
console.log(x,y);

const x=[2, 5, 7, 4];
const y=x;
x.push(3);
console.log(x,y);
```


Different ways to get undefined
```
1.Variable that has not been initialized.
2.Trying to get a returned value from a function that doesn't return anything.
3.Parameter that is not passed will be undefined.
4.When a function returns but returns with nothing, in that case it will return undefined.
Example->
function add(a,b){
    if(a<0||b<0){
        return;
    }
    return a+b;
} 
const result=add(2,-5);
console.log(result); //will receive undefined.

5.Trying to access a property or key in an object but that doesn't exist, will give undefined.
6.Trying to access a value in an index of an array but that doesn't exist, will give undefined.
```