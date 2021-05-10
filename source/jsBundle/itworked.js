// export default () => console.log("Hello, world!");
export default () => {
    const img = document.createElement("img");
    img.setAttribute("src", "/media/happy-dance.gif");
    document.getElementsByTagName("main")[0].append(img);
    const para = document.createElement("p");
    para.append("JavaScript bundling worked");
    para.setAttribute("class", "copy");
    const span = document.createElement("span");
    span.append("!");
    span.setAttribute("class", "exclamation");
    para.append(span);
    document.getElementsByTagName("main")[0].append(para);
}
