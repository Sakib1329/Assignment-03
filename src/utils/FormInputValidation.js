export function FormInputValidation(desc,value){
  const errors = [];
  if (desc.length === 0) {
    errors.push("Please enter the description");
  }
  if (value.length === 0) {
    errors.push("Please enter the value");
  }
  if (errors.length > 0) {
    alert(errors);
    return false;
  }else{
    return true;
  }
}