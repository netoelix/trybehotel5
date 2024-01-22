CREATE TABLE room_amenities (
    room_id INTEGER NOT NULL,
    FOREIGN KEY (room_id) REFERENCES rooms(id),
    amenity_id INTEGER NOT NULL,
    FOREIGN KEY (amenity_id) REFERENCES amenities(id),
    PRIMARY KEY (room_id, amenity_id)
);
INSERT INTO room_amenities (room_id, amenity_id)
VALUES (1,3),
(2,4),
(3,6),
(4,8),
(5,9),
(6,10),
(7,11),
(8,12),
(9,2),
(10,5),
(11,7),
(12,1),
(13,3),
(14,6),
(15,9);