import createReducer from 'app/lib/createReducer';
import * as types from 'app/store/actions/types';

import { ITrackEvents } from 'app/models/reducers/events';
import { IStartTrackEventState, IChangeEventOrder } from 'app/models/actions/event';

const initialState: ITrackEvents = {
  eventIds: [] 
}

export const eventReducer = createReducer(initialState, {
  [types.START_TRACKING_EVENT](state: ITrackEvents, action: IStartTrackEventState) { 
    const indexEvent = state.eventIds.findIndex((row) => row === action.eventId);
    return {
      ...state,
      eventIds: indexEvent > -1 ? state.eventIds : [...state.eventIds, action.eventId]
    }
  },
  [types.STOP_TRACKING_EVENT](state: ITrackEvents, action: IStartTrackEventState) { 
    const indexEvent = state.eventIds.findIndex((row) => row === action.eventId);
    let events = state.eventIds;
    events.splice(indexEvent, 1)
    return {
      ...state,
      eventIds: [...events]
    }
  },
  [types.CHANGE_TRACKING_ORDER](state: ITrackEvents, action: IChangeEventOrder) { 
    return {
      ...state,
      eventIds: action.eventIds
    }
  },
})