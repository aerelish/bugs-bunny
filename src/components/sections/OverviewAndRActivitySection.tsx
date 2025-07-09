import clsx from "clsx"
import { useScreen } from "@/hooks/useScreen"
import OverviewSection from "@/components/sections/OverviewSection"
import RecentActivitySection from "@/components/sections/RecentActivitySection"

import { Card } from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from "@/components/ui/tabs"


function OverviewAndRActivitySection() {

  const { isMobile } = useScreen();

  return (
    <>
      {isMobile ? (
        <Card className="mt-4 p-2">
          <Tabs defaultValue="recents" className="w-full">
            <TabsList className="w-full">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="recents">Recents</TabsTrigger>
            </TabsList>
            <TabsContent value="overview">
              <OverviewSection />
            </TabsContent>
            <TabsContent value="recents">
              <RecentActivitySection />
            </TabsContent>
          </Tabs>
        </Card>
      ) : (
        <div className={clsx("flex flex-col")}>
          <OverviewSection />
          <RecentActivitySection />
        </div>
      )}
    </>
  )
}

export default OverviewAndRActivitySection