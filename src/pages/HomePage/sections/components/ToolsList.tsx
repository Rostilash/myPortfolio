import { toolsIUse } from "../../../../utils/tools";

export const ToolsList = () => {
  return (
    <ul className="flex flex-wrap items-center gap-3 sm:gap-5 max-w-2xl">
      {toolsIUse.map((tool) => (
        <li
          className="flex flex-col shrink items-center justify-center w-12 h-12 p-1 sm:w-16 sm:h-16 border border-(--color-text-gray) rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
          key={tool.name}
          title={tool.name}
        >
          <img src={tool.img} alt={tool.name} className="w-full h-full" />
        </li>
      ))}
    </ul>
  );
};
