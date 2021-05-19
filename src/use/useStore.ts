import { useStore as VuexStore } from "vuex";
import { Store } from "@/store";

export default function useStore(): Store {
  return VuexStore() as Store;
}
