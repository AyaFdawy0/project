//the parameter passed determines the number of elements displayed from the series.
function *fibonacci(num){
    let n1 = 0, n2 = 1, next;
    yield 1
    for (let i = 1; i <= num; i++) {
       yield next;
        next = n1 + n2;
        n1 = n2;
        n2 = next;
    }
}
 var seq=fibonacci(10);

//the parameter passed determines the max number of the displayed series should not exceed its value
function *fibonacci2(max)
{
    let n1 = 0, n2 = 1
  while(n2<=max)
    {
        yield n2;
        let next=n1 + n2;
        n1 = n2;
        n2 = next;
       
    }
}
var seq2=fibonacci2(10);

