// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// function steps(n) {
//     for(let num = 1; num <= n; num++){
//         const spaces = n-num;
//         let str = ''
//         for(let hash = 1; hash <= num; hash++){
//             str+='#';
//         }
//         for(let space = 1; space <= spaces; space++){
//             str+=' ';
//         }
//         console.log(str);
//     }
// }

//1) Si la columa es mayor que la fila, imprimimos espacio, sino #
//2) Si la fila es igual n, paramos la recursividad.
//3) Si la columna es igual a n, aumentamos las filas

function steps(n, row = 0, colPrint = '') {
    if(row === n){
        return;
    }

    if(colPrint.length === n){
        console.log(colPrint);
        steps(n, row++, colPrint);
    }

    if(colPrint.length > row){
        colPrint+=' ';
    }else{
        colPrint+='#';
    }
    steps(n, col)
}

module.exports = steps;
