import { createContext, useContext, useState } from "react";
import { type Project } from '@/lib/types';

type MainContextType = {
  projects: Project[]
  setProjects: React.Dispatch<React.SetStateAction<Project[]>>,
  selectedProject: Project | null,
  setSelectedProject: React.Dispatch<React.SetStateAction<Project | null>>
}

const MainContext = createContext<MainContextType | undefined>(undefined);

export const MainContextProvider = ({ children }: { children: React.ReactNode }) => {

  const [projects, setProjects] = useState<Project[]>([])
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <MainContext.Provider value={{
      projects, setProjects,
      selectedProject, setSelectedProject
    }}>
      {children}
    </MainContext.Provider>
  )
};

export const UseMainContext = () => {
  const context = useContext(MainContext);
  if (!context) throw new Error('UseNameContext must be used within NameContextProvider');
  return context;
}