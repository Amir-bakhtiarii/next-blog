"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

function Drawer({ open, onClose, children }) {
  const [portalRoot, setPortalRoot] = useState(null);

  useEffect(() => {
    setPortalRoot(document.body);
  }, []);

  if (!portalRoot) return null;

  return createPortal(
    <>
      <div
        className={`fixed inset-0 bg-black/30 backdrop-blur-sm ${
          open ? "block" : "hidden"
        }`}
        onClick={onClose}
      />

      <div
        className={`fixed top-0 right-0 w-[250px] h-full transition-transform ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-secondary-0 h-full overflow-y-auto">
          {children}
        </div>
      </div>
    </>,
    portalRoot
  );
}

export default Drawer;
