// Задания по теме "Генераторы и Итераторы"

// Задача 20
let object = {'key1': 'value1', 'key2': 'value2', 'key3': 'value3', 'key4': 'value4',
	// Создание итератора, чтобы объект стал итерируемым
	*[Symbol.iterator](){
		// перебор ключей объекта
		for (let key in this){
		// возвращение итератором значения объекта по ключу
		yield this[key];	
		}
	}
};

// Вывод значений объекта с использованием оператора spread
console.log(...object); 