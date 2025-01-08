/**
 * Q: 배열 reduce - 객체 목록 통계
 *
 * - `calculateStatistics` 함수를 작성하세요.
 *   1. users 배열이 [{ age: 10 }, { age: 30 }, ...] 형태라고 가정
 *   2. 평균 나이와 최대 나이를 계산 후 { averageAge, maxAge } 반환
 *   3. reduce를 사용
 *
 * @param {{age:number}[]} users
 * @returns {{ averageAge: number, maxAge: number }}
 */

// TODO: calculateStatistics 함수를 작성하세요.
function calculateStatistics(users) {
  // 빈 배열이 들어왔을 떄 처리리
  if(users.length === 0){
    return {averageAge: 0, maxAge: 0};
  }
  // TODO
  const data = users.reduce((acc, person) => {
    acc.totalAge += person.age;
    acc.maxAge = Math.max(acc.maxAge, person.age);
    return acc;
  }, { totalAge: 0, maxAge: -Infinity });
  
  const averageAge = data.totalAge / users.length;
  const maxAge = data.maxAge;
  return {averageAge, maxAge};
}

// export를 수정하지 마세요.
export { calculateStatistics };
