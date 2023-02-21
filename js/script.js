"use strict"
//Добрий день! Чи це окей писать все в одному файлі та console ?


//1. З клавіатури вводяться імена двох дітей та кількість у них цукерок. Вивести не екран ім’я тієї дитини, у якої кількість цукерок є більшою,
// або вивести, що кількість однакова.
{
    const firstChildName = 'Timmy',
        secondChildName = 'Ted',
        firstChildCandyAmount = 2,
        secondChildCandyAmount = 1;

    let moreCandyAmount

    if (firstChildCandyAmount > secondChildCandyAmount)
        moreCandyAmount = firstChildName
    else if (secondChildCandyAmount > firstChildCandyAmount)
        moreCandyAmount = secondChildName
    else moreCandyAmount = 'They have an equal amount of candies'

    console.log(moreCandyAmount);
}

//2. З клавіатури вводиться ціна товару і кількість грошей. Якщо грошей не вистачає то відмовляємо у покупці, інакше, якщо ще залишаються гроші,
// то пропонуємо купити лотерею за 4 грн.
{
    const productPrice = 1,
        moneyAmount = 1,
        change = moneyAmount - productPrice;

    if (moneyAmount < productPrice)
        console.log('You can not make a purchase :(')
    else if (change >= 4)
        console.log('We suggest you to buy a lottery ticket for 4 hryvna!')
    else
        console.log('Thank you for your purchase :)')
}

//3. Випадковим чином генерується число від 1 до 5. Спробуйте вгадати число за 2 спроби.
{
    const randomNumber = Math.floor(Math.random() * 5) + 1,
        firstUserNumber = 3;

     let  secondUserNumber;

    if (firstUserNumber === randomNumber)
        console.log(`You did it on the first try! <br> The generated number is ${randomNumber};`)
    else {secondUserNumber = 4;
        if (secondUserNumber === randomNumber)
        console.log(`Your second try was lucky! <br> Generated number is ${randomNumber};`)
    else console.log(`Don't worry! You can try another time <br> Generated number is ${randomNumber};`)}
}

//4. З клавіатури вводиться вік людини. Вивести на екран ким він є (дитиною у садочку, школярем, студентом, працівником, пенсіонером).
{
    const userAge = 3,
        child = 3,
        pupil = 6,
        student = 17,
        worker = 22,
        pensioner = 65

    let status
    if (userAge < child)
        status = 'newborn'
    else if (userAge < pupil)
        status = 'child'
    else if (userAge < student)
        status = 'pupil'
    else if (userAge < worker)
        status = 'student'
    else if (userAge < pensioner)
        status = 'worker'
    else if (userAge > 65)
        status = 'pensioner'
    else status = 'Wrong number. Try again'

    console.log(`You are ${userAge}, so you are ${status}`);
}

//5. З клавіатури вводиться назва категорії водія (А-мотоцикл, В-легковий автомобіль, С-вантажний автомобіль).
// Вивести на екран назву транспортного засобу, яким він може керувати.
{
    const userCategoryDriver = 'c';

    let userStatus

    if (userCategoryDriver === 'A' || userCategoryDriver === 'a')
        userStatus = 'You can drive bike'
    else if (userCategoryDriver === 'B' || userCategoryDriver === 'b')
        userStatus = 'You can drive passenger car'
    else if (userCategoryDriver === 'C' || userCategoryDriver === 'c')
        userStatus = 'You can drive cargo truck'
    else userStatus = 'incorrect category. Try again'

    console.log(userStatus);
}

//6. З клавіатури вводиться номер дня тижня. Вивести на екран назву дня.
{
    const dayNumber = 2;

    let dayName

    switch (dayNumber) {
        case 1:
            dayName = 'Today is Monday'
            break;
        case 2:
            dayName = 'Today is Tuesday'
            break;
        case 3:
            dayName = 'Today is Wednesday'
            break;
        case 4:
            dayName = 'Today is Thursday'
            break;
        case 5:
            dayName = 'Today is Friday'
            break;
        case 6:
            dayName = 'Today is Saturday'
            break;
        case 7:
            dayName = 'Today is Sunday'
            break;
        default:
            dayName = 'incorrect day. Try again'
    }
    console.log(`${dayName}!`)
}

//7. З клавіатури вводиться номер місяця. Вивести до якої пори він відноситься
{
    const monthNumber = 7;

    let seasonOfTheYear

    switch (monthNumber) {
        case 12:
        case 1:
        case 2:
            seasonOfTheYear = 'Now is winter'
            break;
        case 3:
        case 4:
        case 5:
            seasonOfTheYear = 'Now is spring'
            break;
        case 6:
        case 7:
        case 8:
            seasonOfTheYear = 'Now is summer'
            break;
        case 9:
        case 10:
        case 11:
            seasonOfTheYear = 'Now is autumn'
            break;
        default:
            seasonOfTheYear = 'incorrect number. Try again!'
    }
    console.log(seasonOfTheYear);
}


// Andrew's HTML file: Знайти 2 найбільших числа з 4 цілих чисел.
{
    const num1 = 15,
        num2 = 5,
        num3 = 10,
        num4 = 30;
    let max = -Infinity;
    let minMax = -Infinity;

    if (num1 > max)
        max = num1
    if (num2 > max)
        max = num2
    if (num3 > max)
        max = num3
    if (num4 > max)
        max = num4

    if (num1 < max && num1 > max)
        minMax = num1
    if (num2 < max && num2 > minMax)
        minMax = num2
    if (num3 < max && num3 > minMax)
        minMax = num3
    if (num4 < max && num4 > minMax)
        minMax = num4


    console.log(`${max} and ${minMax}`);
}

// Andrew's HTML file: Знайти 2 найменших числа з 4 цілих
{
    const num1 = 15,
        num2 = 7,
        num3 = -3,
        num4 = 6;
    let min = Infinity,
        min2 = Infinity;

    if (num1 < min)
        min = num1
    if (num2 < min)
        min = num2
    if (num3 < min)
        min = num3
    if (num4 < min)
        min = num4

    if (num1 > min && num1 < min2)
        min2 = num1
    if (num2 > min && num2 < min2)
        min2 = num2
    if (num3 > min && num3 < min2)
        min2 = num3
    if (num4 > min && num4 < min2)
        min2 = num4

    console.log(`${min} and ${min2}`)
}

// Andrew's HTML file: Значення які більші за середнє замінити на 0. 5 значень
{
    let num1 = 100,
        num2 = 40,
        num3 = 67,
        num4 = 20,
        num5 = 90;

    const averageNumber = (num1 + num2 + num3 + num4 + num5) / 5;

    if (num1 > averageNumber)
        num1 = 0
    if (num2 > averageNumber)
        num2 = 0
    if (num3 > averageNumber)
        num3 = 0
    if (num4 > averageNumber)
        num4 = 0
    if (num5 > averageNumber)
        num5 = 0

    console.log(`Average number is ${averageNumber}. Numbers are ${num1}, ${num2}, ${num3}, ${num4}, ${num5}`)
}
// Andrew's HTML file: Знайти найбільше серед тих які менші за середні арифметичне. 4 значення
{
    const num1 = 10,
        num2 = 25,
        num3 = 38,
        num4 = 42;
    const averageNumber = (num1 + num2 + num3 + num4) / 4;
    let max = -Infinity;

    if (num1 < averageNumber && num1 > max)
        max = num1
    if (num2 < averageNumber && num2 > max)
        max = num2
    if (num3 < averageNumber && num3 > max)
        max = num3
    if (num4 < averageNumber && num4 > max)
        max = num4


    console.log(`Average number is ${averageNumber}. Win number is ${max}`);
}

// Andrew's HTML file: Знайти найменше серед 2.
{
    const num1 = 1,
        num2 = 2;
    let minNumber

    minNumber = (num2 > num1) ? num1 : num2
    console.log(`Minimal number is ${minNumber}.`);
}

// Andrew's HTML file: Найбільше замінити на 0, якщо одинакові то обидва на 0
{
    let num1 = 1,
        num2 = 2,
        number;
    if(num1>num2)
        num1=0
    else if(num2>num1)
        num2=0
    else if(num2===num1)
        number = 0;

    console.log(num2)
}
{
   let number =3;
   let result
    if(number>1)
        if(number<5)
            result = 'ok'
    console.log(result)
}
