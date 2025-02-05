function sum(a: number, b: number): number {
  return a + b;
}

// sum('10', 20); // 만약 이렇게 사용하면 에러가 발생한다.
var result = sum(10, 20); 
result.toLocaleString(); // 사용할 수 있는 메소드가 나온다. vscode intellisense가 도와준다.
