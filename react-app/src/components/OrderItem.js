export default function OrderItem(item) {
  return (
    <div>
      <h4>{item.title}</h4>
      <p>{item.body}</p>
    </div>
  );
};