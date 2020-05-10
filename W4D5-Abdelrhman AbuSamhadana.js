function getPeopleBornIn  (arrayOfObjects , month){
  var result=[];
  for (var i=0;i<arrayOfObjects.length;++i){
    if(arrayOfObjects[i].birthDay.month===month){
    result.push(arrayOfObjects[i].name.first +arrayOfObjects[i].name.last+" "+arrayOfObjects[i].birthDay.month+" "+arrayOfObjects[i].birthDay.day+","+arrayOfObjects[i].birthDay.year)
}}
  return result;
}
