import "./App.css";
import SideBar, { SideBarItem } from "./components/SideBar";

import {
  LifeBuoy,
  Receipt,
  Boxes,
  Package,
  UserCircle,
  BarChart3,
  LayoutDashboard,
  Settings,
} from "lucide-react";
import { useState } from "react";

function App() {
  const [expanded, setExpanded] = useState(true);

  return (
    <main>
      <SideBar expanded={expanded} setExpanded={setExpanded}>
        <SideBarItem
          icon={<LayoutDashboard size={20} />}
          text='Dashboard'
          alert
        />
        <SideBarItem icon={<BarChart3 size={20} />} text='Statistics' active />
        <SideBarItem icon={<UserCircle size={20} />} text='Users' />
        <SideBarItem icon={<Boxes size={20} />} text='Inventory' />
        <SideBarItem icon={<Package size={20} />} text='Orders' />{" "}
        <SideBarItem icon={<Receipt size={20} />} text='Billings' />
        <SideBarItem icon={<Settings size={20} />} text='Settings' alert />
        <SideBarItem icon={<LifeBuoy size={20} />} text='Help' />
      </SideBar>
    </main>
  );
}

export default App;
