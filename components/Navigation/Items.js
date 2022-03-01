import { motion } from "framer-motion";
import Link from "next/link";
const variants = {
open: {
y: 0,
opacity: 1,
transition: {
y: { stiffness: 1000, velocity: -100 }
}
},
closed: {
y: 50,
opacity: 0,
transition: {
y: { stiffness: 1000 }
}
}
};

const colors = ["#fef6e4", "#f582ae", "#8bd3dd", "#b8c1ec", "#ff8906"];

export const MenuItem = ({ text , path }) => {
return (
<motion.li variants={variants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
    <Link href={path}>
        <a className="text-placeholder">
            <span className="text">{text}</span>
        </a>
    </Link>
</motion.li>
);
};