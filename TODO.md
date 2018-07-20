# Things to do en vrac

-   there are still some interval errors trying to choose sydney as place, there is a realCoordinates error being give.
-   make things cache offling
-   make maps suggestions list items work double lines, now not working though flag is set... !
-   state waypoints or others with arrays should be created before being used else we get unable to access. Maybe use objects like dep, arrival, waypoint1, waypoint2...
    -   get the nuber of waypoints with Object.keys(object) -> returns an array with the keys in same order as looping through object, then apply .length and get number of elements of the object ! (Object.keys(obj) will ignore symbolic keys of the object, Reflect.ownKeys(obj) will return all keys)
    -   modify state with Object.assign, then set with keys passed as variable : newWaypoints[waypointKey].text="sometext"
-   Visual component that enables to choose a sub rdv points and eventually create/edit new one on the fly
-   Validation in PushTripToFirestore
-   covo rdv points think how it will work when modifying one, how to tell if should create other, or inform people/trips using it ?
