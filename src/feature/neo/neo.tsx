import Description from "./description/description";
import ElementList from "./element-list/element-list";
import styles from './neo.module.css';
import {onNewDay, setupData} from "./neo-service";
import {useEffect} from "react";

export default function Neo() {
    useEffect(() => {
        setupData();
        onNewDay();
    })
    return (
        <div className={styles.img}>
            <div className={styles.container}>
                <Description />
                <ElementList />
            </div>
        </div>
    );
}
