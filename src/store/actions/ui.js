import types from 'store/types/ui';

export const activateLoading = () => ({
  type: types.ACTIVATE_LOADING,
});

export const deactivateLoading = () => ({
  type: types.DEACTIVATE_LOADING,
});
