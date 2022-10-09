export const ContactList = ({ list, onClick }) => {
  return (
    <ul>
      {list &&
        list.map(item => {
          return (
            <li key={item.id}>
              {item.name} {item.number}
              <button type="button" id={item.id} onClick={e => onClick(e)}>
                delete
              </button>
            </li>
          );
        })}
    </ul>
  );
};
