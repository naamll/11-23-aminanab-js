// Тот самый массив
const developers = [
    { name: 'John', surname: 'Doe', age: 20, talk: () => { console.log('Hello world!') } },
    { name: 'Василий', surname: 'Иванов', age: 21 },
    { name: 'Екатерина', surname: 'Демидова', age: 21 },
    { name: 'Пётр', surname: 'Шереметьев', age: 19 },
  ];
  
  const newDeveloper = {
    name: prompt('HR: Как Вас зовут?'),
    surname: prompt('HR: Какая у Вас фамилия?'),
    age: prompt('HR: Сколько Вам лет?'),
  };
  
  let exp;
  // Проверка на то, что мы вводим именно число
  while (!Number.isInteger(parseInt(exp))) {
    exp = prompt('HR: Сколько лет опыта в it?');
  }
  
  if (exp < 3) {
    alert('HR: Прости, но у тебя слишком мало опыта :(');
  } else {
    alert("Lead: Добро пожаловать в команду!");
    alert("Lead: Поприветствуйте нового коллегу!");
  
    // Поздравляем каждого разработчика
    developers.map(dev => {
      alert(`${dev.name}: Привет!`);
    });
  
    // Добавляем объект newDeveloper в массив developers
    developers.push(newDeveloper);
  }
  
  console.log(developers);
  