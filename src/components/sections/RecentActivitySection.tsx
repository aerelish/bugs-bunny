import { useScreen } from "@/hooks/useScreen";
import SectionLayout from "@/components/layouts/SectionLayout";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

function RecentActivitySection() {

  const { isMobile } = useScreen();

  return (
    <SectionLayout title="recent-activity" label={!isMobile}>
      <Card className="rounded-lg">
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
          <CardAction>Card Action</CardAction>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </SectionLayout>
  )
}

export default RecentActivitySection