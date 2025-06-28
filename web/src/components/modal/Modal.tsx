import { useState } from 'react';
import './Modal.scss';

export default function Modal({ children }: { children: React.ReactNode }) {
  const [isEnabled, setIsEnable] = useState(false);

  return (
    (isEnabled) ?
    <div className="modal">
      <div className="modal-overlay"></div>
      <div className="modal-container">
        {/* <button className="modal-close" onClick={() => window.history.back()}></button> */}
        <div className="modal-content">
          {children}
        </div>
      </div>
    </div>
    : null
  );
}