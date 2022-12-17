const myProperty = "foo";
const myObject = {
    [myProperty]: "This is a test"
};

console.log(myObject);

const landVehciles = ['seda', 'truck','van'];
const waterVehicles = ['canoe', 'sailboat','submarine'];

const vehciles = [...landVehciles,...waterVehicles];
const vehciles2 = [landVehciles,waterVehicles];
console.log(vehciles);
console.log(vehciles2);
//... spread operator can combine multiple array

const objectOne = {color:'blue', height:12};
const objectTwo = {material:'ceramic', width:6};
//... can combine two objects
//... if objects has same properties second object being merged will override its properties.
const objectThree = {color:'red', height: 15}
const object1and2 = {...objectOne,...objectTwo};
console.log(object1and2);

const object1and3 = {...objectOne,...objectThree};
console.log(object1and3)