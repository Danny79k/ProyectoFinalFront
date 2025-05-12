

export function List({ items }) {
  return (
    <ul className="list-disc pl-5">
      {items.map((item, index) => (
        <li key={index} className="text-gray-700 mb-2">
          {item}
        </li>
      ))}
    </ul>
  );
}

export default List;
