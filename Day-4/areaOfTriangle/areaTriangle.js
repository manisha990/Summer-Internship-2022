function areaTriangle(side1,side2,side3){
    const s = (side1 + side2 + side3)/2;
    const area =  Math.sqrt(s*((s-side1)*(s-side2)*(s-side3))); // sqrt reture the square root of it
    return area;
}

console.log(areaTriangle(5,6,7));