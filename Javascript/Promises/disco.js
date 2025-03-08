const randomColor = () => {
    const hex = '0123456789abcdef';
    let color = '#';
    // let a = Array.from(hex);
    // console.log(a.length);
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    console.log(color);
    return color;
  };
  
  console.log(randomColor());
  
  let manager;
  const onStartClick = () => {
    function disco() {
      document.body.style.backgroundColor = randomColor();
    }
    manager = setInterval(disco, 1000);
  };
  const onStopClick = () => {
    clearInterval(manager);
    manager = null;
  };
  
  document.getElementById('start').addEventListener('click', onStartClick);
  document.getElementById('stop').addEventListener('click', onStopClick);
  