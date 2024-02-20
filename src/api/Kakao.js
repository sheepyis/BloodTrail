import React, { useEffect, useState } from 'react';
import colors from "../styles/color";
import styled from 'styled-components';
import Search from "../assets/images/mystery.png";
import Close from "../assets/images/close.png";
import BloodImage from "../assets/images/bloodImage.png";

const MapContainer = styled.div`
    width: 100%;
    height: 25vw;
    position: relative;
`;

const SearchInput = styled.input`
    width: 33.5vw;
    height: 2.3vw;
    background-color: ${colors.white};
    font-weight: 500;
    font-size: 0.7vw;
    position: absolute;
    z-index: 2;
    margin-top: 0.5vw;
    margin-left: 1vw;
    padding: 0 1rem 0 1rem;
`

const SearchImage = styled.img`
    position: absolute;
    z-index: 3;
    width: 1.2vw;
    height: 1.2vw;
    margin-top: 1vw;
    margin-left: 32.5vw;
`

const CloseImage = styled.img`
    width: 1.2vw;
    height: 1.2vw;
    position: absolute;
    z-index: 5;
    right: 0;
    margin-right: 1vw;
    margin-top: -1.5vw;
    cursor: pointer;
`

const MarkerDiv = styled.div`
    display: ${props => props.show ? 'block' : 'none'};
    width: 20vw;
    height: 25.5vw;
    position: absolute;
    z-index: 4;
    background-color: ${colors.markerDiv};
    right: 0;
    margin-right: 22vw;
`

const PlaceImage = styled.img`
    z-index: 5;
    width: 12vw;
    margin-top: 0.5vw;
    margin-left: auto;
    margin-right: auto;
    display: block;
`

const MapP = styled.p`
    font-weight: 700;
    font-size: 0.9vw;
    margin-top: 2.5vw;
    margin-left: 2vw;
`

const MapP2 = styled.p`
    font-weight: 600;
    font-size: 0.7vw;
    margin-left: 2vw;
`

const RButton = styled.button`
    width: 16vw;
    height: 1.9vw;
    margin-left: auto;
    margin-right: auto;
    margin-top: 2vw;
    display: block;
    border: none;
    border-radius: 0.25vw;
    background-color: ${colors.white};
    color: ${colors.mainRed};
    font-weight: 700;
    font-size: 0.8vw;
`

const { kakao } = window;

const Kakao = () => {
    const [searchInput, setSearchInput] = useState('');
    const [map, setMap] = useState(null);
    const [places, setPlaces] = useState([]);
    const [selectedPlace, setSelectedPlace] = useState(null);
    const [markerDivVisible, setMarkerDivVisible] = useState(false);

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            const container = document.getElementById('map');

            const options = {
                center: new kakao.maps.LatLng(latitude, longitude),
                level: 7,
            };
            const map = new window.kakao.maps.Map(container, options);

            setMap(map);

            const placesService = new kakao.maps.services.Places();
            placesService.keywordSearch(
                '헌혈의집',
                (result, status) => {
                    if (status === kakao.maps.services.Status.OK) {
                        setPlaces(result);
                    }
                },
                {
                    location: new kakao.maps.LatLng(latitude, longitude),
                    radius: 10000,
                }
            );
        }, (error) => {
            console.error('Error:', error);
        });
    }, []);

    const handleSearch = () => {
        if (map && searchInput.trim() !== '') {
            const geocoder = new kakao.maps.services.Geocoder();

            geocoder.addressSearch(searchInput, (result, status) => {
                if (status === kakao.maps.services.Status.OK) {
                    const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
                    map.setCenter(coords);

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
        }
    };

    const handleMarkerClick = (place) => {
        setSelectedPlace(place);
        setMarkerDivVisible(true);
    };

    const handleMarkerClose = () => {
        setSelectedPlace(null);
        setMarkerDivVisible(false);
    };

    const handleReserveClick = () => {
        if (selectedPlace) {
            window.open('https://www.bloodinfo.net/knrcbs/bh/resv/resvBldHousStep1.do?mi=1094', '_blank');
        }
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
            <SearchInput
                type="text"
                placeholder="주소를 입력하세요."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                onKeyDown={handleKeyPress}
            />
            <SearchImage src={Search} alt="Search" onClick={handleSearch}/>
            <MarkerDiv show={markerDivVisible}>
                {selectedPlace && (
                    <div>
                        <CloseImage src={Close} alt="close" onClick={handleMarkerClose} />
                        <MapP>{selectedPlace.place_name}</MapP>
                        <PlaceImage src={BloodImage} alt="헌혈의집"/>
                        <div style={{display: "flex"}}>
                            <MapP2>전화번호</MapP2>
                            <MapP2 style={{marginLeft: "1vw", fontWeight: 400}}>{selectedPlace.phone}</MapP2>
                        </div>
                        <div style={{display: "flex"}}>
                            <MapP2 style={{marginLeft: "2.6vw", marginTop: "1vw"}}>주소</MapP2>
                            <MapP2 style={{fontWeight: 400, marginTop: "1vw", marginLeft: "1.7vw"}}>{selectedPlace.road_address_name}</MapP2>
                        </div>
                        <RButton onClick={handleReserveClick}>예약하기</RButton>
                    </div>
                )}
            </MarkerDiv>
            <MapContainer id="map" />
        </div>
    );
};

export default Kakao;