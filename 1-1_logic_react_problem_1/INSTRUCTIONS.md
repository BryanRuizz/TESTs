#XPRESS DELIVERY FE
**I found this exercise in coderbyte**


-- Xpress delivery is a parcial company that needs to create a samall application to organize daily shipments among its couries. 
Xpress delivery has a several problems when organizing shipments manually and would like you to applay all your knowledge to 
organize them.

The application you want to create must assign the packages to the couries to generate the shipments complaying
with the requiremets that we will decribe below.

In Xpress delivery we have 5 couriers, each courier must courier delvier at least 1 package and has a maximum number of packages that can delivered per day.

ex:
-----------------------------------------------------------------------------------
| name       |      munimum number deliver per day    |   maximum numer per day    |
-----------------------------------------------------------------------------------
| calros     |                    1                   |        1                   |    
| maria      |                    1                   |        2                   |
| juan       |                    1                   |        3                   |
------------------------------------------------------------------------------------

Each package in Xpress has a distance to where it will be carried:

ex:
----------------------------------------
|    package    |    Distance (KMS)    |
----------------------------------------
|       1       |           1          |
|       2       |           2          |
|       3       |           3          |
|       4       |           4          |
----------------------------------------

Each shipment is the result of the relationship between a courir and a package.

****REQUIREMETS****
In the base code you will find two components: **shipment and futureshipment**, which will show you the sturcture of each table that needs to be fed dynamically.

1.- Add a button with the label **Assign** in the shipments component to distribute the packags to the courirs complaying with minimum and maximum that each courier has. This action will be hit once a day.

2.- The courier with the maximum limit of shipments per day must be prioritzied (fisrt) when assining the packages.

3.- If a package can not be assigned because no courir meets the requiremets to ship, the package must be added to a component table:
**futureShipment**.

4.- In the shipment component table, you will find a "COMPLETE" BUTTON, add a new event to underline and paint green the row of the table where the button is located.

5.- In the shipments components table, you will find a "DELAY" button, add a new event to remove it from that courier and send it to the table that is in the FUTURESHIPMENT component.

Each package can have 4 statuses:

1 UNASSIGNED  --> this is an initial status.

2 ON THE WAY  --> This status will applay when the package is assigned to a courier.

3 COMPLETE    --> This status will be applied when the shipment is "complete"

4 DELAYED     --> If a package is in the futureshipment table it must have this status.

Notes:
* The number of packages and the distance of each package change from the day.
* The maximum number of package that a delivery person can be assigned may change from day to the next.


