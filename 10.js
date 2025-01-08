/**
 * Q23. 프로퍼티 별로 그룹화하기
 *
 * - groupBy 함수를 작성하세요.
 * - 객체 배열과 key를 인자로 받아, 해당 key의 값에 따라 객체들을 묶어서 반환합니다.
 * - 반환 형태는 { [keyValue]: Object[] } 형태입니다.
 *
 * 예:
 * const data = [
 *   { name: 'Alice', group: 'A' },
 *   { name: 'Bob', group: 'B' },
 *   { name: 'Charlie', group: 'A' }
 * ];
 * groupBy(data, 'group') =>
 * {
 *   A: [
 *     { name: 'Alice', group: 'A' },
 *     { name: 'Charlie', group: 'A' }
 *   ],
 *   B: [
 *     { name: 'Bob', group: 'B' }
 *   ]
 * }
 *
 * @param {Object[]} arr
 * @param {string} key
 * @returns {Object}
 */

// TODO: groupBy 함수를 작성하세요.

function groupBy(arr, key) {
  // 여기에 코드를 작성하세요.
  const answer = {};

  arr.forEach(obj => {
    const value = obj[key];

    // value가 숫자, undefined일 경우 대비
    const stringValue = String(value);

    if (!answer[stringValue]) {
      answer[stringValue] = []; // 새 배열에 "stringValue"에 해당하는 key가 없으면 생성
    }

    answer[stringValue].push(obj);
  });

  return answer;
}

// export를 수정하지 마세요.
export { groupBy };
