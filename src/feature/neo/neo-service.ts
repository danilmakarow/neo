import {fetchNeo} from "../../redux/slices/apiSlice";
import {store} from "../../redux/store";


let startData: string;
let currentData: string;
let todayData: string;

let neoElementsArr;


export async function appInit() {
    setupData();
    const data = await getNeoData(currentData)
    // console.log(data)
}

function setupData(): void {
    const today = new Date();
    currentData = todayData = today.toLocaleDateString('en-CA');

    const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    startData = firstDayOfMonth.toLocaleDateString('en-CA');
}

function newDay(): void {
    currentData = getNextDay(currentData)
}


function getNextDay(data: string): string {
    const dataArr = data.split('-');
    dataArr[2]++

    if(dataArr[2] < todayData.slice(-2))
        return startData

    if(dataArr[2].toString().length === 1)
        dataArr[2] = '0' + dataArr[2]

    return dataArr.join('-')
}

export async function getNeoData(date) {
    // Отправьте экшен fetchNeo
    await store.dispatch(fetchNeo(date));

    // Получите обновленное состояние из Redux store
    const state = store.getState();

    // Получите данные, которые вам нужны
    return state.neo.data
}
