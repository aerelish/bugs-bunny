import clsx from "clsx"
import { useScreen } from "@/hooks/useScreen"
import SearchBar from "@/components/SearchBar"


type HomeLayoutWrapperProps = {
  leftCol: React.ReactNode,
  rightCol: React.ReactNode
};

function HomeLayout({ leftCol, rightCol }: HomeLayoutWrapperProps) {

  const { isMobile } = useScreen();

  return (
    <>
      <SearchBar />
      <div className={clsx("flex gap-4", isMobile && "flex-col")}>
        <div className="basis-1/3">
          {leftCol}
        </div>
        <div className="basis-2/3">
          {rightCol}
        </div>
      </div>
    </>
  )
}

export default HomeLayout