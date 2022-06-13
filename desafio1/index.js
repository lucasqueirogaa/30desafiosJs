const media = function (...nums) {
  const sum = nums.reduce(
    (previusValue, currentValue) => previusValue + currentValue,
    0
  );

  console.log(sum / nums.length);
};

media(10, 9, 6, 8, 9, 1, 5, 7);
media(2, 5, 7, 1, -2);
media(10, 10, 10, 10, 9);
media(25, 75);
