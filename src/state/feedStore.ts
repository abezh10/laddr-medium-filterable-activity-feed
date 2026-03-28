export const starterItems = [
  { id: "one", label: "First feed store item", status: "visible" },
  { id: "two", label: "Second feed store item", status: "pending" },
];

export function createInitialState() {
  return {
    items: starterItems,
    loaded: true,
  };
}
