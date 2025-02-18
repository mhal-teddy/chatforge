import NewChat from "./NewChat";

const Sidebar = () => {
  return (
    <div className="hidden md:flex flex-col h-screen relative p-2.5">
      <NewChat />
    </div>
  );
};

export default Sidebar;