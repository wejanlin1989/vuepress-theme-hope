import { computed } from "vue";

import { useThemeData } from "@theme-hope/composables/index.js";

import type { ComputedRef } from "vue";
import type { EncryptConfig } from "../../../../shared/index.js";

export const useEncryptData = (): ComputedRef<EncryptConfig> => {
  const themeData = useThemeData();

  return computed(() => themeData.value.encrypt || {});
};
