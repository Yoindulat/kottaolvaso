function addParticipant() {
  const properties = ['characterName', 'EP', 'FP', 'KE', 'TE', 'VE', 'CE', 'Tamperkor', 'Sebzes', 'SFE'];

  const values = {};
  properties.forEach(prop => {
    values[prop] = document.getElementById(prop).value;
  });

  const isFriendly = document.getElementById('isFriendly').checked;
  const side = isFriendly ? "Barát" : "Ellenség";

  const tableBody = document.getElementById('participantsBody');

  const newRow = tableBody.insertRow(-1);
  for (let i = 0; i < properties.length; i++) {
    const cell = newRow.insertCell(i);
    cell.innerHTML = values[properties[i]];
  }

  const cellSide = newRow.insertCell(properties.length);
  cellSide.innerHTML = side;
}
