/*
 * LEFT JOIN retrieves all records from the Products table (left), 
 * and matching records from the Manufacturers table. 
 * If there are no matching records in the Manufacturers table, 
 * the columns from this table will be NULL.
 * */
SELECT p."name" AS ProductName, m.name AS ManufacturerName
FROM products p
LEFT JOIN manufacturers m
ON
	p.manufacturer = m.code;

/*
 * RIGHT JOIN retrieves all records from the Manufacturers table (right), 
 * and matching records from the Products table. 
 * If there are no matching records in the Products table, 
 * the columns from this table will be NULL.
 */
SELECT p."name" AS ProductName, m.name AS ManufacturerName
FROM products p
RIGHT JOIN manufacturers m 
ON
	p.manufacturer = m.code;

/*
 * FULL JOIN retrieves all records from both tables. 
 * If there are no matching records, the columns from the other table will be NULL.
 */
SELECT p."name" AS ProductName, m.name AS ManufacturerName
FROM Products p
FULL JOIN Manufacturers m
ON
	p.Manufacturer = m.Code;

-- Select the average price of each manufacturer's products, showing only the manufacturer's code.
SELECT avg(p.price), p.manufacturer
FROM products p
GROUP BY
	p.manufacturer;

-- Select the names of manufacturer whose products have an average price larger than or equal to $150.
SELECT avg(p.price), m."name"
FROM manufacturers m
JOIN products p 
ON
	m.code = p.manufacturer
GROUP BY
	m."name"
HAVING
	avg(p.price) >= 150;

-- Select the name and price of the cheapest product.
SELECT *
FROM products p
WHERE p.price = (
	SELECT min(pt.price)
FROM products pt
);

-- Select the name of each manufacturer along with the name and price of its most expensive product.
SELECT max_price_mapping.name AS manu_name, max_price_mapping.price, products_with_manu_name.name AS product_name
FROM(
	SELECT m."name", max(p.price) AS price
FROM products p, manufacturers m
WHERE m.code = p.manufacturer
GROUP BY m."name") 
     AS max_price_mapping
LEFT JOIN
	(
	SELECT products.*, manufacturers.name manu_name
FROM products
LEFT JOIN manufacturers
	ON
		(products.manufacturer = manufacturers.code)) 
	AS products_with_manu_name
 ON
	(max_price_mapping.name = products_with_manu_name.manu_name
	AND max_price_mapping.price = products_with_manu_name.price
  );