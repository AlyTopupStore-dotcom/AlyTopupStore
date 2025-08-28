// Load diamond dropdown ikut game
fetch('diamond.json')
.then(response => response.json())
.then(data => {
  const gameSelect = document.getElementById('game');
  const diamondSelect = document.getElementById('diamond');

  function updateDiamond() {
    const game = gameSelect.value;
    diamondSelect.innerHTML = '';
    data[game].forEach(item => {
      const option = document.createElement('option');
      option.value = item.diamond;
      option.text = `${item.diamond} DM - RM ${item.price}`;
      diamondSelect.appendChild(option);
    });
  }

  gameSelect.addEventListener('change', updateDiamond);
  updateDiamond(); // load default FF Ori
});