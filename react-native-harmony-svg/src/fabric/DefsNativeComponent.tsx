//@ts-ignore
import {register} from 'react-native/Libraries/Renderer/shims/ReactNativeViewConfigRegistry';
//@ts-ignore
import ReactNativeViewAttributes from 'react-native/Libraries/Components/View/ReactNativeViewAttributes';
import {commonPathAttributes} from './attributes';

export default register('RNSVGDefs', () => {
  return {
    uiViewClassName: 'RNSVGDefs',
    bubblingEventTypes: {},
    directEventTypes: {},
    validAttributes: {
      ...ReactNativeViewAttributes.UIView,
      ...commonPathAttributes,
      name: true,
      opacity: true,
      responsible: true,
      display: true,
      pointerEvents: true,
    },
  };
});