function f(x) {
  return arguments.length ? 1 : 0;
}

f(undefined); // 1

f(); // 0