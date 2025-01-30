// Mengupdate harga dan pilihan CPU berdasarkan RAM yang dipilih
document.getElementById('ram').addEventListener('change', function() {
  const ramValue = parseInt(this.value);

  // Menghitung harga berdasarkan RAM
  const price = 2000 + (ramValue - 1) * 1000; // 1GB = 2000, 2GB = 3000, dll.
  document.getElementById('priceDisplay').textContent = `Harga: Rp. ${price}`;

  // Menentukan CPU berdasarkan RAM
  const cpuValue = 30 * ramValue; // CPU minimal berdasarkan RAM

  // Tampilkan nilai CPU pada input yang tidak dapat dipilih
  const cpuInput = document.getElementById('cpu');
  cpuInput.value = `${cpuValue} CPU`;

  // Nonaktifkan dropdown CPU
  cpuInput.disabled = true;
});

// Mengatur aksi submit form
document.getElementById('serverForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Mencegah form submit default

  // Ambil data dari form
  const serverName = document.getElementById('serverName').value;
  const serverKey = document.getElementById('serverKey').value;
  const ramValue = document.getElementById('ram').value;
  const cpuValue = document.getElementById('cpu').value;

  // Format pesan untuk WhatsApp
  const message = `\`\`\`Halo Bang Gua Mau Buy Panel:\nInformasi server:\nName: ${serverName}\nKey: ${serverKey}\nRAM: ${ramValue} GB\nCPU: ${cpuValue}\nPrice: Rp. ${2000 + (ramValue - 1) * 1000}\`\`\``;

  // URL WhatsApp dengan format pesan
  const whatsappUrl = `https://wa.me/6288215523477?text=${encodeURIComponent(message)}`;

  // Arahkan ke WhatsApp
  window.open(whatsappUrl, '_blank');
});

particlesJS('particles-js', {
  "particles": {
    "number": {
      "value": 100, // Jumlah partikel
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffff00" // Warna partikel cyan
    },
    "shape": {
      "type": "circle", // Bentuk partikel
      "stroke": {
        "width": 0,
        "color": "#000000"
      }
    },
    "opacity": {
      "value": 0.5, // Transparansi partikel
      "random": false,
      "anim": {
        "enable": true,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 8, // Ukuran partikel
      "random": true,
      "anim": {
        "enable": false,
        "speed": 50,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true, // Menghubungkan partikel dengan garis
      "distance": 250, // Jarak maksimal untuk menghubungkan partikel
      "color": "#00ff00", // Warna garis
      "opacity": 0.4, // Opasitas garis
      "width": 2 // Ketebalan garis
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out", // Partikel keluar dari area
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse" // Partikel akan menjauh saat hover
      },
      "onclick": {
        "enable": true,
        "mode": "push" // Menambah partikel saat klik
      }
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 0.8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});