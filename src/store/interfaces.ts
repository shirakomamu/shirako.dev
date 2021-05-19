import {
  GetterTypes as RootGetterTypes,
  ActionTypes as RootActionTypes,
} from "./modules/root/types";
import {
  GetterTypes as GeneralGetterTypes,
  ActionTypes as GeneralActionTypes,
} from "./modules/general/types";

/*********************** General MODULE TYPES  ***********************/

export interface StoreGetters extends RootGetterTypes, GeneralGetterTypes {}

export interface StoreActions extends RootActionTypes, GeneralActionTypes {}
