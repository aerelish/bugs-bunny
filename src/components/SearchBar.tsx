import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { LuListFilter } from "react-icons/lu";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu"

function SearchBar() {

  const [checked, setChecked] = useState(false);
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(query);
  }

  return (
    <div className="">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <div className="relative w-full">
          <span className="absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground text-lg">
            <IoSearch/>
          </span>
          <Input 
            type="text" 
            placeholder="Search..." 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="border pl-8 pr-3 py-1 rounded-md"
          />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="ghost" size="icon" className="border radius-lg size-9">
              <LuListFilter />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="mt-1">
            <DropdownMenuLabel className="text-muted-foreground text-sm font-normal">Filter By</DropdownMenuLabel>
            
            <DropdownMenuCheckboxItem
              checked={checked}
              onCheckedChange={setChecked} 
              className="flex justify-between items-center"
            >
              <span>Projects</span>
            </DropdownMenuCheckboxItem>
            
            <DropdownMenuCheckboxItem>Bugs</DropdownMenuCheckboxItem>
            <DropdownMenuSeparator />
            <DropdownMenuLabel className="text-muted-foreground text-sm font-normal">Sort By</DropdownMenuLabel>
            <DropdownMenuCheckboxItem>Name</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem>Activity</DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button className="cursor-pointer">Add New</Button>
      </form>
    </div>
  )
}

export default SearchBar