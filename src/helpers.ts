export function getElementById(elementId: string) {
  const container = document.getElementById(elementId);

  if (!container) {
    throw new Error(`Could not find container with id: '${container}'`);
  }

  return container;
}
