const fetchData = async () => {
    const response = await fetch('/data');
    const data = await response.json();
    const labels = data.map(entry => new Date(entry.timestamp).toLocaleTimeString());
    const temperatures = data.map(entry => entry.temperature);
  
    const ctx = document.getElementById('temperatureChart').getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: 'Temperature (°C)',
          data: temperatures,
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
          fill: false
        }]
      },
      options: {
        scales: {
          x: {
            type: 'time',
            time: {
              unit: 'second'
            }
          }
        }
      }
    });
  };
  
  setInterval(fetchData, 5000);
  