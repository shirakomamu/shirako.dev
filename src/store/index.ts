import { createStore } from "vuex";
import root from "./modules/root";
import {
  StateTypes as RootStateTypes,
  StoreModuleTypes as RootStoreModuleTypes,
} from "./modules/root/types";
import { StoreModuleTypes as GeneralStoreModuleTypes } from "./modules/general/types";

export const store = createStore<RootStateTypes>(root);

export interface MergedState extends RootStateTypes {
  generalModule: GeneralStoreModuleTypes;
}

type StoreModules = {
  root: RootStoreModuleTypes;
  generalModule: GeneralStoreModuleTypes;
};

export type Store = RootStoreModuleTypes<Pick<StoreModules, "root">> &
  GeneralStoreModuleTypes<Pick<StoreModules, "generalModule">>;
