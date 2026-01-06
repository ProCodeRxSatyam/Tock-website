import { createPortal } from "react-dom";


export default function ProfileMenu({ isOpen, children }) {
  if (!isOpen) return null;

  return createPortal(children, document.body);
}
