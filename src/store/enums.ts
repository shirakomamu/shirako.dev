import {
  MutationEnums as RootMutationEnums,
  ActionEnums as RootActionEnums,
} from "./modules/root/enums";
import {
  MutationEnums as GeneralMutationEnums,
  ActionEnums as GeneralActionEnums,
} from "./modules/general/enums";

export const AllMutationEnums = {
  ...RootMutationEnums,
  ...GeneralMutationEnums,
};

export const AllActionEnums = {
  ...RootActionEnums,
  ...GeneralActionEnums,
};
