// serviceActions.ts
import { createAction } from '@reduxjs/toolkit';
import {Statistics} from "../shared/interfaces/api.interfaces";

export const updateStatistics = createAction<Statistics>('service/updateStatistics');
