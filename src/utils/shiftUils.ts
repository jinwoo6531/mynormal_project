export const shiftArrayElements = (
  data: number[],
  selected: number[]
): number[] => {
  const result = [...data];

  selected.forEach((item) => {
    const index = result.indexOf(item);

    // index가 0보다 크고 왼쪽 요소가 selected에 포함되지 않은 경우에만 스왑
    if (index > 0 && !selected.includes(result[index - 1])) {
      [result[index - 1], result[index]] = [result[index], result[index - 1]];
    }
  });

  return result;
};
