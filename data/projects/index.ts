import catalog from "./catalog";
import adidas from "./adidas";
import upwrite from "./upwrite";
import solartoy from "./solartoy";
import darkbulls from "./darkbulls";

const myProjects = {
  catalog,
  adidas,
  upwrite,
  solartoy,
  darkbulls,
  // future projects...
};

export type ProjectName = keyof typeof myProjects;

export default myProjects;
