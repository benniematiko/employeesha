// const num1Input = document.getElementById("num1");
// const num2Input = document.getElementById("num2");
// const num3Input = document.getElementById("num3");
// const num4Input = document.getElementById("num4");

// num1Input.addEventListener("input", () => {

//   const basicSalary = parseFloat(num1Input.value);

//   if (!isNaN(basicSalary)) {

//     const houseLevy = basicSalary * 0.026;
//     const shalevy = basicSalary * 0.06;

//     num2Input.value = houseLevy.toFixed(2);
//     num3Input.value = shalevy.toFixed(2);
//     num4Input.value = (basicSalary  - (houseLevy + shalevy)).toFixed(2)

//   } else {
//     num2Input.value = "";
//     num3Input.value = "";
//   }



// });

const inputs = {
  basic: document.getElementById("num1"),
  houseLevy: document.getElementById("num2"),
  shaLevy: document.getElementById("num3"),
  netSalary: document.getElementById("num4"),
};

inputs.basic.addEventListener("input", () => {
  const salary = parseFloat(inputs.basic.value);

  if (isNaN(salary)) {
    inputs.houseLevy.value = "";
    inputs.shaLevy.value = "";
    inputs.netSalary.value = "";
    return;
  }

  const houseLevy = salary * 0.026;
  const shaLevy = salary * 0.06;
  const net = salary - houseLevy - shaLevy;

  inputs.houseLevy.value = houseLevy.toFixed(2);
  inputs.shaLevy.value = shaLevy.toFixed(2);
  inputs.netSalary.value = net.toFixed(2);
});

const clearBtn = document.getElementById("clearBtn");

clearBtn.addEventListener("click", () => {
  inputs.basic.value = "";
  inputs.houseLevy.value = "";
  inputs.shaLevy.value = "";
  inputs.netSalary.value = "";
});


