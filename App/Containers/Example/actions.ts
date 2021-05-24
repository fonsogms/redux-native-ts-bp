import { EXAMPLE_CHANGE_NUMBER } from './constants';

export function exampleChangeNumber(number) {
  return {
    type: EXAMPLE_CHANGE_NUMBER,
    number: number,
  };
}
