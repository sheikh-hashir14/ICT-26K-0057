let height = 1.6;
let weight = 45;

function bmiCalculator(a, b){
    let bmi = a / b**2;
    console.log(`BMI: ${bmi}`);
    return bmi;
}

let bmi = bmiCalculator(weight, height);
if(bmi < 18.5){
    console.log(`underweight`);
}
else if(bmi >= 18.5 && bmi <= 24.9){
    console.log(`normal weight`);
}
else if(bmi >= 25 && bmi <= 29.9){
    console.log(`overweight`);
}
else{
    console.log(`obese`);
}