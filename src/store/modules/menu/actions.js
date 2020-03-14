export function updateMenu(stateMenu) {
  return {
    type: '@menu/UPDATE_MENU',
    payload: { stateMenu },
  };
}
