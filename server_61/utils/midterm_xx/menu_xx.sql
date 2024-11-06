create table menu_61 (
  id int not null primary key,
  title varchar(255),
  category text,
  price varchar(255),
  img text,
  descrip text
);

insert into menu_61 (id, title, category, price, img, descrip)
values
(1, 'buttermilk pancakes', 'breakfast', '15.99', './images/item-1.jpeg','baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed'),
(2, 'diner double', 'lunch', '13.99', './images/item-2.jpeg','vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats'),
(3, 'godzilla milkshake', 'shakes', '6.99', './images/item-3.jpeg','ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.')