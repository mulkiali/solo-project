Create a new database called `halal_app`:

CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "level" INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE "restaurants" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (80) NOT NULL,
    "description" TEXT NOT NULL,
    "image" text NOT NULL,
    "address_id" int references addresses
);


CREATE TABLE "addresses" (
    "id" SERIAL PRIMARY KEY,
    "street" VARCHAR(255),
    "city" VARCHAR(60),
    "state" VARCHAR(2),
    "zip" VARCHAR(12),
    "restaurant_id" INT REFERENCES "restaurants"
);

INSERT INTO restaurants (name, description, image, website, address_id) VALUES 
('Marhaba Grill', 'Simple eatery featuring classic Mediterranean fare like kebabs & gyros, plus lunch & dinner buffets.', 'images/', 3),  
('Hamdi Restaurant', 'Unadorned halal restaurant featuring traditional Somalian & East African cooking.', 'images/hamdi1.JPG', 5),
('Afro Deli & Grill: Minneapolis', 'Compact counter serve featuring African & American eats & espresso in a bright, colorful interior.', 'images/afrodeli.jpeg', 4),
('Darbar India Grill & Bar', 'Contemporary Indian restaurant offering a vast array of classic dishes including vegetarian entrees', 'images/darbar.jpeg', 6), 
('Filfillah Middle Eastern Restaurant', 'Vibrant kitchen offering typical Middle Eastern fare such as chicken kebabs & lamb shawarma.', 'images/filfillah.jpg', 2),
('Holy Land', 'Sprawling Middle Eastern grocery & restaurant offering classic fare, baked goods & prepared foods.', 'images/holy_land.jpg', 1), 
('Wallys Falafel and Hummus', 'This relaxed counter-serve offers familiar Middle Eastern bites such as chicken shawarma & falafel.', 'images/wallys.jpeg', 7),

('Naf Naf Grill', 'Modern Middle Eastern counter-serve chain dishing up shawarma & falafel on pitas, rice or salads.','images/nafnaf.jpeg', 8),
('Quruxlow Restaurant', 'Easygoing place with ample seating for a variety of traditional Somali dishes, plus fruit juices.','images/quruxlow.jpg' , 9) ;


CREATE TABLE "addresses" (
    "id" SERIAL PRIMARY KEY,
    "street" VARCHAR(255),
    "city" VARCHAR(60),
    "state" VARCHAR(2),
    "zip" VARCHAR(12)
);

INSERT INTO addresses (street, city, state, zip) VALUES('Midtown Global Market, 920 E Lake St', 'Minneapolis', 'MN', '55407'),
('4301 Central Ave NE', 'Columbia Heights', 'MN', '55421'), 
('2801 Nicollet Ave', 'Minneapolis', 'MN', '55408'), 
('720 Washington Ave SE', 'Minneapolis', 'MN', '55414'), 
('M 818 E Lake St', 'Minneapolis', 'MN', '55407'), 
('1221 W Lake St #106', 'Minneapolis', 'MN', '55408'),
('423 14th Ave SE,', 'Minneapolis', 'MN', '555414'),
('200 South 6th St', 'Minneapolis', 'MN', '55402'),
('1414 E Lake St,', 'Minneapolis', 'MN', '55407');

CREATE TABLE "restaurant_addresses"(
  "id" SERIAL PRIMARY KEY,
  "address_id" INT REFERENCES "addresses",
  "restaurant_id" INT REFERENCES "restaurants"
);

insert into restaurant_addresses (address_id, restaurant_id) values; 

CREATE TABLE "favorites"(
  "id" SERIAL PRIMARY KEY,
  "user_id" INT REFERENCES "user",
  "restaurant_id" INT REFERENCES "restaurants",
  "visited" boolean default false
);
