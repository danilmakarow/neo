import Description from "./description/description";
import ElementList from "./element-list/element-list";
import styles from './neo.module.css';
import {appInit} from "./neo-service";

export default function Neo() {
    appInit();
    return (
        <div className={styles.img}>
            <div className={styles.container}>
                <Description />
                <ElementList />
            </div>
        </div>
    );
}
