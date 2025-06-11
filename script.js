let counter = document.getElementById("counter");
let textarea = document.querySelector(".textarea1");
console.log(counter, textarea);
textarea.addEventListener("input", ()=>{
    counter.textContent = `${textarea.value.length}`
    console.log(textarea.value.length);
    if (textarea.value.length == 250) {
        textarea.classList.add("limited")
        counter.style.color="red"
    } else{
        textarea.classList.remove("limited")
        counter.style.color="black"
    }
})

