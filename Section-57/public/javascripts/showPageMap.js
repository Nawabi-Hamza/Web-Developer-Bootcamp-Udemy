



    // console.log(camp)
    // camp = JSON.parse(camp)
    maptilersdk.config.apiKey = maptilerApiKey;
    // console.log(camp.geometry.coordinates)
    const lngLat = camp.geometry.coordinates

const map = new maptilersdk.Map({
    container: 'map',
    style: maptilersdk.MapStyle.BRIGHT,
    center: lngLat, // starting position [lng, lat]
    zoom: 10 // starting zoom
});

new maptilersdk.Marker()
    .setLngLat(lngLat)
    .setPopup(
        new maptilersdk.Popup({ offset: 25 })
            .setHTML(
                `<h3>${camp.title}</h3><p>${camp.location}</p>`
            )
    )
    .addTo(map)