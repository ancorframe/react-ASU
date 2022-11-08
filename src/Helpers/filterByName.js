export const filterByName = (contacts, filter) => {
  return contacts.filter(i => {
    return i.name.toLowerCase().includes(filter);
  });
};
