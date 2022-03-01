import { motion } from "framer-motion";
import { MenuItem } from "./Items";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const Items = [
  { id: "0", text: "Home", path:"/" },
  { id: "1", text: "About", path:"/about" },
  { id: "2", text: "Projects", path:"/projects" },
  { id: "3", text: "Contact",path:"/contact" }
];

export const Navigation = () => (
  <motion.ul variants={variants}>
    {Items.map((item) => (
      <MenuItem id={item.id} key={item.id} text={item.text} path={item.path}/>
    ))}
  </motion.ul>
);