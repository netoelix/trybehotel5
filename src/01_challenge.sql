CREATE TABLE amenities (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    single_bed INTEGER NOT NULL,
    double_bed INTEGER NOT NULL,
    breakfast BOOLEAN NOT NULL,
    minibar BOOLEAN NOT NULL
);
INSERT INTO amenities (single_bed, double_bed, breakfast, minibar)
VALUES (1, 0, 0, 0),
(1, 0, 1, 0),
(1, 0, 1, 1),
(2, 0, 0, 0),
(2, 0, 1, 0),
(2, 0, 1, 1),
(0, 1, 0, 0),
(0, 1, 1, 0),
(0, 1, 1, 1),
(1, 1, 0, 0),
(1, 1, 1, 0),
(1, 1, 1, 1);