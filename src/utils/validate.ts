export const validateComponent = (name: string): string | null => {
  if (!name || name === "") {
    return "Component's name can not be empty";
  }
  if (!name.match(/^[A-Z]/)) {
    return "Component's name has to start with a uppercase alphabet";
  }
  if (!name.match(/^[0-9a-zA-Z]+$/)) {
    return "Component can't have non-alphanumeric character";
  }
  return null;
};
