// serviceActions.ts
import { createAction } from '@reduxjs/toolkit';
import {Stats} from "../shared/interfaces/api.interfaces";

export const updateStatistics = createAction<Stats>('service/updateStatistics');
