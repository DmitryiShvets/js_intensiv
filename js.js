function myFirstApp(name, age) {

    alert("Привет, меня зовут " + name + " и это моя первая программ на js");

    function showSkils() {
        let skills = ["html","css","php"];
        for (let index = 0; index < skills.length; index++) {
            document.write("Я владею: " + skills[index] + "<br>");
        }
    }
    function checkAge() {
        if (age >= 18) {
            alert("У вас есть все шансы стать вэб разработчиком");
        } else {
            alert("Еше рано");
        }
    }
    function calcPow(num) {
        console.log(num*num);
    }
    showSkils();
    checkAge();
    calcPow(4);   
}
myFirstApp("Dmitryi",18);