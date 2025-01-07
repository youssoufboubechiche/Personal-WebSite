const header = document.querySelector("header")
console.log(header)
window.onscroll =()=> {
    console.log(window.scrollY)
    if (window.scrollY < 500) {
        header.style =  "background-color: transparent;"
    }else{
        header.style = "background-color:rgba(0, 0, 0, 0.53);"
    }
}


const designerButton = document.getElementById("designer");
const developerButton = document.getElementById("developer");

// أضف مستمعي أحداث للنقر
designerButton.onclick = () => {
  swiper.slideTo(0); // انقل إلى الشريحة الأولى (الديزاين سكيلز)
};

developerButton.onclick = () => {
  swiper.slideTo(1); // انقل إلى الشريحة الثانية (الديفلوبر سكيلز)
};