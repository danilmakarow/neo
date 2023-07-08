import { createAction } from '@reduxjs/toolkit';
import {NEO, Stats} from "../shared/interfaces/api.interfaces";

// update description
export const updateStatistics = createAction<Stats>('service/updateStatistics');

// update description NEO list to display
export const updateNeoDisplay = createAction<NEO[]>('service/updateNeoDisplay');
