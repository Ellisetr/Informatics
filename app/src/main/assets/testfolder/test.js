function createTable() {
   let resTable;
   try {
      let a       = document.getElementById("inputA").value;
      let b       = document.getElementById("inputB").value;
      let c       = document.getElementById("inputC").value;
      let xStart  = document.getElementById("inputXStart").value;
      let xEnd    = document.getElementById("inputXEnd").value;
      let Step    = document.getElementById("inputStep").value;

      checkValue(a, b, c, xStart, xEnd, Step);

      resTable = "a\tb\tc\tx\ty\n";

      for (let i = parseFloat(xStart); i <= parseFloat(xEnd); i += parseFloat(Step)) {
         resTable = resTable.concat(`${a}\t${b}\t${c}\t${i.toFixed(2)}\t`);
         resTable = resTable.concat(calculate(a, b, c, i) + '\n')
      }
      document.getElementById("resArea").value = resTable

   } catch (e) {

      document.getElementById("resArea").value = "";
      alert("Вы ввели недопустимое значение")

   }
}

function checkValue(a, b, c, xStart, xEnd, Step) {
   if (isNumber(xStart) && isNumber(xEnd) && isNumber(Step) && isNumber(a) && isNumber(b) && isNumber(c)) {
      xStart = parseFloat(xStart);
      xEnd = parseFloat(xEnd);
      Step = parseFloat(Step);
      b = parseFloat(b);
   }else throw new Error();

   if ( (xStart > xEnd) || (Step <= 0) || ( (xEnd-xStart) < Step) ) throw new Error();

   for (let x = xStart; x <= xEnd; x += Step)
      if (((Math.pow(x, 2) * a + x * b) == 0) || ((a + c * x) < 0) || (x <=0)) throw new Error()
}

function calculate( a, b, c, x ){
    console.log(a,b,c,x)
    let d = (Math.sqrt((a + c * x))+Math.log(x))/(Math.abs((Math.pow(x, 2) * a + x * b))).toFixed(2)
   return  d.toFixed(2)
}

function isNumber(n) {
   return !isNaN(parseFloat(n)) && !isNaN(n - 0)
}