import ReactDom from 'react-dom';
 
//alert('popupdom');
const PopupDom = ({ children }) => {
    const el = document.getElementById('popupDom');
    
    return ReactDom.createPortal(children, el);
};
 
export default PopupDom;