let tableDigit = document.querySelector('input')
let num = document.querySelectorAll('.btn.num')
let clear = document.querySelector('.btn.clear')
let ac = document.querySelector('.btn.ac')
let summ = document.querySelector('.btn.summ')
let plusminus = document.querySelector('.btn.plusminus')
let dot = document.querySelector('.btn.dot')
let minus = document.querySelector('.btn.minus')
let multi = document.querySelector('.btn.multi')
let division = document.querySelector('.btn.division')
let equal = document.querySelector('.btn.equal')

let num1 = 0
let num2 = 0
let dotMark = false
tableDigit.value = 0

clear.addEventListener('click', function () {
  tableDigit.value = 0
  dotMark = false
})

num.forEach((btn) => {
  btn.addEventListener('click', function () {
    if (
      (tableDigit.value == 0 || tableDigit.value == num1) &&
      tableDigit.value !== '0.'
    ) {
      tableDigit.value = this.getAttribute('data-num')
    } else {
      if (tableDigit.value.length <= 9) {
        tableDigit.value += this.getAttribute('data-num')
      }
    }
  })
})

//summ
summ.addEventListener('click', function () {
  num1 = parseFloat(tableDigit.value)
  op = '+'
  dotMark = false
})

//minus
minus.addEventListener('click', function () {
  num1 = parseFloat(tableDigit.value)
  op = '-'
  dotMark = false
})

//multi
multi.addEventListener('click', function () {
  num1 = parseFloat(tableDigit.value)
  op = '*'
  dotMark = false
})

//division
division.addEventListener('click', function () {
  num1 = parseFloat(tableDigit.value)
  op = '/'
  dotMark = false
})

//plusminus
plusminus.addEventListener('click', function () {
  tableDigit.value = tableDigit.value * -1
})

//clear second num
ac.addEventListener('click', function () {
  tableDigit.value = 0
})

//dot
dot.addEventListener('click', function () {
  if (!dotMark) {
    tableDigit.value += '.'
    dotMark = true
  } else {
    return
  }
})

//equal
equal.addEventListener('click', function () {
  num2 = parseFloat(tableDigit.value)

  switch (op) {
    case '+':
      result = num1 + num2
      break

    case '-':
      result = num1 - num2
      break

    case '*':
      result = num1 * num2
      break
    case '/':
      result = num1 / num2
      break
  }
  if (tableDigit.value.length <= 9) {
    tableDigit.value = result
  } else {
    tableDigit.value = 'error'
  }
})
