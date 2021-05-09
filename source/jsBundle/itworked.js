// export default () => console.log("Hello, world!");
export default () => {
    const img = document.createElement("img");
    img.setAttribute("src", "/media/happy-dance.gif");
    document.getElementsByTagName("main")[0].append(img);
    const para = document.createElement("p");
    para.append("If you see this then JavaScript bundling has worked!");
    para.setAttribute("class", "copy");
    document.getElementsByTagName("main")[0].append(para);
}
