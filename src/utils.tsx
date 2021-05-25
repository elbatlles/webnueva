export function replaceAll(str: any, find: any, replace: any) {
  return str.replace(new RegExp(find, `g`), replace);
}
