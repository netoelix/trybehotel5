SELECT COUNT(*)
FROM rooms AS uhs
    INNER JOIN room_amenities AS uha ON uha.room_id = uhs.id
    INNER JOIN amenities AS ame ON uha.amenity_id = ame.id
WHERE
    ame.single_bed >= 1
    AND ame.breakfast = 1