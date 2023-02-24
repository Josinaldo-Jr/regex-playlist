// validation script here
const inputs = document.querySelectorAll('input');

const patterns = {
    username:/^\w{5,12}$/,
    telephone:/^\d{11}$/,
    password:/^[\w@-]{8,20}$/,
    slug:/^[a-z\d-]{8,20}$/,
    email:/^([a-z\d\-\.\_]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
};



// validation function
function validate(field, regex){
    if(regex.test(field.value)){
        field.className = 'valid';
    }else{
        field.className = 'invalid';
    }
}

inputs.forEach((input)=>{
    input.addEventListener('keyup', (e)=>{

        validate(e.target, patterns[e.target.attributes.name.value])
    });
});
