# Simple api integration project. User must be able to filter through a list of city and query information about the air quality of set choice through openAQ api

The meat and potatoes of this application lies within 2 parts. The first one involved filtering the possible options the user can choose
from. We have a full array including all cities available and as the user types a city, we cross reference that inout string with possible matches from the full array. Any matches are then added to a new empty array that keeps shrinking as the users types more.

![carbon](https://user-images.githubusercontent.com/56344856/126783244-35bf4369-b57b-4f1e-a921-272be754498f.png)

The second most importand part if of course fetching the data. Once we got data back we make sure we save the appropriate information on our state and then render each item on a new card component. This gives us the flexibility to also add/remove more cities while being automatically re-rendered by react.

Important takeaway would include to do some more error handling and maybe including an error boundary element to make sure the application doesn't skip. But overall this was a fun project to go on and about in a day. Again some minor css changes here and there, but the sass was configured well enough so changing those to the style guide wouldn't take much time.

