const rating = document.querySelectorAll("i");
const result = document.getElementById("result");
const resetBtn = document.getElementById("resetBtn");

rating.forEach((star, selectIndex) => { 
    star.addEventListener("click", () => {
        rating.forEach((star, choice) => { 
            if(selectIndex >= choice) { 
                star.classList.add("active");
            } else { 
                star.classList.remove("active");
            }
        });
        result.innerText = "ผลการประเมิน " + (selectIndex + 1) + " /10";
    });

    star.addEventListener("mouseover", () => {
        rating.forEach((star, choice) => {
            if(selectIndex >= choice) {
                star.classList.add("hover");
            } else {
                star.classList.remove("hover");
            }
        });
    });

    star.addEventListener("mouseout", () => {
        rating.forEach((star) => {
            star.classList.remove("hover");
        });
    });
});

resetBtn.addEventListener("click", () => {
    rating.forEach((star) => {
        star.classList.remove("active");
    });
    result.innerText = "ผลการประเมิน";
});
