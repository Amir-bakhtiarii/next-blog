import Spinner from "@/ui/Spinner";
import React from "react";

function Loading() {
  return (
    <div className="grid items-center justify-center gap-x-4">
        <span className="text-lg text-secondary-500">درحال بارگذاری اطلاعات</span>
      <Spinner />
    </div>
  );
}

export default Loading;
