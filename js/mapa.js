var map = L.map('mapa').setView([-36.626068, -64.283725], 12);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([-36.626068, -64.283725]).addTo(map)
    .bindPopup(`

        <div class="info">
            <ul>
                <li>
                    <i class="fa-solid fa-location-dot"></i>
                    Santa Rosa - La Pampa
                </li>

                <li>
                    <i class="fa-solid fa-envelope"></i>
                    Email: kevin.marmolr@gmail.com
                </li>
            </ul>
        </div>
    `)
    .openPopup();
