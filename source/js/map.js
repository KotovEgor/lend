ymaps.ready(init);

function init () {
    var myMap = new ymaps.Map("map", {
            center: [56.830963, 35.965242],
            zoom: 16,
            controls: ['zoomControl']
        }),

        
         myPlacemark = new ymaps.Placemark([56.831063, 35.969611], {
                            balloonContentHeader: 'Название компании',
                            balloonContentBody: 'Московское шоссе, д.21, корп.2',
                            balloonContentFooter: '+7(999) 99 99 99'
                    }, {
                        iconImageHref: '../images/map.svg',
                        iconColor: '#fff',
                        iconImageSize: [40, 36]
                    });
                    myMap.geoObjects.add(myPlacemark);


                



    var myMapMobile = new ymaps.Map("map--mobile", {
            center: [56.831063, 35.969611],
            zoom: 16,
            controls: ['zoomControl']
        }),

        
         myPlacemark = new ymaps.Placemark([56.831063, 35.969611], {
                            balloonContentHeader: 'Название компании',
                            balloonContentBody: 'Московское шоссе, д.21, корп.2',
                            balloonContentFooter: '+7(999) 99 99 99'
                    }, {
                        iconImageHref: '../images/map.svg',
                        iconColor: '#fff',
                        iconImageSize: [40, 36]
                    });
                    myMapMobile.geoObjects.add(myPlacemark);


                



}