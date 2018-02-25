module.exports = function solveEquation(equation) {
  // your implementation
    let a, b, c;
    let answer = [0, 0];
    
    equation = equation.replace(/\s/g, '');

    a = equation.match(/[^\^]\d+/g)[0];
    b = equation.match(/[^\^]\d+/g)[1];
    c = equation.match(/[^\^]\d+/g)[2];

    answer[0] = Math.round(((-1)*b+Math.sqrt(b*b-4*a*c))/(2*a)) ;
    answer[1] = Math.round(((-1)*b-Math.sqrt(b*b-4*a*c))/(2*a)) ;
    return answer.sort((x,y) => x-y);
};
