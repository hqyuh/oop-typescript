--Select all warehouses.
SELECT * FROM warehouses w;

--Select all boxes with a value larger than $150.
SELECT * FROM boxes b
WHERE value > 150;

--Select all distinct contents in all the boxes.
-- distinct  is remove data duplicate
SELECT DISTINCT contents FROM boxes b;

--Select the average value of all the boxes.
SELECT avg(b.value) FROM boxes b;

--Select the warehouse code and the average value of the boxes in each warehouse.
SELECT b.warehouse, avg(b.value) FROM boxes b
GROUP BY b.warehouse
ORDER BY b.warehouse;

-- Same as previous exercise, 
-- but select only those warehouses where the average value of the boxes is greater than 150.
SELECT b.warehouse, avg(b.value) FROM boxes b
GROUP BY b.warehouse
HAVING avg(b.value) > 150;

--Select the code of each box, along with the name of the city the box is located in.
SELECT b.code, w."location" FROM boxes b 
INNER JOIN warehouses w
ON b.warehouse = w.code;

-- Select the codes of all warehouses that are saturated (bão hòa)
-- (a warehouse is saturated if the number of boxes in it is larger than the warehouse's capacity).
SELECT w.code, w."location"
FROM warehouses w
JOIN (
    SELECT warehouse AS temp_a, COUNT(*) AS temp_b
    FROM boxes b
    GROUP BY warehouse
) AS TEMP
ON w.code = TEMP.temp_a
WHERE TEMP.temp_b > w.capacity;

-- Create index
CREATE INDEX INDEX_WAREHOUSE ON boxes (warehouse);
-- Show index
SELECT
    tablename,
    indexname,
    indexdef
FROM
    pg_indexes
WHERE
    tablename = 'boxes'
    AND schemaname = 'public'
ORDER BY
	tablename,
    indexname;
-- Drop index
DROP INDEX INDEX_WAREHOUSE;