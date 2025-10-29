import { assertEquals } from "jsr:@std/assert";
import { factorial } from "./recursion.ts";

Deno.test("basic addition test", () => {
  const result = factorial(4);

  assertEquals(result, 24);
});
