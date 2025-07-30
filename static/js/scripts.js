const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const num3Input = document.getElementById("num3");
const num4Input = document.getElementById("num4");

num1Input.addEventListener("input", () => {

  const basicSalary = parseFloat(num1Input.value);

  if (!isNaN(basicSalary)) {

    const houseLevy = basicSalary * 0.026;
    const shalevy = basicSalary * 0.06;

    num2Input.value = houseLevy.toFixed(2);
    num3Input.value = shalevy.toFixed(2);
    num4Input.value = (basicSalary  - (houseLevy + shalevy)).toFixed(2)

  } else {
    num2Input.value = "";
    num3Input.value = "";
  }



});
