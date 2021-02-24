**HLTV API**
----
  <_All this data belongs to www.hltv.org, and I do not own any of these content._>

  This is an JSON API REST based in Express.js framework. The content is retrieved from an [unofficial HLTV api](https://github.com/dajk/hltv-api), that is being treated for an specific React App that makes requests to this API REST.

  ```bash
$ npm install hltv-api
```
#### Installation

Please install all dependecies neeeded for this project. In order to do that please excute this command in your CLI inside of the ./server/ folder:

```bash
$ npm install
```

So all dependecies listed in <_package.json_> file are being installed.

#### Running

In order to run this API, there are two differents options

```bash
$ npm start
```
This command will execute the file as a <_node_> file.

```bash
$ npm run dev
```
This command will execute the file as a <_node_> file with the *nodemon* extension. Everytime there is a change in the file, it will restart again.

#### Methods

All methods are `GET` requests to retrieve the information. In this case there is no type of administration here, so there are no need of `POST` | `DELETE` | `PUT` requests. 

First four methods are the same as the HLTV-API mentioned above. From the fifth, these are new implementations for getting data purposes 

* ##### News 

     * **URL**
     
          ```
        http://localhost:4000/news
        ```
        
    * **Method type:**
      
          `GET` request. Returns all news from HTLV webpage
    *  **URL Params**
      
          <_None_>
    * **Data Params**
      
        <_None_>
    * **Response:**
      
      ```json
            [
                {
                    "title": "IEM Katowice: Biggest talking points so far",
                    "description": "The CIS revolution, the underwhelming story of G2, and Astralis' \"six-man\" roster are some of the talking points explored ahead of the playoffs of the tournament.",
                    "link": "https://www.hltv.org/news/31253/iem-katowice-biggest-talking-points-so-far",
                    "time": "2021-02-24T11:10:00.000Z"
                }, ...
            ]
        ```

* ##### Events 

     * **URL**
     
          ```
        http://localhost:4000/events
        ```
    * **Method type:**
      
          `GET` request. Returns all events from HTLV webpage
    *  **URL Params**
      
          <_None_>
    * **Data Params**
      
        <_None_>
    * **Response:**
      
      ```json
            [
                {
                    "event": "European Development Championship 2",
                    "crest": "https://img-cdn.hltv.org/eventlogo/fUUnE-XkcPKbEohf3bvgsl.png?ixlib=java-2.1.0&s=3c5518b338c4c4c22757a29051dd2bcb"
                }, ...
            ]
       ```

* ##### Matches 

     * **URL**
          ```
        http://localhost:4000/matches
        ```
    * **Method type:**
      
          `GET` request. Returns all matches from HTLV webpage
    *  **URL Params**
      
          <_None_>
    * **Data Params**
      
        <_None_>
    * **Response:**
      
      ```json
            [
                {
                    "id": 2346458,
                    "link": "/matches/2346458/sinners-vs-sprout-european-development-championship-2",
                    "time": "2021-02-24T14:00:00.000Z",
                    "event": {
                        "name": "European Development Championship 2",
                        "crest": "https://img-cdn.hltv.org/eventlogo/fUUnE-XkcPKbEohf3bvgsl.png?ixlib=java-2.1.0&s=3c5518b338c4c4c22757a29051dd2bcb"
                    },
                    "stars": 1,
                    "map": "bo3",
                    "teams": [
                        {
                            "name": "Sinners",
                            "crest": "https://img-cdn.hltv.org/teamlogo/9l_WdQSU9JsNHzpK-pwOG2.svg?ixlib=java-2.1.0&s=af432c3ef61c0c843331cc0dc2fed1ed"
                        },
                        {
                            "name": "Sprout",
                            "crest": "https://img-cdn.hltv.org/teamlogo/Ut8iEF66VCIbZGniMYn5jL.svg?ixlib=java-2.1.0&s=e6ae4904320fcbb566d098641e22a474"
                        }
                    ]
                }, ...
            ]
      ```

* ##### Results 

     * **URL**
          ```
        http://localhost:4000/results
        ```
    * **Method type:**
      
          `GET` request. Returns all results from HTLV webpage
    *  **URL Params**
      
          <_None_>
    * **Data Params**
      
        <_None_>
    * **Response:**
      
      ```json
            [
                {
                    "event": "European Development Championship 2",
                    "maps": "bo3",
                    "time": "2021-02-24T13:12:32.000Z",
                    "team1": {
                        "name": "Nemiga",
                        "crest": "https://img-cdn.hltv.org/teamlogo/ZxC3Wjx02_xmlJLh_0zgIr.svg?ixlib=java-2.1.0&s=779e4f748c25233b9b820fffd69eecbd",
                        "result": 0
                    },
                    "team2": {
                        "name": "Movistar Riders",
                        "crest": "https://img-cdn.hltv.org/teamlogo/Y37ZjhQhf-74eg44YCXe_m.png?ixlib=java-2.1.0&w=50&s=469ce0dff6be1d7a686ccdb42492077a",
                        "result": 2
                    },
                    "matchId": "/matches/2346457/nemiga-vs-movistar-riders-european-development-championship-2"
                }, ...
            ]
       ```

* ##### Events by date 

     * **URL**
          ```
        http://localhost:4000/events/:date
        ```

    * **Method type:**
      
          `GET` request. Returns all the events that are being played for an specific date
    *  **URL Params**
      
          <_date_> Format example: <_2021-02-24_>
    * **Data Params**
      
        <_None_>
    * **Response:**
      
      ```json
            [
                {
                    "event": "European Development Championship 2",
                    "crest": "https://img-cdn.hltv.org/eventlogo/fUUnE-XkcPKbEohf3bvgsl.png?ixlib=java-2.1.0&s=3c5518b338c4c4c22757a29051dd2bcb"
                }, ...
            ]
       ```

* ##### Filter all matches by event and date

     * **URL**
        ```
        http://localhost:4000/filter/:event/:date
        ```
    * **Method type:**
      
          `GET` request. Returns all matches (both played and unplayed) that are being played for an specific date and event.
    *  **URL Params**
      
          <_event_> Format example: <_ESEAPremierSeason36Australia_>
          <_date_> Format example: <_2021-02-24_>
    * **Data Params**
      
        <_None_>
    * **Response:**
      
      ```json
            [
                {
                    "time": "2021-02-24T11:38:53.000Z",
                    "link": "/matches/2346729/animal-squad-vs-rot-esea-premier-season-36-australia",
                    "event": {
                        "name": "ESEA Premier Season 36 Australia"
                    },
                    "teams": [
                        {
                            "name": "Animal Squad",
                            "crest": "/img/static/team/placeholder.svg",
                            "result": 0
                        },
                        {
                            "name": "R!OT",
                            "crest": "https://img-cdn.hltv.org/teamlogo/1bzZtYCzZvCrCBgZp2QyzG.png?ixlib=java-2.1.0&w=50&s=96dcd5bf9731c72534b754ffeb2c37fb",
                            "result": 2
                        }
                    ],
                    "unplayed": false
                }, ...
            ]
       ```

#### Scripts

There is a javascript file that retrieves the stream information of each match that is being unplayed. It is used to let the user see the stream in the webpage.


#### Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
