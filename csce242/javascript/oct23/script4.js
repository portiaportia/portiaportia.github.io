function Circle(radius){
    this.radius = radius;

    this.getArea = function(){
        return Math.PI * Math.pow(this.radius,2);
    }

    this.getPerimeter = function(){
        return 2 * Math.PI * radius;
    }
}

function showCircleData(){
    let rad = document.getElementById("txt-radius").value;
    let myCircle = new Circle(rad);
    let resultP = document.getElementById("result");
    resultP.innerHTML = "Area: "+ myCircle.getArea() + "<br>" +
                        "Perimeter: " + myCircle.getPerimeter();
}

window.onload = function(){
    let myButton = document.getElementById("btn-display");
    myButton.onclick = showCircleData;


}