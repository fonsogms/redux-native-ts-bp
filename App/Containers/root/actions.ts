import * as RootConstants from './constants';
function openAlert(title, text, buttons) {
  return {
    type: RootConstants.OPEN_ALERT,
    title,
    text,
    buttons,
  };
}
function setDeviceKey(deviceKey: string) {
  return {
    type: RootConstants.SET_DEVICE_KEY,
    deviceKey: deviceKey,
  };
}
export default { openAlert, setDeviceKey };
