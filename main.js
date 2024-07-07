/*
202. Happy Number

Write an algorithm to determine if a number n is happy.

A happy number is a number defined by the following process:

    Starting with any positive integer, replace the number by the sum of the squares of its digits.
    Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
    Those numbers for which this process ends in 1 are happy.

Return true if n is a happy number, and false if not.

 

Example 1:

Input: n = 19
Output: true
Explanation:
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1

Example 2:

Input: n = 2
Output: false


Ваша задача - определить, является ли число n счастливым.

Счастливое число - это число, определенное следующим процессом:

1. Начиная с любого положительного целого числа, замените число суммой квадратов его цифр.
2. Повторяйте процесс до тех пор, пока число не станет равным 1 (где оно и останется), или оно не зациклится бесконечно в цикле, который не включает 1.
3. Те числа, для которых этот процесс заканчивается на 1, являются счастливыми.

Верните true, если n является счастливым числом, и false, если нет.

Вот шаги, которые мы будем следовать:

1. Создайте функцию для вычисления суммы квадратов цифр числа.
2. Используйте два указателя, один движется быстрее, а другой медленнее, чтобы проверить, есть ли цикл.
3. Если быстрый указатель встретит 1, верните true.
4. Если быстрый указатель встретит медленный указатель (то есть есть цикл), верните false.

*/

function isHappy(n) {
  // Функция для вычисления суммы квадратов цифр числа
  // Function to calculate the sum of the squares of the digits of a number
  function getSum(num) {
    let sum = 0;
    while (num > 0) {
      let digit = num % 10;
      sum += digit * digit;
      num = Math.floor(num / 10);
    }
    return sum;
  }

  // Используем два указателя, один движется быстрее, а другой медленнее
  // Use two pointers, one moves faster and the other slower
  let slow = n;
  let fast = getSum(n);

  // Проверяем, есть ли цикл
  // Check for a cycle
  while (fast !== 1 && slow !== fast) {
    slow = getSum(slow);
    fast = getSum(getSum(fast));
  }

  // Если быстрый указатель встретит 1, возвращаем true
  // If the fast pointer meets 1, return true
  // Если быстрый указатель встретит медленный указатель (то есть есть цикл), возвращаем false
  // If the fast pointer meets the slow pointer (i.e., there is a cycle), return false
  return fast === 1;
}
