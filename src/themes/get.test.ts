import "@testing-library/jest-dom";

import { TOKENS } from "../tokens/design_tokens";
import { get } from "./LlamaTheme";

test("Can get button info from TOKENS", () => {
  expect(get(TOKENS, "Buttons.Primary.value")).toBe(null);
});
