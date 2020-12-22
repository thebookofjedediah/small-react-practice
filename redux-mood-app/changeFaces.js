const h1 = document.querySelector("h1");
const angryBtn = document.querySelector("#angry");
const sadBtn = document.querySelector("#sad");
const glassesBtn = document.querySelector("#glasses");

angryBtn.addEventListener("click", function(e){
    store.dispatch({ type: 'ANGRY' })
    h1.innerHTML = store.getState().face;
})

sadBtn.addEventListener("click", function(e){
    store.dispatch({ type: 'SAD' })
    h1.innerHTML = store.getState().face;
})

glassesBtn.addEventListener("click", function(e){
    store.dispatch({ type: 'GLASSES' })
    h1.innerHTML = store.getState().face;
})