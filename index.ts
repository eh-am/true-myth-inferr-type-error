import Result from "true-myth/result";

function mightSucceed(doesSucceed: boolean): Result<number, string> {
  return doesSucceed ? Result.ok(42) : Result.err("something went wrong!");
}

const a = mightSucceed(false);
a.value; // should've errored
