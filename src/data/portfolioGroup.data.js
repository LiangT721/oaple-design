import { projects } from "./projects.data";

export const projectGroup1 = projects.filter((project)=>project.category === 1)
export const projectGroup2 = projects.filter((project)=>project.category === 2)


