import * as types from './types';

export function startTrackingEvent(eventId: number) { 
  return {
    type: types.START_TRACKING_EVENT,
    eventId
  }
}

export function stopTrackingEvent(eventId: number) { 
  return {
    type: types.STOP_TRACKING_EVENT,
    eventId
  }
}

export function changeTrackingOrder(eventIds: number[]) { 
  return {
    type: types.CHANGE_TRACKING_ORDER,
    eventIds
  }
}