function meeting(x) {
  const available = x.findIndex(room => room == "O")
  return available == -1 ? "None available!" : available
}