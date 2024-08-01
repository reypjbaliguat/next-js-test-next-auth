import { ChildrenType } from "@/core/types/children";

function layout({ children }: ChildrenType) {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      {children}
    </div>
  );
}

export default layout;
