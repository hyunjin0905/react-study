import ReactDom from "react-dom";

function Modal({ title  , desc}: {title: string, desc: string}) {
    const domNode = document.createElement('modal')
    return ReactDom.createPortal(
        <div>
            <p>{title}</p>
            <p>{desc}</p>
        </div>, domNode
    )
}
export default Modal