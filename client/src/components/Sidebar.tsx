import { Goal, HouseIcon, RectangleHorizontal } from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="h-[90vh] w-[22%] border-r-2 border-gray-200/60 bg-zinc-100">
      <ul className="text-xl">
        <li className="flex gap-x-2 items-center border-b-2 border-gray-300 h-16 pl-12 hover:bg-zinc-300 cursor-pointer">
          <HouseIcon className="h-5 w-5" />
          Home
        </li>
        <li className="flex gap-x-2 items-center border-b-2 border-gray-300 h-16 pl-12 hover:bg-zinc-300 cursor-pointer">
          <RectangleHorizontal className="h-5 w-5" />
          Cards
        </li>
        <li className="flex gap-x-2 items-center border-b-2 border-gray-300 h-16 pl-12 hover:bg-zinc-300 cursor-pointer">
          <Goal className="h-5 w-5" />
          About us
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
