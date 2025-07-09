import { Label } from "@/components/ui/label";

type SectionLayout = {
  children: React.ReactNode,
  title: string,
  label?: boolean
};

function SectionLayout({ children, title, label = true }: SectionLayout) {
  return (
    <div
      id={title}
      className="mt-4"
    >
      {label && (
        <Label
          htmlFor={title}
          className="capitalize pl-1 pb-4"
        >
          {title.replace(/-/g, " ")}
        </Label>
      )}
      {children}
    </div>
  )
}

export default SectionLayout