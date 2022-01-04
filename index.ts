import Maybe from "true-myth/maybe";

let m = Maybe.of("Hello!");

//if (m.isJust) {
//  m.value;
//} else {
//  //  m.value;
//}

if (m.isNothing) {
  //  m.value;
} else {
  m.value;
}
