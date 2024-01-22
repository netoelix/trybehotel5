SELECT h.name, r.price
FROM (
    SELECT hotel_id, price
    FROM rooms
    WHERE available = TRUE
    ORDER BY price ASC
    LIMIT 4
) AS r
JOIN hotels h ON h.id = r.hotel_id
ORDER BY r.price ASC
LIMIT 2 OFFSET 2;