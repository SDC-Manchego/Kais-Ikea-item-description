# Routes for PiKea similar products

## GET /api/products

Returns all products from the db.

## Get /api/products/:id
Returns 1 product where the ikea_products property is equal to the id param. Used suggest additional items that aren't necessarily related to the current one being viewed.

## POST /api/products/
Insert a new item into the ikea_products products table. Req should contain data for object to be inserted. Must have a value for all.

Can utilize existing insertBulkProduct function

## PUT /api/products/:id
Allows an entry in the product table to be inserted. must contain the id for the product to be updated as well as values for the properties to update. Should send an error reposne if an entry with requested product Id is not found.

## DELETE /api/products/:id
Removes the entry for a particular product based id_similar category. Should also delete any reviews associated with that product.