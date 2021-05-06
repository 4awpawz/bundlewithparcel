// export default () => console.log("Hello, world!");
export default () => {
    const para = document.createElement("p");
    para.append("This text was dynamically added to the page so if you see this paragraph then JavaScript bundling has worked!");
    para.setAttribute("class", "copy");
    document.getElementsByTagName("main")[0].append(para);
}
