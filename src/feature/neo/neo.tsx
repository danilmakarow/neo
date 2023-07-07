import Description from "./description/description";
import ElementList from "./element-list/element-list";
import styles from './neo.module.css';
import {containerClasses} from "@mui/material";

export default function Neo() {
    return (
        <div className={styles.img}>
            <div className={styles.container}>
                <Description />
                <ElementList />
            </div>
        </div>
    );
}
