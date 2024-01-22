SELECT h.name, MIN(r.price) AS barato, MAX(r.price) AS caro
FROM hotels h
JOIN rooms r ON h.id = r.hotel_id
GROUP BY h.name
ORDER BY h.name DESC;