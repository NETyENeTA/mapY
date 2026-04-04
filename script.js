function findMaxDistance(buildings) {
  const offices = [];
  const houses = [];

  // 1. Собираем индексы всех офисов и жилых домов
  buildings.forEach((type, index) => {
    if (type === 2) offices.push(index);
    if (type === 1) houses.push(index);
  });

  let maxMinDistance = 0;

  // 2. Для каждого дома ищем расстояние до ближайшего офиса
  houses.forEach((houseIndex) => {
    let minDistanceToOffice = Infinity;

    offices.forEach((officeIndex) => {
      const distance = Math.abs(houseIndex - officeIndex);
      if (distance < minDistanceToOffice) {
        minDistanceToOffice = distance;
      }
    });

    // 3. Обновляем максимальное расстояние среди всех домов
    if (minDistanceToOffice > maxMinDistance) {
      maxMinDistance = minDistanceToOffice;
    }
  });

  return maxMinDistance;
}

console.log(
  findMaxDistance([2, 0, 1, 1, 0, 1, 0, 2, 1, 2]),
  findMaxDistance([1, 0, 0, 0, 2, 0, 0, 0, 0, 1]),
  findMaxDistance([2, 1, 1, 1, 1, 1, 1, 1, 1, 2]),
  findMaxDistance([1, 2, 0, 1, 0, 0, 2, 1, 0, 1]),
  findMaxDistance([2, 0, 0, 0, 1, 0, 0, 0, 0, 0]),
  findMaxDistance([0, 0, 1, 0, 2, 0, 1, 0, 0, 2]),
);

console.log(3, 5, 4, 3, 4, 2);

// Тест 1
// const buildings = [2, 0, 1, 1, 0, 1, 0, 2, 1, 2];
// Вывод: 3

// Тест 2
// const buildings = [1, 0, 0, 0, 2, 0, 0, 0, 0, 1];
// Вывод: 5

// Тест 3
// const buildings = [2, 1, 1, 1, 1, 1, 1, 1, 1, 2];
// Вывод: 4

// Тест 4
// const buildings = [1, 2, 0, 1, 0, 0, 2, 1, 0, 1];
// Вывод: 3

// Тест 5
// const buildings = [2, 0, 0, 0, 1, 0, 0, 0, 0, 0];
// Вывод: 4

// Тест 6
// const buildings = [0, 0, 1, 0, 2, 0, 1, 0, 0, 2];
// Вывод: 2
