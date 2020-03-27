
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "restaurants" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (80) NOT NULL,
    "description" TEXT NOT NULL,
    "address_id" INT REFERENCES "addresses"
);

CREATE TABLE "addresses" (
    "id" SERIAL PRIMARY KEY,
    "street" VARCHAR(255),
    "city" VARCHAR(60),
    "state" VARCHAR(2),
    "zip" VARCHAR(12),
    "restaurant_id" INT REFERENCES "restaurants"
);


INSERT INTO addresses (street, city, state, zip, restaurant_id) VALUES('Midtown Global Market, 920 E Lake St', 'Minneapolis', 'MN', '55407', 6),
('4301 Central Ave NE', 'Columbia Heights', 'MN', '55421', 5), 
('2801 Nicollet Ave', 'Minneapolis', 'MN', '55408', 1), 
('720 Washington Ave SE', 'Minneapolis', 'MN', '55414', 3), 
('M 818 E Lake St', 'Minneapolis', 'MN', '55407', 2), 
('1221 W Lake St #106', 'Minneapolis', 'MN', '55408', 4);

INSERT INTO restaurants (name, description, address_id) VALUES 
('Marhaba Grill', 'Simple eatery featuring classic Mediterranean fare like kebabs & gyros, plus lunch & dinner buffets.', 3),  
('Hamdi Restaurant', 'Unadorned halal restaurant featuring traditional Somalian & East African cooking.', 5),  
('Afro Deli & Grill: Minneapolis', 'Compact counter serve featuring African & American eats & espresso in a bright, colorful interior.', 4), 
('Darbar India Grill & Bar', 'Contemporary Indian restaurant offering a vast array of classic dishes including vegetarian entrees', 6), 
('Filfillah Middle Eastern Restaurant', 'Vibrant kitchen offering typical Middle Eastern fare such as chicken kebabs & lamb shawarma.', 2);
('Holy Land', 'Sprawling Middle Eastern grocery & restaurant offering classic fare, baked goods & prepared foods.', 1);


CREATE TABLE "favorites"(
  "id" SERIAL PRIMARY KEY,
  "user_id" INT REFERENCES "user",
  "restaurant_id" INT REFERENCES "restaurants"
);