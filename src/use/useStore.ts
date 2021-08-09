import { useStore as VuexStore } from "vuex";
import { Store } from "@/store";

// custom composable for store with types
export default function useStore(): Store {
  return VuexStore() as Store;
}
