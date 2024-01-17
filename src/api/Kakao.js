import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const MapContainer = styled.div`
    width: 100%;
    height: 25vw;
`;

const { kakao } = window;

const Kakao = () => {
    const [searchInput, setSearchInput] = useState('');
    const [map, setMap] = useState(null);
    const [places, setPlaces] = useState([]);
    const [infoWindow, setInfoWindow] = useState(null);
    const [currentLocationCircle, setCurrentLocationCircle] = useState(null);
    const [searchedLocationCircle, setSearchedLocationCircle] = useState(null);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            const container = document.getElementById('map');

            const options = {
                center: new kakao.maps.LatLng(latitude, longitude),
                level: 4,
            };
            const map = new window.kakao.maps.Map(container, options);

            setMap(map);

            const currentLocationCircle = new kakao.maps.Circle({
                center: new kakao.maps.LatLng(latitude, longitude),
                radius: 10000,
                strokeWeight: 1,
                strokeColor: '#FF5733',
                strokeOpacity: 0.7,
                fillColor: '#FF5733',
                fillOpacity: 0.3,
            });

            currentLocationCircle.setMap(map);
            setCurrentLocationCircle(currentLocationCircle);
        });
    }, []);

    const handleSearch = () => {
        if (map && searchInput.trim() !== '') {
            const geocoder = new kakao.maps.services.Geocoder();

            geocoder.addressSearch(searchInput, (result, status) => {
                if (status === kakao.maps.services.Status.OK) {
                    const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
                    map.setCenter(coords);

                    if (searchedLocationCircle) {
                        searchedLocationCircle.setMap(null);
                    }

                    const newSearchedLocationCircle = new kakao.maps.Circle({
                        center: coords,
                        radius: 10000,
                        strokeWeight: 1,
                        strokeColor: '#FF5733',
                        strokeOpacity: 0.7,
                        fillColor: '#FF5733',
                        fillOpacity: 0.3,
                    });

                    newSearchedLocationCircle.setMap(map);
                    setSearchedLocationCircle(newSearchedLocationCircle);

                    const placesService = new kakao.maps.services.Places();
                    placesService.keywordSearch(
                        '헌혈의집',
                        (result, status) => {
                            if (status === kakao.maps.services.Status.OK) {
                                setPlaces(result);
                            }
                        },
                        {
                            location: coords,
                            radius: 10000,
                        }
                    );
                }
            });

            if (currentLocationCircle) {
                currentLocationCircle.setMap(null);
            }
        }
    };


    const handleMarkerClick = (place) => {
        const content = `<div>${place.place_name}</div>`;

        if (infoWindow) {
            infoWindow.close();
        }

        const newInfoWindow = new kakao.maps.InfoWindow({
            content,
            position: new kakao.maps.LatLng(place.y, place.x),
        });

        newInfoWindow.open(map);
        setInfoWindow(newInfoWindow);
    };

    const addMarkersForPlaces = () => {
        if (map && places.length > 0) {
            const markers = places.map((place) => {
                const marker = new kakao.maps.Marker({
                    position: new kakao.maps.LatLng(place.y, place.x),
                    icon: new window.kakao.maps.MarkerImage(
                        'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/places_category.png',
                        new window.kakao.maps.Size(35, 35),
                        { offset: new window.kakao.maps.Point(17, 35) }
                    ),
                });
                marker.setMap(map);

                kakao.maps.event.addListener(marker, 'click', () => {
                    handleMarkerClick(place);
                });

                return marker;
            });
        }
    };

    useEffect(() => {
        addMarkersForPlaces();
    }, [places]);

    return (
        <div>
            <input
                type="text"
                placeholder="주소를 입력하세요."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
            />
            <button onClick={handleSearch} style={{ backgroundColor: 'pink' }}>
                검색
            </button>
            <MapContainer id="map" />
        </div>
    );
};

export default Kakao;