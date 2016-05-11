ymaps.ready(init);

function init() {

    // Создание экземпляра карты.
    var myMap = new ymaps.Map('map', {
            center: [53.788970087695944, 27.977427499999983],
            zoom: 7
        }, {
            searchControlProvider: 'yandex#search'
        }),
        mapCenter = [53.788970087695944, 27.977427499999983],
        // Контейнер для меню.
        menu = $('<ul class="menu2"/>');

    for (var i = 0, l = groups.length; i < l; i++) {
        createMenuGroup(groups[i]);
    }

    function createMenuGroup (group) {
        // Пункт меню.
        var menuItem = $('<li><a href="#">' + group.name + '</a></li>'),
        // Коллекция для геообъектов группы.
            collection = new ymaps.GeoObjectCollection(null, { preset: group.style }),
        // Контейнер для подменю.
            submenu = $('<ul class="submenu"/>');

        // Добавляем коллекцию на карту.
        myMap.geoObjects.add(collection);

        // Добавляем подменю.
        menuItem
            .append(submenu.hide())
            // Добавляем пункт в меню.
            .appendTo(menu)
            // По клику удаляем/добавляем коллекцию на карту и скрываем/отображаем подменю.
            .find('a')
            .toggle(function () {
                myMap.geoObjects.add(collection);
                submenu.show();

                var myAction = new ymaps.map.action.Single({
                  center: group.center,
                  zoom: 10,
                  duration: 1000,
                  timingFunction: "ease-in"
                });

                myMap.action.execute(myAction);

            }, function () {
                myMap.geoObjects.remove(collection);
                submenu.hide();

                var myAction = new ymaps.map.action.Single({
                  center: [53.788970087695944, 27.977427499999983],
                  zoom: 6,
                  duration: 1000,
                  timingFunction: "ease-in"
                });

                myMap.action.execute(myAction);

            });
        for (var j = 0, m = group.items.length; j < m; j++) {
            createSubMenu(group.items[j], collection, submenu);
        }
    }

    function createSubMenu (item, collection, submenu) {
        var itemStyle = {};
        if (item.style) {
            itemStyle = { preset: item.style };
        }

        if (item.addresses && item.addresses.length > 0) {
            var submenuItem = '<li><b>' + item.name + '</b><br />';
            var placemarks = [];

            for (var i = 0; i < item.addresses.length; i++) {
                var address = item.addresses[i];

                if (address.style) {
                    itemStyle = { preset: address.style };
                }

                    submenuItem = submenuItem + ('<br /><a href="#">' + address.address + '<br />' + address.phone + '</a><br />');

                    var balloonContent = '<b>' + item.name + '</b><br />' +
                                     address.address + '<br />' +
                                     address.phone;

                    placemarks[i] = new ymaps.Placemark(address.center, { balloonContent: balloonContent, hintContent: balloonContent }, itemStyle);
            }

            submenuItem = submenuItem + ('</li><br />');

          $(submenuItem).appendTo(submenu).find('a').each(function(i) {
                var a = $(this);
                var placemark = placemarks[i];
                collection.add(placemark);

                $(a).toggle(function () {
                    placemark.balloon.open();
                    }, function () {
                    placemark.balloon.close();
                });
            });

        } else {
            var submenuItem = $('<li><a href="#"><b>' + item.name + '</b><br />' + item.address + '<br />' + item.phone + '</a></li><br />'),

            balloonContent = '<b>' + item.name + '</b><br />' +
                             item.address + '<br />' +
                             item.phone,
            placemark = new ymaps.Placemark(item.center, { balloonContent: balloonContent, hintContent: balloonContent }, itemStyle);

            collection.add(placemark);
            submenuItem
                .appendTo(submenu)
                .find('a')
                .toggle(function () {
                    placemark.balloon.open();
                    }, function () {
                    placemark.balloon.close();
                });
        }
    }



    // Добавляем меню в тэг BODY.
    menu.appendTo($('span'));
    // Выставляем масштаб карты чтобы были видны все группы.
    myMap.setBounds(myMap.geoObjects.getBounds());
}