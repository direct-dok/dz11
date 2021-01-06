const personGenerator = {
    generateButton: document.querySelector('.generate-button'),
    clearButton: document.querySelector('.clear-button'),
    clearField: document.querySelectorAll('.clear'),
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 15, 
        "list": {
            "id_1": "Ольга",
            "id_2": "Людмила",
            "id_3": "Вероника",
            "id_4": "Татьяна",
            "id_5": "Надежда",
            "id_6": "Светлана",
            "id_7": "Анна",
            "id_8": "Валентина",
            "id_9": "Юлия",
            "id_10": "Алина",
            "id_11": "Оксана",
            "id_12": "Снежана",
            "id_13": "Галина",
            "id_14": "Полина",
            "id_15": "Лидия"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    patronymicJson: `{
        "count": 20,
        "list": {     
            "id_1": "Александров",
            "id_2": "Максимов",
            "id_3": "Иванов",
            "id_4": "Артемов",
            "id_5": "Дмитриев",
            "id_6": "Никитов",
            "id_7": "Михайлов",
            "id_8": "Данилов",
            "id_9": "Егоров",
            "id_10": "Андреев",
            "id_11": "Степанов",
            "id_12": "Олегов",
            "id_13": "Тимуров",
            "id_14": "Федоров",
            "id_15": "Антонов",
            "id_16": "Евгеньев",
            "id_17": "Витальев",
            "id_18": "Захаров",
            "id_19": "Назаров",
            "id_20": "Павлов"
        }
    }`,
    
    professionJSON: `{
            "id_1": ["Шахтер", "male"],
            "id_2": ["Медсестра", "female"],
            "id_3": ["Программист", "general"],
            "id_4": ["SMM специалист", "general"],
            "id_5": ["Маркетолог", "general"],
            "id_6": ["Сварщик", "male"],
            "id_7": ["Воспитатель", "female"],
            "id_8": ["Швея", "female"],
            "id_9": ["Кассир", "female"],
            "id_10": ["Токарь", "male"],
            "id_11": ["Водитель", "male"],
            "id_12": ["Хирург", "male"],
            "id_13": ["Слесарь", "male"],
            "id_14": ["Автомеханик", "male"],
            "id_15": ["Лесник", "male"],
            "id_16": ["Архитектор", "male"],
            "id_17": ["WEB Дизайнер", "general"],
            "id_18": ["Кондитер", "general"],
            "id_19": ["Управляющий", "general"],
            "id_20": ["Менеджер", "general"],
            "id_21": ["Оффициант", "general"],
            "id_22": ["Юрист", "general"],
            "id_23": ["Визажист", "female"],
            "id_24": ["Журналист", "general"],
            "id_25": ["Стоматолог", "general"],
            "id_26": ["Кинолог", "general"],
            "id_27": ["Нотариус", "general"],
            "id_28": ["Пилот", "male"],
            "id_29": ["Прокурор", "general"],
            "id_30": ["Психотерапевт", "general"],
            "id_31": ["Санитарка", "female"],
            "id_32": ["Нянечка", "female"]
    }`,
    
    arrNameMonth: [
        "Января",
        "Февраля",
        "Марта",
        "Апреля",
        "Мая",
        "Июня",
        "Июля",
        "Августа",
        "Сентября",
        "Октября",
        "Ноября",
        "Декабря"
    ],

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),
    
    randomGender: function() {
        let round = Math.round(Math.random());
        if(round) {
            return this.GENDER_MALE;
        } else {
            return this.GENDER_FEMALE;
        }
    }, 

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomFirstName: function(gender) {
        if(gender == 'Мужчина') {
            return this.randomValue(this.firstNameMaleJson);
        } else {
            return this.randomValue(this.firstNameFemaleJson);
        }
    },
    
    randomPatronimyc: function(gender) {
        if(gender == 'Мужчина') {
            return `${this.randomValue(this.patronymicJson)}ич`;
        } else {
            return `${this.randomValue(this.patronymicJson)}на`;
        }
    },


     randomSurname: function(gender) {
        if(gender == 'Мужчина') {
            return this.randomValue(this.surnameJson);
        } else {
            return `${this.randomValue(this.surnameJson)}а`;
        }
    },

    randomProfession: function(gender) {
        let json = JSON.parse(this.professionJSON), 
            arr = [];
        for(let key in json) {
            if(gender == 'Мужчина' && json[key][1] != 'female') {
                arr.push(json[key][0]);
            } else if(gender == 'Женщина' && json[key][1] != 'male') {
                arr.push(json[key][0]);
            }
        }
        
        return arr[this.randomIntNumber(arr.length - 1, 0)];
    },
    
    generateDateOfBirth: function() {
        let createTimestamp = Math.floor(new Date() / 1000), 
            randomTimestamp = this.randomIntNumber(1650000000, 650000000),
            dateOfBirth = new Date((createTimestamp - randomTimestamp) * 1000),
            monthNumber = this.arrNameMonth[dateOfBirth.getMonth()], 
            dayMonth = dateOfBirth.getDate();
        if(dayMonth < 10) {
            dayMonth = `0${dayMonth}`;
        }
        return `${dayMonth} ${monthNumber} ${dateOfBirth.getFullYear()}`; // min 650000000 max 1650000000
    },

    generateNameMonth: (num) => {
        let nameMonth;
        return nameMonth;
    }, 

    getPerson: function (gender) {
        //console.log(gender);
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName(this.person.gender);
        this.person.surName = this.randomSurname(this.person.gender);
        this.person.patronym = this.randomPatronimyc(this.person.gender);
        this.person.profession = this.randomProfession(this.person.gender);
        this.person.dateOfBirth = this.generateDateOfBirth();
        return this.person;
    }, 


    clearData: function() {
        this.clearField.forEach(field => {
            field.innerText = '';
        });
    }
};
