// createElement関数を作成する。

function createElement(type, props, ...children){
    return{
        type,
        props: {
            ...props,
            children,
        },
    }
}

console.log(createElement("type", {title: "props", attr: "attr"}, "child1", "child2"));