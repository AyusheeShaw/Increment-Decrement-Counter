const plus = document.querySelector("#plus");
const sub = document.querySelector("#sub");
const reset = document.querySelector("#reset");
const count = document.querySelector(".count");
let temp = 0;
plus.addEventListener("click", (e) => {
    temp++;
    count.innerText = temp;
    // console.log(count);
});
sub.addEventListener("click", (e) => {
    if (temp > 0) temp--;
    count.innerText = temp;
    // console.log(count);
});
reset.addEventListener("click", (e) => {
    temp = 0;
    count.innerText = temp;
    // console.log(count);
});
