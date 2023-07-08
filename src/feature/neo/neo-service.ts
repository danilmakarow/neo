import {fetchNeo} from "../../redux/slices/apiSlice";
import {store} from "../../redux/store";
import {NEO, Statistics} from "../../shared/interfaces/api.interfaces";
import {updateStatistics} from "../../redux/serviceActions";

let startData: string;
let currentData: string;
let todayData: string;

let neoElementsArr: NEO[] = [];
let neoToDisplay: NEO[] = [];

export function setupData(): void {
    const today = new Date();
     todayData = today.toLocaleDateString('en-CA');

    const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    currentData =startData = firstDayOfMonth.toLocaleDateString('en-CA');
}

export async function onNewDay() {
    const data = await getNeoData(currentData);
    neoElementsArr = data.near_earth_objects[currentData];

    store.dispatch(updateStatistics(calcStatistics(neoElementsArr)));
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
    // Sending fetch action
    await store.dispatch(fetchNeo(date));

    const state = store.getState();

    return state.neo.data
}

function calcStatistics(neo: NEO[]): Statistics {
    const amount = neo.length;
    const hazardous = neo.filter(object => object.is_potentially_hazardous_asteroid).length
    const big = neo.reduce((acc, obj) =>
        acc.estimated_diameter.kilometers.estimated_diameter_max > obj.estimated_diameter.kilometers.estimated_diameter_max ? acc : obj)
    const close = neo.reduce((acc, obj) =>
        acc.close_approach_data[0].miss_distance.kilometers > obj.close_approach_data[0].miss_distance.kilometers  ? acc : obj)
    const fast = neo.reduce((acc, obj) =>
        acc.close_approach_data[0].relative_velocity.kilometers_per_hour > obj.close_approach_data[0].relative_velocity.kilometers_per_hour  ? acc : obj)

    return {
        amount,
        hazardous,
        big: big,
        close: close,
        fast: fast,
        date: currentData,
    }
}
