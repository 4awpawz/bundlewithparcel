export default () => {
    document.getElementsByClassName("something-went-wrong")[0]
        .setAttribute("class","something-went-wrong something-went-wrong--hidden");
    document.getElementsByClassName("it-worked")[0]
        .setAttribute("class", "it-worked it-worked--shown");
};
