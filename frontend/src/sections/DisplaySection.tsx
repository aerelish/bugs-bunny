import { useState } from "react";
import cn from "@/utils/cn";
import BugPage from "@/pages/BugPage";
import TaskPage from "@/pages/TaskPage";
import SettingsPage from "@/pages/SettingsPage";

const tabItems = [
  { name: 'Overview', value: 'overview' },
  { name: 'Board', value: 'board' },
  { name: 'Bugs', value: 'bugs' },
  { name: 'Tasks', value: 'tasks' },
  { name: 'Setting', value: 'settings' },
]

const componentMap: Record<string, React.FC> = {
  bugs: BugPage,
  tasks: TaskPage,
  settings: SettingsPage,
};

type DisplaySectionProps = {
  className?: string,
  header: string | undefined,
}

function DisplaySection({
  className,
  header,
}: DisplaySectionProps) {

  const [active, setActive] = useState('overview'); // setting overview as default

  const ActiveComponent = componentMap[active];

  return (
    <>
      {/* Display Section */}
      <div className={className}>
        <h1 className="text-4xl font-semibold p-4 items-center">{header}</h1>
        <div
          role="tablist"
          className="w-full tabs tabs-border border-b border-border-dark pt-1"
        >
          {tabItems.map((tabItem, key) => (
            <a
              role="tab"
              key={key}
              className={cn("tab", active === tabItem.value && "tab-active")}
              onClick={() => setActive(tabItem.value)}
            >
              {tabItem.name}
            </a>
          ))}
        </div>
        {ActiveComponent && <ActiveComponent />}
      </div>
    </>
  )

}

export default DisplaySection